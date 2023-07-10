import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import markdownToHtml from './markdownToHtml';

export default async function getPosts() {
  // Get the path of the _posts directory
  const postsDirectory = path.join(process.cwd(), '_posts');

  // Get the names of all Markdown files in the _posts directory
  const fileNames = fs.readdirSync(postsDirectory);

  // Read and process each Markdown file
  const allPostsData = await Promise.all(fileNames.map(async fileName => {
    // Remove ".md" from the file name to get the slug
    const slug = fileName.replace(/\.md$/, '');

    // Get the full path of the Markdown file
    const fullPath = path.join(postsDirectory, fileName);

    // Read the content of the Markdown file
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata and content
    const matterResult = matter(fileContents);

    // Convert the content of the Markdown file to HTML
    const contentHtml = await markdownToHtml(matterResult.content);

    // Combine the data with the slug
    return {
      slug,
      contentHtml,
      ...matterResult.data
    };
  }));

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
