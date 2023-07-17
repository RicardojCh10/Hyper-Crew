export default function Card({nombre, imagen}){
    return(
        <div className="h-40 p-4 rounded-3xl" style={{background:`url(${imagen})`, backgroundSize: `cover`}}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="text-2xl tex">{nombre}</h1>
        </div>
    )
}