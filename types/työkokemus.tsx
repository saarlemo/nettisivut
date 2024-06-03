export interface Tyokokemus {
    /** Työpaikan nimi */
    name: string,
    /** Tehtävänimike */
    title: string,
    /** Työaika (%) */
    worktime: number,
    /** Työsuhteen alku, vuosi */
    startYear: number,
    /** Työsuhteen alku, kuukausi */
    startMonth: number,
    /** Työsuhteen alku, päivä */
    startDay: number,
    /** Työsuhteen loppu, vuosi */
    endYear?: number,
    /** Työsuhteen loppu, kuukausi */
    endMonth?: number,
    /** Työsuhteen loppu, päivä */
    endDay?: number
};