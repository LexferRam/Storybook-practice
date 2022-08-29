import React from 'react'

interface IButton {
    testId?: number,
    action?: () => void,
    label: string
}

const Button = ({ action, label, testId }: IButton) => {
    return (
        <button
            data-testid={testId}
            onClick={action}
        >
            {label}
        </button>
    )
}

export default Button