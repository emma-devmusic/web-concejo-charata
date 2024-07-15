
import { concejales } from '../../mocks/concejales';
import { Concejal } from '../../types/types';



export async function generateMetadata({ params }: { params: { concejal: string } }) {
    const miembro: Concejal = concejales.filter((e: Concejal) => e.slug === params.concejal)[0]
    return { 
        title: miembro.name, 
        description: `${miembro.position} de la Municipalidad de Charata. Del bloque ${miembro.block}`,
        keywords: `${miembro.position}, concejo, charata, concejales, municipio, ${miembro.block}` 
    }
}

export default function ConcejalLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            {children}
        </div>
    );
}