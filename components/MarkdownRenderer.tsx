// components/MarkdownRenderer.tsx
import MarkdownIt from 'markdown-it';
import fs from 'fs';
import path from 'path';

interface MarkdownRendererProps {
  filePath: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ filePath }) => {
    const fullPath = path.join(process.cwd(), 'public', filePath)
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const md = new MarkdownIt();

    // Override default markdown-it renderer rules to apply TailwindCSS classes
    md.renderer.rules.paragraph_open = () => '<p class="my-4">';
    md.renderer.rules.heading_open = (tokens, idx) => {
        const level = tokens[idx].tag;
        const classes = {
            h1: 'text-4xl my-6',
            h2: 'text-3xl my-4',
            h3: 'text-2xl my-3',
            h4: 'text-xl my-2',
            h5: 'text-md my-1',
            h6: 'text-sm my-0.5',
        };
        return `<${level} class="${classes[level as keyof typeof classes]}">`;
    };
    md.renderer.rules.list_item_open = () => '<li class="list-disc ml-6">';
    md.renderer.rules.blockquote_open = () => '<blockquote class="border-l-4 border-gray-400 pl-4 italic">';
    md.renderer.rules.code_block = (tokens, idx) => {
        return `<pre class="bg-gray-100 p-4 rounded"><code>${tokens[idx].content}</code></pre>`;
    };
    md.renderer.rules.link_open = (tokens, idx) => {
        const href = tokens[idx].attrGet('href');
        return `<a href="${href}" class="text-blue-600 hover:underline">`;
    };

    const html = md.render(fileContents);

    return (
        <div dangerouslySetInnerHTML={{ __html: html }} />
    );
};

export default MarkdownRenderer;
