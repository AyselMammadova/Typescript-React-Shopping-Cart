import styled from "styled-components";
import { IconButton } from "@mui/material";

export const Wrapper = styled.div`
    margin: 40px;
`;

export const StyledButton = styled(IconButton)`
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 100;
`;