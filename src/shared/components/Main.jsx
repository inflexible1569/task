import { useState, useEffect } from 'react'

import Filter from './Filter'

import styles from '../styles/Main.module.css'

const Main = () => {

    const [filters, setFilters] = useState(JSON.parse(localStorage.getItem('filters')) || [])
    const [index, setIndex] = useState(JSON.parse(localStorage.getItem('index')) || 0)

    localStorage.setItem('filters', JSON.stringify(filters))
    localStorage.setItem('index', JSON.stringify(index))

    const addFilter = () => {
        setFilters([...filters, { index, labels: [] }])
        setIndex(index + 1)
    }

    const rememberLabels = (index, labels, quantity) => {
        const warp = [...filters]
        warp.map((filter) => {
            if (filter.index === index) {
                filter.labels = labels
            }
        })
        setFilters(warp)
    }

    const removeAll = () => {
        setFilters([])
        setIndex(0)
    }

    const removeLabel = (index, labelIndex) => {
        let warp = [...filters]
        warp.forEach((filter) => filter.labels = filter.labels.filter((label) => label.index !== labelIndex))
        setFilters([...warp])
    }

    const removeFilter = (index) => setFilters(filters.filter((filter) => filter.index !== index))

    return (
        <main className={styles.main}>
            <div className={styles.buttons}>
                <div className={styles.button} onClick={() => addFilter()}>Add filter</div>
                <div className={styles.button} onClick={() => removeAll()}>Remove all</div>
            </div>
            {
                filters.map((filter) => {
                    return (
                        <Filter
                            key={filter.index}
                            index={filter.index}
                            values={filter.labels}
                            removeFilter={removeFilter}
                            removeLabel={removeLabel}
                            rememberLabels={rememberLabels}
                        />
                    )
                })
            }
        </main>
    )

}

export default Main