// components/MarkdownRenderer.tsx
import MarkdownIt from 'markdown-it';
import fs from 'fs';
import path from 'path';

interface MarkdownRendererProps {
  filePath: string;
}

const md = new MarkdownIt();

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ filePath }) => {
    const fullPath = path.join(process.cwd(), 'public', filePath)
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const html = md.render(fileContents);

    return (
        <div dangerouslySetInnerHTML={{ __html: html }} />
    );
};

export default MarkdownRenderer;
