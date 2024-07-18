
export const metadata = {
    title: 'Participación del Concejo - Blog',
    description: 'Noticias y blogs sobre el concejo y su participación en la ciudadanía.',
    keywords: 'informes, sesiones, concejo, concejales, municipalidad, charata, concejo deliberante'
};
export default function SharesLayout({
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