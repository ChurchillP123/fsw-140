import { v4 as uuidv4 } from 'uuid';

export const listOfJokes = [
    {   id: uuidv4(),
        text: 'The first byte asks, "Are you ill?" The second byte replies, "No, just feeling a bit off."',
        isFunny: false
    },
    {   id: uuidv4(),
        text: 'How many programmers does it take to change a light bulb? None - Its a hardware problem.',
        isFunny: false
    }, 
    { 
        id: uuidv4(),
        text: "There are only 10 kinds of people in this world: those who know binary and those who don't.",
        isFunny: false
    },
    { 
        id: uuidv4(),
        text: "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
        isFunny: false
    }
];
