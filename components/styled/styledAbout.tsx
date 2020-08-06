import styled from 'styled-components';

const SectionHeading = styled.h1`
    font-size: 2.8rem;
    margin: 0 0 16px 0;
    text-align: center;
`;

const ContactHeading = styled.h2`
    margin-top:16px;
    padding: 10px 0;
    margin-bottom: 0;
`;

const ContactIconsContainer = styled.div`
    display: flex;
`;

const ContactLink = styled.a`
    padding: 10px;
`;

export default { SectionHeading, ContactHeading, ContactIconsContainer, ContactLink};