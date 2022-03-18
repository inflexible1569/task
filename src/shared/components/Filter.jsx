import {useEffect, useState} from 'react'

import styles from '../styles/Filter.module.css'

import cross from '../images/cross.svg'

const Filter = ({ index, values, removeFilter, rememberLabels }) => {

    const [title, setTitle] = useState('')
    const [value, setValue] = useState('')
    const [labels, setLabels] = useState(values)
    const [labelIndex, setLabelIndex] = useState(JSON.parse(localStorage.getItem('labelIndex')) || 0)

    localStorage.setItem('labelIndex', JSON.stringify(labelIndex))

    const addLabel = () => {
        if (title && value) {
            setLabels([...labels, { index: labelIndex, title, value }])
            setLabelIndex(labelIndex + 1)
            setTitle('')
            setValue('')
        }
    }

    const removeLabel = () => {

    }

    useEffect(() => rememberLabels(index, labels), [labels])

    return (
        <div className={styles.filter}>
            <div className={styles.top}>
                <span>{index + 1}</span>
                <div className={styles.button} onClick={() => removeFilter(index)}>
                    <img src={cross} alt="remove filter" />
                </div>
            </div>
            {
                labels.map((label) => {
                    return (
                        <div key={label.index} className={styles.label}>
                            <p><span className={styles.labelHeading}>title:</span> {label.title}</p>
                            <p><span className={styles.labelHeading}>value:</span> {label.value}</p>
                        </div>
                    )
                })
            }
            <div className={styles.inputFields}>
                <label>
                    <input
                        className={styles.inputField}
                        value={title} type="text"
                        placeholder="title"
                        maxLength="35"
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </label>
                <label>
                    <input
                        className={styles.inputField}
                        value={value} type="text"
                        placeholder="value"
                        maxLength="35"
                        onChange={(event) => setValue(event.target.value)}
                    />
                </label>
            </div>
            <div className={styles.smallButton} onClick={() => addLabel()}>Add label</div>
        </div>
    )

}

export default Filter