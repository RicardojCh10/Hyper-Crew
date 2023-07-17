export default function CardRedesSociales({nombre, imagen}){
    return(
        <div className="bg-[#141414] rounded-xl flex flex-col items-center gap-4 p-4">
            <img src={imagen} className="w-50 h-60 object-cover rounded-xl"/>
            <h1 className="text-center text-2xl text-white">{nombre}</h1>
        </div>
    );
}