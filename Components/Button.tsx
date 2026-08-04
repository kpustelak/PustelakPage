import {Children, JSX} from "react";

export default function Button({children} : {children : JSX.Element}) {
    return(
        <button className="text-white bg-edgy-black h-12 px-10 rounded-xl text-sm">
            {children}
        </button>
    );
}