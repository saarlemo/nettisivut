// app/page.tsx
import { NextPage, Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Niilo Saarlemo',
}

const Home: NextPage = () => {
    return (
        <div className="container mx-auto lg:pr-[6px] max-h-[100%] lg:overflow-auto">
            <main className="flex flex-col justify-center w-full h-full">
                <h2 className="text-4xl mb-1">Kuka?</h2>
                <p className="mb-8">
                    Olen Niilo Saarlemo, 23-vuotias teknillisen fysiikan väitöskirjatutkija. Tohtoriopintoihin hakeuduin suoritettuani filosofian maisterin tutkinnon (matematiikka) ennätysajassa, vain 154 päivässä. Nopeasta suoriutumisesta huolimatta yliopistollinen koulutukseni on erittäin poikkitieteellinen, kattaen 14 eri oppiainetta.
                </p>
                <h2 className="text-4xl mb-1">Mitä?</h2>
                <p className="mb-8">
                    Osaamiseni keskittyy ongelmanratkaisuun, mutta ennen ratkaisua täytyy tunnistaa ongelmat. Laaja-alainen koulutukseni on antanut minulle valmiudet lähestyä monimutkaisia ongelmia eri näkökulmista ja yhdistää tietoa eri tieteenaloilta, niin käytännön työntekijän kuin pitkälle erikoistuneen asiantuntijankin näkökulmasta. Tämän lisäksi viestinnän ja johtamisen opinnot ovat valmentaneet minua tiimityöskentelyssä ja oman toimintani tulosten kommunikoinnissa.
                </p>
                <h2 className="text-4xl mb-1">Miksi?</h2>
                <p className="mb-8">
                    Toimintaani ohjaa uteliaisuus ja oppimisen ilo. Olen jo pienestä pitäen ollut kiinnostunut ymmärtämään, kuinka asiat toimivat. Asioiden toiminnan ymmärtäminen avaa mahdollisuuden miettiä, onko olemassa vaihtoehtoista, tehokkaampaa toimintatapaa. 
                </p>
                
                <h2 className="text-4xl mb-1">Miten?</h2>
                <p className="mb-8">
                    Varsinaista ongelmanratkaisua lähestyn matemaattisten menetelmien avulla. Tietoteknisten järjestelmien toiminnan monipuolinen tunteminen auttaa matematiikan tuomisessa käytäntöön. Musiikkiharrastus on muovannut ajattelutapaani luovaksi ja innovatiiviseksi.
                </p>
                <h2 className="text-4xl mb-1">Missä?</h2>
                <p className="mb-8">
                    Syksystä 2020 olen asunut Kuopiossa, jota ennen vietin Savonlinnassa kolme vuotta.
                </p>
                <h2 className="text-4xl mb-1">Milloin?</h2>
                <p className="mb-8">
                    Tällä hetkellä työskentelen väitöskirjatutkijana Itä-Suomen yliopistossa, keskittyen inversio-ongelmiin ja kehittäen tomografiakuvan rekonstruktio-ohjelmistoa yleiselle SPECT-kuvantamislaitteelle. Tutkimustyöni ohella viimeistelen teknillisen fysiikan diplomi-insinöörin tutkintoa. Tulevina vuosina aion erikoistua sairaalafyysikoksi, mutta sen jälkeinen urapolku on vielä avoinna.
                </p>
            </main>
        </div>
    );
}

export default Home;