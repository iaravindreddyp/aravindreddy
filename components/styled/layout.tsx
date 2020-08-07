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

const AppLayout = styled.main`
    max-width: 700px;
    width: 100%;
`;

const List = styled.ul`
    margin:0;
`;

const ListItem = styled.li<{firstItem?: boolean}>`
    padding-top: ${({firstItem})=> !firstItem ? '15px':'0px'};
    margin: 0px;
`;

const LinkHighlighter = styled.a`
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

const Line = styled.hr`
    border: none;
    border-top: 1px solid #ddd;
    height: 0;
    margin: 32px 0;
`;

const AboutText = styled.div`
    line-height: 1.4;
    padding: 15px 0px;
    margin: 0px;
`;

const TextHighlighter = styled.span`
    color: #ce125a;
`;

const StyledLayouts = { AppView, AppLayout, List, ListItem, LinkHighlighter, StyledBackHome, Line, AboutText, TextHighlighter };

export default StyledLayouts;