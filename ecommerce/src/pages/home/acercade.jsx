import Footer from "../../components/Footer";

export default function AcercaDe() {
  return (
    <div>
      <div className="bg-[#185866] p-10 flex flex-col items-center justify-center gap-16 rounded-2xl h-[30rem] max-w-6xl m-auto">
        <div className="flex flex-col gap-4">
          <h1 className="text-white font-semibold text-center text-6xl">
            Bienvenido a HYPER CREW <br /> Los mejores estilos para conocedores
          </h1>
          <br />
          <p className="text-white text-center items-center text-2xl">
            Hyper Crew es un e-commerce dedicado para la comercialización de
            las mejores gorras.
          </p>
        </div>
        <span className="flex flex-row justify-center items-center">
          <span className="flex items-center justify-center">
            <box-icon name="mouse" color="white"></box-icon>
          </span>
          <span className="text-white font-bold">Desliza hacia abajo para conocer</span>
        </span>
      </div>

      <br />
      <br />

      <div className="flex flex-row max-w-6xl m-auto">
        <div>
          <img
            className="rounded-[10px_0px_0px_10px] flex"
            src="https://cdn.shopify.com/s/files/1/0595/9915/9452/files/POP_UP_BLOG.png?v=1688954910"
          ></img>
        </div>
        <div className="bg-black flex flex-col text-center items-center justify-center p-10 gap-10 rounded-[0px_10px_10px_0px]">
          <h3 className="text-4xl">
            <span className="text-white font-bold "> Encuentra las gorras que mejores gorras para ti</span>
            <span className=" text-gray-300 text-3xl ">
            <br />
            <br />
            <p className="">Hyper Crew 2023</p>
            </span>
          </h3>
          <button className="bg-[#FFFFFF] text-black hover:bg-black hover:text-white items-center text-xl">Ver más</button>
        </div>
      </div>

      <div className="bg-[#185866] w-full p-8 mt-20 flex flex-col items-center justify-center gap-8 h-[30rem]">
        <h2 className="text-5xl text-center font-semibold text-white">
          Ponte en contacto con nosotros <br /> para más información
        </h2>
        <p className="text-white text-center text-2xl">
          Si necesitas ayuda o tienes alguna pregunta, estamos aquí para servirte
        </p>
        <button className="bg-[#FFFFFF] text-black hover:bg-black hover:text-white items-center text-xl">Contáctanos</button>
      </div>
      <Footer />
    </div>
  );
}