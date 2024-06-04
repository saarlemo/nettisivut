// data/tutkinnot.tsx
import { Tutkinto } from "@/types/tutkinto";

const tutkinnot: Tutkinto[] = [
    {
        school: "Itä-Suomen yliopisto",
        title: "Filosofian maisteri",
        field: "matematiikka",
        thesis: "Toisen kertaluvun elliptisten osittaisdifferentiaaliyhtälöiden heikkojen ratkaisujen olemassaolo ja yksikäsitteisyys",
        credits: "145 op",
        year: 2024,
        month: 1,
        day: 12,
    },
    {
        school: "Itä-Suomen yliopisto",
        title: "Luonnontieteiden kandidaatti",
        field: "fysiikka",
        thesis: "Robotiikan käyttö neuronavigoidussa transkraniaalisessa magneettistimulaatiossa",
        credits: "180 op",
        year: 2023,
        month: 5,
        day: 22,
    },
    {
        school: "Ylioppilastutkinto-\nlautakunta",
        title: "Ylioppilas",
        field: "",
        credits: "",
        year: 2020,
        month: 5,
        day: 30,
    },
    {
        school: "Ammattiopisto SAMIedu",
        title: "Sähkö- ja automaatioalan perustutkinto",
        field: "sähköasentaja",
        credits: "180 osp",
        year: 2020,
        month: 5,
        day: 20
    },
    {
        school: "Savonlinnan Taidelukio",
        title: "Lukion oppimäärä",
        field: "",
        credits: "121 kurssia",
        year: 2020,
        month: 5,
        day: 30,
    },
    {
        school: "Savonlinnan musiikki- ja tanssiopisto",
        title: "Musiikin laaja oppimäärä",
        field: "musiikkiopistotaso",
        credits: "1025 tuntia",
        year: 2020,
        month: 6,
        day: 10,
    },
    {
        school: "Imatran musiikkiopisto",
        title: "Musiikin laaja oppimäärä",
        field: "perustaso",
        credits: "665 tuntia",
        year: 2017,
        month: 5,
        day: 12,
    }
];

export default tutkinnot;