
import Shares from "../views/Shares";

export default async function InformeSesionesPage() {
    
    const resp = await fetch('http://localhost:3000/api/sessions', { next: { revalidate: 60 } })
    const blogs = await resp.json()

    return <Shares section="Noticias - Blogs" title="Enterate De Todas Las Participaciones del Concejo" blogs={blogs} />
}