import styled from "styled-components";

const Heading = styled("h1")(({ bg }) => {
    return {
        backgroundColor: bg,
        fontWeight: 600,
    };
});

export default Heading;
