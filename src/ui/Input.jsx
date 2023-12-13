import styled from "styled-components";

const Input = styled("input")(() => ({
    border: "1px solid",
    borderColor: "var(--color-grey-300)",  // Corrected from var(--color-gray-300)
    backgroundColor: "var(--color-grey-100)",  // Adjusted to var(--color-grey-100) for a lighter background
    padding: "0.8rem 1.2rem",
    borderRadius: "var(--border-radius-sm)",  // Corrected from var(--color-gray-300)
    boxShadow: "var(--shadow-sm)",
}));

export default Input;
