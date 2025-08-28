import { useState } from "react"


export default function Button({ color, name, setColor }) {


    return (
        <>
            <button
                onClick={() => setColor(color)}
                className="outline-none rounded-full text-white px-4 py-1  " style={{ backgroundColor: color }}>
                {name}
            </button>
        </>
    )
}