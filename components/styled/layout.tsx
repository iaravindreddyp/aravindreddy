import styled from 'styled-components';

const AppView = styled.div`
    padding: 24px 24px 32px;
    justify-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #323f4b;
`;

const AboutLayout = styled.main`
    max-width: 650px;
`;

const List = styled.ul`
    margin:0;
`;

const ListItem = styled.li<{firstItem?: boolean}>`
    padding-top: ${({firstItem})=> !firstItem ? '15px':'0px'};
    margin: 0px;
`;

const ExternalLink = styled.a`
    color: #5B34DA;
    text-decoration: none;
    :hover{
        text-decoration: underline;
    }
`;

const StyledBackHome = styled.div`
    padding: 15px 0px; 
    color: #419bf9;
    :hover{
        text-decoration: underline;
    }
`;

const StyledLayouts = { AppView, AboutLayout, List, ListItem, ExternalLink, StyledBackHome };

export default StyledLayouts;