import styled from "styled-components";

const StyledSidebar = styled("aside")(() => ({
    backgroundColor: "aliceblue",
    padding: "3.2rem 2.4rem",
    borderRight: "1px solid var(--color-grey-100)",

    gridRow: " 1 / -1",
}));

function Sidebar() {
    return <StyledSidebar>SIDEBAR</StyledSidebar>;
}

export default Sidebar;
