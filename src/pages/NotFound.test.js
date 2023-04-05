import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';
import { BrowserRouter } from "react-router-dom"

describe("<NotFound />", () => {
  it("displays text telling my user the page is not found", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
      screen.logTestingPlaygroundURL()
      const notFound = screen.getByRole('heading', {
        name: /oops! cat knocked this page off the table\./i
      })
      expect(notFound).toBeInTheDocument()
      const image = screen.getByRole('img', {
        name: /cat knocked the page over, error\./i
      })
      expect(image).toBeInTheDocument()
  })
})