import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Label } from '@/components/ui/label'

describe('Label', () => {
  it('renders with text content', () => {
    render(<Label>Test Label</Label>)
    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })

  it('renders with htmlFor attribute', () => {
    render(<Label htmlFor="test-input">Test Label</Label>)
    const label = screen.getByText('Test Label')
    expect(label).toHaveAttribute('for', 'test-input')
  })

  it('renders with custom className', () => {
    render(<Label className="test-class">Test Label</Label>)
    const label = screen.getByText('Test Label')
    expect(label).toHaveClass('test-class')
  })
}) 