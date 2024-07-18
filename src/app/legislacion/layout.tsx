
export const metadata = {
    title: 'Legislacion',
    description: 'Una breve reseña a documentos y normas de interés público',
    keywords: 'informes, sesiones, concejo, concejales, municipalidad, charata, digesto, normas'
};
export default function LegislacionLayout({
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