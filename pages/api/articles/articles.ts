import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { NextApiRequest, NextApiResponse } from 'next';

const articlesDirectory = path.join(process.cwd(), 'md-articles');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      const processedContent = await remark().use(html).process(matterResult.content);
      const contentHtml = processedContent.toString();

      return {
        id,
        contentHtml,
        ...matterResult.data,
      };
    })
  );

  res.status(200).json(allArticlesData);
}
