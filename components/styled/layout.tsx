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

const StyledLayouts = { AppView, AboutLayout };

export default StyledLayouts;