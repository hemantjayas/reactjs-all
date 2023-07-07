import React from 'react'
import { Greeting } from '../Greeting'
import { ParentComponent } from '../ParentComponent'
import { Counter } from '../Counter/Counter'
import { Timer } from '../Timer/Timer'
import { LoginForm } from '../LoginForm/LoginForm'
import { ToggleContent } from '../ToggleContent/ToggleContent'

export const Home = () => {
    return (
        <div>
            <Greeting />
            <ParentComponent />
            <Counter />
            <Timer />
            <LoginForm />
            <ToggleContent />
        </div>
    )
}
