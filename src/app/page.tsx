import Link from "next/link";
import NavBar from "./components/navbar";


function Home() {
  return (
    <div>
        <NavBar/>
    <div className="h-screen flex justify-center items-center px-[20px]">
      <div className="hover:scale-[1.05] transition bg-white p-[20px] rounded-lg shadow-lg hover:shadow-xl">
        <h1 className="font-bold text-green-700 text-3xl capitalize">Data Fetching Assignment</h1>
        <p className="text-[belu] mt-[8px]">Data Rendering Through:</p>
        <div className="flex flex-col items-center sm:justify-end sm:flex-row justify-center gap-[10px] mt-[20px]">
          <button className="w-full text-xl p-[12px] font-semibold rounded-[8px] bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-[white]"><Link href={"/client-side"}>Client-Side </Link></button>
          <button className="w-full text-xl p-[12px] font-semibold rounded-[8px] bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-[white]"><Link href={"/server-side"}>Server-Side </Link></button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home;