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
