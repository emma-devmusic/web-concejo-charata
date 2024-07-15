

export const metadata = {
    title: 'Contacto | Concejo De La Municipalidad de Charata',
    description: 'Contactanos con la información detallada en esta página. Por cualquier consulta o inquietud, estamos para ayudarte.',
    keywords: 'contacto, concejo, comunicacion, redes, instagram, concejo, charata, municipalidad'
};


export default function ContactoLayout({
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