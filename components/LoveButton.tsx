import { useState } from "react";

export default function LoveButton({ children }: any) {
    const [isFilled, setIsFilled] = useState(false);

    return (
        <button
            className="flex gap-2 items-center"
            onClick={() => setIsFilled(!isFilled)}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={isFilled ? "red" : "black"}
                className="size-6"
                fill={isFilled ? "red" : "none"}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    className="heart-path"
                />
            </svg>
            {children}
            <style jsx>
                {`
                    .heart-path {
                    transition: stroke 0.5s;
                    }

                    button:hover .heart-path {
                    stroke: red; /* Change stroke to black on hover */
                    }
                `}
            </style>
        </button>
    )
}