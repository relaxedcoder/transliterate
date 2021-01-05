import React, { useState } from 'react'
import { ReactTransliterate } from "react-transliterate"
import "react-transliterate/dist/index.css"

export default () => {
    const [currentText, setCurrentText] = useState("")
    const [text, setText] = useState("")

    const handle = () => {
        setText(text + currentText)
        setCurrentText('')
    }

    return (
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <br></br>
            <h3>English to Hindi Transliterate</h3>
            <ReactTransliterate
                value={currentText}
                onChange={(e) => setCurrentText(e.target.value)}
                lang="hi"
            />
            <br></br>
            <button onClick={handle}>Transfer</button>
            <br></br>
            <textarea
                style={{ height: '2000px', width: '1000px', fontSize: '20px' }}
                value={text}
                onChange={e => {
                    console.log(e.target.value)
                    setText(e.target.value)
                }}
            />
        </div>
    )
}