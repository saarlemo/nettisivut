// types/projekti.tsx
interface ProjektiKuva {
    url: string,
    description?: string,
}

export interface Projekti {
    id: number;
    title: string;
    description: string;
    detailedDescription: string;
    images: ProjektiKuva[];
    year: number;
    month: number;
    day?: number;
}