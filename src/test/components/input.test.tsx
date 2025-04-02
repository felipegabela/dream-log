import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Input } from '@/components/ui/input'

describe('Input', () => {
  it('renders with default props', () => {
    render(<Input />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders with placeholder', () => {
    render(<Input placeholder="Enter text" />)
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('handles user input', () => {
    render(<Input />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'test input' } })
    expect(input).toHaveValue('test input')
  })

  it('renders with custom className', () => {
    render(<Input className="test-class" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('test-class')
  })
}) 