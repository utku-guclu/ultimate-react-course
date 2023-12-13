import styled from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";

const StyledSidebar = styled("aside")(() => ({
    backgroundColor: "var(--color-grey-0)",
    padding: "3.2rem 2.4rem",
    borderRight: "1px solid var(--color-grey-100)",

    gridRow: " 1 / -1",
    flexDirection: "column",
    gap: "3.2rem",
}));

function Sidebar() {
    return (
        <StyledSidebar>
            <Logo />
            <MainNav />
        </StyledSidebar>
    );
}

export default Sidebar;
