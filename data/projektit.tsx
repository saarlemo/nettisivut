// data/projektit.tsx
import { Projekti } from '@/types/projekti';

const projektit: Projekti[] = [
    {
        id: 1,
        title: "Tasapainon kvantifiointi",
        description: "Laitteiston kokoaminen tasapainon rekisteröintiin ja asennon reaaliaikainen visualisointi",
        detailedDescription: "", // Tähän polku .md-tiedostoon?
        imageUrl: [
            "/public/projektit/tasapainolauta/tasapainolauta.jpg",
        ],
        year: 2022,
        month: 6,
    },
    {
        id: 2,
        title: "Verkkosivut",
        description: "Henkilökohtaiset verkkosivut: projektien esittely ja CV",
        detailedDescription: "", // Tähän polku .md-tiedostoon?
        imageUrl: [
            "/public/projektit/verkkosivut/verkkosivut.png",
        ],
        year: 2024,
        month: 6,
    },
];

export default projektit