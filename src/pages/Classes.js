import React, { useState } from 'react'
import classes from '../assets/data/classes'
import SingleClass from '../components/SingleClass'

const Classes = () => {
    // const [allClass, setClasses] = useState(classes)

    return (
        <div className='classes bg-dark'>
            <h2 className='text-light text-center'>Classes</h2>
            <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-4">
                {
                    classes.map(c => (
                        <SingleClass c={c} />
                    ))
                }
            </div>
        </div>
    )
}

export default Classes