import { Link } from "react-router-dom";
import Card from "../../components/card";
import "boxicons";
import CardCelulares from "../../components/cardCelulares";
import Footer from "../../components/Footer";
import CardRedesSociales from "../../components/cardRedesSociales";

export default function Home() {
  return (
    <div className="">
      <div className=" bg-fondo bg-blue-500 p-10 flex flex-col items-center justify-center gap-16 rounded-2xl h-[25rem] max-w-6xl m-auto">
        <h1 className="text-[#ffffff] font-semibold text-center">
          VERANO  2023<br /> LOS MEJORES PRECIOS
        </h1>
        <button className="bg-white text-black hover:bg-black hover:text-white">Ver más..</button>
      </div>

      <div className="grid grid-cols-5 gap-3 pt-10 max-w-6xl m-auto text-center items-center object-cover">
        <Card
          nombre="MLB"
          imagen="https://wallpaperaccess.com/full/6075652.jpg"
        />
        <Card
          nombre="NFL"
          imagen="https://www.profootballnetwork.com/wp-content/uploads/2021/02/nfl-logo-shield-history-design-meaning.jpg"
        />
        <Card
          nombre="NBA"
          imagen={
            "https://wallpapers.com/images/hd/nba-logo-3y3no8zce1x03miz.jpg"
          }
        />

        <Card
          nombre="LMB"
          imagen={
            "https://scontent.fcjs3-1.fna.fbcdn.net/v/t39.30808-1/336141399_799934501732281_5249139919539288024_n.jpg?stp=dst-jpg_p320x320&_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=c6021c&_nc_eui2=AeG1N-wsRhmhtu8NE32blBHiTzfLfovniK5PN8t-i-eIrqHN1A3mjz6AhgPNE09dcB1uP4PgTpiYjTRK0npDynwm&_nc_ohc=8KUAbyT8jGcAX84r_g9&_nc_ht=scontent.fcjs3-1.fna&oh=00_AfBRt-GjBkzsyobF_iCDbu5bHn5QdZSj_QP-Gn11FazDZg&oe=64B72708"
          }
        />
        <Card
          nombre="FUTBOL"
          imagen={
            "https://static.vecteezy.com/system/resources/previews/009/784/979/original/soccer-ball-icon-isolated-on-white-background-free-vector.jpg"
          }
        />
      </div>

      <div className="flex items-center justify-center h-60 pt-5 max-w-6xl m-auto">
        <h2 className="text-6xl font-semibold text-center hover:text-[#185866]">
          ¡LAS MEJORES GORRAS ESTAN AQUI!
        </h2>
      </div>

      <div className="flex flex-row max-w-6xl m-auto">
        <div>
          <img
            className="rounded-[10px_0px_0px_10px]"
            src="https://th.bing.com/th/id/R.212b4c1dd812a5566c0536aab5b2da5d?rik=ARUpbhfyRlz5fQ&riu=http%3a%2f%2flegaragetv.com%2fwp-content%2fuploads%2f2021%2f09%2funnamed-6.jpg&ehk=YJppuYWRE7SpEfNTq%2bqyTwRYbqEhaFQK77iKwXVjZ6A%3d&risl=&pid=ImgRaw&r=0"
          ></img>
        </div>
        <div className="bg-[#185866] flex flex-col text-center items-center justify-center p-20 gap-8 rounded-[0px_10px_10px_0px]">
          <h3 className="text-4xl">
            <span className="text-white font-bold ">Nueva Colección </span>
            <span className=" text-gray-300 text-3xl ">
            <br />Hyper Crew 2023
            </span>
          </h3>
          <button className="bg-[#FFFFFF] text-black hover:bg-black hover:text-white items-center ">Ver más</button>
        </div>
      </div>

      <div className="max-w-6xl m-auto">
        <h2 className="text-5xl font-semibold pt-8 text-center items-center">
          LO MÁS VENDIDO
        </h2>
        <br />

        <div className="grid grid-cols-4 gap-4 mt-4">
          <CardCelulares
            nombre="Miami Marlins MLB Seam Stitch 59FIFTY"
            precio={1299}
            imagen={
              "https://www.newera.mx/cdn/shop/products/60417949_59FIFTY_SEAMSTITCH_FLOMARCO_CHWVGD_3QR_024fed56-f560-45f8-8de9-a670ab7bd8dc.png?v=1687479463"
            }
          />
          <CardCelulares
            nombre="Los Angeles Dodgers MLB All-Star 9FIFTY"
            precio={949}
            imagen={
              "https://www.newera.mx/cdn/shop/products/60413367_9FIFTY_MLBASG23_LOSDOD_EVG_3QR.png?v=1687462763"
            }
          />
          <CardCelulares
            nombre="New York Yankees MLB 59FIFTY"
            precio={1299}
            imagen={
              "https://www.newera.mx/cdn/shop/products/60352748_59FIFTY_M5950MLBAFD23_NEYYAN_NOV_3QR_720x.png?v=1683137720"
            }
          />
          <CardCelulares
            nombre="Chicago White Sox Black On Black 59FIFTY"
            precio={999}
            imagen={
              "https://www.newera.mx/cdn/shop/products/unnamed_e628c220-e05b-47fe-ac7d-b6d628216bf3.jpg?v=1667962304"
            }
          />
        </div>
      </div>

      <div className="bg-[#185866] w-full p-8  mt-20 flex flex-col items-center justify-center gap-8 h-[30rem] hover:bg-[#0C3037]">
        <h1 className="text-6 font-bold text-center">
          Unete a Hyper Crew
        </h1>
        <h2 className="text-4xl text-center">
          Crea tu cuenta, y empieza a comprar.
        </h2>
        <button className="bg-[#FFFFFF] text-black hover:bg-black hover:text-white">Registrate</button>
      </div>

      <div className="max-w-6xl m-auto">
        <h2 className="text-5xl font-semibold pt-8 text-center items-center">
          NUESTRAS REDES SOCIALES
        </h2>
        <p className="text-3xl font-semibold pt-8 text-center items-center text-[#36889a]">
          Encuntranos como HyperCrew_oficial
        </p>
      <div className="grid grid-cols-4 gap-3 pt-10 max-w-6xl m-auto text-center object-cover items-center">
      <CardRedesSociales
          nombre="Síguenos en Facebook"
          imagen="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Logo_de_Facebook.png/220px-Logo_de_Facebook.png"
        />
      <CardRedesSociales
          nombre="Síguenos en Instagram"
          imagen="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
        />
        <CardRedesSociales
          nombre="Síguenos en Twitter"
          imagen="https://store-images.s-microsoft.com/image/apps.45406.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.2a88a418-b96d-44a6-ad4f-5e0ee6289b2c"
        />
        <CardRedesSociales
          nombre="Síguenos en Tiktok"
          imagen="https://p16-va-tiktok.ibyteimg.com/obj/musically-maliva-obj/47827a702f8665c058982735977863e9.jpeg"
        />
      </div>
      </div>

      <br />

      <Footer/>


    </div>
  );
}
