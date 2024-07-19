'use client'
import Link from 'next/link'
import { Layout } from './views/Layout'

export default function NotFound() {
  return (
    <div>
      <Layout title='404 | Página No Encontrada'>
        <h1>No existe la página que estas buscando.</h1>
        <hr />
        <p>Por favor haz click en el botón para regresar a la aplicación.</p>
        <Link href={'/'} className='btn btn-primary'>Volver</Link>
      </Layout>
    </div>
  )
}