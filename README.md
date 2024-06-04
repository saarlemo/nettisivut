# nettisivut
Tästä löytyy CV/portfolio-tyyppisten verkkosivujeni lähdekoodi. Sivusto toimii osoitteessa [saarlemo.fi](https://saarlemo.fi).

## Asennus
[Next.js](https://nextjs.org/)-pohjainen projekti tarvitsee [Node.js](https://nodejs.org):n, joka lienee helpointa asentaa [nvm](https://github.com/nvm-sh/nvm):n avulla. Tässä projektissa on käytetty LTS-versiota v20.14.0.

Node.js:n asennuksen jälkeen lataa verkkosivun tiedostot omalle tietokoneellesi kansioon ja avaa kansion juureen komentorivi. Verkkosivut voit asentaa komennolla
```
    npm install
```
Testipalvelimen saat käyntiin komennolla
```
    npm run dev
```
jolloin sivusto pyörii osoitteessa [http://localhost:3000](http://localhost:3000). Tuotantoversion verkkosivuista saat käännettyä komennolla
```
    npm run build
```
joka luo html- ja JavaScript- tiedostot kansioon /out.