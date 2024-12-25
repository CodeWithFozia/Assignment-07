import NavBar from "../components/navbar";

type Data = {
    id: number,
    name: string,
    type: string,
    available: boolean
}

const serverside = async () => {
    const url = await fetch("http://simple-books-api.glitch.me/books/")
    const data: Data[] = await url.json()
    return (
        <div>
            <NavBar />
            <div className="py-[50px] px-[20px] sm:-[30px] md:px[40px] lg:px-[50px]">
                <h1 className="mb-[40px] text-center text-[20px] sm:text-[28px] md:text-[30px] font-[700] text-green-700">SERVER SIDE FETCHING</h1>
                <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
                    {data.map((todo, index) => (
                        <div key={index} className="w-full bg-gradient-to-r from-green-200 to-green-50 shadow-lg p-[20px] rounded-[8px] hover:shadow-xl hover:scale-[1.05] transition">
                            <p className="text-[22px] font-[600] text-green-800 mb-[10px]">{todo.name}</p>
                            <p className="text-[gray] mb-[8px]"><span className="font-bold">ID:</span>{todo.id}</p>
                            <p className="text-[gray] mb-[8px]"><span className="font-bold">Type:</span>{todo.type}</p> 
                            <p className={`${todo.available == true ? "text-[green]" : "text-[red]"} font-semibold`}>{todo.available == true ? "Available" : "Unavailable"}</p>
                            <p className={`text-right mt-[15px] ${todo.available == true ? "text-[red]" : "text-[green]"}`}>Read more....</p>
                              
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default serverside;