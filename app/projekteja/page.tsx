// app/projekteja/page.tsx
import { Metadata, NextPage } from "next";
import Link from 'next/link';
import projektit from '@/data/projektit';
import { Projekti } from "@/types/projekti";

export const metadata: Metadata = {
  title: 'Niilo Saarlemo | Projekteja',
}

const Projects: NextPage = () => {
    projektit.sort((a, b) => {
        // Convert each date to a Date object
        const dateA = new Date(a.year, a.month - 1, 1); // month is 0-based
        const dateB = new Date(b.year, b.month - 1, 1); // month is 0-based
        
        // Compare the dates in descending order
        return (dateB.valueOf() - dateA.valueOf());
    });

    // Assign id to each project: from oldest to newest
    projektit.reverse(); // Reverse in-place
    projektit.forEach((item, i) => {
        item.id = i + 1;
    })
    projektit.reverse(); // Reverse in-place

    return (
        <div className="container mx-auto lg:pr-[6px] max-h-[100%] lg:overflow-auto">
            <main className="flex flex-col items-center justify-center w-full h-full divide-y divide-[#888]">
                <h1 className="text-2xl lg:text-5xl font-bold text-center mb-8">Projekteja</h1>
                {projektit.map((p: Projekti) => (
                    <Link href={`/projekteja/${p.id}`} key={p.id} className="space-x-4 py-8 px-2 lg:px-8 flex w-[100%] transition-all hover:bg-white hover:bg-opacity-20">
                        <img src={p.imageUrl[0]} alt={p.title} className="w-20 lg:w-32 object-cover" />
                        <div className="py-4 w-[100%] flex flex-col justify-between">
                            <div className="w-[100%]">
                                <h2 className="lg:text-xl text-white font-semibold float-left">{p.title}</h2>
                                <p className="lg:text-xl text-white font-semibold float-right">{p.month}/{p.year}</p>
                            </div>
                            
                            <p className="text-white">{p.description}</p>
                        </div>
                    </Link>
                ))}
            </main>
        </div>
    );
}

export default Projects;