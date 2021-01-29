import React from 'react'

function DisplayName({name, alertName}) {
    return (
        <div>
            <h1>Hi {name}</h1>
            <button onClick={()=>alertName("Kabir")}>Click Me</button>
        </div>
    )
}

export default DisplayName
