import React from 'react'

const SingleClass = ({ c }) => {
    return (
        // <div>
        //     <img src={c.image} alt="" />
        //     <h3>{c.title}</h3>
        // </div>

        <div class="col">
            <img src={c.image} class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{c.title}</h5>
                {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
            </div>
        </div>
    )
}

export default SingleClass