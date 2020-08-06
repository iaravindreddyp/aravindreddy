import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getAllPosts = (): BlogPost[]=>{
    const META = /export\s+const\s+meta\s+=\s+(\{(\n|.)*?\n\})/;
    const DIR = path.join(process.cwd(), 'posts');
    const files = fs.readdirSync(DIR).filter((file) => file.endsWith('.mdx'));

    const postsData: Array<BlogPost> = files
        .map((file) => {
            const name = path.join(DIR, file);
            const contents = fs.readFileSync(name, 'utf8');
            const match = META.exec(contents);

            if (!match || typeof match[1] !== 'string')
                throw new Error(`${name} needs to export const meta = {}`);
            const meta = eval('(' + match[1] + ')');

            return {
                ...meta,
                slug: file.replace(/\.mdx?$/, ''),
            };
        })
        .filter(
            (meta) => process.env.NODE_ENV === 'development' || meta.published
        )
        .sort((a, b) => {
            return (
                new Date(b.publishedAt).getTime() -
                new Date(a.publishedAt).getTime()
            );
        });

    return postsData;
};

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map(fileName => {
        return {
            params: {
                slug: fileName.replace(/\.mdx$/, '')
            }
        };
    });
}

export function getPostData(slug:string) {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the slug
    return {
        slug,
        ...matterResult.data,
        content:matterResult.content
    };
}

export function getSortedPostsData():BlogPost[] {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data as BlogPost
        };
    });
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.publishedDate < b.publishedDate) {
            return 1;
        } else {
            return -1;
        }
    });
}