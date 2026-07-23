"use strict";

// Task 2
console.log("=== Task 2");

const hero = {
  name: "Odysseus",
  class: "rogue",
  level: 99 - 10 - 10, // First 10 for "just another gig" in Troy, second 10 for the journey back home
  isAlive: true, // Bad news for the uninvited guests: the homeowner is back
};

console.log("hero object:", hero, JSON.stringify(hero));

console.log("name: ", hero.name);
console.log("class: ", hero.class);
console.log("level: ", hero.level);
console.log("isAlive: ", hero.isAlive);

// Task 3
console.log("=== Task 3");

hero.stats = {
  hp: 5,
  mana: 15,
  strength: 80,
  agility: 100,
  intelligence: 999,
};

console.log("hero.stats: ", hero.stats);
console.log("hero.stats.strength: ", hero.stats.strength);
console.log("DOUBLE! intelligence: ", hero.stats.intelligence * 2);

// Task 4
console.log("=== Task 4");

hero.inventory = [
  "Sword",
  "Shield",
  "Trojan Horse Manual",
  "Fake Beard",
  "Boat Repair Kit",
  "Cheese",
  "GPS (broken)",
];

console.log("hero.inventory:", hero.inventory);
console.log("the 1st item: ", hero.inventory[0]);

const itemsCount = hero.inventory.length;

console.log("the last item: ", hero.inventory[itemsCount - 1]);
console.log("total: ", itemsCount);

// Task 5
console.log("=== Task 5");

const enemy = {
  name: "Cyclop",
  "critical hit chance": 0.15,
  "attack-speed": 2.5,
  ["damage-" + hero.class]: 50,
};

// enemy.critical hit chance // SyntaxError: Unexpected identifier 'hit'
//console.log(enemy.critical hit chance); // SyntaxError: missing ) after argument list
// через пробіл у назві властивості js не зможе це розібрати

//console.log(enemy.attack-speed); // ReferenceError: speed is not defined
// js сприйме як віднімання і шукатиме неіснуючу змінну speed

// console.log(enemy.damage-rogue); // ReferenceError: rogue is not defined
// js сприйме як віднімання і шукатиме неіснуючу змінну rogue

console.log('enemy["critical hit chance"]: ', enemy["critical hit chance"]);
console.log('enemy["attack-speed"]: ', enemy["attack-speed"]);
console.log(`enemy["damage-${hero.class}"]: `, enemy["damage-" + hero.class]);

// Task 6
console.log("=== Task 6");

hero.abilities = {
  attack: function () {
    return `${hero.name} атакує!`;
  },

  heal: () => {
    return `${hero.name} лікується.`;
  },

  levelUp: () => {
    return `${hero.name} досягнув ${hero.level + 1} рівня!`;
  },
};

console.log(hero.abilities.attack());
console.log(hero.abilities.heal());
console.log(hero.abilities.levelUp());

// Task 7
console.log("=== Task 7");

hero.location = {
  region: "The Ionian Sea",
  city: "Ithaca",
  coordinates: {
    x: 125,
    y: 340,
    z: 15,
  },
};

console.log("Region: ", hero.location.region);
console.log("Coordinates-z: ", hero.location.coordinates.z);

// Task 8
console.log("=== Task 8");

const villain = {
  name: "That Uninvited Guest",
  class: "bard",
  level: 27,
  isAlive: true,

  stats: {
    hp: 180,
    mana: 10,
    strength: 40,
    agility: 25,
    intelligence: 35,
  },

  inventory: [
    "Sword",
    "Shield",
    "Odysseus's Wine",
    "Odysseus's Bread",
    "Odysseus's Goat",
    "Odysseus's Throne",
    "Penelope's Patience",
  ],

  abilities: {
    attack: function () {
      return `${villain.name} атакує!`;
    },

    heal: () => {
      return `${villain.name} лікується.`;
    },

    levelUp: () => {
      return `${villain.name} досягнув ${villain.level + 1} рівня!`;
    },
  },

  location: {
    region: "Living Room",
    city: "Odysseus' House",
    coordinates: {
      x: 5,
      y: 2,
      z: 1,
    },
  },
};

console.log(`~${hero.name}~ vs ~${villain.name}~`);

if (hero.stats.hp > villain.stats.hp) {
  console.log(`${hero.name} має більше здоров'я (HP).`);
} else if (hero.stats.hp < villain.stats.hp) {
  console.log(`${villain.name} має більше здоров'я (HP).`);
} else {
  console.log("В обох однаково здоров'я (HP).");
}

console.log(
  `Учасники дуелі: ${hero.name} (${hero.inventory.join(", ")}) vs ${villain.name} (${villain.inventory.join(", ")})`,
);
