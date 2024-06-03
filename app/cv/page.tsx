// app/cv/page.tsx
import dynamic from 'next/dynamic';
import { Metadata, NextPage } from 'next';

const CreditsBarChart = dynamic(() => import('@/components/CreditsBarChart'), { ssr: false });
import työkokemus from '@/data/työkokemus';
import kurssit from '@/data/kurssit';
import tutkinnot from '@/data/tutkinnot';
import luottamustehtävät from '@/data/luottamustehtävät';

export const metadata: Metadata = {
    title: 'Niilo Saarlemo | CV',
}

const About: NextPage = () => {
    kurssit.sort((a, b) => {
        // Convert each date to a Date object
        const dateA = new Date(a.year, a.month - 1, a.day); // month is 0-based
        const dateB = new Date(b.year, b.month - 1, b.day); // month is 0-based
        
        // Compare the dates in descending order
        return (dateB.valueOf() - dateA.valueOf());
    });
    tutkinnot.sort((a, b) => {
        // Convert each date to a Date object
        const dateA = new Date(a.year, a.month - 1, a.day); // month is 0-based
        const dateB = new Date(b.year, b.month - 1, b.day); // month is 0-based
        
        // Compare the dates in descending order
        return (dateB.valueOf() - dateA.valueOf());
    });
    työkokemus.sort((a, b) => {
        // Convert each date to a Date object
        const dateA = new Date(a.startYear, a.startMonth - 1, a.startDay); // month is 0-based
        const dateB = new Date(b.startYear, b.startMonth - 1, b.startDay); // month is 0-based
        
        if (a.endYear && b.endYear && a.endMonth && b.endMonth && a.endDay && b.endDay) {
            if (dateB.valueOf() == dateA.valueOf()) {
                const dateA2 = new Date(a.endYear, a.endMonth - 1, a.endDay); // month is 0-based
                const dateB2 = new Date(b.endYear, b.endMonth - 1, b.endDay); // month is 0-based
                return (dateB2.valueOf() - dateA2.valueOf());
            }
        }

        // Compare the dates in descending order
        return (dateB.valueOf() - dateA.valueOf());
    });
    luottamustehtävät.sort((a, b) => {
        // Convert each date to a Date object
        const dateA = new Date(a.startYear, a.startMonth - 1, a.startDay); // month is 0-based
        const dateB = new Date(b.startYear, b.startMonth - 1, b.startDay); // month is 0-based
        
        if (a.endYear && b.endYear && a.endMonth && b.endMonth && a.endDay && b.endDay) {
            if (dateB.valueOf() == dateA.valueOf()) {
                const dateA2 = new Date(a.endYear, a.endMonth - 1, a.endDay); // month is 0-based
                const dateB2 = new Date(b.endYear, b.endMonth - 1, b.endDay); // month is 0-based
                return (dateB2.valueOf() - dateA2.valueOf());
            }
        }

        // Compare the dates in descending order
        return (dateB.valueOf() - dateA.valueOf());
    });

    return (
        <div className="container mx-auto lg:pr-[6px] max-h-[100%] lg:overflow-auto">
            <main className="flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-5xl font-bold text-center mb-4">CV</h1>
                <h2 className="text-4xl mb-1 text-center">Työkokemus</h2>
                <table className="table-fixed w-full border-separate border-spacing-y-4 mb-8">
                    <caption className="hidden text-2xl font-semibold text-center">Työkokemus</caption>
                    <thead>
                        <tr>
                            <th className="w-auto text-xs md:text-base">Tehtävänimike</th>
                            <th className="w-auto text-xs md:text-base">Työpaikka</th>
                            <th className="w-[15%] text-xs md:text-base hidden sm:table-cell">Aloitus</th>
                            <th className="w-[15%] text-xs md:text-base hidden sm:table-cell">Lopetus</th>
                            <th className="w-[15%] text-xs md:text-base hidden sm:table-cell">Työaika</th>
                        </tr>
                    </thead>
                    <tbody>
                        {työkokemus.map(t => 
                            <tr key={`${t.title}-${t.startYear}`}>
                                <td className="w-auto text-xs md:text-base">{t.title}</td>
                                <td className="w-auto text-xs md:text-base">{t.name}</td>
                                <td className="w-auto hidden text-xs sm:table-cell md:text-base text-center">{t.startDay}.{t.startMonth}.{t.startYear}</td>
                                <td className="w-auto hidden text-xs sm:table-cell md:text-base text-center">{(t.endYear != null) ? `${t.endDay}.${t.endMonth}.${t.endYear}` : ""}</td>
                                <td className="w-auto hidden text-xs sm:table-cell md:text-base text-center">{t.worktime} %</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <h2 className="text-2xl lg:text-4xl text-center mb-1">Luottamustehtävät</h2>
                <table className="table-fixed w-full border-separate border-spacing-y-4 mb-8">
                    <caption className="hidden text-2xl font-semibold text-center">Luottamustehtävät</caption>
                    <thead>
                        <tr>
                            <th className="w-auto text-xs md:text-base">Tehtävänimike</th>
                            <th className="w-auto text-xs md:text-base">Työpaikka</th>
                            <th className="w-[15%] hidden text-xs md:text-base sm:table-cell">Aloitus</th>
                            <th className="w-[15%] hidden text-xs md:text-base sm:table-cell">Lopetus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {luottamustehtävät.map(t => 
                            <tr key={`${t.title}-${t.startYear}`}>
                                <td className="w-auto text-xs md:text-base">{t.title}</td>
                                <td className="w-auto text-xs md:text-base">{t.name}</td>
                                <td className="w-auto hidden text-xs sm:table-cell md:text-base text-center">{t.startDay}.{t.startMonth}.{t.startYear}</td>
                                <td className="w-auto hidden text-xs sm:table-cell md:text-base text-center">{(t.endYear != null) ? `${t.endDay}.${t.endMonth}.${t.endYear}` : ""}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <h2 className="text-4xl text-center mb-1">Koulutus</h2>
                <table className="table-fixed w-full border-separate border-spacing-y-4 mb-8">
                    <caption className="text-2xl font-semibold text-center hidden">Tutkinnot</caption>
                    <thead>
                        <tr>
                            <th className="w-[40%] lg:w-auto text-xs md:text-base">Tutkinto</th>
                            <th className="w-auto hidden text-xs sm:table-cell md:text-base">Oppilaitos</th>
                            <th className="w-[15%] text-xs sm:table-cell md:text-base">Päivämäärä</th>
                            <th className="w-[20%] hidden text-xs sm:table-cell md:text-base">Laajuus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tutkinnot.map(t => 
                            <tr key={`${t.title}-${t.year}`}>
                                <td className="w-[40%] lg:w-auto text-xs md:text-base">{t.title}{t.field.length > 0 ? `, ${t.field}` : ""}</td>
                                <td className="w-auto hidden text-xs sm:table-cell md:text-base">{t.school}</td>
                                <td className="w-[15%] lg:w-auto text-xs md:text-base text-center">{t.day}.{t.month}.{t.year}</td>
                                <td className="w-auto text-center hidden text-xs sm:table-cell md:text-base">{t.credits}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <h3 className="text-2xl text-center mb-1">Korkeakoulutasoiset kurssit</h3>
                <p className=" mb-1">Pylväskaaviossa on eritelty opintopisteiden jakautuminen eri vuosille. Punainen katkoviiva kuvaa päätoimisen opiskelijan vuotuista opintopistetavoitetta (60 op).</p>
                <CreditsBarChart kurssit={kurssit} />

                <table className="table-fixed w-full border-separate border-spacing-y-4">
                    <caption className="text-2xl font-semibold text-center">Lista kursseista</caption>
                    <thead>
                        <tr>
                            <th className="w-auto text-xs md:text-base">Kurssi</th>
                            <th className="w-[15%] hidden text-xs sm:table-cell md:text-base">Päivämäärä</th>
                            <th className="w-[20%] hidden text-xs sm:table-cell md:text-base">Opintopisteet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {kurssit.map(k => 
                            <tr key={k.name}>
                                <td className="w-auto text-xs md:text-base">{k.name}</td>
                                <td className="w-auto hidden text-xs sm:table-cell md:text-base text-center">{k.day}.{k.month}.{k.year}</td>
                                <td className="w-auto hidden text-xs sm:table-cell md:text-base text-center">{k.credits}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </main>
        </div>
    );
}

export default About;