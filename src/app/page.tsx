import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/"}>
        Home
      </Link>
      <Link href={"/contact"}>
        Contact
      </Link>
    </div>
  );
}
