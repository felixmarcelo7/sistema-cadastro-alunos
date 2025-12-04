const Studantes = () => {
  return (
    <>
      <section className="bg-amber-50 mr-5 rounded-md p-3 font-primary shadow-md">
        <form action="" className="flex flex-col gap-y-1">
          {/* div da linha 1 */}
          <div className="flex w-full flex-wrap gap-x-3">
            <div className="flex flex-col w-[32%]">
              <label htmlFor="inName">Nome</label>
              <input
                className="border rounded-md p-1"
                type="text"
                id="inName"
                name="inName"
              />
            </div>
            <div className="flex flex-col w-[5%]">
              <label htmlFor="inCod">Cód.</label>
              <input
                className="border rounded-md p-1"
                type="number"
                id="inCod"
                name="inCod"
                readOnly
              />
            </div>
            <div className="flex flex-col w-[32%]">
              <label htmlFor="inNameGuard">Nome Responsável</label>
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
              <label htmlFor="inCPF">CPF</label>
              <input className="border rounded-md p-1" type="text" id="inCPF" name="inCPF" />
            </div>
          </div>

          {/* div da linha 2*/}
          <div className="flex w-full flex-wrap gap-x-3 ">
            <div className="flex flex-col w-auto">
              <label htmlFor="inCel">Celular</label>
              <input className="border rounded-md p-1 " type="tel" id="inCel" name="inCel" />
            </div>
            <div className="flex flex-col w-[30%]">
              <label htmlFor="inEmail">E-mail</label>
              <input
                className="border rounded-md p-1"
                type="email"
                id="inEmail"
                name="inEmail"
              />
            </div>
            <div className="flex flex-col w-auto">
              <label htmlFor="inDOB">Data Nasc.</label>
              <input className="border rounded-md p-1" type="date" id="inDOB" name="inDOB" />
            </div>
            <div className="flex flex-col w-[12.2%]">
              <label htmlFor="inHeight">Altura(m)</label>
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
              <label htmlFor="inWeight">Peso(Kg)</label>
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
          <div className="flex flex-wrap w-full gap-x-3">
            <div className="flex flex-col w-auto">
              <label htmlFor="inPlan">Planos</label>
              {/*dropdown para selecionar os planos */}
              {/* alterar para receber os dados do banco depois */}
              <select className="border rounded-md p-1" name="inPlan" id="inPlan">
                <option value="basic">Básico</option>
                <option value="premium">Premium</option>
                <option value="vip">VIP</option>
              </select>
            </div>
            <div className="flex flex-col w-auto">
              <label htmlFor="inClasse">Turma</label>
              <select className="border rounded-md p-1" name="inClasse" id="inClasse">
                <option value="turma1">Turma 1</option>
                <option value="turma2">Turma 2</option>
                <option value="turma3">Turma 3</option>
              </select>
            </div>
            <div className="flex flex-col w-[25%]">
              <label htmlFor="inStreet">Rua</label>
              <input
                className="border rounded-md p-1"
                type="text"
                id="inStreet"
                name="inStreet"
              />
            </div>
            <div className="flex flex-col w-[20%]">
              <label htmlFor="inDistrict">Bairro</label>
              <input
                className="border rounded-md p-1"
                type="text"
                id="inDistrict"
                name="inDistrict"
              />
            </div>
            <div className="flex flex-col w-[10%]">
              <label htmlFor="inNumber">Número</label>
              <input
                className="border rounded-md p-1"
                type="number"
                id="inNumber"
                name="inNumber"
              />
            </div>
          </div>
          {/* div linha 4 - botao */}
          <div className="justify-end flex ">
            <button
              type="submit"
              className="bg-button hover:bg-button-hover cursor-pointer rounded-lg px-5 py-1.5 font-bold"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Studantes;
