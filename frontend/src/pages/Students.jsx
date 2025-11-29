const Studantes = () => {
  return (
    <>
      <section className="bg-amber-50 mr-5 rounded-md">
        <form action="">
          <div>
            <label htmlFor="inName">Nome</label>
            <input type="text" id="inName" name="inName" />
          </div>
          <div>
            <label htmlFor="inCod">Cód.</label>
            <input type="number" id="inCod" name="inCod" readOnly />
          </div>
          <div>
            <label htmlFor="inNameGuard">Nome Responsável</label>
            <input type="text" id="inNameGuard" name="inNameGuard" />
          </div>
          {/* criar validação para cpf depois tanto no front quanto no back
          11 dígitos, apenas números
          000.000.000-00 */}
          <div>
            <label htmlFor="inCPF">CPF</label>
            <input type="text" id="inCPF" name="inCPF" />
          </div>
          <div>
            <label htmlFor="inCel">Celular</label>
            <input type="tel" id="inCel" name="inCel" />
          </div>
          <div>
            <label htmlFor="inEmail">E-mail</label>
            <input type="email" id="inEmail" name="inEmail" />
          </div>
          <div>
            <label htmlFor="inDOB">Data Nasc.</label>
            <input type="date" id="inDOB" name="inDOB" />
          </div>
          <div>
            <label htmlFor="inHeight">Altura(m)</label>
            <input
              type="number"
              max="3.00"
              step="0.01"
              name="inHeight"
              id="inHeight"
            />
          </div>
          <div>
            <label htmlFor="inWeight">Peso(Kg)</label>
            <input
              type="number"
              max="200"
              step="0.01"
              name="inWeigth"
              id="inWeight"
            />
          </div>
          <div>
            <label htmlFor="inPlan">Planos</label>
            {/*dropdown para selecionar os planos */}
            {/* alterar para receber os dados do banco depois */}
            <select name="inPlan" id="inPlan">
              <option value="basic">Básico</option>
              <option value="premium">Premium</option>
              <option value="vip">VIP</option>
            </select>
          </div>
          <div>
            <label htmlFor="inClasse">Turma</label>
            <select name="inClasse" id="inClasse">
              <option value="turma1">Turma 1</option>
              <option value="turma2">Turma 2</option>
              <option value="turma3">Turma 3</option>
            </select>
          </div>
          <div>
            <label htmlFor="inStreet">Rua</label>
            <input type="text" id="inStreet" name="inStreet" />
          </div>
          <div>
            <label htmlFor="inDistrict">Bairro</label>
            <input type="text" id="inDistrict" name="inDistrict" />
          </div>
          <div>
            <label htmlFor="inNumber">Número</label>
            <input type="number" id="inNumber" name="inNumber" />
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </>
  );
};

export default Studantes;
