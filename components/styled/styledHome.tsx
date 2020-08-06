import styled from 'styled-components';

const HomeView = styled.div`
    display: grid;
`;

const Title = styled.h1`
    font-size: 2rem;
`;

const Center = styled.div`
    display: flex;
    justify-content: center;
`;

const AboutText = styled.div`
    line-height: 1.4;
    padding: 15px 0px;
    margin: 0px;
`;


export default {
    HomeView,
    Title,
    Center,
    AboutText
};