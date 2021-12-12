import styled from 'styled-components';

const HomeView = styled.div`
    display: grid;
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

const RecentArticlesHeader = styled.h2`
    font-size: 1.7rem;
    @media (max-width: 768px) {
        font-size: 1.6rem;
    }
    @media (max-width: 499px){
        font-size: 1.45rem;
    }
`;

const ContactHeading = styled.h2`
    margin-top:16px;
    padding: 10px 0;
    margin-bottom: 0;
`;

const ContactIconsContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const ContactLink = styled.a`
    padding: 10px;
`;

export default {
    HomeView,
    Center,
    AboutText,
    RecentArticlesHeader,
    ContactHeading,
    ContactIconsContainer,
    ContactLink
};