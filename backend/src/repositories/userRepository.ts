import { prisma } from '../config/prisma';
import { CreateUserInput } from './types/userRepo.types';

export const userRepository = {
  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  },

  async createUser(input: CreateUserInput) {
    const { role = 'EMPLOYEE', isActive = true, ...rest } = input;

    return prisma.user.create({
      data: {
        ...rest,
        role,
        isActive,
      },
    });
  },

  async findById(id: number) {
    return prisma.user.findUnique({
      where: { id },
    });
  },

  async listAllActive() {
    return prisma.user.findMany({
      where: { isActive: true },
      orderBy: { firstName: 'asc' },
    });
  },
};
