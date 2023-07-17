import { Link } from "react-router-dom";

export default function Error(){
    return (
        <div className="flex flex-col items-center justify-center">
        <div className="text-center">
            <h1 className="text-4xl font-semibold text-black">Error 404</h1>
            <p className="text-xl">La página que buscas no existe</p>
            <Link to={"/"}>Regresar al inicio</Link>
        </div>
        </div>
    );
}