import styled from 'styled-components';

export const Sanik = styled.img`
    max-height: 100px;
    max-width: 100px;
    position: fixed;
    left: -100px;
    -webkit-animation: gottagofast 0.5s linear infinite;
    animation: gottagofast 0.5s linear infinite;
    bottom: 0px;

    @-webkit-keyframes gottagofast {
        from {
            left: -100px;
        } to {
            left: 100vw;
        }
    }
    
    @keyframes gottagofast {
        from {
            left: -100px;
        } to {
            left: 100vw;
        }
    }
`;
