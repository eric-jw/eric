import Head from 'next/head'
import React, { useRef, useState, useCallback } from 'react';
import Works from '../pages/Works';
import Resume from '../pages/Resume';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import { useEffect } from 'react';
import Image from "next/image";

export default function Menu() {
    const [selectedId, setSelectedId] = useState(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        document.addEventListener("keydown", escCloseModal, false);
        window.history.pushState(null, null, window.location.pathname);
        window.addEventListener("popstate", onBackButtonEvent);
        //document.addEventListener("mousedown", handleClickOutside);
        return () => {
        document.removeEventListener("keydown", escCloseModal, false);
        window.removeEventListener("popstate", onBackButtonEvent);
        //document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    // handle close modal if press ESC
    const escCloseModal = useCallback((event) => {
        if (event.keyCode === 27) {
        setSelectedId("");
        }
    }, []);

    // handle close modal if press back btn
    const onBackButtonEvent = (e) => {
        e.preventDefault();
        setSelectedId("");
    };

    const showContent = () => {
        switch (selectedId) {
          case "works":
            return <Works />;
          case "resume":
            return <Resume />;
          case "skills":
            return <Skills />;
          case "contact":
            return <Contact />;
          case "blog":
            return <Blog />;
          default:
            return null;
        }
      };

    return(
        <>
        <Head>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,800;1,900&display=swap');
            </style>
        </Head>

        <div className="z-2 flex pt-40 overflow-hidden justify-center items-center text-black dark:text-white">
            <div className="flex">
                <ul className="rotate inline subpixel-antialiased font-8xl text-shadow dark:text-shadow-dark">
                    <li className="listItem" onClick={() => setSelectedId("works")}>
                        <p>works</p>
                    </li>
                    <li className="listItem" onClick={() => setSelectedId("resume")}>
                        <p>resume</p>
                    </li>
                    <li className="listItem" onClick={() => setSelectedId("skills")}>
                        <p>skills</p>
                    </li>
                    <li className="listItem" onClick={() => setSelectedId("contact")}>
                        <p>contact</p>
                    </li>
                    <li className="listItem" onClick={() => setSelectedId("blog")}>
                        <p>blog</p>
                    </li>
                </ul>
            </div>
        </div>
        {!selectedId ? null : (
            <div className={`${ selectedId ? "" : hidden } p-8 absolute flex inset-0 w-full duration-300 overflow-y-auto text-black dark:text-white`}>
                <div className="relative group container mx-auto sm:w-4/5 md:w-9/12 lg:w-4/5 xl:w-3/5">
                    <div className="inset-0 bg-white dark:bg-black">
                        <div className={`relative w-full font-bold tracking-widest border-2 border-black dark:border-white ${ selectedId === "works" ? "p-1" : "p-5 lg:p-10"}`}>
                            <div className="absolute right-0 top-0 h-full">
                                <button
                                    onClick={() => setSelectedId(null)}
                                    stroke={0.1}
                                    className="sticky z-10 box-content h-7 w-7 top-0 cursor-pointer p-2">
                                    <div className='dark:hidden'>
                                        <Image src={'/ico/x.svg'} width='24px' height='24px' alt='X'/>
                                    </div>
                                    <div className='hidden dark:block'>
                                        <Image src={'/ico/x-light.svg'} width='24px' height='24px' alt='X' />
                                    </div>
                                </button>
                            </div>
                            {showContent()}
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}