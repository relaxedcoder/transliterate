import React from 'react'
import styles from './SaveItem.module.css'

import Delete from '../delete.png'

const SaveItem = ({ date, time, handleRestore, handleDelete }) => {
    return (
        <div id={styles.container}>
            {date + ' ' + time}
            <button id={styles.restore}
                onClick={handleRestore}
            >Restore</button>
            <a onClick={handleDelete}>
                <img src={Delete} id={styles.delete} />
            </a>
        </div>
    )
}

export default SaveItem