use GitBash;

db.dropDatabase();

db.characters.insertMany([
  {
    name: "Homer Simpson",
    description: "Homer is the patriarch of the Simpson family. He works as a safety inspector at the Springfield Nuclear Power Plant, a position at odds with his careless, buffoonish personality. He is married to Marge Simpson, a stereotypical American housewife and mother. They have three children: Bart, a ten-year-old troublemaker; Lisa, a precocious eight-year-old activist; and Maggie, the baby of the family who rarely speaks, but communicates by sucking on a pacifier. Although Homer has many flaws, he has shown to have great caring, love, and even bravery to those he cares about and, sometimes, even others he doesn't. He served as the main protagonist of the 2007 film adaptation.",
    moves: {
      punch: {
        name: "Punch",
        damageMin: 10,
        damageMax: 16,
        defense: 10,
      },
      kick: {
        name: "Kick",
        damageMin: 15,
        damageMax: 22,
        defense: 5,
      },
      specialMove: {
        name: "Donut Thunder",
        damageMin: 30,
        damageMax: 55,
        defense: 3,
      },
    },
    sprites: {
      default: "./images/Homer/homer_default.png",
      default_inverted: "./images/Homer/homer_default_inverted.png",
    }
  },
  {
    name: "Dug",
    description: "Dug",
    moves: {
      punch: {
        name: "Punch",
        damageMin: 12,
        damageMax: 18,
        defense: 8,
      },
      kick: {
        name: "Kick",
        damageMin: 19,
        damageMax: 26,
        defense: 7,
      },
      block: {
        name: "Block",
        damageMin: 0,
        damageMax: 0,
        defense: 100,
      },
      specialMove: {
        name: "Bulldug Slam",
        damageMin: 25,
        damageMax: 35,
        defense: 0,
      },
    },
    sprites: {
      default: "./images/Dug/dug_default.png",
      default_inverted: "./images/Dug/dug_default_inverted.png",
    }
  }
  db.arenas.insertMany([
    {
      name: "Springfield Nuclear Power Plant",
      url: "./images/arenas/Homer_Arena.png"
    },
    {
      name: "Paradise Falls",
      url: "./images/arenas/ParadiseFalls_Arena.gif"
    },
    {
      name: "China",
      url: "./images/arenas/China_Arena.gif"
    },
    {
      name: "Mothership",
      url: "./images/arenas/Mothership_Arena.gif"
    },
    {
      name: "Echo Swamp",
      url: "./images/arenas/EchoSwamp_Arena.gif"
    },
    {
      name: "Devil's Ship",
      url: "./images/arenas/DevilsShip_Arena.gif"
    }
    
  ])
]);