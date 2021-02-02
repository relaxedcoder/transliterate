import React, { useEffect, useState } from 'react'
import './App.css'

import { ReactTransliterate } from 'react-transliterate'
import 'react-transliterate/dist/index.css'

const App = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        var textarea = document.getElementsByTagName('textarea')[0]
        textarea.placeholder = 'Type something...'
        
        textarea.focus()
    }, [])

    return (
        <div id='container'>
            <h2>English to Hindi Transliterate</h2>
            <ReactTransliterate
                value={text}
                onChange={(e) => setText(e.target.value)}
                lang='hi'
                Component='textarea'
            />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default App