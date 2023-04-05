import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from "react-router-dom"

describe("<App />", () => {
  it("renders a greeting", () => {
    // Arrange: Render component App.js
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    // screen.debug()
    // screen.logTestingPlaygroundURL()

    // Act
    const greeting = screen.getByText("Home")

    // Assert
    expect(greeting).toBeInTheDocument()
    // expect()
  })

  it("renders a heading", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    const heading = screen.getByRole('heading', {
      name: /home/i
    })
    expect(heading).toBeInTheDocument()
  })
})