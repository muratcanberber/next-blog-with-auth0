import Link from "next/link";

function Header() {
  return (
    <header className="site-container py-6">
      <nav className="space-x-4 font-bold ">
        <Link href={"/"}>
          <a className="menu-link ">Hakkımda</a>
        </Link>
        <Link href={"/blog"}>
          <a className="menu-link">Yazılar</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
