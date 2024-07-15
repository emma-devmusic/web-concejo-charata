
export const metadata = {
    title: 'Informe de Sesiones',
    description: 'Descripcion y blogs de Informes de Sesiones del Concejo de la Municipalidad de Charata',
    keywords: 'informes, sesiones, concejo, concejales, municipalidad, charata, concejo deliberante'
};
export default function InformeSesionesLayout({
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