import Image from "next/image";
import { useEffect, useState } from 'react';

export default function Sidebar() {
    const [darkMode, setDarkMode] = useState(false);
    
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode])
    
    return(
        <div className="z-10 box-content h-100 w-6 p-2 absolute inset-0">
            <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? (<Image src={'/ico/moon.svg'} width="24px" height="24px" alt="dark"/>) : (<Image src={'/ico/sun.svg'} width="24px" height="24px" alt="light" />)}
            </button>
            <div className="">

            </div>
        </div>
        );
    };