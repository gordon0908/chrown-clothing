import Styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const optionStyle = css`
    padding: 10px 15px;
    cursor: pointer;
`;

export const HeaderContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70%;
    margin-bottom: 25px;
`;

export const LogoContainer = Styled(Link)`
    height: 100%;
    width:75%;
    padding: 25px;
`;

export const HeaderOptions = Styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const HeaderOptionLink = Styled(Link)`
    ${optionStyle}
`;

export const HeaderOptionDiv = Styled.div`
    ${optionStyle}
`;