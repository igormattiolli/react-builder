import FormToBuildDynamicForm from "@/components/form-to-build-dynamic-form";
import { render, screen } from "@testing-library/react";

test("Render the button correctly", () => {
  render(<FormToBuildDynamicForm setNewInputs={() => {}} />);
  const element = screen.getByTestId("standard-basic");
  expect(element).toBeInTheDocument();
});

test("Render the button correctly", () => {
  render(<FormToBuildDynamicForm setNewInputs={() => {}} />);
  const element = screen.getByTestId("demo-simple-select-standard-label");
  expect(element).toBeInTheDocument();
});

test("Render the button correctly", () => {
  render(<FormToBuildDynamicForm setNewInputs={() => {}} />);
  const element = screen.getByTestId("standard-button");
  expect(element).toBeInTheDocument();
});
