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

    async listAllOrderedForAdmin() {
    return prisma.user.findMany({
      orderBy: [
        { isActive: 'desc' },     // true (1) ide prije false (0)
        { firstName: 'asc' },
        { lastName: 'asc' },
      ],
    });
  },

  async updateStatus(id: number, isActive: boolean) {
    return prisma.user.update({
      where: { id },
      data: { isActive },
    });
  }

};
