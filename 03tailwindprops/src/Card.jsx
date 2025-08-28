import React from "react";

export default function Card({uname, uimage}){
    
    return(
        <>
        
            <div className='w-52 h-52 justify-items-center text-red-600 border-amber-400'>   
        <h1 className='  text-black rounded-xl font'>tailwind test</h1>
        {uimage && <img src={uimage} alt={uname} className="card-image h-40 w-40" />}
        <p>This card belongs to: </p>
        <h3>{uname}</h3>
      </div>
      
        </>
    )
}
