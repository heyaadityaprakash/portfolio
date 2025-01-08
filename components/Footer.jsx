import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
function Footer({darkMode}) {
    return ( 
        <div className='mt-10'>
            <div className='text-center'>
                <Image className='w-32 mx-auto mb-2' src={darkMode?assets.logo_dark : assets.logo} alt=''/>

                {/* <div className=''>
                <Image className='w-6 mx-auto mb-2' src={darkMode?assets.mail_icon_dark: assets.mail_icon} alt=''/>
                </div> */}
            </div>

            <div className='text-center sm:flex items-center justify-between border-t  border-gray-500 mx-[10%] mt-12 py-6'>
                <p>all rights reserved</p>
                <ul className='flex items-center gap-10 justify-center font-extralight'>
                    <li><a href="https://github.com/heyaadityaprakash/">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/aadityaprakash0/">Linked In</a></li>
                    <li><a href="https://x.com/_aadityaprakash">X</a></li>
                </ul>
            </div>

        </div>
     );
}

export default Footer;