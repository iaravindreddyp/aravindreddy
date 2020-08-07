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
	line-height: 1.2;
	margin: 0 0 16px 0;
	text-align: center;
`;

const RouteTitle =  styled.h1`
	line-height: 1.2;
	margin: 0 0 32px 0;
	text-align: center;
`;

const DateStamp = styled.time`
	color: #05458a;
	justify-content: center;
	display: inline-flex;
`;

const Author = styled.span`
	color: #05458a;;
`;

const BlogPostPreviewCard = styled.div`
	cursor: pointer;
`;

const PreviewTitle = styled.h2`
	color: #1f2933;
	margin:0;
	cursor: pointer;
	:hover{
        color: #419bf9;
    }
`;

const PreviewSummary = styled.p`
	padding-top: 1rem;
	margin:0;
	cursor: pointer;
`;

export default {BlogPostMDXContent, Text, BlogTitle, DateStamp, Author,
    BlogPostPreviewCard, PreviewTitle, PreviewSummary, RouteTitle};