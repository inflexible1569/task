import { useState } from 'react'

import Filter from './Filter'

import styles from '../styles/Main.module.css'

const Main = () => {

    const [filters, setFilters] = useState([])

    const addFilter = () => setFilters([...filters, {}])
    const removeAll = () => setFilters([])
    const removeFilter = (index) => setFilters(filters.filter((filter) => filter.index !== index))

    return (
        <main className={styles.main}>
            <div className={styles.buttons}>
                <div className={styles.button} onClick={() => addFilter()}>Add filter</div>
                <div className={styles.button} onClick={() => removeAll()}>Remove all</div>
            </div>
            {
                filters.map((filter, index) => <Filter key={index} index={index} removeFilter={removeFilter} />)
            }
        </main>
    )

}

export default Main