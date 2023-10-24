"use client"
import { useState } from "react";
import Logo from "../Logo";
import ItemsNavbar from "./ItemsNavbar";
import ResponsiveMenu from "./ResponsiveMenu";
import ItemsNavbarResponsive from "./ItemsNavbarResponsive";


export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="w-[90%] mx-auto lg:mx-auto md:mx-auto flex flex-row justify-between items-center h-16">
                <div>
                    <Logo />
                </div>
                <div className="hidden md:block lg:block">
                    <ItemsNavbar />
                </div>
                <div className="block md:hidden lg:hidden" onClick={(event) => setIsOpen(isOpen == true ? false : true)}>
                    <ResponsiveMenu isOpen={isOpen} />
                </div>
            </div>
            {isOpen && (
                <div className="w-full bg-zinc-950/10 h-80 pt-10 transition-all md:hidden lg:hidden">
                    <ItemsNavbarResponsive />
                </div>
            )}
        </div>
    )
}