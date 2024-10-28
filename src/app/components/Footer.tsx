import React from 'react'
import Image from 'next/image'

function Footer () {
  return (
 <footer className="flex items-center justify-center h-[243px] flex-col gap-10">
    <div className='flex gap-14'>
        <Image src='/public/fb.png' width={30} height={30} alt='logo'></Image>
        <Image src='/public/insta.png' width={30} height={30} alt='logo'></Image>
        <Image src='/public/Group.png' width={30} height={30} alt='logo'></Image>
        <Image src='/public/Linkedin.png' width={30} height={30} alt='logo'></Image>
    </div>
 </footer>
  )
}

export default Footer
