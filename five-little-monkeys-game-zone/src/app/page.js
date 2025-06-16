import Link from "next/link";

export default function Home() {
  return(
    <main className="w-full h-screen flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/images/title-background.jpg')" }}>
      <img src="/images/silly-monkey.gif" alt="monkey" className="absolute top-10 left-10 w-24 animate-spin-slow" />
      <h1 className="text-6xl text-yellow-400 font-extrabold animate-bounce drop-shadow-xl mb-6">Five Little Monkeys Game Zone</h1>
      <div className="space-y-4">
        <Link href="/catch" className="bg-pink-600 text-white px-6 py-3 rounded-xl text-2xl font-bold transform transition duration-300 hover:scale-110 hover:rotate-3 animate-pulse">
          Play "Catch the Monkey"
        </Link>
        <Link href="/memory" className="bg-green-600 text-white px-6 py-3 rounded-xl text-2xl font-bold transform transition duration-300 hover:scale-110 hover:rotate-3 animate-pulse">
          Play "Doctor Says" Memory Match
        </Link>
      </div>
    </main>
  );
}