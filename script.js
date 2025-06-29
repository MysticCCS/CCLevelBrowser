const cardsContainer = document.getElementById('cards');
const searchInput = document.getElementById('search');

document.getElementById('toggleTheme').onclick = () => {
  document.body.classList.toggle('dark');
};

function createCard({ episode, level, isDreamworld, image, levelCode, absLevel, scoreTargets, levelType, movesOrTime, s_or_m }) {
  const card = document.createElement('div');
  card.className = 'card';
  card.loading = 'lazy';
  //card.dataset.title = `episode ${episode} level ${level}`.toLowerCase();

  /*card.innerHTML = `
    <img src="/images/${image}" alt="Level Image" loading="lazy">
    <h3>${isDreamworld ? '🌙 Dreamworld - ' : ''}Episode ${episode}, Level ${level}</h3>
    <a href="https://mysticccs.github.io/playtester/?levelCode=${encodeURIComponent(JSON.stringify(levelCode))}" target="_blank">Play</a>
  `;*/
  let dreamlevel;
  if (isDreamworld === true) {
     dreamlevel = '🌙 Dreamworld';
  }
  else {
    dreamlevel = '';
  }
    let strings = {
  "map_decoration_text_episode_name_episode1": "Candy Town",
  "map_decoration_text_episode_name_episode2": "Candy Factory",
  "map_decoration_text_episode_name_episode3": "Lemonade Lake",
  "map_decoration_text_episode_name_episode4": "Chocolate Mountains",
  "map_decoration_text_episode_name_episode5": "Minty Meadow",
  "map_decoration_text_episode_name_episode6": "Easter Bunny Hills",
  "map_decoration_text_episode_name_episode7": "Bubblegum Bridge",
  "map_decoration_text_episode_name_episode8": "Salty Canyon",
  "map_decoration_text_episode_name_episode9": "Peppermint Palace",
  "map_decoration_text_episode_name_episode10": "Wafer Wharf",
  "map_decoration_text_episode_name_episode11": "Gingerbread Glade",
  "map_decoration_text_episode_name_episode12": "Pastille Pyramid ",
  "map_decoration_text_episode_name_episode13": "Cupcake Circus",
  "map_decoration_text_episode_name_episode14": "Caramel Cove",
  "map_decoration_text_episode_name_episode15": "Sweet Surprise",
  "map_decoration_text_episode_name_episode16": "Crunchy Castle",
  "map_decoration_text_episode_name_episode17": "Chocolate Barn",
  "map_decoration_text_episode_name_episode18": "Delicious Drifts",
  "map_decoration_text_episode_name_episode19": "Holiday Hut",
  "map_decoration_text_episode_name_episode20": "Candy Clouds",
  "map_decoration_text_episode_name_episode21": "Jelly Jungle",
  "map_decoration_text_episode_name_episode22": "Savory Shores",
  "map_decoration_text_episode_name_episode23": "Munchy Monolith",
  "map_decoration_text_episode_name_episode24": "Pearly White Plains",
  "map_decoration_text_episode_name_episode25": "Fudge Islands",
  "map_decoration_text_episode_name_episode26": "Pudding Pagoda",
  "map_decoration_text_episode_name_episode27": "Licorice Tower",
  "map_decoration_text_episode_name_episode28": "Polkapalooza",
  "map_decoration_text_episode_name_episode29": "Soda Swamp",
  "map_decoration_text_episode_name_episode30": "Rainbow Runway",
  "map_decoration_text_episode_name_episode31": "Butterscotch Boulders",
  "map_decoration_text_episode_name_episode32": "Sugary Shire",
  "map_decoration_text_episode_name_episode33": "Waffle Workshop",
  "map_decoration_text_episode_name_episode34": "Meringue Moor",
  "map_decoration_text_episode_name_episode35": "Ice Cream Caves",
  "map_decoration_text_episode_name_episode36": "Sour Salon",
  "map_decoration_text_episode_name_episode37": "Sticky Savannah",
  "map_decoration_text_episode_name_episode38": "Jelly Wagon",
  "map_decoration_text_episode_name_episode39": "Biscuit Bungalow",
  "map_decoration_text_episode_name_episode40": "Gummy Gardens",
  "map_decoration_text_episode_name_episode41": "Wafer Windmill",
  "map_decoration_text_episode_name_episode42": "Cereal Sea",
  "map_decoration_text_episode_name_episode43": "Taffy Tropics",
  "map_decoration_text_episode_name_episode44": "Glazed Grove",
  "map_decoration_text_episode_name_episode45": "Fizzy Falls",
  "map_decoration_text_episode_name_episode46": "Crunchy Courtyard",
  "map_decoration_text_episode_name_episode47": "Choco Rio Grande",
  "map_decoration_text_episode_name_episode48": "Toffee Tower",
  "map_decoration_text_episode_name_episode49": "Boneyard Bonanza",
  "map_decoration_text_episode_name_episode50": "Marshmallow Mountains",
  "map_decoration_text_episode_name_episode51": "Marmalade Meadow",
  "map_decoration_text_episode_name_episode52": "Chewy Citadel",
  "map_decoration_text_episode_name_episode53": "Eggnog Emporium",
  "map_decoration_text_episode_name_episode54": "Fudge Fjord",
  "map_decoration_text_episode_name_episode55": "Caramel Clearing",
  "map_decoration_text_episode_name_episode56": "Candy Calaboose",
  "map_decoration_text_episode_name_episode57": "Nougat Noir",
  "map_decoration_text_episode_name_episode58": "Gummy Galaxy",
  "map_decoration_text_episode_name_episode59": "Truffle Terrace",
  "map_decoration_text_episode_name_episode60": "Coco Crossroads",
  "map_decoration_text_episode_name_episode61": "Crumbly Coast",
  "map_decoration_text_episode_name_episode62": "Polka Park",
  "map_decoration_text_episode_name_episode63": "Delectable Depths",
  "map_decoration_text_episode_name_episode64": "Minty Meadow",
  "map_decoration_text_episode_name_episode65": "Cookie Crossing",
  "map_decoration_text_episode_name_episode66": "Soda Swamp",
  "map_decoration_text_episode_name_episode67": "Candy Clouds",
  "map_decoration_text_episode_name_episode68": "Caramel Keep",
  "map_decoration_text_episode_name_episode69": "Tasty Treasury",
  "map_decoration_text_episode_name_episode70": "Luscious Lagoon",
  "map_decoration_text_episode_name_episode71": "Mellow Marshmallow",
  "map_decoration_text_episode_name_episode72": "Siberian Sorbet",
  "map_decoration_text_episode_name_episode73": "Cloudberry Creek",
  "map_decoration_text_episode_name_episode74": "Bubblegum Hut",
  "map_decoration_text_episode_name_episode75": "Chocolate Chamber",
  "map_decoration_text_episode_name_episode76": "Raspberry Races",
  "map_decoration_text_episode_name_episode77": "Teapot Tower",
  "map_decoration_text_episode_name_episode78": "Barking Boutique",
  "map_decoration_text_episode_name_episode79": "Banana Beach",
  "map_decoration_text_episode_name_episode80": "Snack Shack",
  "map_decoration_text_episode_name_episode81": "Fungi Forest",
  "map_decoration_text_episode_name_episode82": "Marmalade Moon",
  "map_decoration_text_episode_name_episode83": "Wonky Wonderland",
  "map_decoration_text_episode_name_episode84": "Drizzly Dale",
  "map_decoration_text_episode_name_episode85": "Bonbon Bistro",
  "map_decoration_text_episode_name_episode86": "Diamond District",
  "map_decoration_text_episode_name_episode87": "Butter Rum Reef",
  "map_decoration_text_episode_name_episode88": "Hoax Hollow",
  "map_decoration_text_episode_name_episode89": "Honey Hut",
  "map_decoration_text_episode_name_episode90": "Brulee Bay",
  "map_decoration_text_episode_name_episode91": "Candied Cliffs",
  "map_decoration_text_episode_name_episode92": "Candy Keep",
  "map_decoration_text_episode_name_episode93": "Syrupy Circus",
  "map_decoration_text_episode_name_episode94": "Festive Forest",
  "map_decoration_text_episode_name_episode95": "Peppermint Party",
  "map_decoration_text_episode_name_episode96": "Mount Chocolympus",
  "map_decoration_text_episode_name_episode97": "Flavor Field",
  "map_decoration_text_episode_name_episode98": "Divine Diner",
  "map_decoration_text_episode_name_episode99": "Dessert Desert",
  "map_decoration_text_episode_name_episode100": "Delicious Dynasty",
  "map_decoration_text_episode_name_episode101": "Precious Pond",
  "map_decoration_text_episode_name_episode102": "Lullaby Lake",
  "map_decoration_text_episode_name_episode103": "Candy Canyon",
  "map_decoration_text_episode_name_episode104": "Biscuit Bay",
  "map_decoration_text_episode_name_episode105": "Wacky Waterhole",
  "map_decoration_text_episode_name_episode106": "Scrumptious Studio",
  "map_decoration_text_episode_name_episode107": "Vanilla Valley",
  "map_decoration_text_episode_name_episode108": "Toffee Teasprings",
  "map_decoration_text_episode_name_episode109": "Sundae Stables",
  "map_decoration_text_episode_name_episode110": "Milky Marina",
  "map_decoration_text_episode_name_episode111": "Marzipan Mine",
  "map_decoration_text_episode_name_episode112": "Honey Highlands",
  "map_decoration_text_episode_name_episode113": "Taffy Treetops",
  "map_decoration_text_episode_name_episode114": "Sugar Shrubs",
  "map_decoration_text_episode_name_episode115": "Sweet Skies",
  "map_decoration_text_episode_name_episode116": "Piñata Park",
  "map_decoration_text_episode_name_episode117": "Sprinkle Sea",
  "map_decoration_text_episode_name_episode118": "Blueberry Brush",
  "map_decoration_text_episode_name_episode119": "Wiggly Wheel",
  "map_decoration_text_episode_name_episode120": "Delightful Docks",
  "map_decoration_text_episode_name_episode121": "Fruity Fairground",
  "map_decoration_text_episode_name_episode122": "Bonbon Beanstalk",
  "map_decoration_text_episode_name_episode123": "Icing Islands",
  "map_decoration_text_episode_name_episode124": "Apricot Alley",
  "map_decoration_text_episode_name_episode125": "Peanut Pass",
  "map_decoration_text_episode_name_episode126": "Licorice Luna",
  "map_decoration_text_episode_name_episode127": "Funky Farm",
  "map_decoration_text_episode_name_episode128": "Kooky Kingdom",
  "map_decoration_text_episode_name_episode129": "Praline Pavilion",
  "map_decoration_text_episode_name_episode130": "Hippy Hills",
  "map_decoration_text_episode_name_episode131": "Spicy Shop",
  "map_decoration_text_episode_name_episode132": "Custard Coast",
  "map_decoration_text_episode_name_episode133": "Vanilla Villa",
  "map_decoration_text_episode_name_episode134": "Bubblegum Bazaar",
  "map_decoration_text_episode_name_episode135": "Corny Crossroads",
  "map_decoration_text_episode_name_episode136": "Soda Surf",
  "map_decoration_text_episode_name_episode137": "Cavity Cave",
  "map_decoration_text_episode_name_episode138": "Tricky Tracks",
  "map_decoration_text_episode_name_episode139": "Luscious Lane",
  "map_decoration_text_episode_name_episode140": "Shaky Shire",
  "map_decoration_text_episode_name_episode141": "Research Reef",
  "map_decoration_text_episode_name_episode142": "Treacle Retreat",
  "map_decoration_text_episode_name_episode143": "Radiant Resort",
  "map_decoration_text_episode_name_episode144": "Dainty Dunes",
  "map_decoration_text_episode_name_episode145": "Pastry Peaks",
  "map_decoration_text_episode_name_episode146": "Chilly Chimneys",
  "map_decoration_text_episode_name_episode147": "Candy Countdown",
  "map_decoration_text_episode_name_episode148": "Gumball Gorge",
  "map_decoration_text_episode_name_episode149": "Scrumptious Slopes",
  "map_decoration_text_episode_name_episode150": "Fizzy Factory",
  "map_decoration_text_episode_name_episode151": "Tasty Tops",
  "map_decoration_text_episode_name_episode152": "Smiley Seas",
  "map_decoration_text_episode_name_episode153": "Crumbly Crossing",
  "map_decoration_text_episode_name_episode154": "Swirly Steppes",
  "map_decoration_text_episode_name_episode155": "Sugary Stage",
  "map_decoration_text_episode_name_episode156": "Frosty Fields",
  "map_decoration_text_episode_name_episode157": "Marzipan Meadow",
  "map_decoration_text_episode_name_episode158": "Glittery Grove",
  "map_decoration_text_episode_name_episode159": "Cupcake Clinic",
  "map_decoration_text_episode_name_episode160": "Nougat Nebula",
  "map_decoration_text_episode_name_episode161": "Cobweb Canopy",
  "map_decoration_text_episode_name_episode162": "Bouncy Bayou",
  "map_decoration_text_episode_name_episode163": "Crispy Clearing",
  "map_decoration_text_episode_name_episode164": "Haystack Hills",
  "map_decoration_text_episode_name_episode165": "Popsicle Plateau",
  "map_decoration_text_episode_name_episode166": "Delicate Dale",
  "map_decoration_text_episode_name_episode167": "Blooming Backyard",
  "map_decoration_text_episode_name_episode168": "Savory Springs",
  "map_decoration_text_episode_name_episode169": "Watermelon Waves",
  "map_decoration_text_episode_name_episode170": "Candy Concert",
  "map_decoration_text_episode_name_episode171": "Frosting Fortress",
  "map_decoration_text_episode_name_episode172": "Truffle Trench",
  "map_decoration_text_episode_name_episode173": "Slushie Studio",
  "map_decoration_text_episode_name_episode174": "Wafer Waterfall",
  "map_decoration_text_episode_name_episode175": "Strawberry Steps",
  "map_decoration_text_episode_name_episode176": "Honey Heights",
  "map_decoration_text_episode_name_episode177": "Crunchy Comet",
  "map_decoration_text_episode_name_episode178": "Meringue Mansion",
  "map_decoration_text_episode_name_episode179": "Fabulous Fair",
  "map_decoration_text_episode_name_episode180": "Cocoa Cove",
  "map_decoration_text_episode_name_episode181": "Balloon Barn",
  "map_decoration_text_episode_name_episode182": "Fudgy Fort",
  "map_decoration_text_episode_name_episode183": "Popcorn Planet",
  "map_decoration_text_episode_name_episode184": "Pearly Parlor",
  "map_decoration_text_episode_name_episode185": "Peppermint Pond",
  "map_decoration_text_episode_name_episode186": "Rainbow Rapids",
  "map_decoration_text_episode_name_episode187": "Tacky Tent",
  "map_decoration_text_episode_name_episode188": "Glazing Glen",
  "map_decoration_text_episode_name_episode189": "Peppermint Portal",
  "map_decoration_text_episode_name_episode1201": "Sleepy Slopes",
  "map_decoration_text_episode_name_episode1202": "Funky Factory",
  "map_decoration_text_episode_name_episode1203": "Honey Hot Tub",
  "map_decoration_text_episode_name_episode1204": "Aurora Chocorealis",
  "map_decoration_text_episode_name_episode1205": "Lollipop Lanterns",
  "map_decoration_text_episode_name_episode1206": "Twilight Egg",
  "map_decoration_text_episode_name_episode1207": "Crazy Crossing",
  "map_decoration_text_episode_name_episode1208": "Nerdy Nebula",
  "map_decoration_text_episode_name_episode1209": "Bonbon Baths",
  "map_decoration_text_episode_name_episode1210": "Sparkle Submarino",
  "map_decoration_text_episode_name_episode1211": "Cookie Cabana",
  "map_decoration_text_episode_name_episode1212": "Dizzy Dessert",
  "map_decoration_text_episode_name_episode1213": "Cotton Carnival",
  "map_decoration_text_episode_name_episode1214": "Tiki Fiesta",
  "map_decoration_text_episode_name_episode1215": "Sweet Dreams",
  "map_decoration_text_episode_name_episode1216": "Sleepy Sunrise",
  "map_decoration_text_episode_name_episode1217": "Funny Farm",
  "map_decoration_text_episode_name_episode1218": "Marshmallow Madness",
  "map_decoration_text_episode_name_episode1219": "Blooming Bakery",
  "map_decoration_text_episode_name_episode1220": "Funky Fortress",
  "map_decoration_text_episode_name_episode1221": "Jurassic Jaws",
  "map_decoration_text_episode_name_episode1222": "Coral Corral",
  "map_decoration_text_episode_name_episode1223": "Zany Ziggurat",
  "map_decoration_text_episode_name_episode1224": "Moonshot Molars",
  "map_decoration_text_episode_name_episode1225": "Bonkers Bakery",
  "map_decoration_text_episode_name_episode1226": "Candy Kaiju",
  "map_decoration_text_episode_name_episode1227": "Fanciful Fort",
  "map_decoration_text_episode_name_episode1228": "Rambunctious Riffs",
  "map_decoration_text_episode_name_episode1229": "Bubbly Bog",
  "map_decoration_text_episode_name_episode1230": "Jiggly Gym",
  "map_decoration_text_episode_name_episode1231": "Starlight Station",
  "map_decoration_text_episode_name_episode1232": "Snoozy Slopes",
  "map_decoration_text_episode_name_episode1233": "Extraordinary Estate",
  "map_decoration_text_episode_name_episode1234": "Sprinkle Springs",
  "map_decoration_text_episode_name_episode1235": "Gelato Grotto",
  "map_decoration_text_episode_name_episode1236": "Sweet Beat",
  "map_decoration_text_episode_name_episode1237": "Surreal Safari",
  "map_decoration_text_episode_name_episode1238": "Charming Carnival",
  "map_decoration_text_episode_name_episode1239": "Snoozy Strike",
  "map_decoration_text_episode_name_episode1240": "Playful Pavilion",
  "map_decoration_text_episode_name_episode1241": "Twilight Tulips",
  "map_decoration_text_episode_name_episode1242": "Whimsical Waves",
  "map_decoration_text_episode_name_episode1243": "Banana Bliss",
  "map_decoration_text_episode_name_episode1244": "Nocturnal Nuisance",
  "map_decoration_text_episode_name_episode1245": "Dozy Dawn"
    }
  let episodeName = `map_decoration_text_episode_name_episode${episode}`
  let e =  strings[episodeName];
  if (e === undefined) {
    e = `Episode ${episode}`;
  }
    if (isDreamworld === false) { 
  card.dataset.title = `Level ${absLevel}, Episode ${e}`.toLowerCase();
}
else {
  card.dataset.title = `Dreamworld Level ${absLevel}, Episode ${e}`.toLowerCase();
}
  card.innerHTML = `
    <img src="./images/${image}" alt="Level Image" loading="lazy">
    <h3>${dreamlevel} Level ${absLevel} | ${e}</h3>
    <p>Score Targets: <strong>${scoreTargets[0]}</strong> for 1 Star, <strong>${scoreTargets[1]}</strong> for 2 Stars, <strong>${scoreTargets[2]}</strong> for 3 Stars.</p>
    <p>Level Type: <strong>${levelType}</strong></p>
    <p><strong>${movesOrTime} ${s_or_m}</strong></p>
    <a href="https://mysticccs.github.io/playtester/?levelCode=${encodeURIComponent(JSON.stringify(levelCode))}" target="_blank">Play</a>
  `;
  

  cardsContainer.appendChild(card);
}

async function loadLevels() {
  const card = document.createElement('div');
 // const res = await fetch('/api/levels');
 // console.log(res)
  const res = await fetch('./data.json');
  const data = await res.json();
  data.forEach(createCard);
}

searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    card.style.display = card.dataset.title.includes(q) ? '' : 'none';
  });
});

loadLevels();
