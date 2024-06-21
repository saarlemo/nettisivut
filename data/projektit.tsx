// data/projektit.tsx
import { Projekti } from '@/types/projekti';

const projektit: Projekti[] = [
    {
        id: 1,
        title: "Tasapainon kvantifiointi",
        description: "Laitteiston kokoaminen tasapainon rekisteröintiin ja asennon reaaliaikainen visualisointi",
        detailedDescription: "/projektit/tasapainolauta/tasapainolauta.md",
        images: [
            {
                url: "/projektit/tasapainolauta/tasapainolauta.jpg",
                description: "Selainpohjainen ympäristö tasapainolaudan asennon visualisointiin.",
            },
        ],
        year: 2022,
        month: 6,
    },
    {
        id: 2,
        title: "Geokätkökartta",
        description: "Digitaalinen apuväline geokätköjen löytämiseen",
        detailedDescription: "/projektit/gc-kartta/gc-kartta.md",
        images: [
            {
                url: "/projektit/gc-kartta/gc-kartta.png",
                description: "Geokätkökartta"
            },
        ],
        year: 2023,
        month: 12,
    },
    {
        id: 3,
        title: "Kääntöhaalarit",
        description: "Käännettävät opiskelijahaalarit",
        detailedDescription: "/projektit/haalarit/haalarit.md",
        images: [
            {
                url: "/projektit/haalarit/haalarit3.jpg",
                description: "Haalarien lahje",
            },
            {
                url: "/projektit/haalarit/haalarit4.jpg",
                description: "Haalarien lahje",
            },
        ],
        year: 2024,
        month: 3,
    },
    {
        id: 4,
        title: "Verkkosivut",
        description: "Henkilökohtaiset verkkosivut: projektien esittely ja CV",
        detailedDescription: "/projektit/verkkosivut/verkkosivut.md",
        images: [
            {
                url: "/projektit/verkkosivut/verkkosivut.png",
                description: "Kuvakaappaus verkkosivuilta."
            },
        ],
        year: 2024,
        month: 6,
    },
    {
        id: 5,
        title: "Moottoripyörän etanolikonversio",
        description: "BMW:n muuttaminen toimimaan E85-bioetanolilla",
        detailedDescription: "/projektit/etanolikonversio/etanolikonversio.md",
        images: [
            {
                url: "/projektit/etanolikonversio/etanolikonversio1.jpg",
                description: "Moottoripyörä ilman katteita ja tankkia.",
            },
            {
                url: "/projektit/etanolikonversio/etanolikonversio2.jpg",
                description: "Paketin sisältö: ohjainyksikkö, etanolisensori, johtosarja, polttoaineletku ja liittimet sekä käyttöohje."
            },
            {
                url: "/projektit/etanolikonversio/etanolikonversio3.jpg",
                description: "Tankin pohjassa olevaan pumppuun kannattaa asentaa tämän verran letkua ja pikaliitin.",
            },
            {
                url: "/projektit/etanolikonversio/etanolikonversio4.jpg",
                description: "Ohjainyksikkö mahtuu kätevästi penkin alle.",
            },
            {
                url: "/projektit/etanolikonversio/etanolikonversio5.jpg",
                description: "Vasemmalla ylhäällä (punainen liitin) on etanolisensori, joka mahtuu ainoastaan tähän. Keskellä  on ruisku, josta lähtee punakeltainen johto ohjainyksikölle.",
            },
            {
                url: "/projektit/etanolikonversio/etanolikonversio6.jpg",
                description: "Lämpötila-anturiin kannattaa puristaa kiinni rengasliitin, jonka voi asentaa pyörän oman lämpötila-anturin alle.",
            },
        ],
        year: 2024,
        month: 6,
    },
];

export default projektit