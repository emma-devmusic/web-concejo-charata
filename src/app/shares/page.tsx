
import Shares from "../views/Shares";

export default async function SharesPage() {

    const blogs = await fetch('http://localhost:3000/api/blogs');
    const data = await blogs.json()
    return <Shares blogs={data} />
}