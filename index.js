const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const sounds = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken"
}
const { moo, neigh, baa, oink, cluck } = sounds;
const animals = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken"
}
const { bessie, dolly, babe, little } = animals
const diffColors = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig"
}
const { blackAndWhite, black, pink } = diffColors
const colorRainbow = {
  red: "red",
  orange: "orange",
  yellow: "yellow",
  green: "green",
  blue: "blue",
  indigo: "indigo",
  violet: "violet"
}
const { red, orange, yellow, green, blue, indigo, violet } = colorRainbow
const rainbow = {
  r: "red",
  o: "orange",
  y: "yellow",
  g: "green",
  b: "blue",
  v: "violet"
}
const { r, o, y, g, b, v } = rainbow
const diffPurp = {
  indg: "indigo"
}
const { indg } = diffPurp
const objectDecon = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
}
const { muppetName, color, song, job, partner } = objectDecon
const songsToSing = {
  song2: "Moving Right Along",
  song4: "I Hope That Something Better Comes Along",
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy"
}
const { song2, song4, nestedJob, nestedPartner } = songsToSing