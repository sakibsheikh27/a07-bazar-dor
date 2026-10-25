"use client";
import { isPending, useSession } from '@/lib/auth-client';
import { signOut } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";




const HeaderPage = () => {
    const handleLogout = async () => {
        const { error } = await signOut();

        if (error) {
            toast.error("Logout failed!");
            return;
        }

        toast.success("Logout successful!");


    };
    const [date, setDate] = useState('');

    useEffect(() => {
        const currentDate = new Date().toLocaleDateString('bn-BD', { dateStyle: 'full' }); setDate(currentDate);
    }, []);
    const { data: sesson } = useSession();




    const authLink = <>
        {
            sesson?.user ? <>
                <div className='flex items-center'>
                    <span className='text-xl font-md mx-2'> স্বাগতম! <div className='font-bold' href={'/profile'}>{sesson.user.name}</div></span>
                    <Link href={'/profile'} className='bg-green-700 px-3 py-2 rounded-md text-white mx-3'>Profile</Link>
                    <button className='bg-green-700 px-3 py-2 rounded-md text-white' onClick={handleLogout}>সাইন আউট</button>
                </div>
            </> : <>
                <Link
                    className='mx-5'
                    href={'/sign-in'}>সাইন ইন</Link>
                <Link
                    className='bg-green-700 px-3 py-2 rounded-md text-white'
                    href={'/sign-up'}>সাইন আপ</Link>
            </>
        }
    </>;

    const router = useRouter();



    return (

        <div className="">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full max-w-7xl mx-auto my-4 px-4">

                <Link href={'/'}>
                    <div className="flex gap-5">
                        <Image
                            className="bg-green-700 text-gray-400 p-2 rounded-md"
                            src={'/images/logo-icon.png'}
                            width={50}
                            height={50}
                            alt="Image of logo"
                        />

                        <div>
                            <h2 className="font-bold">বাজার দর</h2>
                            <small>{date}</small>
                        </div>
                    </div>
                </Link>

                <div className="mt-3 md:mt-0">
                    {authLink}
                </div>

            </div>

            <hr className="border-gray-100" />
        </div>


    );
};

export default HeaderPage;