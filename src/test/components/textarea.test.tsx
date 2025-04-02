import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Textarea } from '@/components/ui/textarea'

describe('Textarea', () => {
  it('renders with default props', () => {
    render(<Textarea />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders with placeholder', () => {
    render(<Textarea placeholder="Enter text" />)
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('handles user input', () => {
    render(<Textarea />)
    const textarea = screen.getByRole('textbox')
    fireEvent.change(textarea, { target: { value: 'test input' } })
    expect(textarea).toHaveValue('test input')
  })

  it('renders with custom className', () => {
    render(<Textarea className="test-class" />)
    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveClass('test-class')
  })
}) 