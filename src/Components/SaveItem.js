import React from 'react'
import styles from './SaveItem.module.css'

const SaveItem = ({ date, time, handleRestoreParent }) => {
    const handleRestore = () => {
        handleRestoreParent()
    }

    return (
        <div id={styles.container}>
            {date + ' ' + time}
            <button id={styles.restore}
                onClick={handleRestore}
            >Restore</button>
        </div>
    )
}

export default SaveItem