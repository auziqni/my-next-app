import Link from "next/link";

export default function Home() {
  return (
    <main className="m-3">
      <div>
        <Link href={"/application"}>application</Link>
      </div>
      <div>
        <Link href={"/basic"}>basic</Link>
      </div>
      <div>
        <Link href={"/auth"}>auth</Link>
      </div>
    </main>
  );
}
