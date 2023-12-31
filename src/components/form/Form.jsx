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
                />
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}