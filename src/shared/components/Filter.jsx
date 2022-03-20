import { useEffect, useState } from 'react'

import styles from '../styles/Filter.module.css'

import cross from '../images/cross.svg'

const Filter = ({ index, values, removeFilter, removeLabel, rememberLabels }) => {

    const [title, setTitle] = useState('')
    const [value, setValue] = useState('')
    const [labels, setLabels] = useState(values)
    const [labelIndex, setLabelIndex] = useState(0)

    const addLabel = () => {
        if (title && value) {
            setLabels([...labels, { index: labelIndex, title, value }])
            setTitle('')
            setValue('')
            setLabelIndex(labelIndex + 1) 
        }
    }

    useEffect(() => rememberLabels(index, labels), [labels])
    useEffect(() => setLabels(values), [values])

    return (
        <div className={styles.filter}>
            <div className={styles.top}>
                <span>{index + 1}</span>
                <div className={styles.button} onClick={() => removeFilter(index)}>
                    <img src={cross} alt="remove filter" />
                </div>
            </div>
            {
                labels.map((label, index) => {
                    return (
                        <div key={index} className={styles.label}>
                            <div>
                                <p><span className={styles.labelHeading}>title:</span> {label.title}</p>
                                <p><span className={styles.labelHeading}>value:</span> {label.value}</p>
                            </div>
                            <div className={styles.button} onClick={() => removeLabel(index, label.index)}>
                                <img src={cross} alt="remove filter" />
                            </div>
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