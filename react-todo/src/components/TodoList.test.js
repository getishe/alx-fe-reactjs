import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "./Components/TodoList";

describe("TodoList Component", () => {
  test("renders todo items correctly", () => {
    const { getByText } = render(<TodoList />);
    expect(getByText("Learn React")).toBeInTheDocument();
    expect(getByText("Build a Todo List")).toBeInTheDocument();
  });

  test("adds a new todo item", () => {
    const { getByPlaceholderText, getByText } = render(<TodoList />);
    const input = getByPlaceholderText("Add a new todo");
    const addButton = getByText("Add");

    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(addButton);

    expect(getByText("Write tests")).toBeInTheDocument();
  });

  test("toggles todo completion status", () => {
    const { getByText } = render(<TodoList />);
    const todo = getByText("Learn React");

    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo item", () => {
    const { getByText, queryByText } = render(<TodoList />);
    const deleteButton = getByText("Delete");

    fireEvent.click(deleteButton);
    expect(queryByText("Learn React")).not.toBeInTheDocument();
  });
});
