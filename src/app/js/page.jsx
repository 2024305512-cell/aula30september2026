import Image from "next/image";
// import Link from "next/link";

export default function HTML() {
  return (
    <div>
      <h1 className="jstitle">Programação Web I - JavaScript</h1> {/* style={{color: 'yellow'}} */}
      <Image src="/javascript-logo-javascript-icon-transparent-free-png.webp" alt="HTML" width='200' height='200'/> {/* width='300' */}
      <h3>Bem vindo a minha página sobre JavaScript - programação web!</h3>
      {/* <p><Link href="/">VOLTAR</Link></p> */}
    </div>
  );
}