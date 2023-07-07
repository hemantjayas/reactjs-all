import React from 'react'
import { Header } from './Header'
import { Content } from './Content'

export const ParentComponent = () => {
    return (
        <div>
            <Header title="hemant" />
            <Content content=" Let's move on to the concept of React props and component composition. Understanding how to pass data between components using props and how to compose components together is crucial in React development." />
        </div>
    )
}
