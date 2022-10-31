import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("App Starts show 1 Order", async () => {
    render(<App />);
    setTimeout(() => {
        const linkElement = screen.getByText(/1000/i);
        expect(linkElement).toBeInTheDocument();
    }, 1000);
});

test("Order state changed from new to done ", async () => {
    render(<App />);
    expect(true).toBe(false);
});
