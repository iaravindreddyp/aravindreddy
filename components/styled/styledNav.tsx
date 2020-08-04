import styled from 'styled-components';

const NavContainer = styled.div`
    display: flex;
    max-width: 1150px;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Profile = styled.div`
    display: flex;
    line-height: 1;
`;

const ProfileImage = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 50%;
    border: 2px solid #419bf9;
`;

const ProfileImageContainer = styled.a`
    display: block;
    padding: 8px;
    font-size: 0;
    cursor: pointer;
`;

const ProfileName = styled.a`
    color: #1f2933;
    font-weight: 600;
    font-size: 1.3rem;
    padding: 4px 8px;
    :hover{
        color: #419bf9;
        cursor: pointer;
    }
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
    @media (max-width: 768px) {
        padding-top: 16px;
        width:100%;
        justify-content: space-around;
    }
`;

const Nav = styled.nav`
    display: flex;
    @media (max-width: 768px) {
        margin-top: 16px;
        width:100%;
        justify-content: space-around;
    }
`;

const NavItem = styled.li`
    display: inline-block;
    list-style-type: none;
    :hover{
        color: #419bf9;
        cursor: pointer;
        background-color: #d3d3d3;
        border-radius: 4px;
    }
`;

const IconContainer = styled.div`
    padding: 0px 16px;
`;

const NavLink = styled.a<{isActiveRoute:boolean}>`
    padding: 4px 10px;
    color: ${({ isActiveRoute }) => isActiveRoute ? '#5907ea': '#1f2933'};
    :hover{
        cursor: pointer;
        color: #5907ea;
    }
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
    IconContainer,
    Nav,
    NavItem,
    NavLink
};