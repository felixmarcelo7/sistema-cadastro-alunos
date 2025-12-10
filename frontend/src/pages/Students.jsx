import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

const Studantes = () => {
  const alunos = [
    {
      id: 1,
      nome: "Cleitin doidao",
      celular: "(11) 99999-9999",
      turma: "Turma 1",
    },
    {
      id: 2,
      nome: "Maria Silva",
      celular: "(21) 98888-8888",
      turma: "Turma 2",
    },
    {
      id: 3,
      nome: "João Pereira",
      celular: "(31) 97777-7777",
      turma: "Turma 3",
    },
    { id: 4, nome: "Ana Souza", celular: "(41) 96666-6666", turma: "Turma 1" },
    {
      id: 5,
      nome: "Carlos Lima",
      celular: "(51) 95555-5555",
      turma: "Turma 2",
    },
    {
      id: 6,
      nome: "Beatriz Fernandes",
      celular: "(61) 94444-4444",
      turma: "Turma 3",
    },
    {
      id: 7,
      nome: "Fernando Gomes",
      celular: "(71) 93333-3333",
      turma: "Turma 1",
    },
    
  ];

  return (
    <>
      <section className="bg-amber-50 mr-5 rounded-md py-4 font-primary shadow-md overflow-auto">
        <form action="" className="flex flex-col gap-y-1 text-sm">
          {/* div da linha 1 */}
          <div className="flex w-full flex-wrap gap-x-3 justify-center">
            <div className="flex flex-col w-[32%]">
              <label htmlFor="inName" className="font-bold">
                Nome
              </label>
              <input
                className="border rounded-md p-1"
                type="text"
                id="inName"
                name="inName"
              />
            </div>
            <div className="flex flex-col w-[5%]">
              <label htmlFor="inCod" className="font-bold">
                Cód.
              </label>
              <input
                className="border rounded-md p-1"
                type="number"
                id="inCod"
                name="inCod"
                readOnly
              />
            </div>
            <div className="flex flex-col w-[32%]">
              <label htmlFor="inNameGuard" className="font-bold">
                Nome Responsável
              </label>
              <input
                className="border rounded-md p-1"
                type="text"
                id="inNameGuard"
                name="inNameGuard"
              />
            </div>
            {/* criar validação para cpf depois tanto no front quanto no back
          11 dígitos, apenas números
          000.000.000-00 */}
            <div className="flex flex-col w-auto">
              <label htmlFor="inCPF" className="font-bold">
                CPF
              </label>
              <input
                className="border rounded-md p-1"
                type="text"
                id="inCPF"
                name="inCPF"
              />
            </div>
          </div>

          {/* div da linha 2*/}
          <div className="flex w-full flex-wrap gap-x-3 justify-center">
            <div className="flex flex-col w-[15.8%]">
              <label htmlFor="inCel" className="font-bold">
                Celular
              </label>
              <input
                className="border rounded-md p-1 "
                type="tel"
                id="inCel"
                name="inCel"
              />
            </div>
            <div className="flex flex-col w-[30%]">
              <label htmlFor="inEmail" className="font-bold">
                E-mail
              </label>
              <input
                className="border rounded-md p-1"
                type="email"
                id="inEmail"
                name="inEmail"
              />
            </div>
            <div className="flex flex-col w-auto">
              <label htmlFor="inDOB" className="font-bold">
                Data Nasc.
              </label>
              <input
                className="border rounded-md p-1"
                type="date"
                id="inDOB"
                name="inDOB"
              />
            </div>
            <div className="flex flex-col w-[12.2%]">
              <label htmlFor="inHeight" className="font-bold">
                Altura(m)
              </label>
              <input
                className="border rounded-md p-1"
                type="number"
                max="3.00"
                step="0.01"
                name="inHeight"
                id="inHeight"
              />
            </div>
            <div className="flex flex-col w-[12.5%]">
              <label htmlFor="inWeight" className="font-bold">
                Peso(Kg)
              </label>
              <input
                className="border rounded-md p-1"
                type="number"
                max="200"
                step="0.01"
                name="inWeigth"
                id="inWeight"
              />
            </div>
          </div>

          {/* div da linha 3 */}
          <div className="flex flex-wrap w-full gap-x-3 justify-center">
            <div className="flex flex-col w-auto">
              <label htmlFor="inPlan" className="font-bold">
                Planos
              </label>
              {/*dropdown para selecionar os planos */}
              {/* alterar para receber os dados do banco depois */}
              <select
                className="border rounded-md p-1"
                name="inPlan"
                id="inPlan"
              >
                <option value="basic">Básico</option>
                <option value="premium">Premium</option>
                <option value="vip">VIP</option>
              </select>
            </div>
            <div className="flex flex-col w-auto">
              <label htmlFor="inClasse" className="font-bold">
                Turma
              </label>
              <select
                className="border rounded-md p-1"
                name="inClasse"
                id="inClasse"
              >
                <option value="turma1">Turma 1</option>
                <option value="turma2">Turma 2</option>
                <option value="turma3">Turma 3</option>
              </select>
            </div>
            <div className="flex flex-col w-[25%]">
              <label htmlFor="inStreet" className="font-bold">
                Rua
              </label>
              <input
                className="border rounded-md p-1"
                type="text"
                id="inStreet"
                name="inStreet"
              />
            </div>
            <div className="flex flex-col w-[20%]">
              <label htmlFor="inDistrict" className="font-bold">
                Bairro
              </label>
              <input
                className="border rounded-md p-1"
                type="text"
                id="inDistrict"
                name="inDistrict"
              />
            </div>
            <div className="flex flex-col w-[10%]">
              <label htmlFor="inNumber" className="font-bold">
                Número
              </label>
              <input
                className="border rounded-md p-1"
                type="number"
                id="inNumber"
                name="inNumber"
              />
            </div>
            {/* div - botao */}
            <div className="justify-end ml-7 flex flex-col">
              <button
                type="submit"
                className="bg-button hover:bg-button-hover cursor-pointer rounded-lg px-5 py-1.5 font-bold"
              >
                Cadastrar
              </button>
            </div>
          </div>
        </form>
      </section>
      <section className="bg-amber-50 mr-5 rounded-md font-primary shadow-md mt-2 px-8 py-4 overflow-auto h-[62%]">
        {/* tabela de alunos cadastrados */}
        <form action="" className="flex flex-wrap gap-x-2 justify-end text-sm">
          <input
            type="search"
            name="serch"
            id="serch"
            className="border rounded-md p-1"
          />
          <button className="bg-button hover:bg-button-hover font-bold cursor-pointer rounded-lg px-5 py-1.5">
            Buscar
          </button>
        </form>
        {/* alterar para receber os dados do banco depois */}
        <table className="border-collapse w-full mt-4 text-sm text-left ">
          <thead className="border-b-2 border-gray-500/40">
            <tr>
              <th>Cód.</th>
              <th>Nome</th>
              <th>Celular</th>
              <th>Turma</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody class="[&>tr>td]:pt-3 ">
            {alunos.map((aluno) => {
              return (
                <tr key={aluno.id}>
                  <td>{aluno.id.toString().padStart(2, "0")}</td>
                  <td>{aluno.nome}</td>
                  <td>{aluno.celular}</td>
                  <td>{aluno.turma}</td>
                  <td>
                    <MdOutlineRemoveRedEye className="text-lg cursor-pointer" />
                  </td>
                  <td>
                    <FaRegEdit className="text-lg cursor-pointer" />
                  </td>
                  <td>
                    <FaRegTrashAlt className="text-lg cursor-pointer" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Studantes;
