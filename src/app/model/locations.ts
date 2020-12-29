import { Location } from './location.model';

export const Locations: Location[] = [
    {
        id: 'nicota',
        name: 'Nicota',
        nextLocationId: 'zeleny-les'
    },
    {
        id: 'zeleny-les',
        name: 'Zelený les',
        locationPhotoFilename: 'location1.jpg',
        coordinates: '49.2139972N, 16.5186967E',
        showWelcomeMessage: true,
        question: 'Lesu, do kterého právě vstupujete, přezdívá moje kamarádka „zelený les“. V létě je tu totiž opravdu zeleno, a to hlavně zásluhou zelených korun stromů a šťavnatého travního porostu pod nimi. Dominují zde dva druhy stromů a podle nich se tento typ lesa také nazývá. Věděli byste, jak? (Máte to trochu těžší, protože teď v zimě mají stromy shozené listí.) Odpověď napište jako přídavné jméno.',
        hint1: 'Tyto dva druhy stromů se často vyskytují společně. Druhý z nich dobře prospívá v polostínu pod listnatou střechou prvního, který miluje slunce. I jejich kořenové systémy se dokonale doplňují. První z nich je hluboce zakořeněný a využívá živiny hluboko v půdě, zatímco druhý je zakořeněn mělce a využívá živiny uložené výše.',
        hint2: 'Listy prvního ze stromů mají zářezy ve tvaru laloků, listy druhého jsou podlouhle vejčité, na okrajích dvojitě vroubkované.  První ze stromů se zde vyskytuje ve dvou druzích: letní a zimní.',
        answer: 'dubohabrový',
        task: 'Protože les bývá od pozdního jara do začátku podzimu velmi zelený, a vy jste přišli v zimě, zkuste si alespoň navodit zelenou atmosféru. Až do příchodu k dalšímu stanovišti si povídejte, a každé přídavné jméno nahraďte slovem zelený/á/é/í. (Pozor, bude to do kopce, tak jděte pomalu, abyste na to povídání nebyli moc zadýchaní.)',
        taskOutcome: 'Textový záznam nejvtipnějšího slovního spojení',
        nextLocationId: 'vrcholy'
    },
    {
        id: 'vrcholy',
        name: 'Pekárna a její vrcholy',
        locationPhotoFilename: 'location2.jpg',
        coordinates: '49.2127014N, 16.5152594E',
        question: 'Přírodní památka Pekárna, ve které se nacházíte, se nachází na zalesněných svazích nad údolím Potoka Vrbovce. Svahy tvoří kopec se třemi výraznějšími vrchy. Vy se teď nacházíte na prvním z nich, s nadmořskou výškou 306 m n.m. (Pro zajímavost, údolí Vrbovce, ze kterého jste sem vystoupali, je v nadmořské výšce 250 m n.m.) Stejné číslo, jako je nadmořská výška tohoto vrcholu, nese jeden z modelů vozů značky Peugeot. Uhodněte, ve kterém roce se tento model naposledy vyráběl, a odpověď napište číslem (máte toleranci +- 2 roky).',
        hint1: 'Vyrábět se začal v roce 1993.',
        hint2: 'Ve stejném roce, kdy se přestal vyrábět Peugeot 306, se konal první ročník festivalu Colours of Ostrava.',
        answer: 2002,
        answerTolerance: 2,
        task: 'Prozradíme vám, že další dva vrcholy mají nadmořskou výšku každý 325 m n.m. Zkuste teď libovolným způsobem vymodelovat kopec Pekárna s jeho třemi vrcholy ze svých těl. Výsledný tvar vyfoťte.',
        taskOutcome: 'Fotografie',
        nextLocationId: 'ptaci-zpev'
    },
    {
        id: 'ptaci-zpev',
        name: 'Ptačí zpěv',
        locationPhotoFilename: 'location3.jpg',
        coordinates: '49.2118208N, 16.5130600E',
        question: 'Na jaře se tento les rozezní ptačím zpěvem. Jedním z hlasů, které tu můžete zaslechnout, je hlásek elegána v černo-bílém „svatebním“ šatu, o velikosti štíhlejšího vrabce. Sameček tohoto tažného ptáčka je černý svrchu a bílý zespodu, okolo krku má bílý límeček. Hnízdí v dutinách stromů, živí se hmyzem, který chytá za letu. Věděli byste, jak se jmenuje? Napište rodové i druhové jméno.',
        hint1: 'Jeho příbuzným je příslušník stejného rodu, s přízviskem černohlavý. Mezi těmito dvěma ptáčky dochází čas od času k mezidruhovému křížení.',
        hint2: 'Rodové jméno tohoto ptáčka je odvozeno od skutečnosti, že má bílý krk.',
        answer: 'Lejsek bělokrký',
        task: 'Poslechněte si zpěv lejska bělokrkého a můžete i krátké povídání o něm. Potom zkuste zpěv napodobit a pořiďte audionahrávku pokusů každého z vás. Ukázku zpěvu najdete níže.',
        taskLinkTitle: 'Ukázka zpěvu lejska bělokrkého',
        taskLinkUrl: 'https://www.nasiptaci.info/wp-content/uploads/2016/01/15-Lejsek-b%C4%9Blokrk%C3%BD.mp3',
        taskOutcome: 'Audionahrávka každého z vás',
        nextLocationId: 'jarni-sprint'
    },
    {
        id: 'jarni-sprint',
        name: 'Jarní sprint',
        locationPhotoFilename: 'location4.jpg',
        coordinates: '49.2107261N, 16.5120372E',
        question: 'Na jaře, ještě než na stromech vyraší listí, bývá země v tomto lese pokrytá sasankami, jaterníky, plicníky… Spěchají, protože potřebují stihnout rozvinout své listy a květy, vytvořit semínka a načerpat vyrobit si cukr do zásoby dříve, než jim listnaté stromy zastíní zdroj světla. Zkuste odhadnout, kolik procent světla dopadá na ze v listnatém lese v době, kdy už jsou listnaté koruny plně rozvinuté (ve srovnání s místem, kde žádný les neroste). Správnou odpověď napište v rozmezí desítky procent (například 90-100).',
        hint1: 'Pomoci by mohla informace, že v zimě, kdy jsou koruny stromů holé, dopadá na zem 50-70% světla.',
        hint2: 'A že v průběhu růstu listů je to stále ještě 20-40%.',
        answer: '0-10',
        task: 'Ano, méně než 10 procent se zdá být opravdu málo. Jsou však i kvetoucí rostliny, které se malému množství světla dokázaly přizpůsobit, například šťavel zvládá i hodnoty pod 5%, kde už ostatní rostliny žít nemohou. Nás teď ale zajímá Pekárna a její sasanky. Natočte prosím krátké video, ve kterém sehrajete drama sasanky na jaře se rychle deroucí ze země a snažící se splnit všechny své úkoly, ještě než ji zastíní plně rozvinuté listy dubů a habrů.',
        taskOutcome: 'Videonahrávka',
        nextLocationId: 'vzacna-kraska'
    },
    {
        id: 'vzacna-kraska',
        name: 'Vzácná kráska',
        locationPhotoFilename: 'location5.jpg',
        coordinates: '49.2090725N, 16.5163311E',
        question: 'Jedním z vzácných druhů rostlin, které v Pekárně můžeme najít, je prstnatec bezový. Je to světlomilná rostlina, která roste na suchých, kamenitých, na živiny suchých půdách, na loukách, pastvinách a po okrajích světlých lesů. Kvete v dubnu a v květnu. Vyznačuje se výrazným polymorfismem: jeho květy jsou buď tmavě nachové, nebo světle žluté. Kříženci obou barevných forem pak mají barvu oranžovou. Jde o rostlinu v české přírodě velmi vzácnou. Věděli byste, do které čeledi patří?',
        hint1: 'Latinský název této čeledi zní orchidaceae.',
        hint2: 'Jeden z dalších významných rodů v této čeledi se jmenuje latinsky orchis (v překladu to znamená varle, podle tvaru jeho podzemních hlíz). Podle jeho českého názvu má jméno i celá čeleď. Ten český název vám neprozradím, to bych poradila moc, ale jeden z jeho druhů má druhové jméno „mužský“.',
        answer: 'vstavačovité',
        task: 'Vstavačovité neboli orchideje jsou velmi speciální čeledí, oblíbené a ceněné hlavně pro své krásné květy plné barev. Těm orchidejím, které rostou u nás, svědčí pastvinářství nebo kosení luk. A tak jen kvůli nim jezdívají dobrovolníci třeba do Bílých Karpat kosit louky. Vy, prosím, vytvořte teď z dostupných přírodnin umělecké dílo (landart), kterým ztvárníte nádherný palác, zámek či jiné krásné místo, které by bylo důstojné krásné orchideji prstnatci bezovému. Obrázek květu pro představu najdete níže.',
        taskLinkTitle: 'Fotografie květu orchideje',
        taskLinkUrl: 'https://cs.wikipedia.org/wiki/Prstnatec_bezov%C3%BD#/media/Soubor:Dactylorhiza_sambucina_Griechenland_417_2.6.JPG',
        taskOutcome: 'Fotografie',
        nextLocationId: 'zluty-les'
    },
    {
        id: 'zluty-les',
        name: 'Žlutý les',
        locationPhotoFilename: 'location6.jpg',
        coordinates: '49.2127281N, 16.5190917E',
        question: 'Zejména na jižním okraji Pekárny najdeme velké množství malých javůrků, které vynikají hlavně na podzim svojí nádhernou žlutou barvou. Zelený les se na chvíli promění ve žlutý les. Zatímco semena některých stromů (dubů nebo buků například) padají přímo pod mateřský strom, a v jeho stínu a za jeho asistence prožívají první roky (no, vlastně spousty let) svého života, semínka jiných stromů (třeba javorů) jsou lehká a snadno cestují – mají třeba „vrtulku“ nebo chmýří. Dětem těchto stromů žít daleko od rodiny nevadí. Věděli byste, jak se správně jmenuje plod javoru?',
        hint1: 'Prozradím, že nese přízvisko křídlatá (podle křidélek či vrtulek, která pak plod odnesou za pomoci větru dál od mateřské rostliny). Tím také napovídám, že název plodu je ženského rodu.',
        hint2: 'Název plodu odkazuje na fakt, že jsou vždy spojena 2 semínka, a taky, že ta semínka nejsou oblečená.',
        answer: 'dvounažka',
        task: 'Společný zpěv rodinných příslušníků je povolen, a tak prosím společně složte a zazpívejte krátkou píseň o mladých javůrcích, které v podobě dvounažek odletí od mateřské rostliny, najdou si vhodné místo k vyklíčení, rostou si tu tak samy – bez maminky – a přece spolu, s brášky a sestřičkami – a společně každý podzim prozáří celou Pekárnu. Výslednou písničku nahrajte (audio nebo video, jak je libo), můžete se přitom doprovázet na nástroje „co příroda dá“.',
        taskOutcome: 'Audio nebo videonahrávka'
    }
];
