import React from 'react'
import classes from '../../assets/data/classes'
import SingleClass from '../../components/SingleClass'
// import classes from '../assets/data/classes'

const PopularClasses = () => {
    return (
        <div className="container">
            <div className='popular-classes'>
                <h2 className='text-center'>Popular Classes</h2>
                <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-4">
                    {
                        classes.map((c, index) => index < 6 && (
                            <SingleClass c={c} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PopularClasses