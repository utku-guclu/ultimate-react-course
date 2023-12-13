import styled from "styled-components";

const StyledHeader = styled("header")(() => ({
    backgroundColor: "orangered",
    padding: "1.2rem 4.8rem",
    borderBottom: "1px solid var(--color-gray-100)",
}));

function Header() {
    return <StyledHeader>HEADER</StyledHeader>;
}

export default Header;