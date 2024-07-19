import { getBlogByCategoryFromDB } from '@/services/blogs'

export async function GET() {
   
        try {
            const blogs = await getBlogByCategoryFromDB('Sesión')
            console.log(blogs)
            return Response.json(blogs)
        } catch (error) {
            return Response.json({ message: 'Error al cargar archivos' })
        }
}
