import React, { useEffect, useState } from 'react'
import './App.css'

import { ReactTransliterate } from 'react-transliterate'
import 'react-transliterate/dist/index.css'

import SaveItem from './Components/SaveItem'

const App = () => {
    const [text, setText] = useState('');
    const [saves, setSaves] = useState([])
    const [pseudo, setPseudo] = useState(0)

    useEffect(() => {
        const pastSaves = JSON.parse(localStorage.getItem('transliterate-saves'))
        if (pastSaves) {
            setSaves(pastSaves)
        }
    }, [])

    useEffect(() => {
        var textarea = document.getElementsByTagName('textarea')[0]
        textarea.placeholder = 'Type something...'
        textarea.focus()
    }, [])

    useEffect(() => {
        localStorage.setItem('transliterate-saves', JSON.stringify(saves))
    }, [pseudo, saves])

    const handleSave = () => {
        const now = new Date()
        const date = [now.getDate(), now.toLocaleString('default', { month: 'short' }), now.getFullYear()].join(' ')
        const time = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        const newSaves = saves
        newSaves.push({
            date: date,
            time: time,
            text: text
        })
        setSaves(newSaves)
        setPseudo(pseudo + 1)
    }

    return (
        <div id='container'>
            <h2>English to Hindi Transliterate</h2>
            <button id='save' onClick={handleSave}>Save</button>
            <h3>Past Saves</h3>
            {saves.map((save, index) =>
                <SaveItem
                    key={index}
                    date={save.date}
                    time={save.time}
                    handleRestoreParent={() => {
                        if (window.confirm('Restoring will delete current text if not saved. Are you sure?')) {
                            setText(save.text)
                        }
                    }}
                />
            )}
            <ReactTransliterate
                value={text}
                onChange={(e) => setText(e.target.value)}
                lang='hi'
                Component='textarea'
            />
            <br />
        </div>
    )
}

export default App