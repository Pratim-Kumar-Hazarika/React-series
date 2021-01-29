import React from 'react'

function DisplayName({name,age,children}) {
    return (
        <div>
            <h1>Hi {name} {age}</h1>
             <h1>{children}</h1>
        </div>
    )
}

export default DisplayName
