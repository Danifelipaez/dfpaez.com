import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-white shadow-md">
      <Link href="/">
        <span className="text-xl font-bold text-blue-700">Daniel Páez</span>
      </Link>
      <nav className="space-x-4">
        <Link href="/dev" className="hover:underline">Dev</Link>
        <Link href="/foto" className="hover:underline">Fotografía</Link>
        <Link href="/branding" className="hover:underline">Branding</Link>
        <Link href="/tienda" className="hover:underline">Tienda</Link>
        <Link href="/contact" className="hover:underline">Contacto</Link>
      </nav>
    </header>
  );
}
