/**
 * storyData.js
 * Contains four complete branching narratives for the selection menu.
 * Updated with thumbnails for the Selection Page.
 */

export const allStories = {
  cyberpunk: {
    title: "Neon Paths",
    description: "A high-tech, low-life adventure in the year 2099.",
    thumbnail: "https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?q=80&w=400&h=250&auto=format&fit=crop",
    nodes: {
      start: {
        text: "You stand at the edge of a neon-lit city in the year 2099. A mysterious contact has offered you a job that could change your life. Do you accept?",
        image: "https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [
          { text: "Meet the contact at the Blue Velvet Lounge", nextNode: "lounge" },
          { text: "Decline and head to the outskirts", nextNode: "outskirts" }
        ]
      },
      lounge: {
        text: "The lounge is smoky and filled with low-life hackers. A hooded figure slides a data drive across the table. 'This contains the location of the Last Garden,' they whisper.",
        image: "https://images.unsplash.com/photo-1514525253361-bee8a187499b?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [
          { text: "Take the drive and leave immediately", nextNode: "chase" },
          { text: "Ask for more information first", nextNode: "betrayal" }
        ]
      },
      outskirts: {
        text: "The outskirts are quiet. You find an abandoned laboratory buried under the sand. The door is slightly ajar, emitting a faint green hum.",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [
          { text: "Enter the laboratory", nextNode: "lab" },
          { text: "Keep walking toward the horizon", nextNode: "wanderer" }
        ]
      },
      chase: {
        text: "As you leave, sirens wail. Corporate drones are tracking the drive! You need a fast exit.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [
          { text: "Duck into the dark sewers", nextNode: "sewers" },
          { text: "Try to outrun them on your hoverbike", nextNode: "bikeChase" }
        ]
      },
      sewers: {
        text: "The sewers are a maze. You find an underground resistance group who offers to help you decode the drive.",
        image: "https://images.unsplash.com/photo-1505134222055-634676162234?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [
          { text: "Trust the resistance", nextNode: "rebellionEnding" },
          { text: "Refuse and find your own way", nextNode: "lonerEnding" }
        ]
      },
      bikeChase: {
        text: "You weave through traffic at 200km/h. A drone fires a localized EMP. Your bike stalls!",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [
          { text: "Eject and jump to the lower levels", nextNode: "lab" },
          { text: "Surrender to the corporate guards", nextNode: "prisonEnding" }
        ]
      },
      lab: {
        text: "Inside the lab, you find a stasis pod with a living plant—the last of its kind. A computer terminal asks for a choice: Restore the atmosphere or Sell the data.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [
          { text: "Initiate Global Restoration", nextNode: "heroEnding" },
          { text: "Sell the location for millions", nextNode: "richEnding" }
        ]
      },
      betrayal: {
        text: "CONSEQUENCE: You waited too long. The 'contact' was a decoy. Security guards surround you. You are arrested for corporate espionage.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [{ text: "Restart Narrative", nextNode: "start" }]
      },
      wanderer: {
        text: "ENDING: The Wasteland. You walk until the city is a distant glint. You are just another ghost in the machine.",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [{ text: "Search for a new path", nextNode: "start" }]
      },
      heroEnding: {
        text: "VICTORY: The Green Dawn. Oxygen levels begin to rise. You have saved nature from extinction.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [{ text: "The End - Play Again?", nextNode: "start" }]
      },
      richEnding: {
        text: "ENDING: Gold & Chrome. You live in a luxury penthouse, but outside the windows, the world chokes on smog.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [{ text: "Try a different fate", nextNode: "start" }]
      },
      rebellionEnding: {
        text: "ENDING: The Revolution. With the data, the resistance shuts down the corporate grid.",
        image: "https://images.unsplash.com/photo-1455164155621-03824a52329e?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [{ text: "The End - Play Again?", nextNode: "start" }]
      },
      prisonEnding: {
        text: "BAD ENDING: Memory Wipe. You were caught. The corporation wipes your memories.",
        image: "https://images.unsplash.com/photo-1507537332164-9e95c86f1d23?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [{ text: "Wake up and try again", nextNode: "start" }]
      },
      lonerEnding: {
        text: "ENDING: The Hidden Cabin. You kept the data secret and built a small haven in the wastes.",
        image: "https://images.unsplash.com/photo-1449156001935-d28605757674?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [{ text: "The End - Play Again?", nextNode: "start" }]
      }
    }
  },
  fantasy: {
    title: "The Iron Crown",
    description: "A quest through a kingdom of magic and dragons.",
    thumbnail: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?q=80&w=400&h=250&auto=format&fit=crop",
    nodes: {
      start: {
        text: "The King is dead. You hold the map to the Iron Crown, the only relic that can unite the realm. The royal knights are closing in. Where do you hide?",
        image: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [
          { text: "Hide in the Whispering Woods", nextNode: "woods" },
          { text: "Charter a boat across the Serpent Sea", nextNode: "sea" }
        ]
      },
      woods: {
        text: "The trees speak in riddles. An ancient elf blocks your path, demanding a toll of blood or gold.",
        image: "https://images.unsplash.com/photo-1440615496174-ee7ecbe8e733?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [
          { text: "Offer your gold and pass", nextNode: "castle" },
          { text: "Refuse and fight for your way", nextNode: "woodsDeath" }
        ]
      },
      sea: {
        text: "A storm rises. A Kraken's tentacle grips the hull! The captain shouts for someone to man the cannons.",
        image: "https://images.unsplash.com/photo-1500390698606-1b7bf7418c20?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [
          { text: "Fire the cannons at the beast", nextNode: "seaVictory" },
          { text: "Abandon ship and swim to a nearby isle", nextNode: "island" }
        ]
      },
      castle: {
        text: "You reach the ruins where the crown is hidden. A dragon sleeps upon the pedestal.",
        image: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [
          { text: "Stealthily grab the crown", nextNode: "stealthVictory" },
          { text: "Attempt to tame the dragon", nextNode: "dragonRider" }
        ]
      },
      island: {
        text: "The island is not an island, but the back of a giant turtle. It carries you to the edge of the world.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [{ text: "Accept your new life as a hermit", nextNode: "hermitEnding" }]
      },
      woodsDeath: {
        text: "ENDING: The woods do not take kindly to intruders. You become part of the forest floor.",
        image: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [{ text: "Try again", nextNode: "start" }]
      },
      stealthVictory: {
        text: "VICTORY: You are the King! With the Iron Crown, the realm is at peace under your rule.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [{ text: "Play Again", nextNode: "start" }]
      },
      dragonRider: {
        text: "VICTORY: The Dragon Rider! You didn't just take the crown; you took the dragon. You are unstoppable.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [{ text: "Play Again", nextNode: "start" }]
      },
      seaVictory: {
        text: "ENDING: The beast is slain, but your ship is wrecked. You reach the shore with the map, but the crown is lost to the depths.",
        image: "https://images.unsplash.com/photo-1516466723207-a1c455ad5954?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [{ text: "Try again", nextNode: "start" }]
      },
      hermitEnding: {
        text: "ENDING: The World's End. You never found the crown, but you found a peace no King ever could.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [{ text: "Play Again", nextNode: "start" }]
      }
    }
  },
  mystery: {
    title: "The Silent Manor",
    description: "Solve a chilling murder in a house full of liars.",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&h=250&auto=format&fit=crop",
    nodes: {
      start: {
        text: "The storm rages outside. Inside, your host lies dead in the library. The doors are locked. Three suspects remain. Who do you question first?",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [
          { text: "Question the nervous Butler", nextNode: "butler" },
          { text: "Question the grieving Widow", nextNode: "widow" }
        ]
      },
      butler: {
        text: "The Butler claims he was in the kitchen, but you notice a silver letter opener missing from his belt.",
        image: "https://images.unsplash.com/photo-1566433331521-8208638686d0?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [
          { text: "Search the kitchen for the opener", nextNode: "kitchen" },
          { text: "Press him harder about his whereabouts", nextNode: "butlerTruth" }
        ]
      },
      widow: {
        text: "The Widow is dry-eyed and already counting the inheritance. She points to a muddy footprint near the body.",
        image: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [
          { text: "Follow the muddy trail to the garden", nextNode: "garden" },
          { text: "Check her shoes for matching mud", nextNode: "shoes" }
        ]
      },
      kitchen: {
        text: "You find the opener, but it's clean. Behind the stove, however, is a hidden passage.",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [
          { text: "Enter the passage", nextNode: "basement" },
          { text: "Call the suspects to the kitchen", nextNode: "confrontation" }
        ]
      },
      butlerTruth: {
        text: "He breaks down and admits he saw the Widow leaving the library with a heavy bag.",
        image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [{ text: "Arrest the Widow", nextNode: "justiceEnding" }]
      },
      justiceEnding: {
        text: "VICTORY: Detective! You caught the killer. The Widow is led away in cuffs as the sun rises.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [{ text: "Solve another case", nextNode: "start" }]
      },
      basement: {
        text: "The passage leads to a room full of forged documents. The host wasn't murdered; he faked his death!",
        image: "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [{ text: "Help him escape for a fee", nextNode: "greedyEnding" }]
      },
      greedyEnding: {
        text: "ENDING: You're rich, but you're an accomplice. You leave the manor together, disappearing into the night.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [{ text: "Try again", nextNode: "start" }]
      }
    }
  },
  horror: {
    title: "Echoes of Sector 7",
    description: "Survive the night in a derelict space station.",
    thumbnail: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=400&h=250&auto=format&fit=crop",
    nodes: {
      start: {
        text: "The oxygen alarm is blaring. You are alone on the USS Ishimura. Something is scratching inside the ventilation ducts. Do you investigate or hide?",
        image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [
          { text: "Grab the plasma cutter and check the vents", nextNode: "vents" },
          { text: "Seal yourself in the med-bay", nextNode: "medbay" }
        ]
      },
      vents: {
        text: "The lights flicker. A shadow with too many limbs lunges at you! Your plasma cutter is low on power.",
        image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [
          { text: "Fire a precise shot at its limbs", nextNode: "combatWin" },
          { text: "Run back to the command deck", nextNode: "command" }
        ]
      },
      medbay: {
        text: "The door locks with a satisfying hiss, but you realize the scratching is now coming from *inside* the room with you.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [
          { text: "Hide in a stasis pod", nextNode: "stasisEnding" },
          { text: "Try to vent the room's atmosphere", nextNode: "airlockEnding" }
        ]
      },
      combatWin: {
        text: "You survive the encounter, but the station is falling apart. An escape pod is launching in 60 seconds.",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [
          { text: "Jump into the pod", nextNode: "survivalEnding" },
          { text: "Try to save the station's AI first", nextNode: "heroicEnding" }
        ]
      },
      survivalEnding: {
        text: "VICTORY: You escaped! You watch as Sector 7 explodes into stardust. You are safe... for now.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [{ text: "Play Again", nextNode: "start" }]
      },
      stasisEnding: {
        text: "ENDING: Cold Sleep. You wake up 100 years later. The station is a museum, and you are its only living exhibit.",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [{ text: "Wake up again", nextNode: "start" }]
      },
      airlockEnding: {
        text: "BAD ENDING: You vented the monster, but you went with it. You float silently among the stars.",
        image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=800&h=400&auto=format&fit=crop",
        choices: [{ text: "Try to survive again", nextNode: "start" }]
      }
    }
  }
};