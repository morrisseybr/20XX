import { initTRPC } from "@trpc/server";
import SuperJSON from "superjson";

// create a context to be accessed on every route
export const createContext = async () => {
  return {
    firebaseAdmin: await import("../config/firebase-admin").then(
      (mod) => mod.default,
    ),
  };
};

// initialize trpc with superjson
const t = initTRPC.context<typeof createContext>().create({
  transformer: SuperJSON,
});

// base router and procedure helpers
export const router = t.router;
export const middleware = t.middleware;
export const procedure = t.procedure;
