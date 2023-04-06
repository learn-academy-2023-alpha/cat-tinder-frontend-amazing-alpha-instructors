import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { BrowserRouter } from "react-router-dom"

describe("<Footer />", () => {
  it("has a copyright", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
      const footer = screen.getByText(/© 2023 learn \| elyse and nicole/i)
      expect(footer).toBeInTheDocument()
  })
})