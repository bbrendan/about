import styled from 'styled-components';

export const WrapperStyles = styled.div`
    position: relative;

    .sidebar {
        height: 100%;
        width: fit-content;

        border-right-width: 0px;

        .menu-title {
            color: #222823;
        }
    }

    .menu-item-toggle > .ps-menu-button:hover {
        background: #E02215;
    }

    .menu-item > .ps-menu-button:hover {
        background: #EDEBE9;
    }
`;