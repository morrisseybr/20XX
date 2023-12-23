import { z } from "zod";
import { procedure, router } from "../trpc";
import { getAuth } from "firebase-admin/auth";
import { cookies } from "next/headers";

const auth = router({
  createSession: procedure
    .input(
      z.object({
        idToken: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const cookie = await getAuth().createSessionCookie(input.idToken, {
        expiresIn: 60 * 60 * 24 * 5,
      });
      cookies().set("session", cookie, {
        httpOnly: true,
      });
    }),
});

export default auth;
