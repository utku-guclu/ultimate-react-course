import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

import styled from "styled-components";

const Main = styled("main")(() => ({
    backgroundColor: "green",
    padding: "4rem 4.8rem 6.4rem",
}));

const StyledAppLayout = styled("div")(() => ({
    display: "grid",
    height: "100vh",
    gridTemplateColumns: "26rem 1fr",
    gridTemplateRows: "auto 1fr",
}));

function AppLayout() {
    return (
        <StyledAppLayout>
            <Header />
            <Sidebar />
            <Main>
                <Outlet />
            </Main>
        </StyledAppLayout>
    );
}

export default AppLayout;
