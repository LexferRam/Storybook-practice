import {render, screen} from '@testing-library/react'
import Button from './Button'

it("Should render label passed on props", () => {
    render(<Button label="Increment Count" />)
    expect(screen.getByText("Increment Count")).toBeInTheDocument()
})
