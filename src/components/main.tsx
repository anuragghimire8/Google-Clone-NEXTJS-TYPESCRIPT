"use client"

import Image from "next/image"
import {AiOutlineSearch,AiFillCamera} from "react-icons/ai";
import {BiMicrophone} from "react-icons/bi";
import React, { useState } from "react";
import { useRouter } from "next/navigation";


const main:React.FunctionComponent= () => {
    const [search,setSearch]=useState<string>("")

     const router=useRouter();
     const onSearchSumbit=(e:React.FormEvent<HTMLFormElement>|React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        router.push(`https://www.google.com/search?q=${search}`);

     }
    return (
    <div className="flex flex-col items-center mt-20">
      <Image src={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} alt="google" height={100} width={270}/>
      <form onSubmit={(e)=>onSearchSumbit(e)} className="flex border mt-4 px-2 py-1 rounded-full w-2/5 items-center hover:shadow-md">
      <AiOutlineSearch className="text-xl text-slate-400"/>
        <input type="text"
        onChange={(e)=>setSearch(e.target.value)}
        value={search}
        className="w-full focus:outline-none ml-4"/>
        <BiMicrophone className="text-3xl text-slate-400"/>
        <AiFillCamera/>
      </form>
      <div className="mt-4">
        <button className="bg-slate-100 mr-3 py-2 px-4 text-sm rounded hover:border" onClick={(e)=>onSearchSumbit(e)}>Google Search</button>
        <button className="bg-slate-100 mr-3 py-2 px-4 text-sm rounded hover:border" onClick={()=>router.push(`https://www.google.com/doodles`)}>Iam Feeling Lucky </button>
      </div>

    </div>
  )
}

export default main 
