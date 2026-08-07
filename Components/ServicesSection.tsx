"use client"

import Button from "@/Components/Button";
import HoverSerivceText from "@/Components/HoverSerivceText";
import {useState} from "react";
import {wait} from "next/dist/lib/wait";


export default function ServicesSection() {
    const hrStyles = "w-[97%] mx-auto z-2";
    const [mousePosition, setMousePosition] = useState<string>();
    const [opacity, setOpacity] = useState<string>("opacity-0");

    return (
        <div className="flex px-page pb-32 ">
            <div className="w-1/2">
                {/*Układ tej sekcji*/}
                <h2 className="text-8xl font-medium leading-none">Services I Am <br />
                    Providing
                </h2>
                <div className="min-w-0 transition-[translate] duration-500 ease-smooth hover:translate-x-1.5 text-lg w-3/4 my-10">
                    @@@@ Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat tempus mi ac faucibus.
                    Pellentesque elementum venenatis neque, euismod pulvinar eros ornare eget.
                </div>
                <Button type="primary" baseColor="normal-green">
                    Let&apos;s connect
                </Button>
            </div>
            {/*Linie podobne ogarnac*/}
            {/*Animacje do zrobienia na hover*/}
            <div className="w-1/2 hover:text-black/40 relative h-fit cursor-pointer"
                 onMouseEnter={() => setOpacity("opacity-100")}
                 onMouseLeave={() => {
                     setOpacity("opacity-0")
                 }}
            >
                <div className={`absolute z-0 bg-charcoal-green w-full rounded-2xl h-1/4 transition-500 duration-200 ${mousePosition} ${opacity}`}></div>
                <HoverSerivceText onMouseEnter={() => setMousePosition("top-0")}>Wordpress Pages</HoverSerivceText>
                <hr className={hrStyles} />
                <HoverSerivceText onMouseEnter={() => setMousePosition("top-1/4")}>Page administration</HoverSerivceText>
                <hr className={hrStyles} />
                <HoverSerivceText onMouseEnter={() => setMousePosition("top-2/4")}>Advanced systems</HoverSerivceText>
                <hr className={hrStyles} />
                <HoverSerivceText onMouseEnter={() => setMousePosition("top-3/4")} >Webpage design</HoverSerivceText>
            </div>
        </div>
    )
}