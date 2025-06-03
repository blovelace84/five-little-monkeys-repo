import Link from "next/link";

export default function Home() {
  return(
    <main className="w-full h-screen flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/images/title-background.jpg')" }}>
      <h1 className="text-4xl font-extrabold mb-8 text-purple-800 dropt-shadow-lg text-center">Five Little Monkeys Game Zone</h1>
      <div className="space-y-4">
        <Link href="/catch" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Play "Catch the Monkey"
        </Link>
        <Link href="/memory" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700">
          Play "Doctor Says" Memory Match
        </Link>
      </div>
    </main>
  );
}