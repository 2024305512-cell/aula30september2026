import Image from "next/image";
// import Link from "next/link";

export default function HTML() {
  return (
    <div>
      <h1 className="csstitle">Programação Web I - CSS</h1> {/* style={{color: 'cyan'}} */}
      <Image src="/css-3.png" alt="HTML" width='200' height='200'/> {/* width='300' */}
      <h3>Bem vindo a minha página sobre CSS - programação web!</h3>
      {/* <p><Link href="/">VOLTAR</Link></p> */}
    </div>
  );
}