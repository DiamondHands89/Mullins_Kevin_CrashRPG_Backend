// src/seed.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Character from './models/Character';

dotenv.config();

const seedCharacters = async () => {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(process.env.MONGODB_URI!, {
    });
    console.log("MongoDB connected");

    // OPTIONAL: Clear existing characters (if you want a clean slate)
    await Character.deleteMany({});
    console.log("Existing characters cleared.");

    // Data to seed into the database
    const sampleCharacters = [
      {
        name: 'Arthas',
        class: 'Warrior',
        level: 5,
        stats: {
          health: 120,
          mana: 30,
          strength: 15,
          agility: 10
        }
      },
      {
        name: 'Merlin',
        class: 'Mage',
        level: 7,
        stats: {
          health: 80,
          mana: 150,
          strength: 5,
          agility: 12
        }
      },
      {
        name: 'Lyria',
        class: 'Archer',
        level: 6,
        stats: {
          health: 90,
          mana: 40,
          strength: 10,
          agility: 20
        }
      },
      {
        name: 'Gwyn',
        class: 'Cleric',
        level: 4,
        stats: {
          health: 100,
          mana: 100,
          strength: 8,
          agility: 8
        }
      }
    ];

    // Insert the sample data
    const inserted = await Character.insertMany(sampleCharacters);
    console.log(`Inserted ${inserted.length} characters.`);

    // Disconnect from the database
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  } catch (error) {
    console.error("Error seeding characters:", error);
    await mongoose.disconnect();
    process.exit(1);
  }
};

seedCharacters();
