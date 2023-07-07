import React, { useState } from 'react'

export const ToggleContent = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        toggle ? setToggle(false) : setToggle(true)
    }
    return (
        <div>
            <h1>Toggle Content</h1>
            <button onClick={handleToggle}>{!toggle ? "SEE MORE" : "SEE LESS"}</button>
            {toggle ? <p>this is the toggle content which is shown on the clicking the more button and to hide the content click the button again</p> : ""}
        </div>
    )
}
