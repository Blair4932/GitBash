use GitBash;

db.dropDatabase();

db.characters.insertMany([
  {
    name: "Homer Simpson",
    file_name:"homer_simpson",
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
      block: {
        name: "Block",
        damageMin: 0,
        damageMax: 0,
        defense: 100,
      },
      specialMove: {
        name: "Donut Thunder",
        damageMin: 30,
        damageMax: 55,
        defense: 3,
      },
    },
    sprites: {
      default: "./images/character_sprites/homer/homer_default.png",
      default_inverted: "./images/character_sprites/homer/homer_default_inverted.png",
    }
  },
  {
    name: "Dug",
    file_name:"dug",
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
      default: "./images/character_sprites/dug/dug_default.png",
      default_inverted: "./images/character_sprites/dug/dug_default_inverted.png",
    }
  },
  {
    name: "Ragey",
    file_name: "ragey",
    description: "Raging little dude with drills for hands, a real powerhouse of machinary you would not want to mess with!",
    moves: {
      punch: {
        name: "Punch",
        damageMin: 18,
        damageMax: 26,
        defense: 5,
      },
      kick: {
        name: "Kick",
        damageMin: 10,
        damageMax: 15,
        defense: 7,
      },
      block: {
        name: "Block",
        damageMin: 0,
        damageMax: 0,
        defense: 100,
      },
      specialMove: {
        name: "Drillbit Donk",
        damageMin: 30,
        damageMax: 45,
        defense: 3,
      },
    },
    sprites: {
      default: "./images/character_sprites/Ragey/Ragey_default.png",
      default_inverted: "./images/character_sprites/Ragey/Ragey_default_inverted",
    }
  },
  {
    name: "Mickey Mouse",
    file_name:"mickey_mouse",
    description: "The evil CEO of multi-national Disney corp, a cunning and careful mouse not to be trusted in a fair fight",
    moves: {
      punch: {
        name: "Punch",
        damageMin: 9,
        damageMax: 14,
        defense: 8,
      },
      kick: {
        name: "Kick",
        damageMin: 15,
        damageMax: 18,
        defense: 7,
      },
      block: {
        name: "Block",
        damageMin: 0,
        damageMax: 0,
        defense: 100,
      },
      specialMove: {
        name: "Its a small world",
        damageMin: 40,
        damageMax: 55,
        defense: 5,
      },
    },
    sprites: {
      default: "./images/character_sprites/Mickey_Mouse/Mickey_Mouse_default.png",
      default_inverted: "./images/character_sprites/dug/Mickey_Mouse_default_inverted.png",
    }
  },
  {
    name: "Jasmine",
    file_name:"jasmine",
    description: "The be-dazzling princess of Agrabah, there is more to this warrior than meets the eye. Handy with a sword as well as other things she's a strong choice in the ring.",
    moves: {
      punch: {
        name: "Punch",
        damageMin: 8,
        damageMax: 14,
        defense: 8,
      },
      kick: {
        name: "Kick",
        damageMin: 16,
        damageMax: 23,
        defense: 7,
      },
      block: {
        name: "Block",
        damageMin: 0,
        damageMax: 0,
        defense: 100,
      },
      specialMove: {
        name: "Jasmine Tea",
        damageMin: 40,
        damageMax: 50,
        defense: 2,
      },
    },
    sprites: {
      default: "./images/character_sprites/Jasmine/Jasmine_default.png",
      default_inverted: "./images/character_sprites/Jasmine/Jasmine_default_inverted.png",
    }
  },
  {
    name: "Ghost Rider",
    file_name:"ghost_rider",
    description: "The firey skeleton man that is ghost rider is a tough opponent, the fact that it took Nicholas Cage to portrey this beast in the popular movie franchise is reason enough to pick this fighter",
    moves: {
      punch: {
        name: "Punch",
        damageMin: 14,
        damageMax: 18,
        defense: 8,
      },
      kick: {
        name: "Kick",
        damageMin: 18,
        damageMax: 24,
        defense: 7,
      },
      block: {
        name: "Block",
        damageMin: 0,
        damageMax: 0,
        defense: 100,
      },
      specialMove: {
        name: "Skelly Smack",
        damageMin: 40,
        damageMax: 45,
        defense: 0,
      },
    },
    sprites: {
      default: "./images/character_sprites/Ghost_Rider/Ghost_Rider_default.png",
      default_inverted: "./images/character_sprites/Ghost_Rider/Ghost_Rider_default_inverted.png",
    }
  },
  {
    name: "Garfield",
    file_name:"garfield",
    description: "The surprtisingly nimble feline frenzie that is garfield, a poised and agile fighter, who loves lasagne goes without saying.",
    moves: {
      punch: {
        name: "Punch",
        damageMin: 10,
        damageMax: 15,
        defense: 8,
      },
      kick: {
        name: "Kick",
        damageMin: 18,
        damageMax: 27,
        defense: 7,
      },
      block: {
        name: "Block",
        damageMin: 0,
        damageMax: 0,
        defense: 100,
      },
      specialMove: {
        name: "La-Slam-Ya",
        damageMin: 45,
        damageMax: 55,
        defense: 0,
      },
    },
    sprites: {
      default: "./images/character_sprites/Garfield/Garfield_default.png",
      default_inverted: "./images/character_sprites/Garfield/Garfield_default_inverted.png",
    }
  },
  {
    name: "Mumble",
    file_name:"mumble",
    description: "The slippery protagonist from the smash hit Happy Feet, Mumble has a plethora of moves, enhanced by hes extremely speedy feet.",
    moves: {
      punch: {
        name: "Punch",
        damageMin: 12,
        damageMax: 18,
        defense: 8,
      },
      kick: {
        name: "Kick",
        damageMin: 16,
        damageMax: 22,
        defense: 7,
      },
      block: {
        name: "Block",
        damageMin: 0,
        damageMax: 0,
        defense: 100,
      },
      specialMove: {
        name: "Clappy Feet",
        damageMin: 35,
        damageMax: 45,
        defense: 0,
      },
    },
    sprites: {
      default: "./images/character_sprites/Mumble/Mumble_default.png",
      default_inverted: "./images/character_sprites/Ghost_Rider/Mumble_default_inverted.png",
    }
  },
  {
    name: "Iron Man",
    file_name:"iron_man",
    description: "The intelligent and athletic billionaire philanthropist (Robert Downey Jr) has more than enough firepower to see you through your next fight.",
    moves: {
      punch: {
        name: "Punch",
        damageMin: 12,
        damageMax: 15,
        defense: 8,
      },
      kick: {
        name: "Kick",
        damageMin: 20,
        damageMax: 24,
        defense: 7,
      },
      block: {
        name: "Block",
        damageMin: 0,
        damageMax: 0,
        defense: 100,
      },
      specialMove: {
        name: "Pew Pew Replusor",
        damageMin: 40,
        damageMax: 50,
        defense: 0,
      },
    },
    sprites: {
      default: "./images/character_sprites/Iron_Man/Iron_Man_default.png",
      default_inverted: "./images/character_sprites/Iron_Man/Iron_Man_default_inverted.png",
    }
  },
  {
    name: "Cpt Jack Sparrow",
    file_name:"cpt_jack_sparrow",
    description: "Witty Jack, notorious pirate captain who has bested many a foe with his instinctive wit, and enchanting good looks, a strong fighter indeed.",
    moves: {
      punch: {
        name: "Punch",
        damageMin: 10,
        damageMax: 15,
        defense: 8,
      },
      kick: {
        name: "Kick",
        damageMin: 15,
        damageMax: 20,
        defense: 7,
      },
      block: {
        name: "Block",
        damageMin: 0,
        damageMax: 0,
        defense: 100,
      },
      specialMove: {
        name: "Why is the rum gone?",
        damageMin: 40,
        damageMax: 55,
        defense: 0,
      },
    },
    sprites: {
      default: "./images/character_sprites/Jack_Sparrow/Jack_Sparrow_default.png",
      default_inverted: "./images/character_sprites/Jack_Sparrow/Jack_Sparrow_default_inverted.png",
    }
  }
])


db.arenas.insertMany([
  {
    name: "Paradise Falls",
    file_name:"paradise_falls",
    url: "./images/arenas/ParadiseFalls_Arena.gif"
  },
  {
    name: "China",
    file_name:"china",
    url: "./images/arenas/China_Arena.gif"
  },
  {
    name: "Mothership",
    file_name:"mothership",
    url: "./images/arenas/Mothership_Arena.gif"
  },
  {
    name: "Mustafar",
    file_name:"mustafar",
    url: "./images/arenas/mustafar.gif"
  },
  {
    name: "Devil's Ship",
    file_name:"devils_ship",
    url: "./images/arenas/DevilsShip_Arena.gif"
  },
]);

db.users.insertMany([
  {
    userName: "bigdaddy4329",
    email: "",
    password: "1234",
    wins: 19,
    losses: 9,
  },
  {
    userName: "lebronJamesTheFirst",
    email: "",
    password: "808080808",
    wins: 7,
    losses: 18,
  },
  {
    userName: "stankMaster420",
    email: "",
    password: "13241546bbff",
    wins: 15,
    losses: 9,
  },
  {
    userName: "derekTHEgiant",
    email: "",
    password: "bigfeetbigfeet",
    wins: 8,
    losses: 22,
  },
  {
    userName: "SheriffWoody",
    email: "",
    password: "Myrealnameiswoodyharelsonorsomething!",
    wins: 10,
    losses: 21,
  }
])