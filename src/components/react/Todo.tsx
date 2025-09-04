import React from "react"
import { renderToStaticMarkup, renderToString ,} from "react-dom/server"


export const Todo=({mark,children,data})=>{

    const x=renderToStaticMarkup("<h1>OKOK</h1>")
    console.log(x)
    
    return <>
    {data}
        {x}
        {children}
        <p>mark is {mark}</p>
    </>
}