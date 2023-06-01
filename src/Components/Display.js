import React,{useState} from 'react'
import data from "./data.js"

const Display = ()=>{
    const [value, setvalue] = useState(data)
    console.log(data)
    return(
{
    
value.map(function(b){
<p>{b.name}</p>
})
}
    )    
}
export default Display