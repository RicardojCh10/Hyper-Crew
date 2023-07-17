export default function CardCelulares({nombre, imagen, precio}){
    return(
        <div className="bg-white rounded-xl flex flex-col items-center gap-4 p-4">
            <img src={imagen} className="w-50 h-60 object-cover rounded-xl"/>
            <h1 className="text-center text-2xl text-black">{nombre}</h1>
            <h2 className="text-black font-bold text-xl">${precio}</h2>
        </div>
    );
}