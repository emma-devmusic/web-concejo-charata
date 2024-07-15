
export const metadata = {
    title: 'Orden Del Día | Concejo De La Municipalidad de Charata',
    description: 'Un vistazo a lo que es una orden y lo que se debatirá en el día',
    keywords: 'Orden del dia, ordenanzas, orden, concejo, municipio, charata'
};
export default function OrdenDelDiaLayout({
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