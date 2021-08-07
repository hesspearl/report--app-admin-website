import React from 'react'


const InputText = (props) => {
    return (
        <div  className="inputBorder">
            <p>{props.children}</p>
        </div>
    )
}

export default InputText;