

import Shares from "../views/Shares";


export default async function SharesPage() {

    const resp = await fetch(`${process.env.BASE_URL}api/blogs`, { next: { revalidate: 60 } })
    const blogs = await resp.json()

    return <Shares section="Noticias - Blogs" title="Enterate De Todas Las Participaciones del Concejo" blogs={blogs}/>
}