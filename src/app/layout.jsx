//import Link from "next/link";
import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "aula30september2026",
  description: "Aula - 30 september 2026",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      
      <body>
        <NavBar />
        {/* <nav>
          <ul>
            <li><Link href="/">Principal</Link></li>
            <li><Link href="/html">HTML</Link></li>
            <li><Link href="/css">CSS</Link></li>
            <li><Link href="/js">JavaScript</Link></li>
          </ul>
        </nav> */}
        {children}
        
      </body>
    </html>
  );
}
