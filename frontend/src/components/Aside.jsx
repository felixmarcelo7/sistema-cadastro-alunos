import { useState } from "react";
import { LuClipboardList } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { TbGraph } from "react-icons/tb";
import { TbUserPlus } from "react-icons/tb";
import { BiDollarCircle } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LuBanknote } from "react-icons/lu";
import { Link } from "react-router";

const Aside = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    //função para saber qual menu vai estar aberto
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <aside className="fixed left-0 top-0 w-44 h-full bg-yellow-300 z-50 shadow-lg rounded-r-2xl">
      <div className="p-4 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">LOGO</h2>
        <ul className="text-sm flex flex-col w-full">
          <li
            className="mt-4 flex justify-between items-center gap-2 cursor-pointer w-full"
            onClick={() => toggleMenu("cadastrar")} //aqui indico qual vai abrir
          >
            <span>Cadastrar</span>
            <span>
              <IoIosArrowDown
                className={`transition-transform duration-300 ${
                  openMenu === "cadastrar" ? "" : "rotate-90"
                }`}
              />
            </span>
            <LuClipboardList />
          </li>

          <li
            className={`overflow-hidden transition-all duration-300 ${
              openMenu === "cadastrar"
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`} //animação de slide do submenu
          >
            <ul className="flex flex-col w-fullm">
              <li className="mt-2 ml-5 flex items-center justify-between">
                <Link to="/studants">Alunos</Link>
                <span>
                  <TbUserPlus />
                </span>
              </li>
              <li className="mt-2 ml-5 flex items-center justify-between">
                <Link to="/plans">Planos</Link>
                <span>
                  <BiDollarCircle />
                </span>
              </li>
              <li className="mt-2 ml-5 flex items-center justify-between">
                <Link to="/classes">Turmas</Link>
                <span>
                  <HiOutlineUserGroup />
                </span>
              </li>
            </ul>
          </li>
          <li
            className="mt-4 flex justify-between items-center cursor-pointer gap-2 w-full"
            onClick={() => toggleMenu("financeiro")}
          >
            <span>Financeiro</span>
            <span>
              <IoIosArrowDown
                className={`transition-transform duration-300 ${
                  openMenu === "financeiro" ? "" : "rotate-90"
                }`}
              />
            </span>
            <TbGraph />
          </li>
          <li
            className={`overflow-hidden transition-all duration-300 ${
              openMenu === "financeiro"
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`} //animação de slide do submenu
          >
            <ul>
              <li className="mt-2 ml-5 flex items-center justify-between">
                <Link to="/payments">Pagamentos</Link>
                <LuBanknote />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
