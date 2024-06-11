// data/projektit.tsx
import { Projekti } from '@/types/projekti';

const projektit: Projekti[] = [
    {
        id: 1,
        title: "Tasapainon kvantifiointi",
        description: "Laitteiston kokoaminen tasapainon rekisteröintiin ja asennon reaaliaikainen visualisointi",
        detailedDescription: "/projektit/tasapainolauta/tasapainolauta.md",
        imageUrl: [
            "/projektit/tasapainolauta/tasapainolauta.jpg",
        ],
        year: 2022,
        month: 6,
    },
    {
        id: 2,
        title: "Geokätkökartta",
        description: "Digitaalinen apuväline geokätköjen löytämiseen",
        detailedDescription: "/projektit/gc-kartta/gc-kartta.md",
        imageUrl: [
            "/projektit/gc-kartta/gc-kartta.png",
        ],
        year: 2023,
        month: 12,
    },
    {
        id: 3,
        title: "Verkkosivut",
        description: "Henkilökohtaiset verkkosivut: projektien esittely ja CV",
        detailedDescription: "/projektit/verkkosivut/verkkosivut.md",
        imageUrl: [
            "/projektit/verkkosivut/verkkosivut.png",
        ],
        year: 2024,
        month: 6,
    },
];

export default projektit