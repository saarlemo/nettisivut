export interface Tutkinto {
    /** Oppilaitoksen nimi */
    school: string,
    /** Tutkintonimike */
    title: string,
    /** Pääaine tai vastaava */
    field: string,
    /** Tutkinnon laajuus */
    credits: string,
    /** Suoritusvuosi */
    year: number,
    /** Suorituskuukausi */
    month: number,
    /** Suorituspäivä */
    day: number,
    /** Keskiarvo */
    grade?: number,
    /** Opinnäytetyön otsikko */
    thesis?: string,
    /** Opinnäytetyön arvosana */
    thesisGrade?: number,
};