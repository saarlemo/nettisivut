## Johdanto
Mekaniikassa tasapaino määritellään siten, että systeemi on tasapainossa, kun siihen ei kohdistu kokonaisvoimaa eikä kokonaisvääntömomenttia. Tällöin Newtonin II lain mukaan systeemi joko pysyy paikallaan, liikkuu tasaisella nopeudella tai pyörii tasaisella kulmanopeudella.

Toisin kuin mekaniikassa, ihmisen tasapainolle ei ole olemassa yleispätevää määritelmää. Luonnollisesti mekaniikan tasapainon käsitteet pätevät myös ihmisiin. Esimerkiksi seisova ihminen on tasapainossa, kun painopisteen kautta kulkeva luotisuora leikkaa jalkojen rajaaman tukipinnan. Ihmisellä on kuitenkin kyky aistia omaa asentoaan ja muuttaa painopisteensä sijaintia kehoa liikuttamalla. Eräs määritelmä ihmisen tasapainolle on synnynnäinen kyky pysyä tasapainossa sekä kyky palauttaa tasapaino ulkoisten häiriötekijöiden, kuten tönäisyn, vaikutuksen jälkeen.

Tämän työn tarkoituksena oli kehittää helposti käytettävä ja siirrettävä koelaitteisto, jolla voidaan mitata tasapainon hallintaa ja tutkia visuaalisen informaation vaikutusta siihen.

## Materiaalit ja menetelmät
Projektissa käytettiin pyöreää tasapainolautaa, jonka halkaisija oli 39 cm ja maksimikallistuskulma noin 19 astetta. Lautaan kiinnitettiin Awinda MTW -anturi, joka mittasi laudan asentoa 100 kertaa sekunnissa. Data siirrettiin laitevalmistajan Python-kirjastolla web-palvelimelle ja visualisoitiin selainpohjaisessa ympäristössä JavaScriptin Babylon.js-kirjastolla.

Mittaustapahtumaan määritettiin tietyt kehykset, jotta kokeen kolmea eri koehenkilöä olisi mahdollista verrata. Yhden mittauksen kestoksi valikoitui 10 sekuntia, sillä sen koettiin olevan riittävän pitkä. Kullekin koehenkilölle suoritettiin kolme mittausta. Ensimmäisessä mittauksessa koehenkilö katsoi kuvan kaltaista visualisoitua tasapainolaudan asentoa näytöltä. Toisen mittauksen asetelma oli muuten sama kuin ensimmäisessä mittauksessa, mutta visualisaatioon syötettiin väärää dataa tasapainolaudan asennosta. Kolmas mittaus oli kontrollimittauksen kaltainen, missä koehenkilö ohjeistettiin valitsemaan noin pään korkeudelta kiintopiste ja lukitsemaan katseensa siihen mittauksen ajaksi. Näin kustakin koehenkilöstä kerättiin tasapainodataa yhteensä 30 sekunnin ajalta.

## Tulokset ja johtopäätökset
Vaikka reaaliaikainen visuaalinen data ei parantanut tasapainon hallintaa, väärän visuaalisen informaation todettiin vaikeuttavan sitä. Mittausmenetelmä ja datan visualisointi osoittautuivat toimiviksi ja soveltuviksi jatkotutkimuksiin.