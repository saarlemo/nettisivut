export interface Kurssi {
    /** Oppilaitoksen nimi */
    school: string;
    /** Kurssin nimi */
    name: string;
    /** Kurssin tunnus */
    code?: string;
    /** Opintopisteet */
    credits: number;
    /** Suoritusvuosi */
    year: number;
    /** Suorituskuukausi */
    month: number;
    /** Suorituspäivä */
    day: number;
    /** Oppiaine */
    discipline: string;
}