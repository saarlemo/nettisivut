// app/projekteja/[id]/page.tsx
import MarkdownRenderer from '@/components/MarkdownRenderer';
import projektit from '@/data/projektit';
import { Projekti } from '@/types/projekti';
import ImageShowcase from '@/components/ImageShowcase';

export const generateStaticParams = () => {
    return projektit.map((p) => ({
        id: p.id.toString(),
    }))
}

const ProjectDetail = ({ params }: { params: { id: number } }) => {
    const { id } = params;
    const projekti: Projekti | undefined = projektit.find((p) => p.id == id);
    if (!projekti) {
        return <div></div>;
    }

    return (
        <div className="container mx-auto lg:pr-[6px] max-h-[100%] lg:overflow-auto">
            <h1 className="text-4xl mb-1">{projekti.title}</h1>
            <p className="mb-1">{projekti.description}</p>
            <ImageShowcase images={projekti.imageUrl} />
            <MarkdownRenderer filePath={projekti.detailedDescription} />
        </div>
    );
}

export default ProjectDetail