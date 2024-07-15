import Image from "next/image";
import Link from "next/link";

export const RecentPosts = () => (
    <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
        <div className="section-title section-title-sm position-relative pb-3 mb-4">
            <h3 className="mb-0">Publicaciones Recientes</h3>
        </div>
        {[
            { src: '/assets/img/concejales/analia-marisel-farias.jpeg', alt: 'Imagen del concejo', text: 'Lorem ipsum dolor sit amet adipis elit' },
            { src: '/assets/img/concejales/analia-marisel-farias.jpeg', alt: 'Imagen del concejo', text: 'Lorem ipsum dolor sit amet adipis elit' },
            { src: '/assets/img/concejales/analia-marisel-farias.jpeg', alt: 'Imagen del concejo', text: 'Lorem ipsum dolor sit amet adipis elit' },
            { src: '/assets/img/concejales/analia-marisel-farias.jpeg', alt: 'Imagen del concejo', text: 'Lorem ipsum dolor sit amet adipis elit' },
            { src: '/assets/img/concejales/analia-marisel-farias.jpeg', alt: 'Imagen del concejo', text: 'Lorem ipsum dolor sit amet adipis elit' },
            { src: '/assets/img/concejales/analia-marisel-farias.jpeg', alt: 'Imagen del concejo', text: 'Lorem ipsum dolor sit amet adipis elit' },
        ].map((post, index) => (
            <div className="d-flex rounded overflow-hidden mb-3" key={index}>
                <Image className="img-fluid" width={100} height={100} src={post.src} style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt={post.alt} />
                <Link href="/noticias" className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">
                    {post.text}
                </Link>
            </div>
        ))}
    </div>
);
