export const handwritingTrack = {
    id: 'handwriting',
    name: 'Handwriting',
    colors: ['#FDBC0C', '#FD800C'],
    descriptionShort: 'Improve speed and legibility',
    activities: [
        {
            activityName: 'Getting Started',
            activityId: 'handwriting_getting_started',
            track: 'handwriting',
            activityDescriptionShort: `Welcome to Ambi! Let's start with some simple handwriting practice.`,
            activityDescriptionLong: `Welcome to Ambi! Let's start with some simple handwriting practice. Grab any piece of paper, and write your name once with your ${"dominant"} hand and then again with your ${"non-dominant"}. Don't worry if either look messy — you're on your way to improving your handwriting and strength. Once you're done, take a picture of each name and submit them in the appropriate places below. Don't worry, we'll never save any images you upload — this is so we can score the readability of your writing and track your progress!`,
            activityDifficulty: 'easy',
        },
        {
            activityName: 'Alphabet #1',
            activityId: 'handwriting_alphabet_#1',
            track: 'handwriting',
            activityDescriptionShort: `Practice your penmanship by writing the alphabet.`,
            activityDescriptionLong: `Welcome to Ambi! Let's start with some simple handwriting practice. Grab any piece of paper, and write your name once with your ${"dominant"} hand and then again with your ${"non-dominant"}. Don't worry if either look messy — you're on your way to improving your handwriting and strength. Once you're done, take a picture of each name and submit them in the appropriate places below. Don't worry, we'll never save any images you upload — this is so we can score the readability of your writing and track your progress!`,
            activityDifficulty: 'easy',
        }
    ]
}

export const tapGamesTrack = {
    id: 'tap',
    name: 'Tap Games',
    colors: ['#FF7F77', '#FC3DD2'],
    descriptionShort: 'Tap, drag, and trace to improve fine motor skills',
    activities: [
        {
            activityName: 'Getting Started',
            activityId: 'tap_getting_started',
            track: 'tap',
            activityDescriptionShort: `Welcome to Ambi! Let's play some tap games!`,
            activityDescriptionLong: `Welcome to Ambi! Let's play some tap games! These will be on your device on this app.`,
            activityDifficulty: 'easy',
        }
    ]
}

export const sportsTrack = {
    id: 'sports',
    name: 'Sports',
    colors: ['#09C4FF', '#096BFF'],
    descriptionShort: 'Improve athletic strength and accuracy',
    activities: [
        {
            activityName: 'Getting Started',
            activityId: 'sports_getting_started',
            track: 'sports',
            activityDescriptionShort: `This is the first sports exercise.`,
            activityDescriptionLong: `This is the first sports exercise. You will be doing something to warm up.`,
            activityDifficulty: 'easy',
        }
    ]
}

export const tracks = [
    handwritingTrack,
    tapGamesTrack,
    sportsTrack
]