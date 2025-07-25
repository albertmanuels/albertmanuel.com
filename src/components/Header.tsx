import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 right-0 left-0 z-10 isolate py-4">
      <div className="max-w-2xl mx-auto">
        <nav className="flex justify-between">
          <Link href="/" className="text-xl font-bold">
            albertmanuel
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
