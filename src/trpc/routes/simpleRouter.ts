import { z } from "zod";
import { procedure, router } from "../trpc";

const simpleRouter = router({
  hello: procedure.input(z.object({
    name: z.string(),
  })).query((opts) => {
    const name = opts.input.name;
    return `Hello, ${name}!`;
  })
});

export default simpleRouter;