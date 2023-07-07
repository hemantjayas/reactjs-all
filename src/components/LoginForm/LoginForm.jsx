import React, { useState } from 'react'

export const LoginForm = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }))

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        setFormData({ username: "", password: "" })

    }

    return (
        <div>
            <h1>Login Form</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Username' name='username' value={formData.username} onChange={handleInputChange} />
                <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleInputChange} />
                <input type="submit" />
            </form>
        </div>
    )
}
