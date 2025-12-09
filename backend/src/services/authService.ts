import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { userRepository } from '../repositories/userRepository';
import { UserRole, CreateUserInput } from '../repositories/types/userRepo.types';

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not set in .env');
}

const JWT_EXPIRES_IN = '8h';

// ----------------- LOGIN ----------------- DODAJ DA PROVJERAVA JEL AKTIVAN AKO JES MOZE LOGIN AKO NE NE MOZE THROW NESTO
export async function login(email: string, password: string) {
  const user = await userRepository.findByEmail(email);

  if (!user || !user.isActive) {
    throw new Error('INVALID_CREDENTIALS');
  }
  if(!user.isActive){
    throw new Error('USER_INACTIVE')
  }

  const isValid = await bcrypt.compare(password, user.passwordHash);

  if (!isValid) {
    throw new Error('INVALID_CREDENTIALS');
  }

  const token = jwt.sign(
    {
      sub: user.id.toString(),
      email: user.email,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN },
  );

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    },
  };
}

// ----------------- REGISTER -----------------
export async function register(params: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role?: UserRole;
}) {
  const { email, password, firstName, lastName, role } = params;

  // 1) Provjera da li već postoji user sa tim emailom
  const existing = await userRepository.findByEmail(email);
  if (existing) {
    throw new Error('EMAIL_TAKEN');
  }

  // 2) Hash passworda
  const passwordHash = await bcrypt.hash(password, 10);

  // 3) Pripremimo input za repository, KORISTIMO CreateUserInput
  const createInput: CreateUserInput = {
    email,
    passwordHash,
    firstName,
    lastName,
    role: role ?? 'EMPLOYEE',
    isActive: true,
  };

  const user = await userRepository.createUser(createInput);

  

  return {
    user: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    },
  };
}
