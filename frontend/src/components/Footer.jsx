import React from 'react';
import { assets } from '../assets/frontend_assets/assets';
import {Link} from "react-router-dom"
const Footer = () => {
    return (
        <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, ex! Voluptate maxime quo numquam tenetur minima ipsum laudantium magni ipsa tempora repellendus facere pariatur excepturi, nulla iure atque officia assumenda.
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/orders'><li>Delivery</li></Link>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>
                GET IN TOUCH
            </p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91-123-123-1234</li>
                <li>contact@shopyatra.com</li>
            </ul>
        </div>
        </div>
        <div>
            <hr className='text-gray-300'/>
            <p className='py-5 text-sm text-center'>
            Copyright 2024@ shopyatra.com - All Right Reserved.
            </p>
       
        </div>
        </div>
    );
}

export default Footer;
