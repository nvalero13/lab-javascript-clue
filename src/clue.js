// ITERATION 1

// Suspects Array

class Suspect {
  constructor(firstName, lastName, occupation, age, description, image, color) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.occupation = occupation;
    this.age = age;
    this.description = description;
    this.image = image;
    this.color = color;
  }
}

const mrGreen = new Suspect(
  "Jacob",
  "Green",
  "Entrepeneur",
  45,
  "He has a lot of connections",
  "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  "green"
);
const drOrchid = new Suspect(
  "Doctor",
  "Orchid",
  "Scientist",
  26,
  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  "white"
);
const profPlum = new Suspect(
  "Victor",
  "Plum",
  "Designer",
  22,
  "Billionaire video game designer",
  "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
  "purple"
);

const suspectsArray = [mrGreen, drOrchid, profPlum];

// Rooms Array

class Room {
  constructor(name) {
    this.name = name;
  }
}

const diningRoom = new Room("Dining Room");
const conservatory = new Room("Conservatory");
const kitchen = new Room("Kitchen");

const roomsArray = [diningRoom, conservatory, kitchen];

// Weapons Array

class Weapon {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
}

const rope = new Weapon("Rope", 10);
const knife = new Weapon("Knife", 8);
const candlestick = new Weapon("Candlestick", 2);

const weaponsArray = [rope, knife, candlestick];

// ITERATION 2

function selectRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

function pickMystery() {
  return {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray),
  };
}

// ITERATION 3

function revealMystery() {
    return `${pickMystery().suspect.firstName} ${pickMystery().suspect.lastName} killed Mr. Boddy using the ${pickMystery().weapon.name.toLowerCase()} in the ${pickMystery().room.name}!`
}


pickMystery()
console.log(revealMystery())
