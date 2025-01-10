// src/server/api/routers/task.ts

import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const taskRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }: any) => {
    return ctx.prisma.task.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),

  create: publicProcedure
    .input(z.object({ title: z.string(), description: z.string().optional() }))
    .mutation(async ({ ctx, input }: any) => {
      return ctx.prisma.task.create({
        data: input,
      });
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().optional(),
        description: z.string().optional(),
        completed: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }: any) => {
      const { id, ...data } = input;
      return ctx.prisma.task.update({
        where: { id },
        data,
      });
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }: any) => {
      return ctx.prisma.task.delete({
        where: { id: input.id },
      });
    }),
});