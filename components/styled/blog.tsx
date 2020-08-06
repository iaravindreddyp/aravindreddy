import styled from 'styled-components';

const BlogPostMDXContent = styled.div`
	padding: 30px 0;
	line-height: 1.4;
`;

export const Text = styled.p<{ paddingTop?: boolean | number }>`
	line-height: 1.4;
	margin: 0;
	padding: 15px 0;
	padding-top: ${({ paddingTop }) =>
        paddingTop
            ? typeof paddingTop === 'number'
                ? `${paddingTop}px`
                : '150px'
            : null};
`;

const BlogTitle = styled.h1`
	font-size: 2.8rem;
	line-height: 1.2;
	margin: 0 0 16px 0;
	text-align: center;
`;

const DateStamp = styled.time`
	color: #616e7c;
	justify-content: center;
    display: flex;
`;

export default {BlogPostMDXContent, Text, BlogTitle, DateStamp};