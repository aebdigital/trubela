export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  detail: string;
  gallery?: string[];
}

export const services: Service[] = [
  {
    slug: 'zavesy-a-zaclony',
    title: 'Závesy a záclony',
    description: 'Šitie a inštalácia u zákazníka',
    image: '/servicecards/zavesy%20a%20zaclony.jpg',
    detail: 'Ponúkame kompletný servis v oblasti závesov a záclón - od poradenstva pri výbere materiálov, cez návrh a šitie na mieru, až po profesionálnu inštaláciu priamo u Vás doma. Pracujeme s najkvalitnejšími látkami od renomovaných európskych výrobcov. Každý záves je šitý s maximálnou precíznosťou a dôrazom na detail, aby dokonale ladil s Vaším interiérom.',
    gallery: [
      '/zavesy/28890c48-de6d-480a-be53-1df4c5aee952%202.JPG',
      '/zavesy/3e734b39-3013-42a3-8c93-e63c29fd96d8%202.JPG',
      '/zavesy/4c5f8924-df25-462f-8732-e936566b2f37%202.JPG',
      '/zavesy/607a90a6-24ed-4bf5-9c04-8704c4ded30f%202.JPG',
      '/zavesy/6176079a-d8be-4548-9574-f6c285860622%202.JPG',
      '/zavesy/9abd12c0-7d5d-4441-8298-790a6b3b3aa2%202.JPG',
      '/zavesy/afa5e545-fad4-420d-8070-5c1e1b709acc%202.JPG',
    ],
  },
  {
    slug: 'garnize-a-zavesne-systemy',
    title: 'Garníže a závesné systémy',
    description: 'Predaj a montáž u zákazníka',
    image: '/servicecards/garnize.jpg',
    detail: 'Zabezpečujeme predaj a odbornú montáž garníží a závesných systémov všetkých typov. V našej ponuke nájdete kovové, drevené, hliníkové garníže, kolajnicové systémy a moderné závesné riešenia s ručným čí motorickým prevedenim. Poradíme Vám s výberom ideálneho systému pre Vaše okná a zabezpečíme profesionálnu montáž priamo u Vás.',
  },
  {
    slug: 'tieniaca-technika',
    title: 'Tieniaca technika',
    description: 'Rolety, žalúzie a skladané rolety',
    image: '/servicecards/tieniaca-technika.jpg',
    detail: 'Dodávame a inštalujeme kompletnú interiérovú tieniacu techniku - interiérové rolety, žalúzie, plisé, skladané rolety a ďalšie moderné riešenia na tienenie. Pomôžeme Vám vybrať optimálne riešenie podľa typu okna, orientácie miestnosti a Vašich preferencií. Všetky produkty sú vyrábané na mieru presne pre Vaše okno.',
  },
  {
    slug: 'calunenie',
    title: 'Čalúnenie',
    description: 'Čalúnenie nábytku a výroba čalúneného nábytku',
    image: '/servicecards/calunenie.jpg',
    detail: 'Špecializujeme sa na čalúnenie a prečalúnenie nábytku - sedačiek, kresiel, stoličiek, čiel postelí a ďalších kusov. Vyrábame aj čalúnený nábytok na mieru podľa Vašich predstáv. Používame kvalitné čalúnnické materiály a moderné technológie v kombinácii s tradičným remeselným spracovaním.',
    gallery: [
      '/calunenie/0664491b-8de2-4ee2-813d-409257d0fb1c%202.JPG',
      '/calunenie/0abc1475-d3f5-4327-9c07-921fac684654%202.JPG',
      '/calunenie/221b8929-aa63-42b8-8e60-c07370d0ba77%202.JPG',
      '/calunenie/26381794-65ca-4c20-8f7c-bb0b3fb2c90c%202.JPG',
      '/calunenie/3d7fa982-9f3b-41cc-b91c-1f41963d6567%202.JPG',
      '/calunenie/63ba7750-dd3e-4ea7-b928-a6cc981d9add%202.JPG',
      '/calunenie/726b7c62-9430-4a7b-a728-f149aafd768d%202.JPG',
    ],
  },
  {
    slug: 'starozitnosti',
    title: 'Starožitnosti',
    description: 'Čalúnenie klasickou metódou a drobné stolárske opravy',
    image: '/servicecards/starozitnosti.jpg',
    detail: 'Venujeme sa reštaurovaniu a čalúneniu starožitného nábytku klasickými metódami s použitím tradičných materiálov - ručne viazané pružiny, africká tráva, kokos a konský vlas. Vykonávame aj drobné stolárske opravy, aby si Váš starožitný nábytok zachoval autentický vzhľad a zároveň slúžil ďalšie desaťročia.',
    gallery: [
      '/Starozitnosti/00102679-d74e-4608-be1d-5a48266217c4%202.JPG',
      '/Starozitnosti/06b802f8-aece-47e1-8723-3b8953809b9b%202.JPG',
      '/Starozitnosti/0fd5c4db-093f-46aa-9bde-0dd0945d5d85%202.JPG',
      '/Starozitnosti/14579f01-9a7c-4409-b0bc-ee0a8f69d8e9%202.JPG',
      '/Starozitnosti/165465b9-3a2b-4f02-b49c-7b8c3c086dbf%202.JPG',
      '/Starozitnosti/1ac1926d-1e0b-4ce3-b1e0-434bbe34a5dd%202.JPG',
      '/Starozitnosti/1ac46e72-1fc3-4c4a-9ee5-64bfb6c3bf9d%202.JPG',
      '/Starozitnosti/IMG_4213.webp',
    ],
  },
  {
    slug: 'tapety',
    title: 'Tapety',
    description: 'Predaj a lepenie',
    image: '/servicecards/tapety.jpg',
    detail: 'Ponúkame široký výber tapiet od popredných svetových výrobcov - vliesové, vinylové, textilné aj luxusné dizajnové tapety. Zabezpečíme odborné poradenstvo pri výbere, presnú kalkuláciu potrebného množstva a profesionálne nalepenie. Každá stena sa stane výnimočným prvkom Vášho interiéru.',
  },
];
