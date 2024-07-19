
import Shares from "../views/Shares";

export default async function InformeSesionesPage() {
    try {
        const blogs = await fetch('http://localhost:3000/api/sessions');
        const data = await blogs.json()
        return <Shares section="Sesiones" title="Resúmenes de Sesiones del Concejo" blogs={data} />
    } catch (error) {
        return <h1>Error Al Cargar Archivos</h1>
    }
}