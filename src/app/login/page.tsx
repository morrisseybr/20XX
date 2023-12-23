"use client";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useCallback, useState } from "react";
import "@/config/firebase";
import { useRouter } from "next/navigation";
import { trpc } from "@/trpc/client";

export default function LoginPage() {
  const createSession = trpc.auth.createSession.useMutation();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const auth = getAuth();
      try {
        const credential = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        );
        await createSession.mutateAsync({
          idToken: await credential.user.getIdToken(),
        });
        router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
    [createSession, email, password, router],
  );

  return (
    <div className="card m-auto w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <fieldset>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">E-mail</span>
              </div>
              <input
                type="email"
                className="input input-bordered w-full max-w-xs"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
          </fieldset>
          <fieldset>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Senha</span>
              </div>
              <input
                type="password"
                className="input input-bordered w-full max-w-xs"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
          </fieldset>
          <button
            className="btn btn-outline btn-success btn-block my-4"
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
