import Image from "next/image";
import {GlobeAltIcon, MenuIcon, UserCircleIcon, SearchIcon, UserIcon} from "@heroicons/react/solid";
import airbnbLogo from '../public/Airbnb_Logo_Bélo.svg.png'
function Header() {
    return (
        <header className={"sticky top-0 z-50 grid grid-cols-3 " +
            "bg-white shadow-md py-5 px-5 md:px-10"}>

            {/* left */}
            <div className={'relative flex items-center h-10 cursor-pointer my-auto'}>
                <Image
                    src={airbnbLogo}
                    //priority={true}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    alt="Bacon"
               />
            </div>

            {/* Middle */}
            <div className={"flex items-center md:border-2 rounded-full py-2 md:shadow-sm"}>
                <input className={"flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400"} type={"text"} placeholder={"Start your search"} />
                <SearchIcon className={"hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"}/>
            </div>

            {/* Right*/}
            <div className={"flex"}>
                <p>Become a host</p>
                <GlobeAltIcon className={"h-6"} />
            </div>

        </header>
    );
}

export default Header;