import { CategorySchema } from "@/model/TransactionCategory";

export default function NewExpensePage() {
  const handleFormAction = async (data: FormData) => {
    "use server";
  };

  return (
    <div>
      <h1 className="mb-4 text-xl">Nova despesa</h1>
      <form action={handleFormAction}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Descrição</span>
          </div>
          <input
            type="text"
            name="description"
            className="input input-bordered w-full"
          />
        </label>
        <br />
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Categoria</span>
          </div>
          <select name="category" className="select select-bordered w-full">
            {CategorySchema.options.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Valor</span>
          </div>
          <input
            type="number"
            name="amount"
            className="input input-bordered w-full"
          />
        </label>
        <br />
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Data</span>
          </div>
          <input
            type="date"
            name="date"
            className="input input-bordered w-full"
          />
        </label>
        <br />
        <button type="submit" className="btn btn-success btn-block">
          Adicionar
        </button>
      </form>
    </div>
  );
}
