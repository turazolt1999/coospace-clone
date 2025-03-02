"use client"
import Link from "next/link";
import Image from 'next/image';

import Avatar from "../../../components/Avatar";
import Card from "../../../components/Card";
import Layout from "../../../components/Layout";

import { usePathname } from "next/navigation";
import PostCard from "../../../components/PostCard";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function ProfilePage({ children }: any) {
    const pathname = usePathname();
    const isPosts = pathname?.includes('post') || pathname === '/profile';
    const isAbout = pathname?.includes('about');
    const isFriends = pathname?.includes('friends');
    const isPhotos = pathname?.includes('photos');

    console.log(pathname);

    const tabClasses = 'flex gap-1 px-5 py-1 items-center hover:border-red-300 hover:border-b-4 hover:text-red-300';
    const activeTabClasses = 'flex gap-1 px-5 py-1 items-center border-red-500 border-b-4 text-red-500 font-semibold';

    return (
        <Layout>
            <Card noPadding={true}>
                <div className="relative overflow-hidden rounded-md">
                    <div className="h-40 overflow-hidden  flex justify-center items-center relative">
                        <Image
                            src="https://szegedtourism.hu/wp-content/themes/szegedtourism/images/og-image.png"
                            layout="fill"
                            objectFit="cover"
                            alt="" />
                    </div>
                    <div className="absolute top-24 left-5">
                        <Avatar size={'big'} />
                    </div>
                    <div className="p-4 pb-0">
                        <div className="ml-40">
                            <h1 className="text-2xl font-bold">
                                Turánszki Zoltán
                            </h1>
                            <div className="text-gray-500 leading-4">Szeged, Hungary</div>
                        </div>
                        <div className="mt-7 sm:mt-10 flex gap-0">
                            <Link href={'/profile/posts'} className={isPosts ? activeTabClasses : tabClasses}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg>
                                <span className="hidden sm:block">
                                    Posts
                                </span>
                            </Link>
                            <Link href={'/profile/about'} className={isAbout ? activeTabClasses : tabClasses}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                </svg>
                                <span className="hidden sm:block">
                                    About
                                </span>
                            </Link>
                            <Link href={'/profile/friends'} className={isFriends ? activeTabClasses : tabClasses}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                                <span className="hidden sm:block">
                                    Friends
                                </span>
                            </Link>
                            <Link href={'/profile/photos'} className={isPhotos ? activeTabClasses : tabClasses}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                <span className="hidden sm:block">
                                    Photos
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Card>
            {pathname === '/profile' && (
                <PostCard>
                </PostCard>
            )}
            {children}
        </Layout>
    );
}