import "server-only";

import { createContext, router } from "./trpc";
import auth from "./routes/auth";

export const trpcRouter = router({
  auth,
});

export const trpcCaller = async () =>
  trpcRouter.createCaller(await createContext());

export type TRPCRouter = typeof trpcRouter;
