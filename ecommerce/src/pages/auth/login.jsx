import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-semibold text-white">¡Bienvenido a Hyper Crew!</h1>
        <br />
        <p className="text-3xl text-[#36889a]  font-semibold">Inicia sesión para continuar</p>
        <br />
        <span>
        <button class="bg-sky-500/50 ... text-2xl"><Link className="text-white hover:text-[#999797]" to={"/"}>Regresar al inicio</Link></button>
        </span>
      </div>

      <form className="flex flex-col gap-2 mt-12">
        <div className="flex flex-col">
          <label className="text-white mb-2 text-2xl">Correo electrónico</label>
          <div className="flex flex-row items-center justify-center gap-2 border-2 px-4 rounded-md">
            <box-icon name="envelope" color="white"></box-icon>
            <input
              className="border-none outline-none rounded-md text-xl"
              type="email"
              placeholder="Correo electrónico"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-2 text-2xl">Contraseña</label>
          <div className="flex flex-row items-center justify-center gap-2 border-2 px-4 rounded-md">
            <box-icon name="lock" color="white"></box-icon>
            <input
              className="border-none outline-none rounded-md text-xl"
              type="password"
              placeholder="Contraseña"
            />
          </div>
        </div>
        <button className="bg-black hover:bg-white text-white hover:text-black rounded-md py-2 mt-2 text-2xl">
          Iniciar sesión
        </button>
      </form>
      <br />
      <p className="mt-4 font-bold text-center items-center text-xl">¿No tienes cuenta? 
      <br />
      <Link to={"/register"} className="text-[#36889a] hover:text-[#5ed3ed]">Registrate</Link></p>
    </div>
  );
}
