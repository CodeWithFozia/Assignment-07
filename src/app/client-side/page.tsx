"use client"
import React, { useState, useEffect } from "react";
import NavBar from "../components/navbar";
import Image from "next/image";

interface Clientfetch {
    id:number;
    title:string;
    price:string;
    description:string;
    category:string;
    image:string;
    rating:{rate:number; count:number};
}

const Clientdata=()=>{
    const [data,setData]=useState<Clientfetch[]>([]);
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await fetch(
                "https://fakestoreapi.com/products"
            );
            const parsedResponse:Clientfetch[]=await response.json();
            console.log("clientftech",parsedResponse);
            setData(parsedResponse);
        };
        fetchData();
    },[]);

    return(
        <div>
            <NavBar/>
        <div>
            <h1 className="mb-[40px] text-center text-[20px] sm:text-[28px] md:text-[30px] font-[700] text-green-700">CLIENT SIDE FETCHING</h1>
        
        <div className="grid gride-cols grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-10">
            {data.map((fetch,index)=>(
                <div key={index} className="flex flex-col bg-gradient-to-r from-green-200 to-green-50 text-center gap-2 border">
                     <div>
                    <Image src={fetch.image} alt={fetch.title} height={50} width={50} className="w-full h-[322px] mt-3"/>
                    </div>
                    <p className="capitalize text-green-800 font-semibold text-[22px]">{`${fetch.category}`}</p>
                    <p className="text-[18px]">ID:{fetch.id}</p>
                    <p className="text-[18px]">{fetch.title}</p>
                    <p className="line-clamp-3 text-[18px]">{`${fetch.description}`}</p>
                    <p className="font-semibold text-[20px]">${fetch.price}</p>
                    <p className="text-orange-500 text-[20px]">
                    {fetch.rating.rate}
                    ({fetch.rating.count}reviews)
                    </p>
                </div>
            ))}
        </div>
        </div>
        </div>
    )
}

export default Clientdata