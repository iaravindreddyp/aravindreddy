import styled from 'styled-components';

const NavContainer = styled.div`
    display: flex;
    max-width: 1150px;
    flex-direction: row;
    width: 100%;
    align-items:center;
    justify-content: space-between;
`;

const Profile = styled.div`
    display: flex;
`;

const ProfileImage = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 50%;
    border: 2px solid #acacae;
`;

const ProfileName = styled.text`
    color: #1f2933;
`;

const ProfileDesignation = styled.div`
    color: #616e7c;
`;

const ProfileText = styled.div`
    display:flex;
    flex-direction: column;
    padding: 8px;
    justify-content: center;
`;

const ContactLinks = styled.div`
    display: flex;
`;

const IconContainer = styled.div`
    padding: 0px 16px;
`;

export default {
    NavContainer,
    ProfileImage,
    Profile,
    ProfileName,
    ProfileDesignation,
    ProfileText,
    ContactLinks,
    IconContainer
};