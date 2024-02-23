import React from 'react'
import {TbGridDots} from "react-icons/tb";
import Image from 'next/image';
import Link from 'next/link';

const Header:React.FunctionComponent = () => {
  
      const url:string="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/428608486_3643361812543337_2932805773474159929_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=i3o41UEyCbQAX90eZ1w&_nc_ht=scontent.fktm3-1.fna&oh=00_AfDwYs6CFgxC_QF7SHSTM77iyFRSD4LCPT8rhBZfG03DAg&oe=65DCC4B2"
    return (
    <div className='flex justify-end pr-4 pt-3 space-x-4 items-center '>
      <Link href="https://mail.google.com/mail" className=' text-sm hover:underline cursor-pointer'>Gmail</Link>
      <p className='text-sm hover:underline cursor-pointer'>Images</p>
      <TbGridDots className='text-4xl hover:bg-gray-200 p-2 rounded-full'/>
      <Image  src={url} alt="user"
       width={30} height={100}
       style={{height:30}}
       className="rounded-full object-cover"
      />
      

   </div>
  )
}

export default Header
