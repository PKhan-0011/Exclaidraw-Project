import { z } from "zod";

export const createUserSchema = z.object({
  userName: z.string().min(3).max(5),
  password: z.string(),
  name: z.string(),
});

export const createSignInSchema = z.object({
  userName: z.string().min(3).max(5),
  password: z.string(),
});

export const createRoomSchema = z.object({
  roomId: z.string(),
});
