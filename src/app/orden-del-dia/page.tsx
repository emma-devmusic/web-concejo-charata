'use client'
import { Layout } from "../views/Layout"
import { Ordenes } from "./Ordenes";

export default function OrdenDelDiaPage() {


    return (
        <div>
            <Layout title="Orden del Día">
                
                <h2>Orden del Día</h2>
                <hr />
                <p>
                    La <strong>orden del día</strong> se refiere a la lista de temas y puntos específicos que se discutirán y abordarán durante una sesión del concejo municipal. En el caso de Charata, como en otros municipios, esta orden del día es preparada antes de la reunión y distribuida a los miembros del concejo y, a menudo, al público. El presidente del concejo, al mencionar la <strong>orden del día</strong>, está hablando de este conjunto de asuntos organizados en un documento que establece el programa de la reunión.
                </p>
                <p>La orden del día generalmente incluye:</p>
                <ul>
                    <li><strong>Aprobación de actas anteriores:</strong> Revisión y aprobación de las actas de sesiones anteriores.</li>
                    <li><strong>Informes de comités y comisiones:</strong> Presentación de informes por parte de los diferentes comités del concejo.</li>
                    <li><strong>Asuntos pendientes:</strong> Discusión de temas que no se resolvieron en sesiones anteriores.</li>
                    <li><strong>Nuevos asuntos:</strong> Introducción y debate de nuevos temas o propuestas.</li>
                    <li><strong>Proyectos de ordenanzas y resoluciones:</strong> Consideración de nuevas leyes municipales, regulaciones y resoluciones.</li>
                    <li><strong>Correspondencia y comunicaciones:</strong> Revisión de cartas, correos electrónicos y otros tipos de comunicaciones dirigidas al concejo.</li>
                    <li><strong>Comentarios del público:</strong> Espacio donde los ciudadanos pueden presentar sus inquietudes o comentarios al concejo.</li>
                </ul>
                <p>La <strong>orden del día</strong> permite que las sesiones del concejo sean organizadas y eficientes, asegurando que se aborden todos los temas importantes y que los miembros del concejo y el público sepan de antemano qué se discutirá.</p>

                <Ordenes />
            </Layout>
        </div>
    );
}