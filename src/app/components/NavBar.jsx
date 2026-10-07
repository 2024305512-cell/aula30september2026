'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const path = usePathname();
    // console.log('path: ', path);
    // if (path == '/html') {
    //     console.log('Está na página HTML');
    // } else {
    //     console.log('NÃO está na página HTML');
    // }
    // path == '/html' ? console.log('Está na página HTML') : console.log('NÃO está na página HTML');
    return (
        <nav>
            <ul>
                <li><Link href="/" className={path == '/' ? 'active'  : ""}>Principal</Link></li>
                <li><Link href="/html" className={path == '/html' ? 'active'  : ""}>HTML</Link></li>
                <li><Link href="/css" className={path == '/css' ? 'active'  : ""}>CSS</Link></li>
                <li><Link href="/js" className={path == '/js' ? 'active'  : ""}>JavaScript</Link></li>
            </ul>
        </nav>
    );
}