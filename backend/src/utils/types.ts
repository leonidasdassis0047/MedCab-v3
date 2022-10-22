import { PrismaClient } from "@prisma/client";

export interface GraphQLContext {
  // session: Session | null
  prisma: PrismaClient;
  // pubsub
}
