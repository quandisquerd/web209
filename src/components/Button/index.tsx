import React from "react";

type Props = {
    primary?: boolean;
    danger?: boolean;
    children: any;
     onClick:(id:any) => void;
};

const Button = ({ primary, children, danger, onClick }: Props) => {
    return (
        <button onClick={onClick}
            className={`p-2 border border-gray-400 rounded
        ${primary && "bg-blue-500 text-white"}
        ${danger && "bg-red-500 text-white"}
    `}
        >
            {children}
        </button>
    );
};

export default Button;