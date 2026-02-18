export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  detail: string;
}

export const services: Service[] = [
  {
    slug: 'zavesy-a-zaclony',
    title: 'Závesy a záclony',
    description: 'Šitie a inštalácia u zákazníka',
    image: '/servicecards/zavesy%20a%20zaclony.jpg',
    detail: 'Ponúkame kompletný servis v oblasti závesov a záclôn - od poradenstva pri výbere materiálov, cez návrh a šitie na mieru, až po profesionálnu inštaláciu priamo u Vás doma. Pracujeme s najkvalitnejšími látkami od renomovaných európskych výrobcov. Každý záves je šitý s maximálnou precíznosťou a dôrazom na detail, aby dokonale ladil s Vaším interiérom.',
  },
  {
    slug: 'garnize-a-zavesne-systemy',
    title: 'Garníže a závesné systémy',
    description: 'Predaj a montáž u zákazníka',
    image: '/servicecards/garnize.jpg',
    detail: 'Zabezpečujeme predaj a odbornú montáž garníží a závesných systémov všetkých typov. V našej ponuke nájdete kovové, drevené aj hliníkové garníže, kolejnicové systémy a moderné závesné riešenia. Poradíme Vám s výberom ideálneho systému pre Vaše okná a zabezpečíme profesionálnu montáž priamo u Vás.',
  },
  {
    slug: 'tieniaca-technika',
    title: 'Tieniaca technika',
    description: 'Rolety, žalúzie a skladané rolety',
    image: '/servicecards/tieniaca-technika.jpg',
    detail: 'Dodávame a inštalujeme kompletnú tieniacu techniku - interiérové rolety, žalúzie, plisé, skladané rolety a ďalšie moderné riešenia na tienenie. Pomôžeme Vám vybrať optimálne riešenie podľa typu okna, orientácie miestnosti a Vašich preferencií. Všetky produkty sú vyrábané na mieru pre dokonalé sadnutie.',
  },
  {
    slug: 'calunenie',
    title: 'Čalúnenie',
    description: 'Čalúnenie nábytku a výroba čalúneného nábytku',
    image: '/servicecards/calunenie.jpg',
    detail: 'Špecializujeme sa na čalúnenie a prečalúnenie nábytku - sedačiek, kresiel, stoličiek, čiel postelí a ďalších kusov. Vyrábame aj čalúnený nábytok na mieru podľa Vašich predstáv. Používame kvalitné čalúnnické materiály a moderné technológie v kombinácii s tradičným remeselným spracovaním.',
  },
  {
    slug: 'starozitnosti',
    title: 'Starožitnosti',
    description: 'Čalúnenie klasickou metódou a drobné stolárske opravy',
    image: '/servicecards/starozitnosti.jpg',
    detail: 'Venujeme sa reštaurovaniu a čalúneniu starožitného nábytku klasickými metódami s použitím tradičných materiálov - žinienka, morská tráva, kokos a konský vlas. Vykonávame aj drobné stolárske opravy, aby si Váš starožitný nábytok zachoval autentický vzhľad a zároveň slúžil ďalšie desaťročia.',
  },
  {
    slug: 'tapety',
    title: 'Tapety',
    description: 'Predaj a lepenie',
    image: '/servicecards/tapety.jpg',
    detail: 'Ponúkame široký výber tapiet od popredných svetových výrobcov - vliesové, vinylové, textilné aj luxusné dizajnové tapety. Zabezpečíme odborné poradenstvo pri výbere, presnú kalkuláciu potrebného množstva a profesionálne nalepenie. Každá stena sa stane výnimočným prvkom Vášho interiéru.',
  },
];
