// Import all hero images
import adaLovelaceImg from '@/assets/ada-lovelace.jpg';
import marieCurieImg from '@/assets/marie-curie.jpg';
import fridaKahloImg from '@/assets/frida-kahlo.jpg';
import wangariMaathaiImg from '@/assets/wangari-maathai.jpg';
import katherineJohnsonImg from '@/assets/katherine-johnson.jpg';
import malalaYousafzaiImg from '@/assets/malala-yousafzai.jpg';

export interface Hero {
  id: string;
  name: string;
  category: string;
  region: string;
  interest: string;
  lifespan: string;
  shortBio: string;
  detailedBio: string;
  milestones?: string[];
  imageUrl: string;
}

export const REGIONS = [
  'All Regions',
  'Africa',
  'Asia',
  'Europe',
  'North America',
  'South America',
  'Oceania'
];

export const INTERESTS = [
  'All Interests',
  'Science',
  'Politics',
  'Art',
  'Literature',
  'Mathematics',
  'Medicine',
  'Technology',
  'Rights Activism'
];

export const heroes: Hero[] = [
  {
    id: 'ada-lovelace',
    name: 'Ada Lovelace',
    category: 'Mathematics',
    region: 'Europe',
    interest: 'Mathematics',
    lifespan: '1815-1852',
    shortBio: 'The world\'s first computer programmer, she wrote the first algorithm for a machine.',
    detailedBio: 'Augusta Ada King, Countess of Lovelace, was an English mathematician and writer, chiefly known for her work on Charles Babbage\'s proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognize that the machine had applications beyond pure calculation, and to have published the first algorithm intended to be carried out by such a machine.',
    milestones: [
      '1833: Met Charles Babbage and became interested in the Analytical Engine',
      '1843: Published the first computer program in her translation of an Italian article',
      '1845: Developed the concept of looping and subroutines'
    ],
    imageUrl: adaLovelaceImg
  },
  {
    id: 'marie-curie',
    name: 'Marie Curie',
    category: 'Science',
    region: 'Europe',
    interest: 'Science',
    lifespan: '1867-1934',
    shortBio: 'First woman to win a Nobel Prize and the only person to win Nobel Prizes in two different sciences.',
    detailedBio: 'Marie Skłodowska Curie was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first person to win a Nobel Prize twice, and the only person to win a Nobel Prize in two different scientific fields.',
    milestones: [
      '1903: Won Nobel Prize in Physics with Pierre Curie and Henri Becquerel',
      '1911: Won Nobel Prize in Chemistry for discovering radium and polonium',
      '1914: Founded the Radium Institute in Paris'
    ],
    imageUrl: marieCurieImg
  },
  {
    id: 'frida-kahlo',
    name: 'Frida Kahlo',
    category: 'Art',
    region: 'North America',
    interest: 'Art',
    lifespan: '1907-1954',
    shortBio: 'Revolutionary Mexican artist known for her powerful self-portraits and surrealist works.',
    detailedBio: 'Frida Kahlo de Rivera was a Mexican artist who painted many portraits, self-portraits, and works inspired by the nature and artifacts of Mexico. Inspired by the country\'s popular culture, she employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class, and race in Mexican society.',
    milestones: [
      '1925: Began painting while recovering from a bus accident',
      '1929: Married fellow Mexican artist Diego Rivera',
      '1938: Had her first solo exhibition in New York'
    ],
    imageUrl: fridaKahloImg
  },
  {
    id: 'wangari-maathai',
    name: 'Wangari Maathai',
    category: 'Activism',
    region: 'Africa',
    interest: 'Rights Activism',
    lifespan: '1940-2011',
    shortBio: 'Kenyan social, environmental and political activist who founded the Green Belt Movement.',
    detailedBio: 'Wangari Muta Maathai was a Kenyan social, environmental and political activist and the first African woman to win the Nobel Peace Prize. She was educated in the United States at Mount St. Scholastica and the University of Pittsburgh, as well as the University of Nairobi in Kenya.',
    milestones: [
      '1977: Founded the Green Belt Movement',
      '2004: Became the first African woman to receive the Nobel Peace Prize',
      '2006: Launched the Plant for the Planet: Billion Tree Campaign'
    ],
    imageUrl: wangariMaathaiImg
  },
  {
    id: 'katherine-johnson',
    name: 'Katherine Johnson',
    category: 'Mathematics',
    region: 'North America',
    interest: 'Mathematics',
    lifespan: '1918-2020',
    shortBio: 'NASA mathematician whose precise calculations helped launch the first U.S. astronauts into space.',
    detailedBio: 'Katherine Coleman Goble Johnson was an American mathematician whose calculations of orbital mechanics at NASA were critical to the success of the first and subsequent U.S. crewed spaceflights. During her 35-year career at NASA and its predecessor, she earned a reputation for mastering complex manual calculations.',
    milestones: [
      '1953: Joined NACA (later NASA) as a human computer',
      '1961: Calculated trajectory for Alan Shepard\'s first spaceflight',
      '1969: Worked on calculations for the Apollo 11 moon landing'
    ],
    imageUrl: katherineJohnsonImg
  },
  {
    id: 'malala-yousafzai',
    name: 'Malala Yousafzai',
    category: 'Activism',
    region: 'Asia',
    interest: 'Rights Activism',
    lifespan: '1997-Present',
    shortBio: 'Pakistani activist for female education and the youngest Nobel Prize laureate.',
    detailedBio: 'Malala Yousafzai is a Pakistani female education activist and the 2014 Nobel Peace Prize laureate. She is known for human rights advocacy, especially the education of women and children in her native Swat Valley in Khyber Pakhtunkhwa, northwest Pakistan, where the local Taliban had at times banned girls from attending school.',
    milestones: [
      '2009: Started blogging for BBC about life under Taliban rule',
      '2012: Survived assassination attempt by Taliban',
      '2014: Became youngest Nobel Prize laureate at age 17'
    ],
    imageUrl: malalaYousafzaiImg
  }
];