import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { createTRPCReact } from "@trpc/react-query";
import { type TRPCRouter } from "@/trpc/server";

export const trpc = createTRPCReact<TRPCRouter>();

export type TRPCInputs = inferRouterInputs<TRPCRouter>;
export type TRPCOutputs = inferRouterOutputs<TRPCRouter>;
