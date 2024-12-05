"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "blog", path: "/blog" }, // This will be updated to handle the Medium link separately
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  console.log("Current Path:", pathname);

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        link.name === "blog" ? (
          // For "Blog", use a regular anchor tag to open in a new tab
          <a
            href="https://medium.com/@chamathupeka"
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              link.path === pathname
                ? "text-accent border-b-2 border-accent"
                : ""
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </a>
        ) : (
          // For other links, use the Next.js Link component
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname
                ? "text-accent border-b-2 border-accent"
                : ""
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        )
      ))}
    </nav>
  );
};

export default Nav;
