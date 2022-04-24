import { fireEvent, render } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { Button } from "."
import theme from "@/theme"

describe("Button", () => {
  test("debe de ejecutar el evento click al llamar el componente", () => {
    const handleClick = jest.fn()
    let loading = false
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button onClick={handleClick} loading={loading}>
          Hello
        </Button>
      </ThemeProvider>,
    )
    const button = getByText(/hello/i)

    expect(button).toBeInTheDocument()

    fireEvent.click(button)
    expect(handleClick).toBeCalledTimes(1)
  })

  test("debe de mostrar el loading", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button loading={true}>Hello</Button>
      </ThemeProvider>,
    )
    const icon = container.querySelector("i")

    expect(icon).toBeInTheDocument()
    expect(icon).toHaveClass("bx bx-loader-alt bx-spin")
  })
})
