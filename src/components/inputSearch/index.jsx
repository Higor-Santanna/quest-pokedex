import React, {useState} from "react"

const Input = (props) => {
    return(
        <input 
            type="text" 
            placeholder='look for your pokemon...'
            onChange={(e) => props(e.target.value)}/>
    )
}

export { Input }