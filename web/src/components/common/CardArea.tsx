import Image from 'next/image';
import Link from 'next/link';

interface CardAreaProps {
  title: string;
  description: string;
  href: string;
  image: string;
}

export default function CardArea({ title, description, href, image }: CardAreaProps) {
  return (
    <Link href={href} className="block rounded-lg shadow-md hover:shadow-xl transition bg-white overflow-hidden">
      <div className="relative w-full h-40">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </Link>
  );
}
