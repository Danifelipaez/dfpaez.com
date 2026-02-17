import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import CardArea from '../components/common/CardArea';
import Image from 'next/image';

export default function Home(){
    return (
        <main className="flex flex-col min-h-screen bg-white">
            <Header/>
            <section className="flex flex-col items-center justify-center py-12">
                <Image
                    src="/avatar.png"
                    alt="Foto de Daniel Páez"
                    width={160}
                    height={160}
                    className="rounded-full mb-4"
                />
                <h1 className="text-3xl font-bold mb-2">Daniel Páez</h1>
                <p className="text-lg text-gray-600 mb-6 text-center max-w-xl">
                    Desarrollador web, fotógrafo y diseñador de marcas. Construyendo soluciones digitales con enfoque en ingeniería, creatividad y buenas prácticas.
                </p>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-5xl mx-auto mb-12">
                <CardArea
                    title="Portafolio Dev"
                    description="Proyectos web e inteligencia artificial."
                    href="/dev"
                    image="/dev.jpg"
                />
                <CardArea
                    title="Portafolio Fotográfico"
                    description="Galería de fotografía profesional."
                    href="/foto"
                    image="/foto.jpg"
                />
                <CardArea
                    title="Portafolio Branding"
                    description="Identidad visual y diseño de marcas."
                    href="/branding"
                    image="/branding.jpg"
                />
            </section>
            <div className="flex justify-center mb-12">
                <a
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                    Contáctame
                </a>
            </div>
            <Footer />
        </main>
    )
}