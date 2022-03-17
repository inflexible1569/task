import { useState } from 'react'

import styles from '../styles/Filter.module.css'

import cross from '../images/cross.svg'

const Filter = ({ index, removeFilter }) => {

    const [title, setTitle] = useState('')
    const [value, setValue] = useState('')
    const [marks, setMarks] = useState([])

    const addMark = () => {
        marks.title.length > 0 && setMarks([...marks, { title, value }])
        setTitle('')
        setValue('')
        console.log(title, value)
    }

    const removeMark = () => {

    }

    return (
        <div className={styles.filter}>
            <div className={styles.top}>
                <span>{index}</span>
                <div className={styles.button} onClick={() => removeFilter(index)}>
                    <img src={cross} alt="remove filter" />
                </div>
            </div>
            {
                marks.map((mark) => {
                    return <div className={styles.marks}><span key={mark.index}>{mark.title} {mark.value}</span></div>
                })
            }
            <div className={styles.inputFields}>
                <label>
                    <input
                        className={styles.inputField}
                        value={title} type="text"
                        placeholder="title"
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </label>
                <label>
                    <input
                        className={styles.inputField}
                        value={value} type="text"
                        placeholder="value"
                        onChange={(event) => setValue(event.target.value)}
                    />
                </label>
            </div>
            <div className={styles.smallButton} onClick={() => addMark()}>Add mark</div>
        </div>
    )

}

export default Filter