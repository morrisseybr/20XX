import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createContext } from "@/trpc/trpc";
import { trpcRouter } from "@/trpc/server";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api",
    req,
    router: trpcRouter,
    createContext,
  });

export { handler as GET, handler as POST };
