import { Link } from "react-router-dom";
import Card from "../../components/card";
import "boxicons";
import CardCelulares from "../../components/cardCelulares";
import Footer from "../../components/Footer";

export default function Home() {
    return (
        <div className="bg-white dark:bg-[#4f4f4f]">

            <div className="grid grid-cols-5 gap-3 pt-10 max-w-6xl m-auto text-center">
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

            <br />
            <div className="max-w-6xl m-auto">
                <h2 className="text-4xl font-semibold pt-8 text-center items-center">
                    NUEVA TEMPORADA
                </h2>
                <p className="text-2xl font-semibold pt-8 text-center items-center">
                    LO NUEVO
                </p>
                <div className="grid grid-cols-4 gap-4 mt-4">
                    <CardCelulares
                        nombre="México MLB World Baseball Classic 2023 59FIFTY "
                        precio={1299}
                        imagen={
                            "https://cdn.shopify.com/s/files/1/0595/9915/9452/products/13701471_59FIFTY_WBC_MEXMEX_SCRLT_GRN_3QR_460x.png?v=1677542205"
                        }
                    />
                    <CardCelulares
                        nombre="Miami Marlins MLB Seam Stitch 59FIFTY"
                        precio={949}
                        imagen={
                            "https://www.newera.mx/cdn/shop/products/60413367_9FIFTY_MLBASG23_LOSDOD_EVG_3QR.png?v=1687462763"
                        }
                    />
                    <CardCelulares
                        nombre="New York Yankees MLB Armed Forces Day 2023 59FIFTY"
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
                    <CardCelulares
                        nombre="Chicago White Sox Black On Black 59FIFTY"
                        precio={999}
                        imagen={
                            "https://cdn.shopify.com/s/files/1/0595/9915/9452/products/60417746_59FIFTY_RAFFIAFRONT_TAMRAYCO_VGD_3QR_460x.png?v=1687982270"
                        }
                    />
                    <CardCelulares
                        nombre="Chicago White Sox Black On Black 59FIFTY"
                        precio={999}
                        imagen={
                            "https://cdn.shopify.com/s/files/1/0595/9915/9452/products/60417751_59FIFTY_RAFFIAFRONT_SAFGIACO_VGD_3QR_460x.png?v=1687982231"
                        }
                    />
                    <CardCelulares
                        nombre="Chicago White Sox Black On Black 59FIFTY"
                        precio={999}
                        imagen={
                            "https://cdn.shopify.com/s/files/1/0595/9915/9452/products/60417739_59FIFTY_RAFFIAFRONT_ATLBRACO_VGD_3QR_460x.png?v=1687981154"
                        }
                    />
                    <CardCelulares
                        nombre="Chicago White Sox Black On Black 59FIFTY"
                        precio={999}
                        imagen={
                            "https://cdn.shopify.com/s/files/1/0595/9915/9452/products/60417749_59FIFTY_RAFFIAFRONT_OAKATHCO_VGD_3QR_460x.png?v=1687982159"
                        }
                    />
                </div>
            </div>

            <br />

            <div className="max-w-6xl m-auto">
                <h2 className="text-5xl font-semibold pt-8 text-center items-center">
                    OFERTAS DE VERANO
                </h2>
                <p className="text-2xl font-semibold pt-8 text-center items-center">
                    REBAJAS %50
                </p>
                <div className="grid grid-cols-4 gap-4 mt-4">
                    <CardCelulares
                        nombre="MLB Logo Mexico City Series 2023 39THIRTY"
                        precio={599}
                        imagen={
                            "https://cdn.shopify.com/s/files/1/0595/9915/9452/products/13740153_39THIRTY_MLB_MLBMX_GAME_BLK_3QR_9255dfaf-ac86-4a3b-ab19-bfc6952a39fd_460x.png?v=1682110621"
                        }
                    />
                    <CardCelulares
                        nombre="Los Angeles Dodgers MLB All-Star 9FIFTY"
                        precio={599}
                        imagen={
                            "https://cdn.shopify.com/s/files/1/0595/9915/9452/products/60301156_W9TWENTY_W920BLOSSOME1_NEYYAN_OTC_3QR_360x.png?v=1686335267"
                        }
                    />
                    <CardCelulares
                        nombre="México MLB World Baseball 9TWENTY"
                        precio={599}
                        imagen={
                            "https://cdn.shopify.com/s/files/1/0595/9915/9452/products/13793966_9TWENTY_MEXMEX_BL_3QR_460x.png?v=1681790628"
                        }
                    />
                    <CardCelulares
                        nombre="Los Angeles Dodgers MLB All-Star 9FIFTY"
                        precio={599}
                        imagen={
                            "https://www.newera.mx/cdn/shop/products/60298727_3QL.png?v=1681742525"
                        }
                    />
                    <CardCelulares
                        nombre="New York Yankees Active 9FORTY"
                        precio={449}
                        imagen={
                            "https://cdn.shopify.com/s/files/1/0595/9915/9452/files/60298672_9FORTYW_NEYYAN_GLD_3QL_460x.jpg?v=1689205828"
                        }
                    />
                    <CardCelulares
                        nombre="Los Angeles Dodgers Active 9FORTY"
                        precio={499}
                        imagen={
                            "https://cdn.shopify.com/s/files/1/0595/9915/9452/products/60311704_SS9FORTY_M940DOUBLEDE1_LOSDOD_OTC_3QL_360x.png?v=1684455574"
                        }
                    />
                    <CardCelulares
                        nombre="Boston Red Sox Active 9FORTY"
                        precio={499}
                        imagen={
                            "https://cdn.shopify.com/s/files/1/0595/9915/9452/products/60311683_SS9FORTY_M940DOUBLEDE1_BOSRED_OTC_3QL_460x.png?v=1684454533"
                        }
                    />
                    <CardCelulares
                        nombre="New York Yankees Active 9FORTY"
                        precio={499}
                        imagen={
                            "https://cdn.shopify.com/s/files/1/0595/9915/9452/files/60298681_9FORTY_NEYYAN_BLK_3QL_460x.jpg?v=1689205924"
                        }
                    />
                </div>
            </div>

            <br />

            <Footer />


        </div>
    );
}