import { render, screen, fireEvent, getByText } from "@testing-library/react";

import Login, { validateInput } from "./Login";

// test("renders learn react link", () => {
//   render(<App />);

//   const linkElement = screen.getByText(/learn react/i);

//   expect(linkElement).toBeInTheDocument();
// });

describe("login", () => {
  test("validate function should pass on correct input", () => {
    const text = "text@test.com";

    expect(validateInput(text)).toBe(true);
  });

  test("validate function should fall on incorrect input", () => {
    const text = "text";

    expect(validateInput(text)).not.toBe(true);
  });

  test("login form should be in the document", () => {
    render(<Login />);

    const inputNode = screen.getByText("email");

    expect(inputNode).toBeInTheDocument();
  });

  // test("email field should have label", () => {

  //   const component = render(<App/>);

  //   const emailInputNode = component.getByLabelText("Email:"  );

  //   expect(emailInputNode.getAttribute("name")).toBe("email");

  // });

  // test("email input should accept text", ()=>{

  //   const { getByLabelText,getByText } = render(<App/>);

  //   const emailInputNode = getByLabelText("Email:"  );

  //   expect(emailInputNode.value).toMatch("");

  //   fireEvent.change(emailInputNode,{target: {value: "testing"}})

  //   expect(emailInputNode.value).toMatch("testing");

  //   // error message

  //   const errorMessageNode = getByText("Email not valid");

  //   expect(errorMessageNode).toBeInTheDocument();

  //   fireEvent.change(emailInputNode,{target: {value: "testing@"}});

  //   expect(errorMessageNode).not.toBeInTheDocument();

  // });

  // test(" should be able to submit form",()=>{

  //   const mockFn = jest.fn()

  //   const {getByRole} = render(<App handleSubmit={mockFn}/>);

  //   const buttonNode = getByRole("button");

  //   fireEvent.submit(buttonNode);

  //   fireEvent.submit(buttonNode);

  //   expect(mockFn).toHaveBeenCalled(2)

  // })
});
