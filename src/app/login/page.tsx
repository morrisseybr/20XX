export default function LoginPage() {
  return (
    <div className="card m-auto w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <form>
          <fieldset>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">E-mail</span>
              </div>
              <input
                type="email"
                className="input input-bordered w-full max-w-xs"
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
              />
            </label>
          </fieldset>
          <button className="btn btn-outline btn-success btn-block my-4">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
