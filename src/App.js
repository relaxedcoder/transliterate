import React, { useEffect, useState } from 'react'
import './App.css'

import { ReactTransliterate } from 'react-transliterate'
import 'react-transliterate/dist/index.css'

import SaveItem from './Components/SaveItem'

const App = () => {
    const [text, setText] = useState('');
    const [saves, setSaves] = useState([])
    const [pseudo, setPseudo] = useState(0)
    const [saveDateTime, setSaveDateTime] = useState('New document')

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
        saves.push({
            date: date,
            time: time,
            text: text
        })
        setPseudo(pseudo + 1)
    }

    const handleDownload = () => {
        const element = document.createElement('a')
        const file = new Blob([text], { type: 'text/plain' })
        element.href = URL.createObjectURL(file)
        element.download = 'Save_' + saveDateTime
        document.body.appendChild(element)
        element.click()
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
                    handleRestore={() => {
                        if (window.confirm('Restoring will delete current text if not saved. Are you sure?')) {
                            setText(save.text)
                            setSaveDateTime(save.date + '_' + save.time)
                        }
                    }}
                    handleDelete={() => {
                        if (window.confirm('Deletion is irreversible. Are you sure?')) {
                            saves.splice(index, 1)
                            setPseudo(pseudo + 1)
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
            <button
                id='download'
                onClick={handleDownload}
            >
                Download .txt file
            </button>
            <br />
        </div>
    )
}

export default App