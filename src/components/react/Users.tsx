import { useState } from "react"


export const Users=({name,children,header})=>{

    const [state,setState]=useState(0)

    const handleClick=()=>{
        setState((state)=>{
            return state+1
        })
    }

    return <>
        {header}
        <h1>Bonjour react {name}</h1>
        <span>{state}</span>
        <button onClick={handleClick} >+</button>
        {children}
    </>
}


export const User=()=>{

    const handleClick=()=>{
        console.log('okok')
    }

    return <>
       
        <button onClick={handleClick} >+</button>
            </>
}