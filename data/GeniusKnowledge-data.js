import Category from "../models/category";
import GeniusKnowledge from "../models/GeniusKnowledge";

export const CATEGORIES = [
  new Category("lv1", "Country", "#81b29a"), 
  new Category("lv2", "Tourist town", "#e07a5f"), 
  new Category("lv3", "Continent", "#f2cc8f"), //ทวีป
  new Category("lv4", "Pet", "#eab69f"), //
  new Category("lv5", "Exotic Pet", "#f4f1de"), //

];

export const GENIUSKNOWLEDGES = [
  new GeniusKnowledge(
    "c1", //id
    ["lv1"], //categoryIds
    "Turkey", //title
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1200px-Flag_of_Turkey.svg.png",//imageUrl
    ["Turkey, officially the Republic of Türkiye  is a transcontinental country located at the juncture of Southeast Europe and West Asia.It is mainly on the Anatolian Peninsula in West Asia, with a small portion called East Thrace on the Balkan Peninsula in Southeast Europe. "],
  ),
  new GeniusKnowledge(
    "c2", //id
    ["lv1"], //categoryIds
    "United Kingdom", //title
    "https://lifestyle.campus-star.com/app/uploads/2016/02/flag-diff.jpg",//imageUrl
    ["The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain, is an island country in Northwestern Europe, off the north-western coast of the continental mainland. It comprises England, Scotland, Wales, and Northern Ireland."], //desc

    
  ),
  new GeniusKnowledge(
    "c3", //id
    ["lv1"], //categoryIds
    "Germany", //title
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAC7CAMAAACjH4DlAAAAM1BMVEUAAAD+zgDeAACtAAHnWQD/2AD6ywPhAAEAAAPaAAQGBgYFAAHeBgXZAAQFBgarAATjWQSyaYLbAAABqUlEQVR4nO3aOW7DQBAAwfEly5R8/P+1PmCA7ERwZDKoygcYNBgQuztLzLfzTbMsb8tl42fu9szv3Jd16g8j/28uw4YcIUfIEXLEsvcCxyJHyBFvey9wLOe9FzgWOUKOkCPkCDlCjpAj5Ag5Qo6QI+QIOUKOkCPkCIeDIUfIEXKEHCFHuKMNOUKOkCPkCDlCjpAj5Ag5Qo6QI+QIOUKOkCMc/4QcIUfIEXKEO9qQI+QIOUKOkCPkCDni/YHVXJ9Zzcs9KzlCjpAj5Ag5Qo6QI+a69waHIkfIEXKEHCFHyBFyhBzhrzTkCDliXvfe4FB8HSFHyBFyhBwhR8gRcoQcIUfIEXKEHCFHyBFyhBwhR8gRcoQcIUfIEXKEHCFHyBFyhBwhR8gRcoQcIUfIEXKEHCFHeEgZ8/HIap7YmNMdKzlCjpAj5Ag5Qo6QI+QIOUKOkCPkCDlCjpAj5Ag5Qo6QI+QIOUKOkCPkCDlCjpAj5Ag5Qo6QI+QIOUKOkCPkCDlCjpAj5Ag5Qo6QI+QIOUKOkCPkCDlCjpAj5Ag5Qo6QI+QIOUKOkCPmxMYn/4HmM2hi2sAAAAAASUVORK5CYII=",//imageUrl
    ["Germany, officially Federal Republic of Germany, German Deutschland or Bundesrepublik Deutschland, country of north-central Europe, traversing the continent’s main physical divisions, from the outer ranges of the Alps northward across the varied landscape of the Central German Uplands and then across the North German Plain."], //desc
  ),
  new GeniusKnowledge(
    "c4", //id
    ["lv1"], //categoryIds
    "England", //title
    "https://upload.wikimedia.org/wikipedia/commons/c/c2/Flag_of_England.PNG",//imageUrl
    "England is a country that is part of the United Kingdom. It shares land borders with Wales to its west and Scotland to its north, while Ireland is located across the Irish Sea to its west and northwest, and the Celtic Sea lies to its southwest. It is separated from continental Europe by the North Sea to the east and the English Channel to the south.", //desc
  ),
  new GeniusKnowledge(
    "c5", //id
    ["lv1"], //categoryIds
    "Iran", //title
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWMyaVlOpn6AAZozMp26UwNB1QqorXSToVX7EglzfLw8KO4p4dnNU9f_uUGla7X_5RtfY&usqp=CAU",//imageUrl
    "Iran, also known as Persia and officially as the Islamic Republic of Iran, is a country in West Asia. It is bordered by Iraq and Turkey to the west.", //desc
  ),

  new GeniusKnowledge(
    "t1", //id
    ["lv2"], //categoryIds
    "Manchester", //title
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/3d/31/60/manchester-town-hall.jpg?w=700&h=-1&s=1",//imageUrl
    "Manchester is a city and metropolitan borough in the county of Greater Manchester, England; it had a population of 552,000 at the 2021 census.", //desc
  ),
  new GeniusKnowledge(
    "t2", //id
    ["lv2"], //categoryIds
    "Istanbul", //title
    "https://cdn.britannica.com/58/93158-050-7719EB2B/view-Blue-Mosque-Istanbul-Hagia-Sophia.jpg",//imageUrl
    "Istanbul is the most populous European city and the world's 15th-largest city. Istanbul. İstanbul. Metropolitan municipality and province.", //desc
  ),
  new GeniusKnowledge(
    "t3", //id
    ["lv2"], //categoryIds
    "Paris", //title
    "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",//imageUrl
    "Paris is a major railway, highway, and air-transport hub served by two international airports: Charles de Gaulle Airport (the third-busiest airport in Europe) and Orly Airport", //desc
  ),
  new GeniusKnowledge(
    "t4", //id
    ["lv2"], //categoryIds
    "Tokyo", //title
    "https://www.gotokyo.org/th/plan/tokyo-outline/images/main.jpg",//imageUrl
    "Tokyo is Japan's capital and the world's most populous metropolis. It is also one of Japan's 47 prefectures, consisting of 23 central city wards and multiple cities, towns and villages west of the city center. The Izu and Ogasawara Islands are also part of Tokyo.", //desc
  ),
  new GeniusKnowledge(
    "t5", //id
    ["lv2"], //categoryIds
    "Dubai", //title
    "https://i.natgeofe.com/n/f3d0b742-5bef-4665-87e8-61ef82a0101c/dubai-travel.jpg?w=2880&h=1920",//imageUrl
    "Dubai, also spelled Dubayy, city and capital of the emirate of Dubai, one of the wealthiest of the seven emirates that constitute the federation of the United Arab Emirates, which was created in 1971 following independence from Great Britain. There are several theories about the origin of the name Dubai.", //desc
  ),

  new GeniusKnowledge(
    "cn1", //id
    ["lv3"], //categoryIds
    "Asia", //title
    "https://cdn.mappr.co/wp-content/uploads/2021/01/image-460-scaled.jpeg?w=1024&h=576&scale.option=fill&cw=1024&ch=576&cx=center&cy=center",//imageUrl
    "Asia is the largest continent in the world by both land area and population. It covers an area of more than 44 million square kilometers, about 30% of Earth's total land area and 8% of Earth's total surface area. The continent, which has long been home to the majority of the human population, was the site of many of the first civilizations. Its 4.7 billion people constitute roughly 60% of the world's population, having more people than all other continents combined.", //desc
  ),
  new GeniusKnowledge(
    "cn2", //id
    ["lv3"], //categoryIds
    "Australia", //title
    "https://www.worldatlas.com/r/w768/upload/be/66/e5/australia-states-and-territories.png",//imageUrl
    "Australia is both a country and a continent. It is often referred to as the island continent because it is the world's smallest continent and is entirely surrounded by water. ", //desc
  ),
  new GeniusKnowledge(
    "cn3", //id
    ["lv3"], //categoryIds
    "Europe", //title
    "https://www.kidsgen.com/continents/images/europe-map.jpg",//imageUrl
    "Europe is the second-smallest continent in terms of land area, but it is one of the most densely populated and culturally diverse regions in the world.", //desc
  ),
  new GeniusKnowledge(
    "cn4", //id
    ["lv3"], //categoryIds
    "Africa", //title
    "https://www.researchgate.net/publication/322522443/figure/fig2/AS:593450525282305@1518501039805/Map-of-the-Continent-of-Africa.png",//imageUrl
    "Africa is the world's second-largest continent, after Asia, in terms of both land area and population. It is located in the eastern and western hemispheres and is primarily in the eastern hemisphere. Africa is known for its diverse geography, cultures, and history.", //desc
  ),
  new GeniusKnowledge(
    "cn5", //id
    ["lv3"], //categoryIds
    "North America", //title
    "https://www.slideegg.com/image/catalog/74863-North%20America%20Continent%20Map%20Powerpoint.png",//imageUrl
    "North America is one of the continents of the world, located primarily in the northern and western hemispheres. It is the third-largest continent by land area, following Asia and Africa. ", //desc
  ),
  new GeniusKnowledge(
    "cn6", //id
    ["lv3"], //categoryIds
    "South America", //title
    "https://www.infoplease.com/sites/default/files/i_infopls_com/images/mapsouthamerica.gif",//imageUrl
    "South America's combination of natural beauty, cultural richness, and ecological significance makes it a fascinating and important part of the world.", //desc
  ),
  new GeniusKnowledge(
    "cn7", //id
    ["lv3"], //categoryIds
    "Antartica", //title
    "https://cdn.britannica.com/37/5737-050-CEFEC0C3/Map-Antarctica-regions-ice-sheets-research-stations-continent.jpg",//imageUrl
    "Antarctica is the southernmost continent on Earth, and it is often considered the coldest, windiest, and driest continent. It is unique in several ways and holds a special place in scientific research and global environmental concerns.", //desc
  ),
  new GeniusKnowledge(
    "pet1", //id
    ["lv4"], //categoryIds
    "Dog", //title
    "https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg",//imageUrl
    "Dogs hold a special place in human culture and are celebrated for their loyalty, affection, and the many roles they play in our lives. They are often referred to as man's best friend due to their long history of companionship with humans.", //desc
  ),
  new GeniusKnowledge(
    "pet2", //id
    ["lv4"], //categoryIds
    "Cat", //title
    "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-superJumbo.jpg",//imageUrl
    "Cats are small, carnivorous mammals known for their agility, independence, and popularity as pets. They belong to the Felidae family, which includes other big cats like lions, tigers, and cheetahs. ", //desc
  ),
  new GeniusKnowledge(
    "pet3", //id
    ["lv4"], //categoryIds
    "Bird", //title
    "https://www.birds.cornell.edu/home/wp-content/uploads/2023/09/334289821-Baltimore_Oriole-Matthew_Plante.jpg",//imageUrl
    "Birds are warm-blooded, feathered vertebrates known for their ability to fly (although not all birds can fly) and their distinctive beaks, beady eyes, and often melodious songs. Birds belong to the class Aves within the animal kingdom, and they are a diverse group of animals with numerous species found all over the world. ", //desc
  ),
  new GeniusKnowledge(
    "pet4", //id
    ["lv4"], //categoryIds
    "Rabbit", //title
    "https://www.vetcarepethospital.ca/wp-content/uploads/sites/247/2022/03/petrabbitcare-1-scaled.jpg",//imageUrl
    "Rabbits are small mammals belonging to the family Leporidae. They are known for their long ears, powerful hind legs, and propensity to reproduce quickly.", //desc
  ),
  new GeniusKnowledge(
    "pet5", //id
    ["lv4"], //categoryIds
    "Hamster", //title
    "https://supremepetfoods.com/wp-content/uploads/2015/08/iStock-1072781282-1200px.jpg",//imageUrl
    "Hamsters are small, nocturnal rodents that belong to the subfamily Cricetinae. They are popular pets due to their small size, ease of care, and adorable appearance. Hamsters are known for their round bodies, short legs, and distinctive cheek pouches.", //desc
  ),
  new GeniusKnowledge(
    "ExPet1", //id
    ["lv5"], //categoryIds
    "Sugar Glider", //title
    "https://www.wilderness.org.au/images/uploads/2ACH01R-1-Alamy-sugar-glider-CROP.jpg",//imageUrl
    "Sugar gliders are small, nocturnal marsupials native to the forests of Australia, New Guinea, and Indonesia. They are known for their unique appearance, gliding ability, and social nature. Sugar gliders are often kept as exotic pets.", //desc
  ),
  new GeniusKnowledge(
    "ExPet2", //id
    ["lv5"], //categoryIds
    "Talantula", //title
    "https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk2Nzg3NTQ5NDk3MjA1ODIy/150-pet-spider-names.png",//imageUrl
    "Tarantulas are intriguing creatures that play a role in various ecosystems and are appreciated for their beauty and distinct characteristics. They are often admired and studied by enthusiasts and researchers alike.", //desc
  ),
  new GeniusKnowledge(
    "ExPet3", //id
    ["lv5"], //categoryIds
    "Raccoon", //title
    "https://www.arrowexterminators.com/assets/istock-514622028_r69bg4m.jpg",//imageUrl
    "Raccoons are medium-sized, highly adaptable mammals known for their distinctive appearance and clever behavior. They are native to North America but have also been introduced to other parts of the world.", //desc
  ),
  new GeniusKnowledge(
    "ExPet4", //id
    ["lv5"], //categoryIds
    "Corn Snake", //title
    "https://www.arrowexterminators.com/assets/istock-162579385_YWNLXJv.jpg",//imageUrl
    "The corn snake (Pantherophis guttatus), also known as the red rat snake, is a non-venomous snake species native to North America. Corn snakes are popular among reptile enthusiasts and are often kept as pets due to their relatively small size, docile nature, and attractive color patterns.", //desc
  ),
  new GeniusKnowledge(
    "ExPet5", //id
    ["lv5"], //categoryIds
    "Ferret", //title
    "https://a-z-animals.com/media/2022/02/Sable-Ferret-header.jpg",//imageUrl
    "Ferrets are small, domesticated carnivorous mammals known for their playful and curious nature. They belong to the Mustelidae family, which also includes weasels, minks, otters, and badgers. Ferrets have been domesticated for thousands of years and are kept as pets and working animals.", //desc
  ),
];
