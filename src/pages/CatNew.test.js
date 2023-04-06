import { render, screen } from '@testing-library/react';
import CatNew from './CatNew';
import { BrowserRouter } from "react-router-dom"

describe("<CatNew />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CatNew />
      </BrowserRouter>
    )
  })
  it("renders the CatNew page for the user", () => {
    const inputTitle = screen.getByText("Cat Name")
    expect(inputTitle).toBeInTheDocument()
  })

  it("has a form with entries for name, age, enjoys, and image", () => {
    const formName = screen.getByText(/cat name/i)
    expect(formName.getAttribute("for")).toEqual("name")

    const formAge = screen.getByText(/cat age/i)
    expect(formAge.getAttribute("for")).toEqual("age")

    const formEnjoys = screen.getByText(/enjoys/i)
    expect(formEnjoys.getAttribute("for")).toEqual("enjoys")

    const formImage = screen.getByText(/image url/i)
    expect(formImage.getAttribute("for")).toEqual("image")
  })
})