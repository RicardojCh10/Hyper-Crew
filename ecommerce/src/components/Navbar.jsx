import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="bg-white dark:bg-[#242424] dark:text-white   text-black fixed top-0 left-0 w-full flex flex-row justify-between px-20 py-4 items-center">
        <div>
          <h1 className="text-3xl font-semibold">
            <Link to={"/"}>
              <span className="text-black dark:text-white">Hyper Crew</span>
            </Link>
          </h1>
        </div>
        <div>
          <ul className="flex flex-row gap-8 text-2xl">
            <li><Link to="/categoria">
            <span className="text-black dark:text-white">Categorias</span>
            </Link></li>
            <li><Link to={"/login"}>
                <span className="text-black dark:text-white">Ingresa</span></Link></li>
            <li>
              <Link to="/acercade">
                <span className="text-black dark:text-white">Acerca de Nosotros</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row items-center justify-center border-2 p-2 rounded-xl gap-2">
            <div className="pl-2 flex items-center justify-center">
            <box-icon name="search" color="white"></box-icon>
            </div>
            <input
              className="bg-white outline-none dark:bg-[#242424] dark:text-white] py-1 text-xl"
              type="search"
              placeholder="Buscar"
            ></input>
          </div>
          <div className="flex flex-row items-center px-4 gap-4" >
            <box-icon name="user-circle" color="White"></box-icon>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
