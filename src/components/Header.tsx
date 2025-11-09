import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center">
      <Link href="/" className="">
        <Image src="/Logo.png" alt="Логотип" width={100} height={100} priority />
      </Link>

      <nav className="text-5xl flex gap-18 text-center ml-40">
        <Link href="/">Главная</Link>
        <Link href="/">Каталог</Link>
        <Link href="/">Профиль</Link>
      </nav>
    </header>
  );
}
