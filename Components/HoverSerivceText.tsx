import React, {ReactNode} from "react";

export default function HoverSerivceText({ children, onMouseEnter }: { children: React.ReactNode; onMouseEnter : () => void }) {
    return(
        <p className="text-5xl font-medium hover:text-white py-5 rounded-2xl pl-4
                duration-300 ease-smooth hover:translate-x-1.5 z-2 relative"
                onMouseEnter={onMouseEnter}>
            {children}
        </p>
    )
}