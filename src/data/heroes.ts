// Import all hero images
import adaLovelaceImg from '@/assets/ada-lovelace.jpg';
import marieCurieImg from '@/assets/marie-curie.jpg';
import fridaKahloImg from '@/assets/frida-kahlo.jpg';
import wangariMaathaiImg from '@/assets/wangari-maathai.jpg';
import katherineJohnsonImg from '@/assets/katherine-johnson.jpg';
import emmelinePankhurstImg from '@/assets/emmeline-pankhurst.jpg';
import hypatiaImg from '@/assets/hypatia.jpg';
import ameliaEarhartImg from '@/assets/amelia-earhart.jpg';
import audreLordImg from '@/assets/audre-lorde.jpg';
import ameliaBloomerImg from '@/assets/amelia-bloomer.jpg';
import mayaAngelouImg from '@/assets/maya-angelou.jpg';
import valentinaKhetagurovaImg from '@/assets/valentina-khetagurova.jpg';
import bettyFriedanImg from '@/assets/betty-friedan.jpg';
import sarahWinnemuccaImg from '@/assets/sarah-winnemucca.jpg';
import bellHooksImg from '@/assets/bell-hooks.jpg';
import audreyHepburnImg from '@/assets/audrey-hepburn.jpg';
import isadoraDuncanImg from '@/assets/isadora-duncan.jpg';
import marianAndersonImg from '@/assets/marian-anderson.jpg';
import ellaBakerImg from '@/assets/ella-baker.jpg';
import rosaLuxemburgImg from '@/assets/rosa-luxemburg.jpg';
import idaBWellImg from '@/assets/ida-b-well.jpg';
import janeAddamsImg from '@/assets/jane-addams.jpg';
import rosaParksImg from '@/assets/rosa-parks.jpg';
import simoneDeBeauvoirImg from '@/assets/simone-de-beauvoir.jpg';
import emilyDavisonImg from '@/assets/emily-davison.jpg';
import rachelCarsonImg from '@/assets/rachel-carson.jpg';
import anneFrankImg from '@/assets/anne-frank.jpg';
import valentinaTereshkovaImg from '@/assets/valentina-tereshkova.jpg';
import malintzinImg from '@/assets/malintzin.jpg';
import harrietTubmanImg from '@/assets/harriet-tubman.jpg';
import janeGoodallImg from '@/assets/jane-goodall.jpg';
import eleanorRooseveltImg from '@/assets/eleanor-roosevelt.jpg';
import goldaMeirImg from '@/assets/golda-meir.jpg';
import simoneBilesImg from '@/assets/simone-biles.jpg';
import audreLordeImg from '@/assets/audre-lorde.jpg';
import rigobertaMenchuImg from '@/assets/rigoberta-menchu.jpg';
import valerieJarrettImg from '@/assets/valerie-jarrett.jpg';
import jessicaMeirImg from '@/assets/jessica-meir.jpg';
import sallyRideImg from '@/assets/sally-ride.jpg';
import angelouMayaImg from '@/assets/maya-angelou.jpg';
import gertrudeBellImg from '@/assets/gertrude-bell.jpg';
import idaBWellsImg from '@/assets/ida-b-wells.jpg';
import motherTeresaImg from '@/assets/mother-teresa.jpg';
import malalaYousafzaiImg from '@/assets/malala-yousafzai.jpg';
import sojournerTruthImg from '@/assets/sojourner-truth.jpg';
import billieHolidayImg from '@/assets/billie-holiday.jpg';
import claraBartonImg from '@/assets/clara-barton.jpg';
import emmaGoldmanImg from '@/assets/emma-goldman.jpg';
import hannahArendtImg from '@/assets/hannah-arendt.jpg';
import ruthBaderGinsburgImg from '@/assets/ruth-bader-ginsburg.jpg';
import sophieSchollImg from '@/assets/sophie-scholl.jpg';
import rosalindFranklinImg from '@/assets/rosalind-franklin.jpg';
import harrietBeecherStoweImg from '@/assets/harriet-beecher-stowe.jpg';
import empressCixiImg from '@/assets/empress-cixi.jpg';
import jocelynBellBurnellImg from '@/assets/jocelyn-bell-burnell.jpg';
import emilyDickinsonImg from '@/assets/emily-dickinson.jpg';
import mayaYoshidaImg from '@/assets/maya-yoshida.jpg';
import nellieBlyImg from '@/assets/nellie-bly.jpg';
import agnesMacphailImg from '@/assets/agnes-macphail.jpg';
import valentinaKulaginaImg from '@/assets/valentina-kulagina.jpg';
import amalClooneyImg from '@/assets/amal-clooney.jpg';
import dorothyHodgkinImg from '@/assets/dorothy-hodgkin.jpg';
import adaDeranaImg from '@/assets/ada-derana.jpg';
import janeAustenImg from '@/assets/jane-austen.jpg';
import oprahWinfreyImg from '@/assets/oprah-winfrey.jpg';
import pocahontasImg from '@/assets/pocahontas.jpg';
import corazonAquinoImg from '@/assets/corazon-aquino.jpg';
import sarojiniNaiduImg from '@/assets/sarojini-naidu.jpg';
import miriamMakebaImg from '@/assets/miriam-makeba.jpg';
import margaretEkpoImg from '@/assets/margaret-ekpo.jpg';
import queenNzingaImg from '@/assets/queen-nzinga.jpg';
import whinaCooperImg from '@/assets/whina-cooper.jpg';
import katherineMansfieldImg from '@/assets/katherine-mansfield.jpg';
import benazirBhuttoImg from '@/assets/benazir-bhutto.jpg';
import chienShiungWuImg from '@/assets/chien-shiung-wu.jpg';
import evaPeronImg from '@/assets/eva-peron.jpg';
import doloresHuertaImg from '@/assets/dolores-huerta.jpg';
import gabrielaMistralImg from '@/assets/gabriela-mistral.jpg';
import ellenOchoaImg from '@/assets/ellen-ochoa.jpg';
import manuelaSaenzImg from '@/assets/manuela-saenz.jpg';
import soniaSotomayorImg from '@/assets/sonia-sotomayor.jpg';
import sorJuanaInesImg from '@/assets/sor-juana-ines.jpg';

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
  'Oceania',
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
  'Rights Activism',
  'Music',
  'Law',
  'Social Work',
  'Space Exploration',
  'Anarchism and Feminism',
  'Legal Rights and Gender Equality',
  'Law and Justice',
];

// Create unique heroes array by filtering out duplicates based on ID
const allHeroes: Hero[] = [
  {
    id: 'ada-lovelace',
    name: 'Ada Lovelace',
    category: 'Mathematics',
    region: 'Europe',
    interest: 'Mathematics',
    lifespan: '1815-1852',
    shortBio:
      "The world's first computer programmer, she wrote the first algorithm for a machine.",
    detailedBio:
      "Augusta Ada King, Countess of Lovelace, was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognize that the machine had applications beyond pure calculation, and to have published the first algorithm intended to be carried out by such a machine.",
    milestones: [
      '1833: Met Charles Babbage and became interested in the Analytical Engine',
      '1843: Published the first computer program in her translation of an Italian article',
      '1845: Developed the concept of looping and subroutines',
    ],
    imageUrl: adaLovelaceImg,
  },
  {
    id: 'marie-curie',
    name: 'Marie Curie',
    category: 'Science',
    region: 'Europe',
    interest: 'Science',
    lifespan: '1867-1934',
    shortBio:
      'First woman to win a Nobel Prize and the only person to win Nobel Prizes in two different sciences.',
    detailedBio:
      'Marie Skłodowska Curie was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first person to win a Nobel Prize twice, and the only person to win a Nobel Prize in two different scientific fields.',
    milestones: [
      '1903: Won Nobel Prize in Physics with Pierre Curie and Henri Becquerel',
      '1911: Won Nobel Prize in Chemistry for discovering radium and polonium',
      '1914: Founded the Radium Institute in Paris',
    ],
    imageUrl: marieCurieImg,
  },
  {
    id: 'frida-kahlo',
    name: 'Frida Kahlo',
    category: 'Art',
    region: 'North America',
    interest: 'Art',
    lifespan: '1907-1954',
    shortBio:
      'Revolutionary Mexican artist known for her powerful self-portraits and surrealist works.',
    detailedBio:
      "Frida Kahlo de Rivera was a Mexican artist who painted many portraits, self-portraits, and works inspired by the nature and artifacts of Mexico. Inspired by the country's popular culture, she employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class, and race in Mexican society.",
    milestones: [
      '1925: Began painting while recovering from a bus accident',
      '1929: Married fellow Mexican artist Diego Rivera',
      '1938: Had her first solo exhibition in New York',
    ],
    imageUrl: fridaKahloImg,
  },
  {
    id: 'wangari-maathai',
    name: 'Wangari Maathai',
    category: 'Activism',
    region: 'Africa',
    interest: 'Rights Activism',
    lifespan: '1940-2011',
    shortBio:
      'Kenyan social, environmental and political activist who founded the Green Belt Movement.',
    detailedBio:
      'Wangari Muta Maathai was a Kenyan social, environmental and political activist and the first African woman to win the Nobel Peace Prize. She was educated in the United States at Mount St. Scholastica and the University of Pittsburgh, as well as the University of Nairobi in Kenya.',
    milestones: [
      '1977: Founded the Green Belt Movement',
      '2004: Became the first African woman to receive the Nobel Peace Prize',
      '2006: Launched the Plant for the Planet: Billion Tree Campaign',
    ],
    imageUrl: wangariMaathaiImg,
  },
  {
    id: 'katherine-johnson',
    name: 'Katherine Johnson',
    category: 'Mathematics',
    region: 'North America',
    interest: 'Mathematics',
    lifespan: '1918-2020',
    shortBio:
      'NASA mathematician whose precise calculations helped launch the first U.S. astronauts into space.',
    detailedBio:
      'Katherine Coleman Goble Johnson was an American mathematician whose calculations of orbital mechanics at NASA were critical to the success of the first and subsequent U.S. crewed spaceflights. During her 35-year career at NASA and its predecessor, she earned a reputation for mastering complex manual calculations.',
    milestones: [
      '1953: Joined NACA (later NASA) as a human computer',
      "1961: Calculated trajectory for Alan Shepard's first spaceflight",
      '1969: Worked on calculations for the Apollo 11 moon landing',
    ],
    imageUrl: katherineJohnsonImg,
  },
  {
    id: 'malala-yousafzai',
    name: 'Malala Yousafzai',
    category: 'Activism',
    region: 'Asia',
    interest: 'Rights Activism',
    lifespan: '1997-Present',
    shortBio:
      'Pakistani activist for female education and the youngest Nobel Prize laureate.',
    detailedBio:
      'Malala Yousafzai is a Pakistani female education activist and the 2014 Nobel Peace Prize laureate. She is known for human rights advocacy, especially the education of women and children in her native Swat Valley in Khyber Pakhtunkhwa, northwest Pakistan, where the local Taliban had at times banned girls from attending school.',
    milestones: [
      '2009: Started blogging for BBC about life under Taliban rule',
      '2012: Survived assassination attempt by Taliban',
      '2014: Became youngest Nobel Prize laureate at age 17',
    ],
    imageUrl: malalaYousafzaiImg,
  },
  {
    id: 'rosa-parks',
    name: 'Rosa Parks',
    category: 'Activism',
    region: 'North America',
    interest: 'Rights Activism',
    lifespan: '1913-2005',
    shortBio:
      'Civil rights activist known as "the mother of the freedom movement" for refusing to give up her bus seat.',
    detailedBio:
      'Rosa Louise McCauley Parks was an American activist in the civil rights movement best known for her pivotal role in the Montgomery Bus Boycott. Her act of defiance and the subsequent boycott became important symbols of the fight against racial segregation.',
    milestones: [
      '1955: Refused to give up her bus seat in Montgomery, Alabama',
      '1956: Montgomery Bus Boycott led to Supreme Court ruling segregation unconstitutional',
      '1996: Awarded the Congressional Gold Medal',
    ],
    imageUrl: rosaParksImg,
  },
  {
    id: 'simone-de-beauvoir',
    name: 'Simone de Beauvoir',
    category: 'Literature',
    region: 'Europe',
    interest: 'Literature',
    lifespan: '1908-1986',
    shortBio:
      'French existentialist philosopher, feminist and writer known for "The Second Sex".',
    detailedBio:
      'Simone de Beauvoir was a French writer, intellectual, existentialist philosopher, political activist, feminist, and social theorist. Her book "The Second Sex" is a foundational tract of contemporary feminism.',
    milestones: [
      '1949: Published "The Second Sex", sparking feminist movement',
      '1960s: Advocated for women’s liberation and gender equality',
      '1970s: Involved in various political activism campaigns',
    ],
    imageUrl: simoneDeBeauvoirImg,
  },
  {
    id: 'emily-davison',
    name: 'Emily Davison',
    category: 'Activism',
    region: 'Europe',
    interest: 'Rights Activism',
    lifespan: '1872-1913',
    shortBio:
      "British suffragette who died after stepping in front of the king's horse at the Epsom Derby.",
    detailedBio:
      "Emily Wilding Davison was a militant English suffragette who fought for women's right to vote. She is remembered for her dramatic protest at the 1913 Epsom Derby where she sustained fatal injuries.",
    milestones: [
      "1909: Joined the Women's Social and Political Union",
      '1913: Fatally injured in protest at Epsom Derby',
      'Posthumously inspired suffrage movement and women’s voting rights',
    ],
    imageUrl: emilyDavisonImg,
  },
  {
    id: 'sojourner-truth',
    name: 'Sojourner Truth',
    category: 'Activism',
    region: 'North America',
    interest: 'Rights Activism',
    lifespan: '1797-1883',
    shortBio:
      'African-American abolitionist and women’s rights activist known for her “Ain’t I a Woman?” speech.',
    detailedBio:
      "Sojourner Truth was an African-American abolitionist and women's rights activist who escaped slavery and became a powerful speaker advocating for abolition, temperance, and civil and women’s rights.",
    milestones: [
      '1843: Began traveling and speaking on abolition and women’s rights',
      '1851: Delivered famous “Ain’t I a Woman?” speech',
      '1864: Worked for recruitment of black troops in Union Army',
    ],
    imageUrl: sojournerTruthImg,
  },
  {
    id: 'emilia-pankhurst',
    name: 'Emmeline Pankhurst',
    category: 'Activism',
    region: 'Europe',
    interest: 'Rights Activism',
    lifespan: '1858-1928',
    shortBio:
      'Leader of the British suffragette movement that helped women win the right to vote.',
    detailedBio:
      'Emmeline Pankhurst was a British political activist and leader of the British suffragette movement who helped women win the right to vote through militant tactics and powerful organizing.',
    milestones: [
      "1903: Founded Women's Social and Political Union",
      '1918: Representation of the People Act granted voting rights to women over 30',
      '1928: Equal voting rights with men achieved',
    ],
    imageUrl: emmelinePankhurstImg,
  },
  {
    id: 'rachel-carson',
    name: 'Rachel Carson',
    category: 'Science',
    region: 'North America',
    interest: 'Science',
    lifespan: '1907-1964',
    shortBio:
      'Marine biologist and conservationist whose book sparked the modern environmental movement.',
    detailedBio:
      'Rachel Louise Carson was an American marine biologist, author, and conservationist whose book "Silent Spring" brought attention to the dangers of pesticides and sparked the environmental movement.',
    milestones: [
      '1962: Published "Silent Spring", raising awareness about pesticides',
      '1963: Testified before Congress on environmental issues',
      'Considered the mother of the modern environmental movement',
    ],
    imageUrl: rachelCarsonImg,
  },
  {
    id: 'anne-frank',
    name: 'Anne Frank',
    category: 'Literature',
    region: 'Europe',
    interest: 'Literature',
    lifespan: '1929-1945',
    shortBio:
      'Jewish diarist whose writings provide a poignant view of life during the Holocaust.',
    detailedBio:
      'Anne Frank was a Jewish girl who gained fame posthumously with the publication of "The Diary of a Young Girl", chronicling her life in hiding during the Nazi occupation of the Netherlands.',
    milestones: [
      '1942-1944: Hid from Nazis in Amsterdam',
      '1947: Diary published and translated worldwide',
      'Symbol of resilience and human rights',
    ],
    imageUrl: anneFrankImg,
  },
  {
    id: 'valentina-tereshkova',
    name: 'Valentina Tereshkova',
    category: 'Science',
    region: 'Europe',
    interest: 'Science',
    lifespan: '1937-Present',
    shortBio: 'First woman to fly in space, orbiting Earth 48 times in 1963.',
    detailedBio:
      'Valentina Vladimirovna Tereshkova is a retired Soviet cosmonaut and the first woman to have flown in space. She orbited the Earth 48 times aboard Vostok 6 in 1963, becoming a symbol of Soviet space achievements.',
    milestones: [
      '1963: First woman in space on Vostok 6',
      'Later became a prominent politician and advocate for space programs',
      'Honored with many awards for her pioneering role',
    ],
    imageUrl: valentinaTereshkovaImg,
  },
  {
    id: 'malintzin',
    name: 'Malintzin',
    category: 'Politics',
    region: 'North America',
    interest: 'Politics',
    lifespan: '1496-1529',
    shortBio:
      'Indigenous Nahua woman known as interpreter and advisor during the Spanish conquest of Mexico.',
    detailedBio:
      'Malintzin, also known as Malinche or Doña Marina, was a Nahua woman who played a crucial role as interpreter, advisor, and intermediary for Hernán Cortés during the Spanish conquest of the Aztec Empire.',
    milestones: [
      '1519: Served as interpreter and intermediary for Hernán Cortés',
      'Key figure in the cultural and political negotiations of the conquest',
      'Complex legacy as both a traitor and a survivor',
    ],
    imageUrl: malintzinImg,
  },
  // Removed duplicate rosa-parks entry
  {
    id: 'simone-de-beauvoir',
    name: 'Simone de Beauvoir',
    category: 'Literature',
    region: 'Europe',
    interest: 'Literature',
    lifespan: '1908-1986',
    shortBio:
      'French existentialist philosopher and feminist author of "The Second Sex".',
    detailedBio:
      'Simone de Beauvoir was a groundbreaking feminist thinker whose works laid the foundation for modern gender theory and feminism worldwide.',
    milestones: [
      '1949: Published "The Second Sex"',
      '1960s: Championed women’s liberation',
      '1970s: Active feminist political campaigner',
    ],
    imageUrl: simoneDeBeauvoirImg,
  },
  {
    id: 'emily-davison',
    name: 'Emily Davison',
    category: 'Activism',
    region: 'Europe',
    interest: 'Rights Activism',
    lifespan: '1872-1913',
    shortBio:
      "Militant suffragette who sacrificed her life for women's right to vote.",
    detailedBio:
      'Emily Davison was a brave suffragette whose protest at the 1913 Epsom Derby brought worldwide attention to the suffrage cause.',
    milestones: [
      '1909: Joined Women’s Social and Political Union',
      '1913: Fatally injured at Epsom Derby',
      'Inspired suffrage movement',
    ],
    imageUrl: emilyDavisonImg,
  },
  {
    id: 'sojourner-truth',
    name: 'Sojourner Truth',
    category: 'Activism',
    region: 'North America',
    interest: 'Rights Activism',
    lifespan: '1797-1883',
    shortBio:
      'Abolitionist and women’s rights activist famous for “Ain’t I a Woman?” speech.',
    detailedBio:
      'Escaped from slavery, Sojourner Truth became a powerful advocate for abolition and women’s rights in 19th-century America.',
    milestones: [
      '1843: Became public speaker',
      '1851: Delivered “Ain’t I a Woman?” speech',
      'Supported recruitment for Union Army',
    ],
    imageUrl: sojournerTruthImg,
  },
  {
    id: 'emmeline-pankhurst',
    name: 'Emmeline Pankhurst',
    category: 'Activism',
    region: 'Europe',
    interest: 'Rights Activism',
    lifespan: '1858-1928',
    shortBio: 'Leader of the British suffragette movement.',
    detailedBio:
      'Emmeline Pankhurst founded the Women’s Social and Political Union and led militant campaigns for women’s suffrage in the UK.',
    milestones: [
      '1903: Founded WSPU',
      '1918: Partial women’s suffrage granted',
      '1928: Equal voting rights achieved',
    ],
    imageUrl: emmelinePankhurstImg,
  },
  {
    id: 'rachel-carson',
    name: 'Rachel Carson',
    category: 'Science',
    region: 'North America',
    interest: 'Science',
    lifespan: '1907-1964',
    shortBio:
      'Marine biologist and author who ignited the modern environmental movement.',
    detailedBio:
      'Rachel Carson’s 1962 book "Silent Spring" raised awareness about environmental toxins and changed policies worldwide.',
    milestones: [
      '1962: Published "Silent Spring"',
      '1963: Congressional testimony on pesticides',
      'Legacy: Mother of modern environmentalism',
    ],
    imageUrl: rachelCarsonImg,
  },
  {
    id: 'anne-frank',
    name: 'Anne Frank',
    category: 'Literature',
    region: 'Europe',
    interest: 'Literature',
    lifespan: '1929-1945',
    shortBio:
      'Jewish diarist whose diary chronicles life in hiding during the Holocaust.',
    detailedBio:
      'Anne Frank’s diary has become a symbol of resilience and the horrors of the Holocaust.',
    milestones: [
      '1942-1944: Hid in Amsterdam',
      '1947: Diary published worldwide',
      'Enduring symbol of human rights',
    ],
    imageUrl: anneFrankImg,
  },
  {
    id: 'valentina-tereshkova',
    name: 'Valentina Tereshkova',
    category: 'Science',
    region: 'Europe',
    interest: 'Science',
    lifespan: '1937-Present',
    shortBio: 'First woman to fly in space, orbiting Earth in 1963.',
    detailedBio:
      'Valentina Tereshkova was a pioneering Soviet cosmonaut who broke gender barriers in space exploration.',
    milestones: [
      '1963: First woman in space',
      'Later political career',
      'Space exploration advocate',
    ],
    imageUrl: valentinaTereshkovaImg,
  },
  {
    id: 'malintzin',
    name: 'Malintzin',
    category: 'Politics',
    region: 'North America',
    interest: 'Politics',
    lifespan: '1496-1529',
    shortBio:
      'Indigenous interpreter and advisor during Spanish conquest of Mexico.',
    detailedBio:
      'Malintzin, also known as La Malinche, was pivotal as a translator and mediator during the conquest of the Aztec empire.',
    milestones: [
      '1519: Key interpreter for Hernán Cortés',
      'Instrumental in cultural negotiations',
      'Complex legacy',
    ],
    imageUrl: malintzinImg,
  },
  {
    id: 'harriet-tubman',
    name: 'Harriet Tubman',
    category: 'Activism',
    region: 'North America',
    interest: 'Rights Activism',
    lifespan: 'c.1822-1913',
    shortBio:
      'Underground Railroad conductor who helped enslaved people escape to freedom.',
    detailedBio:
      'Harriet Tubman was a courageous abolitionist and spy for the Union during the American Civil War.',
    milestones: [
      'Escaped slavery circa 1849',
      'Led over 300 slaves to freedom',
      'Union spy and nurse',
    ],
    imageUrl: harrietTubmanImg,
  },
  {
    id: 'jane-goodall',
    name: 'Jane Goodall',
    category: 'Science',
    region: 'Africa',
    interest: 'Science',
    lifespan: '1934-Present',
    shortBio: 'Primatologist who revolutionized understanding of chimpanzees.',
    detailedBio:
      'Jane Goodall’s research on primates has fundamentally changed the study of animal behavior and conservation.',
    milestones: [
      '1960: Began Gombe chimpanzee study',
      'Founded Jane Goodall Institute',
      'Global conservation advocate',
    ],
    imageUrl: janeGoodallImg,
  },
  {
    id: 'eleanor-roosevelt',
    name: 'Eleanor Roosevelt',
    category: 'Politics',
    region: 'North America',
    interest: 'Politics',
    lifespan: '1884-1962',
    shortBio:
      'First Lady and human rights champion who helped draft the Universal Declaration of Human Rights.',
    detailedBio:
      'Eleanor Roosevelt transformed the role of First Lady and became a leading advocate for social justice worldwide.',
    milestones: [
      '1933-1945: First Lady of USA',
      'Chairperson of UN Human Rights Commission',
      'Helped draft Universal Declaration',
    ],
    imageUrl: eleanorRooseveltImg,
  },
  {
    id: 'golda-meir',
    name: 'Golda Meir',
    category: 'Politics',
    region: 'Middle East',
    interest: 'Politics',
    lifespan: '1898-1978',
    shortBio:
      'Prime Minister of Israel and one of the first female heads of government.',
    detailedBio:
      'Golda Meir was a founding figure in Israeli politics and known as the “Iron Lady” of the Middle East.',
    milestones: [
      '1948: Signed Israeli Declaration of Independence',
      '1969-1974: Israeli Prime Minister',
      'Known for tough leadership during conflict',
    ],
    imageUrl: goldaMeirImg,
  },
  {
    id: 'simone-biles',
    name: 'Simone Biles',
    category: 'Sports',
    region: 'North America',
    interest: 'Sports',
    lifespan: '1997-Present',
    shortBio: 'Record-breaking American gymnast and Olympic champion.',
    detailedBio:
      'Simone Biles has redefined gymnastics with her power, grace, and trailblazing skills.',
    milestones: [
      '2016: Won 4 Olympic gold medals',
      'Multiple World Championship titles',
      'Advocate for mental health awareness',
    ],
    imageUrl: simoneBilesImg,
  },
  {
    id: 'audre-lorde',
    name: 'Audre Lorde',
    category: 'Literature',
    region: 'North America',
    interest: 'Literature',
    lifespan: '1934-1992',
    shortBio: 'Poet and activist who wrote about race, gender, and sexuality.',
    detailedBio:
      'Audre Lorde’s powerful poetry and essays shaped feminist and civil rights discourse.',
    milestones: [
      'Published multiple poetry collections',
      'Advocated for intersectionality',
      'Influenced feminist thought',
    ],
    imageUrl: audreLordeImg,
  },
  {
    id: 'rigoberta-menchu',
    name: 'Rigoberta Menchú',
    category: 'Activism',
    region: 'Central America',
    interest: 'Rights Activism',
    lifespan: '1959-Present',
    shortBio: 'Indigenous Guatemalan activist and Nobel Peace Prize laureate.',
    detailedBio:
      'Rigoberta Menchú raised global awareness of indigenous rights and human rights violations in Guatemala.',
    milestones: [
      '1992: Nobel Peace Prize',
      'Founded indigenous rights organizations',
      'Continued activism for peace',
    ],
    imageUrl: rigobertaMenchuImg,
  },
  {
    id: 'valerie-jarrett',
    name: 'Valerie Jarrett',
    category: 'Politics',
    region: 'North America',
    interest: 'Politics',
    lifespan: '1956-Present',
    shortBio:
      'Senior advisor to President Obama and influential political strategist.',
    detailedBio:
      'Valerie Jarrett played a key role in the Obama administration and is a leader in social justice advocacy.',
    milestones: [
      '2009-2017: Senior advisor to President Obama',
      'Advocated for urban development and women’s issues',
      'Prominent public speaker',
    ],
    imageUrl: valerieJarrettImg,
  },
  {
    id: 'jessica-meir',
    name: 'Jessica Meir',
    category: 'Science',
    region: 'North America',
    interest: 'Science',
    lifespan: '1977-Present',
    shortBio:
      'NASA astronaut known for conducting the first all-female spacewalk.',
    detailedBio:
      'Jessica Meir has contributed to space exploration and inspired women in STEM fields.',
    milestones: [
      '2019: First all-female spacewalk',
      'Participated in ISS missions',
      'Advocate for STEM education',
    ],
    imageUrl: jessicaMeirImg,
  },
  {
    id: 'sally-ride',
    name: 'Sally Ride',
    category: 'Science',
    region: 'North America',
    interest: 'Science',
    lifespan: '1951-2012',
    shortBio: 'First American woman in space and physicist.',
    detailedBio:
      'Sally Ride broke barriers in NASA and dedicated her life to science education.',
    milestones: [
      '1983: First American woman astronaut',
      'Founded science education programs',
      'Promoted STEM for girls',
    ],
    imageUrl: sallyRideImg,
  },
  {
    id: 'maya-angelou',
    name: 'Maya Angelou',
    category: 'Literature',
    region: 'North America',
    interest: 'Literature',
    lifespan: '1928-2014',
    shortBio: 'Renowned poet, memoirist, and civil rights activist.',
    detailedBio:
      'Maya Angelou’s writings explore themes of identity, resilience, and justice.',
    milestones: [
      '1969: Published "I Know Why the Caged Bird Sings"',
      'Civil rights activism with MLK and Malcolm X',
      'Received multiple honors and awards',
    ],
    imageUrl: angelouMayaImg,
  },
  {
    id: 'gertrude-bell',
    name: 'Gertrude Bell',
    category: 'Politics',
    region: 'Europe',
    interest: 'Politics',
    lifespan: '1868-1926',
    shortBio: 'Explorer and political officer who shaped modern Iraq.',
    detailedBio:
      'Gertrude Bell’s work in the Middle East influenced borders and governance post-WWI.',
    milestones: [
      '1900s: Explored Middle East',
      'Advised British administration in Iraq',
      'Helped establish Iraq’s political structure',
    ],
    imageUrl: gertrudeBellImg,
  },
  {
    id: 'ida-b-wells',
    name: 'Ida B. Wells',
    category: 'Activism',
    region: 'North America',
    interest: 'Rights Activism',
    lifespan: '1862-1931',
    shortBio: 'Journalist and anti-lynching crusader.',
    detailedBio:
      'Ida B. Wells exposed racial violence and fought for African American rights in the US.',
    milestones: [
      '1892: Published anti-lynching investigations',
      'Founded NAACP',
      'Pioneered investigative journalism',
    ],
    imageUrl: idaBWellsImg,
  },
  {
    id: 'mother-teresa',
    name: 'Mother Teresa',
    category: 'Activism',
    region: 'Europe',
    interest: 'Charity',
    lifespan: '1910-1997',
    shortBio:
      'Catholic nun and missionary known for humanitarian work in India.',
    detailedBio:
      'Mother Teresa founded the Missionaries of Charity, dedicating her life to the poor and sick.',
    milestones: [
      '1950: Founded Missionaries of Charity',
      '1979: Nobel Peace Prize',
      'Canonized saint in 2016',
    ],
    imageUrl: motherTeresaImg,
  },
  {
    id: 'malala-yousafzai',
    name: 'Malala Yousafzai',
    category: 'Activism',
    region: 'Asia',
    interest: 'Rights Activism',
    lifespan: '1997-Present',
    shortBio:
      "Youngest Nobel Peace Prize laureate advocating for girls' education.",
    detailedBio:
      'Malala survived a Taliban assassination attempt and became a global voice for education rights.',
    milestones: [
      '2012: Survived shooting by Taliban',
      '2014: Nobel Peace Prize',
      'Founded Malala Fund',
    ],
    imageUrl: malalaYousafzaiImg,
  },
  {
    id: 'billie-holiday',
    name: 'Billie Holiday',
    category: 'Arts',
    region: 'North America',
    interest: 'Music',
    lifespan: '1915-1959',
    shortBio:
      'Legendary jazz singer known for emotive voice and civil rights songs.',
    detailedBio:
      'Billie Holiday’s music influenced jazz and highlighted racial injustices.',
    milestones: [
      '1939: Released "Strange Fruit"',
      'Key figure in jazz history',
      'Inspired civil rights activism',
    ],
    imageUrl: billieHolidayImg,
  },
  {
    id: 'clara-barton',
    name: 'Clara Barton',
    category: 'Activism',
    region: 'North America',
    interest: 'Charity',
    lifespan: '1821-1912',
    shortBio:
      'Founder of the American Red Cross and battlefield nurse during the Civil War.',
    detailedBio:
      'Clara Barton was a pioneering nurse and humanitarian who organized disaster relief.',
    milestones: [
      '1861-1865: Civil War nurse',
      '1881: Founded American Red Cross',
      'Advocated for disaster response',
    ],
    imageUrl: claraBartonImg,
  },
  {
    id: 'emma-goldman',
    name: 'Emma Goldman',
    category: 'Activism',
    region: 'North America',
    interest: 'Rights Activism',
    lifespan: '1869-1940',
    shortBio: 'Anarchist political activist and writer.',
    detailedBio:
      'Emma Goldman championed free speech, women’s rights, and labor movements.',
    milestones: [
      'Founded anarchist journals',
      'Advocated birth control and free speech',
      'Deported in 1919',
    ],
    imageUrl: emmaGoldmanImg,
  },
  {
    id: 'hannah-arendt',
    name: 'Hannah Arendt',
    category: 'Philosophy',
    region: 'Europe',
    interest: 'Philosophy',
    lifespan: '1906-1975',
    shortBio:
      'Political theorist known for works on totalitarianism and authority.',
    detailedBio:
      'Hannah Arendt’s writings analyze power, evil, and the human condition.',
    milestones: [
      '1951: Published "The Origins of Totalitarianism"',
      '1963: Reported Eichmann trial',
      'Influenced political philosophy',
    ],
    imageUrl: hannahArendtImg,
  },
  {
    id: 'ruth-bader-ginsburg',
    name: 'Ruth Bader Ginsburg',
    category: 'Law',
    region: 'North America',
    interest: 'Law',
    lifespan: '1933-2020',
    shortBio: 'US Supreme Court Justice and advocate for gender equality.',
    detailedBio:
      'Ruth Bader Ginsburg’s legal career transformed women’s rights and constitutional law.',
    milestones: [
      '1993: Appointed Supreme Court Justice',
      'Led landmark gender equality cases',
      'Cultural icon known as "Notorious RBG"',
    ],
    imageUrl: ruthBaderGinsburgImg,
  },
  {
    id: 'hypatia-of-alexandria',
    name: 'Hypatia of Alexandria',
    category: 'Science',
    region: 'Europe',
    interest: 'Mathematics and Philosophy',
    lifespan: 'c. 350–415 AD',
    shortBio:
      'Ancient philosopher and mathematician in Alexandria, one of the earliest female scholars.',
    detailedBio:
      'Hypatia was a leading thinker of Neoplatonism and known for her work in mathematics and astronomy in Roman Egypt.',
    milestones: [
      'Headed the Neoplatonic school in Alexandria',
      'Contributed to the development of algebra and geometry',
      'Martyred for her philosophical beliefs',
    ],
    imageUrl: hypatiaImg,
  },
  {
    id: 'harriet-tubman',
    name: 'Harriet Tubman',
    category: 'Activism',
    region: 'North America',
    interest: 'Abolitionism and Civil Rights',
    lifespan: 'c. 1822–1913',
    shortBio:
      'Escaped slave who became a leading conductor of the Underground Railroad.',
    detailedBio:
      "Harriet Tubman helped hundreds of enslaved people escape to freedom and later worked for women's suffrage.",
    milestones: [
      'Conducted dozens of missions on the Underground Railroad',
      'Spy for the Union Army during the Civil War',
      "Advocated for women's voting rights",
    ],
    imageUrl: harrietTubmanImg,
  },
  {
    id: 'frida-kahlo',
    name: 'Frida Kahlo',
    category: 'Arts',
    region: 'North America',
    interest: 'Painting',
    lifespan: '1907–1954',
    shortBio:
      'Mexican painter known for vivid self-portraits and exploration of identity.',
    detailedBio:
      'Frida Kahlo’s art reflected her pain, politics, and indigenous Mexican culture, making her an icon of feminist and Chicano movements.',
    milestones: [
      'Created over 140 paintings',
      'Married Diego Rivera',
      'Inspired feminist art worldwide',
    ],
    imageUrl: fridaKahloImg,
  },
  {
    id: 'rosalind-franklin',
    name: 'Rosalind Franklin',
    category: 'Science',
    region: 'Europe',
    interest: 'Molecular Biology',
    lifespan: '1920–1958',
    shortBio:
      "Crystallographer whose work was key to discovering DNA's double helix.",
    detailedBio:
      'Rosalind Franklin’s X-ray diffraction images provided critical evidence for the structure of DNA.',
    milestones: [
      'Captured Photograph 51 revealing DNA structure',
      'Contributed to understanding of viruses and coal',
      'Pioneered crystallography techniques',
    ],
    imageUrl: rosalindFranklinImg,
  },
  {
    id: 'harriet-beecher-stowe',
    name: 'Harriet Beecher Stowe',
    category: 'Literature',
    region: 'North America',
    interest: 'Writing and Abolitionism',
    lifespan: '1811–1896',
    shortBio: "Author of Uncle Tom's Cabin, influential anti-slavery novel.",
    detailedBio:
      'Her novel exposed the harsh realities of slavery and fueled abolitionist movements before the American Civil War.',
    milestones: [
      "Published Uncle Tom's Cabin in 1852",
      "Advocate for abolition and women's rights",
      'Influenced public opinion on slavery',
    ],
    imageUrl: harrietBeecherStoweImg,
  },
  {
    id: 'ada-lovelace',
    name: 'Ada Lovelace',
    category: 'Science',
    region: 'Europe',
    interest: 'Mathematics and Computing',
    lifespan: '1815–1852',
    shortBio: 'Mathematician regarded as the first computer programmer.',
    detailedBio:
      'Ada Lovelace wrote the first algorithm intended for a machine and foresaw the future of computing.',
    milestones: [
      'Collaborated with Charles Babbage',
      'Published notes on the Analytical Engine',
      'Inspired modern computer science',
    ],
    imageUrl: adaLovelaceImg,
  },
  {
    id: 'ida-s-wells',
    name: 'Ida B. Wells',
    category: 'Activism',
    region: 'North America',
    interest: 'Civil Rights and Journalism',
    lifespan: '1862–1931',
    shortBio: 'Journalist and activist who fought against lynching in the US.',
    detailedBio:
      'Ida B. Wells was a pioneering investigative journalist and civil rights advocate.',
    milestones: [
      'Published anti-lynching articles starting in 1892',
      'Co-founded NAACP',
      'Advocated for African American women’s rights',
    ],
    imageUrl: idaBWellsImg,
  },
  {
    id: 'empress-cixi',
    name: 'Empress Dowager Cixi',
    category: 'Politics',
    region: 'Asia',
    interest: 'Politics and Leadership',
    lifespan: '1835–1908',
    shortBio:
      'Powerful Chinese empress who effectively controlled Qing dynasty.',
    detailedBio:
      'Cixi shaped Chinese politics during the late 19th century through her regency and reform attempts.',
    milestones: [
      'Dominated Chinese politics from 1861 to 1908',
      'Initiated the Self-Strengthening Movement',
      'Modernized parts of China',
    ],
    imageUrl: empressCixiImg,
  },
  {
    id: 'valentina-tereshkova',
    name: 'Valentina Tereshkova',
    category: 'Science',
    region: 'Europe',
    interest: 'Space Exploration',
    lifespan: '1937–Present',
    shortBio: 'First woman to fly in space aboard Vostok 6.',
    detailedBio:
      'Valentina Tereshkova remains a symbol of Soviet space achievements and female empowerment in STEM.',
    milestones: [
      '1963: First woman in space',
      'Orbited Earth 48 times',
      'Later a prominent politician in Russia',
    ],
    imageUrl: valentinaTereshkovaImg,
  },
  {
    id: 'jocelyn-bell-burnell',
    name: 'Jocelyn Bell Burnell',
    category: 'Science',
    region: 'Europe',
    interest: 'Astrophysics',
    lifespan: '1943–Present',
    shortBio:
      'Discovered the first radio pulsars, a major astrophysical breakthrough.',
    detailedBio:
      "Jocelyn Bell Burnell's discovery opened new fields in astronomy despite initial recognition controversies.",
    milestones: [
      '1967: Discovered radio pulsars',
      'Led astrophysics research at several universities',
      'Advocate for women in science',
    ],
    imageUrl: jocelynBellBurnellImg,
  },
  {
    id: 'marie-curie',
    name: 'Marie Curie',
    category: 'Science',
    region: 'Europe',
    interest: 'Physics and Chemistry',
    lifespan: '1867–1934',
    shortBio: 'Pioneer in radioactivity, first woman to win a Nobel Prize.',
    detailedBio:
      "Marie Curie's groundbreaking research on radioactivity laid foundations for nuclear physics and medicine.",
    milestones: [
      'Nobel Prize in Physics, 1903',
      'Nobel Prize in Chemistry, 1911',
      'First female professor at the University of Paris',
    ],
    imageUrl: marieCurieImg,
  },
  {
    id: 'sojourner-truth',
    name: 'Sojourner Truth',
    category: 'Activism',
    region: 'North America',
    interest: "Abolitionism and Women's Rights",
    lifespan: '1797–1883',
    shortBio:
      'Former slave turned outspoken advocate for abolition and women’s rights.',
    detailedBio:
      "Sojourner Truth is famous for her speeches, including 'Ain't I a Woman?', advocating equality.",
    milestones: [
      'Escaped slavery in 1826',
      'Delivered powerful abolitionist speeches',
      "Promoted women's suffrage",
    ],
    imageUrl: sojournerTruthImg,
  },
  {
    id: 'emily-dickinson',
    name: 'Emily Dickinson',
    category: 'Literature',
    region: 'North America',
    interest: 'Poetry',
    lifespan: '1830–1886',
    shortBio:
      'Reclusive American poet whose work became highly influential posthumously.',
    detailedBio:
      'Emily Dickinson’s poems explore themes of death, immortality, and nature with unique style.',
    milestones: [
      'Wrote nearly 1,800 poems',
      'Published very few in lifetime',
      'Became one of America’s greatest poets',
    ],
    imageUrl: emilyDickinsonImg,
  },
  {
    id: 'maya-yoshida',
    name: 'Maya Yoshida',
    category: 'Sports',
    region: 'Asia',
    interest: 'Football',
    lifespan: '1988-Present',
    shortBio: 'Japanese professional footballer and national team captain.',
    detailedBio:
      'Maya Yoshida is known for leadership and defensive skills, representing Japan internationally.',
    milestones: [
      'Captain of Japan national team',
      'Played in Premier League',
      'Olympic participant',
    ],
    imageUrl: mayaYoshidaImg,
  },
  {
    id: 'emily-pankhurst',
    name: 'Emmeline Pankhurst',
    category: 'Activism',
    region: 'Europe',
    interest: "Women's Suffrage",
    lifespan: '1858–1928',
    shortBio: 'Leader of the British suffragette movement.',
    detailedBio:
      "Emmeline Pankhurst founded the Women's Social and Political Union to fight for women's voting rights in the UK.",
    milestones: [
      'Founded WSPU in 1903',
      'Imprisoned multiple times for activism',
      "Helped secure partial women's suffrage in 1918",
    ],
    imageUrl: emmelinePankhurstImg,
  },
  {
    id: 'sophie-scholl',
    name: 'Sophie Scholl',
    category: 'Activism',
    region: 'Europe',
    interest: 'Resistance',
    lifespan: '1921–1943',
    shortBio: 'German student and anti-Nazi political activist.',
    detailedBio:
      'Sophie Scholl was a member of the White Rose resistance group opposing Nazi Germany.',
    milestones: [
      'Distributed anti-Nazi leaflets',
      'Arrested and executed in 1943',
      'Symbol of moral courage',
    ],
    imageUrl: sophieSchollImg,
  },
  {
    id: 'nellie-bly',
    name: 'Nellie Bly',
    category: 'Journalism',
    region: 'North America',
    interest: 'Investigative Reporting',
    lifespan: '1864–1922',
    shortBio: 'Pioneering investigative journalist known for undercover work.',
    detailedBio:
      'Nellie Bly exposed abuses in mental institutions by feigning insanity and reporting from inside.',
    milestones: [
      'Undercover investigation in 1887',
      'First woman to circumnavigate globe alone',
      'Advocate for social reform',
    ],
    imageUrl: nellieBlyImg,
  },
  {
    id: 'agnes-macphail',
    name: 'Agnes Macphail',
    category: 'Politics',
    region: 'North America',
    interest: 'Politics',
    lifespan: '1890–1954',
    shortBio: 'First woman elected to the Canadian House of Commons.',
    detailedBio:
      'Agnes Macphail was a strong advocate for prison reform and social justice in Canada.',
    milestones: [
      'Elected in 1921',
      'Supported farmers and labour rights',
      'Promoted peace and disarmament',
    ],
    imageUrl: agnesMacphailImg,
  },
  {
    id: 'valentina-kulagina',
    name: 'Valentina Kulagina',
    category: 'Arts',
    region: 'Europe',
    interest: 'Graphic Design',
    lifespan: '1902–1987',
    shortBio: 'Soviet avant-garde artist known for propaganda poster design.',
    detailedBio:
      'Valentina Kulagina’s bold graphic style influenced political art and visual communication.',
    milestones: [
      'Created revolutionary posters in 1920s',
      'Collaborated with Constructivist artists',
      'Featured in major Soviet exhibitions',
    ],
    imageUrl: valentinaKulaginaImg,
  },
  {
    id: 'katherine-johnson',
    name: 'Katherine Johnson',
    category: 'Science',
    region: 'North America',
    interest: 'Mathematics and Space Science',
    lifespan: '1918–2020',
    shortBio: 'NASA mathematician crucial to early space missions.',
    detailedBio:
      'Katherine Johnson calculated trajectories for Mercury and Apollo missions, breaking racial and gender barriers.',
    milestones: [
      'Calculated flight paths for first American in space',
      'Awarded Presidential Medal of Freedom',
      "Inspired the film 'Hidden Figures'",
    ],
    imageUrl: katherineJohnsonImg,
  },
  {
    id: 'wangari-maathai',
    name: 'Wangari Maathai',
    category: 'Activism',
    region: 'Africa',
    interest: 'Environmentalism and Politics',
    lifespan: '1940–2011',
    shortBio: 'Kenyan environmentalist and Nobel Peace Prize laureate.',
    detailedBio:
      'Founder of the Green Belt Movement, Maathai championed tree planting and women’s rights.',
    milestones: [
      'Nobel Peace Prize, 2004',
      'Established Green Belt Movement',
      'First woman in East Africa to earn PhD',
    ],
    imageUrl: wangariMaathaiImg,
  },
  {
    id: 'ruth-bader-ginsburg',
    name: 'Ruth Bader Ginsburg',
    category: 'Law',
    region: 'North America',
    interest: 'Legal Rights and Gender Equality',
    lifespan: '1933–2020',
    shortBio: 'U.S. Supreme Court Justice and advocate for gender equality.',
    detailedBio:
      "Ginsburg's legal career advanced women's rights and civil liberties in the United States.",
    milestones: [
      "Co-founded the Women's Rights Project at ACLU",
      'Appointed to Supreme Court in 1993',
      'Became a cultural icon',
    ],
    imageUrl: ruthBaderGinsburgImg,
  },
  {
    id: 'amal-clooney',
    name: 'Amal Clooney',
    category: 'Law',
    region: 'Europe',
    interest: 'Human Rights Law',
    lifespan: '1978–Present',
    shortBio: 'International human rights lawyer and activist.',
    detailedBio:
      'Amal Clooney has represented high-profile clients and advocates for freedom of expression worldwide.',
    milestones: [
      'Advisor to UN and various governments',
      'Co-founded Clooney Foundation for Justice',
      'Advocate for press freedom',
    ],
    imageUrl: amalClooneyImg,
  },
  {
    id: 'dorothy-hodgkin',
    name: 'Dorothy Hodgkin',
    category: 'Science',
    region: 'Europe',
    interest: 'Chemistry',
    lifespan: '1910–1994',
    shortBio: 'Nobel laureate who advanced X-ray crystallography.',
    detailedBio:
      'Hodgkin determined structures of vital biochemical substances including penicillin and vitamin B12.',
    milestones: [
      'Nobel Prize in Chemistry, 1964',
      'Developed crystallography techniques',
      'Mentored future scientists',
    ],
    imageUrl: dorothyHodgkinImg,
  },
  {
    id: 'maya-angelou',
    name: 'Maya Angelou',
    category: 'Literature',
    region: 'North America',
    interest: 'Writing and Activism',
    lifespan: '1928–2014',
    shortBio: 'Poet, memoirist, and civil rights activist.',
    detailedBio:
      'Maya Angelou’s works and speeches inspired generations on issues of identity and justice.',
    milestones: [
      "Published 'I Know Why the Caged Bird Sings'",
      'Advisor to U.S. presidents',
      'Received Presidential Medal of Freedom',
    ],
    imageUrl: mayaAngelouImg,
  },
  {
    id: 'malala-yousafzai',
    name: 'Malala Yousafzai',
    category: 'Activism',
    region: 'Asia',
    interest: 'Education and Women’s Rights',
    lifespan: '1997–Present',
    shortBio:
      "Youngest Nobel Peace Prize laureate advocating girls' education.",
    detailedBio:
      'Malala survived a Taliban assassination attempt and became a global symbol for education equality.',
    milestones: [
      'Nobel Peace Prize, 2014',
      'Founded Malala Fund',
      'Addressed UN on education rights',
    ],
    imageUrl: malalaYousafzaiImg,
  },
  {
    id: 'ada-derana',
    name: 'Ada Derana',
    category: 'Media',
    region: 'Asia',
    interest: 'Broadcast Journalism',
    lifespan: '1975–Present',
    shortBio: 'Pioneering Sri Lankan TV presenter and journalist.',
    detailedBio:
      'Ada Derana has broken new ground in media with her distinctive reporting style and social activism.',
    milestones: [
      'Hosted popular news programs',
      'Advocated for media freedom',
      'Recipient of journalism awards',
    ],
    imageUrl: adaDeranaImg,
  },
  {
    id: 'simone-de-beauvoir',
    name: 'Simone de Beauvoir',
    category: 'Philosophy',
    region: 'Europe',
    interest: 'Feminism and Existentialism',
    lifespan: '1908–1986',
    shortBio: 'Philosopher and author influential in feminist theory.',
    detailedBio:
      "Her book 'The Second Sex' laid the groundwork for modern feminism.",
    milestones: [
      "Published 'The Second Sex' in 1949",
      'Partnered with Jean-Paul Sartre',
      'Influenced feminist and existential thought',
    ],
    imageUrl: simoneDeBeauvoirImg,
  },
  {
    id: 'ida-b-wells',
    name: 'Ida B. Wells',
    category: 'Activism',
    region: 'North America',
    interest: 'Anti-Lynching and Civil Rights',
    lifespan: '1862–1931',
    shortBio: 'Journalist and civil rights activist fighting lynching.',
    detailedBio:
      'Wells used investigative journalism to expose racial violence.',
    milestones: [
      'Led anti-lynching campaigns',
      'Co-founded NAACP',
      'Advocated for women’s suffrage',
    ],
    imageUrl: idaBWellsImg,
  },
  {
    id: 'agnes-macphail',
    name: 'Agnes Macphail',
    category: 'Politics',
    region: 'North America',
    interest: 'Social Reform',
    lifespan: '1890–1954',
    shortBio: 'First woman elected to Canadian Parliament.',
    detailedBio: 'Advocated for farmers, prisoners, and peace.',
    milestones: [
      'Elected in 1921',
      'Promoted social justice',
      'Supported peace movements',
    ],
    imageUrl: agnesMacphailImg,
  },
  {
    id: 'sojourner-truth',
    name: 'Sojourner Truth',
    category: 'Activism',
    region: 'North America',
    interest: 'Rights Activism',
    lifespan: '1797-1883',
    shortBio:
      'African American abolitionist and women’s rights activist famous for her "Ain’t I a Woman?" speech.',
    detailedBio:
      'Sojourner Truth was a former slave who became a powerful advocate for abolition, women’s rights, and civil rights throughout the 19th century. Her speeches and activism helped change attitudes and laws in the United States.',
    milestones: [
      '1843: Began speaking publicly against slavery and for women’s rights',
      '1851: Delivered the famous “Ain’t I a Woman?” speech',
      '1864: Met President Abraham Lincoln advocating for black troops',
    ],
    imageUrl: sojournerTruthImg,
  },
  {
    id: 'emmeline-pankhurst',
    name: 'Emmeline Pankhurst',
    category: 'Activism',
    region: 'Europe',
    interest: 'Rights Activism',
    lifespan: '1858-1928',
    shortBio:
      'British political activist and leader of the suffragette movement.',
    detailedBio:
      'Emmeline Pankhurst founded the Women’s Social and Political Union, campaigning for women’s suffrage in the UK through militant tactics. Her work was crucial to gaining voting rights for women.',
    milestones: [
      '1903: Founded the Women’s Social and Political Union',
      '1918: Women over 30 granted the right to vote in the UK',
      '1928: Equal voting rights for women achieved',
    ],
    imageUrl: emmelinePankhurstImg,
  },
  {
    id: 'hypatia',
    name: 'Hypatia of Alexandria',
    category: 'Philosophy',
    region: 'Africa',
    interest: 'Mathematics',
    lifespan: 'c.350-415',
    shortBio:
      'Ancient mathematician, astronomer, and philosopher in Alexandria.',
    detailedBio:
      'Hypatia was a leading thinker of the Neoplatonist school in Alexandria. She taught philosophy and mathematics and became a symbol of learning and science amid religious turmoil.',
    milestones: [
      'Taught mathematics, astronomy, and philosophy',
      'Led the Neoplatonist school in Alexandria',
      'Martyrdom sparked by religious conflict',
    ],
    imageUrl: hypatiaImg,
  },
  {
    id: 'harriet-tubman',
    name: 'Harriet Tubman',
    category: 'Activism',
    region: 'North America',
    interest: 'Rights Activism',
    lifespan: 'c.1822-1913',
    shortBio: 'Abolitionist and conductor of the Underground Railroad.',
    detailedBio:
      'Harriet Tubman escaped slavery and risked her life to lead hundreds of enslaved people to freedom via the Underground Railroad. She also worked as a spy for the Union during the Civil War.',
    milestones: [
      'Led over 13 missions rescuing approximately 70 enslaved people',
      'Worked as a Union spy and nurse during the Civil War',
      'Advocated for women’s suffrage post-war',
    ],
    imageUrl: harrietTubmanImg,
  },
  {
    id: 'rosa-parks',
    name: 'Rosa Parks',
    category: 'Activism',
    region: 'North America',
    interest: 'Rights Activism',
    lifespan: '1913-2005',
    shortBio:
      'Civil Rights icon who refused to give up her bus seat, sparking the Montgomery Bus Boycott.',
    detailedBio:
      'Rosa Parks is known as the “mother of the civil rights movement” in the United States. Her act of defiance led to a landmark Supreme Court ruling and helped catalyze the movement for racial equality.',
    milestones: [
      '1955: Refused to give up her bus seat in Montgomery, Alabama',
      'Led to a 381-day Montgomery Bus Boycott',
      'Awarded the Presidential Medal of Freedom in 1996',
    ],
    imageUrl: rosaParksImg,
  },
  {
    id: 'valentina-tereshkova',
    name: 'Valentina Tereshkova',
    category: 'Science',
    region: 'Europe',
    interest: 'Space Exploration',
    lifespan: '1937-Present',
    shortBio: 'First woman to fly in space.',
    detailedBio:
      'Valentina Tereshkova was the first woman to fly into space aboard Vostok 6 in 1963, making her a pioneer for women in science and space exploration.',
    milestones: [
      '1963: Became first woman in space',
      'Awarded Hero of the Soviet Union',
      'Later served as a politician and advocate for space science',
    ],
    imageUrl: valentinaTereshkovaImg,
  },
  {
    id: 'amelia-earhart',
    name: 'Amelia Earhart',
    category: 'Aviation',
    region: 'North America',
    interest: 'Aviation',
    lifespan: '1897-1937',
    shortBio:
      'Pioneering aviator and first woman to fly solo across the Atlantic Ocean.',
    detailedBio:
      'Amelia Earhart set numerous records and was a champion for women in aviation. She mysteriously disappeared during an attempt to circumnavigate the globe.',
    milestones: [
      '1932: First woman to fly solo nonstop across the Atlantic',
      'Set multiple aviation records',
      'Disappeared in 1937 during global flight attempt',
    ],
    imageUrl: ameliaEarhartImg,
  },
  {
    id: 'rigoberta-menchu',
    name: 'Rigoberta Menchú',
    category: 'Activism',
    region: 'North America',
    interest: 'Rights Activism',
    lifespan: '1959-Present',
    shortBio:
      'Guatemalan indigenous rights activist and Nobel Peace Prize laureate.',
    detailedBio:
      'Rigoberta Menchú has dedicated her life to advocating for indigenous peoples’ rights and social justice in Guatemala and worldwide.',
    milestones: [
      '1992: Awarded the Nobel Peace Prize',
      'Founded the Rigoberta Menchú Tum Foundation',
      'Advocated for indigenous rights in international forums',
    ],
    imageUrl: rigobertaMenchuImg,
  },
  {
    id: 'eleanor-roosevelt',
    name: 'Eleanor Roosevelt',
    category: 'Politics',
    region: 'North America',
    interest: 'Human Rights',
    lifespan: '1884-1962',
    shortBio: 'Former First Lady and human rights champion.',
    detailedBio:
      'Eleanor Roosevelt transformed the role of First Lady and later served as the United Nations’ first chairperson of the Human Rights Commission, helping draft the Universal Declaration of Human Rights.',
    milestones: [
      'First Lady of the United States (1933-1945)',
      '1948: Helped draft the Universal Declaration of Human Rights',
      'Advocated for civil rights and social justice',
    ],
    imageUrl: eleanorRooseveltImg,
  },
  {
    id: 'jane-goodall',
    name: 'Jane Goodall',
    category: 'Science',
    region: 'Africa',
    interest: 'Primatology',
    lifespan: '1934-Present',
    shortBio: 'Primatologist and expert on chimpanzee behavior.',
    detailedBio:
      'Jane Goodall revolutionized the study of wild chimpanzees and has been an advocate for animal welfare and conservation.',
    milestones: [
      '1960: Began pioneering research on chimpanzees',
      'Founded the Jane Goodall Institute',
      'Global advocate for wildlife conservation',
    ],
    imageUrl: janeGoodallImg,
  },
  {
    id: 'simone-de-beauvoir',
    name: 'Simone de Beauvoir',
    category: 'Literature',
    region: 'Europe',
    interest: 'Philosophy and Feminism',
    lifespan: '1908-1986',
    shortBio: 'French existentialist philosopher and feminist author.',
    detailedBio:
      'Simone de Beauvoir’s work laid foundational ideas for modern feminism. Her book "The Second Sex" remains a critical text in feminist literature.',
    milestones: [
      '1949: Published "The Second Sex"',
      'Influenced feminist theory and existentialism',
      'Advocated for women’s liberation',
    ],
    imageUrl: simoneDeBeauvoirImg,
  },
  {
    id: 'audre-lorde',
    name: 'Audre Lorde',
    category: 'Literature',
    region: 'North America',
    interest: 'Poetry and Activism',
    lifespan: '1934-1992',
    shortBio: 'Poet and activist focusing on civil rights and feminism.',
    detailedBio:
      'Audre Lorde used poetry and prose to confront racism, sexism, and homophobia, becoming a vital voice in intersectional feminism.',
    milestones: [
      'Published influential poetry collections',
      'Advocated for LGBTQ+ rights',
      'Taught and lectured widely on social justice',
    ],
    imageUrl: audreLordImg,
  },
  {
    id: 'amelia-bloomer',
    name: 'Amelia Bloomer',
    category: 'Activism',
    region: 'North America',
    interest: 'Women’s Rights',
    lifespan: '1818-1894',
    shortBio: 'Women’s rights advocate and early proponent of dress reform.',
    detailedBio:
      'Amelia Bloomer campaigned for women’s suffrage and is best known for popularizing “bloomers,” a style of pants for women promoting freedom of movement.',
    milestones: [
      'Published "The Lily," a women’s rights newspaper',
      'Advocated for dress reform',
      'Supported women’s suffrage and temperance',
    ],
    imageUrl: ameliaBloomerImg,
  },
  {
    id: 'maya-angelou',
    name: 'Maya Angelou',
    category: 'Literature',
    region: 'North America',
    interest: 'Poetry and Civil Rights',
    lifespan: '1928-2014',
    shortBio: 'Renowned poet, memoirist, and civil rights activist.',
    detailedBio:
      'Maya Angelou’s autobiographical works and poetry have inspired generations, and she was active in the civil rights movement alongside leaders like Martin Luther King Jr.',
    milestones: [
      'Published "I Know Why the Caged Bird Sings"',
      'Received numerous literary awards',
      'Worked with Dr. Martin Luther King Jr. and Malcolm X',
    ],
    imageUrl: mayaAngelouImg,
  },
  // Removed duplicate billie-holiday entry
  {
    id: 'valentina-khetagurova',
    name: 'Valentina Khetagurova',
    category: 'Activism',
    region: 'Europe',
    interest: 'Women’s Rights and Socialism',
    lifespan: '1914-1992',
    shortBio: 'Soviet activist and advocate for women’s labor rights.',
    detailedBio:
      'Valentina Khetagurova championed the rights of women workers and was influential in Soviet social policies related to gender equality.',
    milestones: [
      'Organized women workers’ councils',
      'Promoted women’s education and employment',
      'Recognized as a hero of socialist labor',
    ],
    imageUrl: valentinaKhetagurovaImg,
  },
  {
    id: 'betty-friedan',
    name: 'Betty Friedan',
    category: 'Activism',
    region: 'North America',
    interest: 'Feminism',
    lifespan: '1921-2006',
    shortBio:
      'Author and activist who sparked the second-wave feminist movement.',
    detailedBio:
      'Betty Friedan’s 1963 book "The Feminine Mystique" challenged traditional roles of women and helped launch widespread feminist activism.',
    milestones: [
      '1963: Published "The Feminine Mystique"',
      'Co-founded the National Organization for Women',
      'Advocated for women’s workplace equality',
    ],
    imageUrl: bettyFriedanImg,
  },
  {
    id: 'sarah-winnemucca',
    name: 'Sarah Winnemucca',
    category: 'Activism',
    region: 'North America',
    interest: 'Indigenous Rights',
    lifespan: '1844-1891',
    shortBio: 'Native American author and advocate for her people.',
    detailedBio:
      'Sarah Winnemucca was a Northern Paiute woman who worked tirelessly to educate Americans about Native American issues and injustices.',
    milestones: [
      'Published "Life Among the Piutes"',
      'Lobbied Congress for Native American rights',
      'Advocated for education and fair treatment',
    ],
    imageUrl: sarahWinnemuccaImg,
  },
  {
    id: 'bell-hooks',
    name: 'bell hooks',
    category: 'Literature',
    region: 'North America',
    interest: 'Feminist Theory',
    lifespan: '1952-2021',
    shortBio: 'Author and social activist focusing on intersectional feminism.',
    detailedBio:
      'bell hooks wrote extensively on race, gender, and class, influencing contemporary feminist and cultural criticism.',
    milestones: [
      'Published over 30 books on feminism and culture',
      'Promoted intersectionality in feminist thought',
      'Taught at major universities worldwide',
    ],
    imageUrl: bellHooksImg,
  },
  {
    id: 'audrey-hepburn',
    name: 'Audrey Hepburn',
    category: 'Art',
    region: 'Europe',
    interest: 'Acting and Humanitarianism',
    lifespan: '1929-1993',
    shortBio: 'Film actress and UNICEF Goodwill Ambassador.',
    detailedBio:
      'Audrey Hepburn was a beloved film icon who later devoted her life to humanitarian work with UNICEF, helping children worldwide.',
    milestones: [
      'Won Academy Award for Best Actress',
      'UNICEF Goodwill Ambassador from 1988',
      'Advocated for children’s rights globally',
    ],
    imageUrl: audreyHepburnImg,
  },
  {
    id: 'isadora-duncan',
    name: 'Isadora Duncan',
    category: 'Art',
    region: 'North America',
    interest: 'Dance',
    lifespan: '1877-1927',
    shortBio: 'Pioneer of modern dance.',
    detailedBio:
      'Isadora Duncan revolutionized dance with her free-flowing movements and rejection of classical ballet conventions.',
    milestones: [
      'Developed a new dance style emphasizing natural movement',
      'Influenced generations of dancers and choreographers',
      'Performed internationally',
    ],
    imageUrl: isadoraDuncanImg,
  },
  {
    id: 'marian-anderson',
    name: 'Marian Anderson',
    category: 'Art',
    region: 'North America',
    interest: 'Music',
    lifespan: '1897-1993',
    shortBio: 'Contralto singer and civil rights pioneer.',
    detailedBio:
      'Marian Anderson broke racial barriers in classical music and performed at the Lincoln Memorial after being denied a concert hall due to segregation.',
    milestones: [
      '1939: Performed at Lincoln Memorial in historic concert',
      'First African American singer at the Metropolitan Opera',
      'Advocated for racial equality in the arts',
    ],
    imageUrl: marianAndersonImg,
  },
  {
    id: 'ella-baker',
    name: 'Ella Baker',
    category: 'Activism',
    region: 'North America',
    interest: 'Civil Rights',
    lifespan: '1903-1986',
    shortBio: 'Civil rights activist and organizer.',
    detailedBio:
      'Ella Baker was a behind-the-scenes strategist and organizer who played key roles in major civil rights organizations like SNCC and NAACP.',
    milestones: [
      'Helped found the Student Nonviolent Coordinating Committee',
      'Promoted grassroots organizing',
      'Advocated for participatory democracy',
    ],
    imageUrl: ellaBakerImg,
  },
  {
    id: 'rosa-luxemburg',
    name: 'Rosa Luxemburg',
    category: 'Politics',
    region: 'Europe',
    interest: 'Socialism',
    lifespan: '1871-1919',
    shortBio: 'Marxist theorist and revolutionary.',
    detailedBio:
      'Rosa Luxemburg was a prominent socialist leader and thinker who fought for workers’ rights and against imperialism.',
    milestones: [
      'Co-founded the Spartacus League',
      'Advocated for revolutionary socialism',
      'Assassinated after German Revolution',
    ],
    imageUrl: rosaLuxemburgImg,
  },
  {
    id: 'ida-b-well',
    name: 'Ida B. Wells',
    category: 'Activism',
    region: 'North America',
    interest: 'Civil Rights',
    lifespan: '1862-1931',
    shortBio: 'Journalist and anti-lynching activist.',
    detailedBio:
      'Ida B. Wells used investigative journalism to expose lynching in America and fought tirelessly for African American rights.',
    milestones: [
      'Published detailed reports on lynching',
      'Co-founded NAACP',
      'Advocated for women’s suffrage',
    ],
    imageUrl: idaBWellImg,
  },
  {
    id: 'ruth-bader-ginsburg',
    name: 'Ruth Bader Ginsburg',
    category: 'Politics',
    region: 'North America',
    interest: 'Law and Justice',
    lifespan: '1933-2020',
    shortBio: 'U.S. Supreme Court Justice and gender equality advocate.',
    detailedBio:
      'Ruth Bader Ginsburg advanced gender equality through landmark legal decisions and became a cultural icon.',
    milestones: [
      'Co-founded Women’s Rights Project at ACLU',
      'Appointed to Supreme Court in 1993',
      'Known for dissents on gender and civil rights cases',
    ],
    imageUrl: ruthBaderGinsburgImg,
  },
  {
    id: 'jane-addams',
    name: 'Jane Addams',
    category: 'Activism',
    region: 'North America',
    interest: 'Social Work',
    lifespan: '1860-1935',
    shortBio: 'Founder of Hull House and pioneer of social work.',
    detailedBio:
      'Jane Addams worked to improve urban social conditions and was a leader in women’s suffrage and peace movements.',
    milestones: [
      'Founded Hull House in Chicago',
      'First American woman to win Nobel Peace Prize',
      'Advocated for labor reforms',
    ],
    imageUrl: janeAddamsImg,
  },
  {
    id: 'emma-goldman',
    name: 'Emma Goldman',
    category: 'Activism',
    region: 'North America',
    interest: 'Anarchism and Feminism',
    lifespan: '1869-1940',
    shortBio: 'Anarchist political activist and writer.',
    detailedBio:
      'Emma Goldman was a fierce advocate for free speech, workers’ rights, and women’s emancipation, often clashing with authorities.',
    milestones: [
      'Promoted anarchist philosophy and activism',
      'Advocated for birth control and women’s rights',
      'Imprisoned multiple times for activism',
    ],
    imageUrl: emmaGoldmanImg,
  },
  {
    id: 'jane-austen',
    name: 'Jane Austen',
    category: 'Literature',
    region: 'Europe',
    interest: 'Literature',
    lifespan: '1775–1817',
    shortBio: 'English novelist known for her sharp social commentary and realism.',
    detailedBio:
      'Jane Austen was an English novelist whose works, including "Pride and Prejudice" and "Emma", critique the British landed gentry and explore the dependence of women on marriage in the 18th century.',
    milestones: [
      '1811: Published "Sense and Sensibility"',
      '1813: Released "Pride and Prejudice", her most famous work',
      '1815: Published "Emma", a mature social critique',
    ],
    imageUrl: janeAustenImg,
  },
  {
    id: 'oprah-winfrey',
    name: 'Oprah Winfrey',
    category: 'Media & Activism',
    region: 'North America',
    interest: 'Rights Activism',
    lifespan: '1954–',
    shortBio: 'Media mogul and philanthropist who broke barriers in television and advocacy.',
    detailedBio:
      'Oprah Winfrey is an American talk show host, producer, actress, author, and philanthropist. She became the first Black female billionaire and has used her platform to champion social causes and self-empowerment.',
    milestones: [
      '1986: The Oprah Winfrey Show launched nationally',
      '2007: Opened Oprah Winfrey Leadership Academy for Girls in South Africa',
      '2013: Received the Presidential Medal of Freedom',
    ],
    imageUrl: oprahWinfreyImg,
  },
  {
    id: 'pocahontas',
    name: 'Pocahontas',
    category: 'Cultural Diplomacy',
    region: 'North America',
    interest: 'Social Work',
    lifespan: 'c.1596–1617',
    shortBio: 'Native American figure known for her role in early colonial diplomacy.',
    detailedBio:
      'Pocahontas was a Powhatan woman notable for her association with the colonial settlement at Jamestown, Virginia. Her involvement helped foster peace between English settlers and Native Americans.',
    milestones: [
      '1607: Famously intervened to save Captain John Smith (disputed)',
      '1614: Married English settler John Rolfe',
      '1616: Traveled to England and met King James I',
    ],
    imageUrl: pocahontasImg,
  },
  {
    id: 'corazon-aquino',
    name: 'Corazon Aquino',
    category: 'Politics',
    region: 'Asia',
    interest: 'Politics',
    lifespan: '1933–2009',
    shortBio: 'First female President of the Philippines and symbol of democratic transition.',
    detailedBio:
      'Corazon Aquino led the 1986 People Power Revolution in the Philippines, ending authoritarian rule. She became the 11th president and the first woman to hold that office in the country.',
    milestones: [
      '1986: Became President after peaceful revolution',
      '1992: Stepped down after a full term, strengthening democracy',
    ],
    imageUrl: corazonAquinoImg,
  },
  {
    id: 'sarojini-naidu',
    name: 'Sarojini Naidu',
    category: 'Politics & Poetry',
    region: 'Asia',
    interest: 'Rights Activism',
    lifespan: '1879–1949',
    shortBio: 'Indian independence activist and the first female president of the Indian National Congress.',
    detailedBio:
      'Known as the "Nightingale of India", Naidu was a poet and a prominent leader in India’s struggle for independence, also becoming the first woman to serve as a governor in independent India.',
    milestones: [
      '1925: Elected president of the Indian National Congress',
      '1947: Became governor of Uttar Pradesh',
    ],
    imageUrl: sarojiniNaiduImg,
  },
  {
    id: 'miriam-makeba',
    name: 'Miriam Makeba',
    category: 'Music & Activism',
    region: 'Africa',
    interest: 'Music',
    lifespan: '1932–2008',
    shortBio: 'South African singer and civil rights activist known as "Mama Africa."',
    detailedBio:
      'Miriam Makeba used her musical fame to raise awareness of apartheid, becoming a UN delegate and enduring exile for her outspoken stance. Her music fused jazz and traditional African melodies.',
    milestones: [
      '1963: Testified against apartheid at the UN',
      '1987: Returned to South Africa after exile',
    ],
    imageUrl: miriamMakebaImg,
  },
  {
    id: 'margaret-ekpo',
    name: 'Margaret Ekpo',
    category: 'Politics',
    region: 'Africa',
    interest: 'Politics',
    lifespan: '1914–2006',
    shortBio: 'Pioneering Nigerian politician and women’s rights advocate.',
    detailedBio:
      'Margaret Ekpo was a trailblazer in Nigerian politics, becoming one of the country’s first female legislators. She campaigned for women’s rights and civil participation in postcolonial Nigeria.',
    milestones: [
      '1954: Elected to the Eastern House of Assembly',
      '1960s: Led market women’s associations in protests and political action',
    ],
    imageUrl: margaretEkpoImg,
  },
  {
    id: 'queen-nzinga',
    name: 'Queen Nzinga of Ndongo and Matamba',
    category: 'Politics & Resistance',
    region: 'Africa',
    interest: 'Politics',
    lifespan: 'c.1583–1663',
    shortBio: 'Queen who resisted Portuguese colonization in Central Africa.',
    detailedBio:
      'Queen Nzinga was a warrior and diplomat who led the Ndongo and Matamba kingdoms (now Angola) in resistance against the Portuguese. She negotiated, fought, and allied to protect her people’s sovereignty.',
    milestones: [
      '1624: Became queen after her brother’s death',
      '1641: Formed alliance with Dutch to fight Portuguese',
    ],
    imageUrl: queenNzingaImg,
  },
  {
    id: 'whina-cooper',
    name: 'Whina Cooper',
    category: 'Indigenous Rights',
    region: 'Oceania',
    interest: 'Rights Activism',
    lifespan: '1895–1994',
    shortBio: 'Maori leader and activist for land and indigenous rights in New Zealand.',
    detailedBio:
      'Whina Cooper was a respected elder and community leader in Aotearoa (New Zealand). She led the famous 1975 land march, advocating for Maori land rights and cultural preservation.',
    milestones: [
      '1951: First president of the Maori Women’s Welfare League',
      '1975: Led the Māori Land March from Northland to Wellington',
    ],
    imageUrl: whinaCooperImg,
  },
  {
    id: 'katherine-mansfield',
    name: 'Katherine Mansfield',
    category: 'Literature',
    region: 'Oceania',
    interest: 'Literature',
    lifespan: '1888–1923',
    shortBio: 'Innovative modernist writer from New Zealand.',
    detailedBio:
      'Katherine Mansfield was a pioneer of the modern short story. Her psychologically nuanced narratives influenced 20th-century literature, often exploring identity, gender, and social class.',
    milestones: [
      '1911: Published first collection, "In a German Pension"',
      '1922: Released acclaimed "The Garden Party"',
    ],
    imageUrl: katherineMansfieldImg,
  },
  {
    id: 'benazir-bhutto',
    name: 'Benazir Bhutto',
    category: 'Politics',
    region: 'Asia',
    interest: 'Politics',
    lifespan: '1953–2007',
    shortBio: 'First woman to lead a Muslim-majority country as Prime Minister of Pakistan.',
    detailedBio:
      'Benazir Bhutto was twice elected Prime Minister of Pakistan and was a symbol of democratic reform and women’s empowerment in the Muslim world. Her assassination in 2007 shocked the globe.',
    milestones: [
      '1988: Became Prime Minister of Pakistan',
      '1993: Re-elected after a military ousting',
    ],
    imageUrl: benazirBhuttoImg,
  },
  {
    id: 'chien-shiung-wu',
    name: 'Chien-Shiung Wu',
    category: 'Science',
    region: 'Asia',
    interest: 'Science',
    lifespan: '1912–1997',
    shortBio: 'Chinese-American physicist who made key contributions to nuclear physics.',
    detailedBio:
      'Chien-Shiung Wu conducted groundbreaking experiments in beta decay, disproving a fundamental law of physics. She contributed to the Manhattan Project and was overlooked for the Nobel Prize.',
    milestones: [
      '1944: Joined Manhattan Project',
      '1956: Conducted Wu Experiment, disproving parity conservation',
    ],
    imageUrl: chienShiungWuImg,
  },
  {
    id: 'eva-peron',
    name: 'Eva Perón',
    category: 'Politics',
    region: 'South America',
    interest: 'Politics',
    lifespan: '1919–1952',
    shortBio: 'First Lady of Argentina who championed labor rights and women’s suffrage.',
    detailedBio: 'Eva Perón, also known as Evita, was the First Lady of Argentina from 1946 until her death in 1952. She was a powerful advocate for labor rights and played a key role in the passage of women’s suffrage in Argentina. She remains a controversial and beloved figure in Argentine history.',
    milestones: [
      '1946: Became First Lady of Argentina',
      '1947: Helped pass women’s suffrage law',
      '1948: Founded the Eva Perón Foundation',
    ],
    imageUrl: evaPeronImg,
  },
  {
    id: 'dolores-huerta',
    name: 'Dolores Huerta',
    category: 'Rights Activism',
    region: 'North America',
    interest: 'Rights Activism',
    lifespan: '1930–',
    shortBio: 'American labor leader and civil rights activist who co-founded the United Farm Workers.',
    detailedBio: 'Dolores Huerta is a prominent American labor leader and civil rights activist. Along with César Chávez, she co-founded the United Farm Workers (UFW). She coined the phrase "Sí, se puede" and has been an outspoken advocate for workers’, immigrants’, and women’s rights.',
    milestones: [
      '1962: Co-founded United Farm Workers',
      '1965: Led grape strike in Delano, California',
      '2012: Received the Presidential Medal of Freedom',
    ],
    imageUrl: doloresHuertaImg,
  },
  {
    id: 'gabriela-mistral',
    name: 'Gabriela Mistral',
    category: 'Literature',
    region: 'South America',
    interest: 'Literature',
    lifespan: '1889–1957',
    shortBio: 'First Latin American author to receive the Nobel Prize in Literature.',
    detailedBio: 'Gabriela Mistral was a Chilean poet, educator, and diplomat. She was the first Latin American to win the Nobel Prize in Literature in 1945. Her work often focused on themes of love, sorrow, and Latin American identity.',
    milestones: [
      '1922: Published influential poetry collection "Desolación"',
      '1945: Won Nobel Prize in Literature',
      'Served as diplomat in multiple countries',
    ],
    imageUrl: gabrielaMistralImg,
  },
  {
    id: 'ellen-ochoa',
    name: 'Ellen Ochoa',
    category: 'Space Exploration',
    region: 'North America',
    interest: 'Space Exploration',
    lifespan: '1958–',
    shortBio: 'First Hispanic woman in space and former Director of the Johnson Space Center.',
    detailedBio: 'Ellen Ochoa is an American engineer, former astronaut, and the first Hispanic woman to go to space. She flew aboard the Space Shuttle Discovery in 1993. She later served as Director of NASA’s Johnson Space Center.',
    milestones: [
      '1993: First spaceflight aboard Space Shuttle Discovery',
      '2013: Appointed Director of Johnson Space Center',
      'Logged nearly 1,000 hours in space',
    ],
    imageUrl: ellenOchoaImg,
  },
  {
    id: 'manuela-saenz',
    name: 'Manuela Sáenz',
    category: 'Politics',
    region: 'South America',
    interest: 'Politics',
    lifespan: '1797–1856',
    shortBio: 'Revolutionary and spy who supported Simón Bolívar’s fight for independence.',
    detailedBio: 'Manuela Sáenz was an Ecuadorian revolutionary who played a vital role in the South American struggle for independence from Spain. She was also a close ally and romantic partner of Simón Bolívar, and saved his life on more than one occasion.',
    milestones: [
      '1822: Met Simón Bolívar and joined independence efforts',
      '1828: Saved Bolívar from assassination',
      'Posthumously honored as a national hero',
    ],
    imageUrl: manuelaSaenzImg,
  },
  {
    id: 'sonia-sotomayor',
    name: 'Sonia Sotomayor',
    category: 'Law',
    region: 'North America',
    interest: 'Law',
    lifespan: '1954–',
    shortBio: 'First Hispanic and third woman appointed to the U.S. Supreme Court.',
    detailedBio: 'Sonia Sotomayor is an Associate Justice of the U.S. Supreme Court, appointed in 2009 by President Barack Obama. She is the first Hispanic and Latina member of the Court and is known for her strong stances on civil rights and justice reform.',
    milestones: [
      '1998: Appointed to U.S. Court of Appeals',
      '2009: Confirmed to U.S. Supreme Court',
      'Published memoir "My Beloved World"',
    ],
    imageUrl: soniaSotomayorImg,
  },
  {
    id: 'sor-juana-ines',
    name: 'Sor Juana Inés de la Cruz',
    category: 'Literature',
    region: 'North America',
    interest: 'Literature',
    lifespan: '1648–1695',
    shortBio: 'Mexican nun, poet, and philosopher who advocated for women’s education.',
    detailedBio: 'Sor Juana Inés de la Cruz was a self-taught scholar and poet of the Baroque period in Mexico. She is considered one of the earliest feminist voices in the Americas, known for her literary work and defense of women’s rights to education.',
    milestones: [
      '1671: Entered the convent of San Jerónimo',
      '1689: Published “Respuesta a Sor Filotea”, a defense of women’s education',
      'Posthumously recognized as a literary icon and feminist pioneer',
    ],
    imageUrl: sorJuanaInesImg,
  }
];

// Remove duplicates and export unique heroes array
export const heroes: Hero[] = allHeroes.filter((hero, index, self) => 
  index === self.findIndex(h => h.id === hero.id)
);
