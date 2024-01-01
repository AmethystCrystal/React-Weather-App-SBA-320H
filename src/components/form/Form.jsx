import React, { useState } from 'react';

export default function Form(props) {
    const [formData, setFormData] = useState({ searchTerm: "" })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onWeatherSearch(formData.searchTerm)

        setFormData({
            ...formData,
            searchTerm: "",
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input
                    type='text'
                    name='searchTerm'
                    onChange={handleChange}
                    value={formData.searchTerm}
                    placeholder='Enter location...'
                    style={{
                        borderRadius: '10px',
                    }}
                />
                <button style={{ background: 'transparent', border: 'none'}}>
                    <img src="src\images\search.png" alt='Weather' width="90px" ></img>
                </button>
            </form>
        </div>
    )
}