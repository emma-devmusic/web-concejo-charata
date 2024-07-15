
export const metadata = {
    title: 'Sesiones del Concejo',
    description: 'Información detallada sobre Las Sesiones del Concejo de Charata',
    keywords: 'sesiones, sesiones del concejo, charata, municipio, municipalidad, concejo, concejales'
};
export default function SesionesDelConcejoLayout({
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