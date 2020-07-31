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
    line-height: 1;
`;

const ProfileImage = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 50%;
    border: 2px solid #acacae;
`;

const ProfileImageContainer = styled.a`
    display: block;
    padding: 8px;
    font-size: 0;
`;

const ProfileName = styled.a`
    color: #1f2933;
    font-weight: 600;
    font-size: 1.3rem;
    padding: 4px 8px;
`;

const ProfileDesignation = styled.div`
    color: #616e7c;
    padding: 0 0 4px 8px;
`;

const ProfileText = styled.div`
    display:flex;
    flex-direction: column;
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
    ProfileImageContainer,
    Profile,
    ProfileName,
    ProfileDesignation,
    ProfileText,
    ContactLinks,
    IconContainer
};