import Image from "next/image";
// import Link from "next/link";

export default function HTML() {
  return (
    <div>
      <h1 className="htmltitle">Programação Web I - HTML (HyperText Markup Language)</h1> {/* style={{color: 'red'}} */}
      <Image src="/html.png" alt="HTML" width='200' height='200'/> {/* width='300' */}
      <h3>Bem vindo a minha página sobre HTML - programação web!</h3>
      {/* <p><Link href="/">VOLTAR</Link></p> */}
    </div>
  );
}