// src/services/userService.ts
import { userRepository } from '../repositories/userRepository';

export async function getAllUsersForAdmin() {
  const users = await userRepository.listAllOrderedForAdmin();

 
  return users.map((u) => ({
    id: u.id,
    email: u.email,
    firstName: u.firstName,
    lastName: u.lastName,
    role: u.role,
    isActive: u.isActive,
    createdAt: u.createdAt,
    updatedAt: u.updatedAt,
  }));
}

export async function setUserStatus(userId: number, isActive: boolean) {
  const user = await userRepository.findById(userId);

  if (!user) {
    throw new Error('USER_NOT_FOUND');
  }

  const updated = await userRepository.updateStatus(userId, isActive);

  return {
    id: updated.id,
    email: updated.email,
    firstName: updated.firstName,
    lastName: updated.lastName,
    role: updated.role,
    isActive: updated.isActive,
  };
}
