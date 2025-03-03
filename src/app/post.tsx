"use client";

import Image from "next/image";
import React from "react";

export default function Post({ props }) {

    const [isHovered, setIsHovered] = React.useState(false);

    const hoverImage = () => {
        if (isHovered) return "w-40 h-40 rounded-full object-cover";
        return "w-32 h-32 rounded-full object-cover";
    };

    return (
        <div className="grid items-center justify-items-center sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="w-50 h-50 relative">
                <Image
                    className={`${hoverImage()} transition-all duration-300 ease-in-out`}
                    src={`/images/${props.image}`}
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
            </div>
        </div>
    );
}

