## Mitä geokätköily on ja kuinka se toimii?
Geokätköily on maailmanlaajuinen ulkoiluharrastus, jonka ideana on käyttää miljardien eurojen arvoista GPS-teknologiaa pakasterasioiden etsimiseen ympäristöstä. Kätkö koostuu vesitiiviistä rasiasta, joka sisältää lokikirjan, kynän ja mahdollisesti pieniä vaihtotavaroita. Osalle kätköistä koordinaatit ovat näkyvillä avoimesti [geokätkösivustolla](https://geocaching.com), mutta joidenkin kätköjen löytäminen vaatii jonkinlaisen pähkinän ratkaisemisen.

Kuka tahansa geokätköilijä voi luoda oman kätkön. Kätkön sijoittamiselle on kuitenkin omat vakiintuneet sääntönsä: esimerkiksi etäisyyden lähimpään kätköön täytyy olla vähintään kymmenesosa mailista, eli noin 161 metriä.

## Kartan idea
Etäisyysvaatimuksesta seuraa, että piirtämällä kartalle kätköjen sijainnit ja näiden ympärille säteeltään 161 metriä olevat ympyrät, voidaan saada selville mahdollisia sijainteja vielä ratkaisemattomille kätköille. Erityisesti kaupunkien keskustoissa, jossa kaupunkiympäristö on saturoitunut geokätköistä, voidaan määrittää jopa neliömetrien kokoinen etsintäalue.

## Toteutus
- Excel-taulukko, johon jokainen tiimin jäsen voi kirjata ratkaistut koordinaatit
- REST API (ulkoinen backend)
- JavaScript
- Leaflet