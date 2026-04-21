"use client"
import {useView} from "@/context/view-context";

export default function ListButton() {
    const { view, setView } = useView();

    return (
    <button id="list-button" className={`${view==="list"?"text-black":"text-gray-500"} text-black cursor-pointer`} onClick={() => setView("list")}>
            <svg viewBox="0 0 16 16" className="fill-current size-5" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M1 5H15V7H1V5Z"></path>
                    <path d="M1 9H15V11H1V9Z"></path>
                    <path d="M1 13H15V15H1V13Z"></path>
                    <path d="M1 1H15V3H1V1Z"></path>
                </g>
            </svg>
            <p className="text-xs text-gray-80">List</p>
        </button>
    )
}
