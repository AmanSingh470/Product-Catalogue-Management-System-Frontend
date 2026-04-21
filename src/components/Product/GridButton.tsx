"use client"
import {useView} from "@/context/view-context";

export default function GridButton() {
  const { view, setView } = useView();

  return (
    <button id="grid-button" className={`${view==="grid"?"text-black":"text-gray-500"} text-black cursor-pointer`} onClick={() => setView("grid")}>
      <svg className="fill-current size-5" viewBox="4 4 40 40" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M41 4H7C5.34315 4 4 5.34315 4 7V41C4 42.6569 5.34315 44 7 44H41C42.6569 44 44 42.6569 44 41V7C44 5.34315 42.6569 4 41 4Z"
          stroke="white" strokeWidth="4" />
        <path d="M24 4L24 44" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <path d="M4 24H44" stroke="white" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <p className="text-xs text-gray-80">Grid</p>
    </button>
  )
}
