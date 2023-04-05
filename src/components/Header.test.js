import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from "react-router-dom"
import catLogo from '../assets/cat-logo.png'

describe("<Header />", () => {
  it("renders a greeting", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    // screen.debug()
    // screen.logTestingPlaygroundURL()
    const image = screen.getByRole("img")
    expect(image).toHaveAttribute("src", catLogo)
  })
})