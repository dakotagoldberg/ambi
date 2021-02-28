export const handwritingTrack = {
    id: 'handwriting',
    name: 'Handwriting',
    colors: ['#FDBC0C', '#FD800C'],
    icon: require('../../assets/icons/handwriting.png'),
    descriptionShort: 'Improve speed and legibility',
    activities: [
        {
            activityName: 'Getting Started',
            activityId: 'handwriting_getting_started',
            trackId: 'handwriting',
            trackName: 'Handwriting',
            activityDescriptionUltraShort: 'Write your name',
            activityDescriptionShort: `Welcome to Ambi! Let's start with some simple handwriting practice.`,
            activityDescriptionLong: `Welcome to Ambi! Let's start with some simple handwriting practice. Grab any piece of paper, and write your name once with your ${"dominant"} hand and then again with your ${"non-dominant"}. Don't worry if either look messy — you're on your way to improving your handwriting and strength. Once you're done, take a picture of each name and submit them in the appropriate places below. Don't worry, we'll never save any images you upload — this is just so you can track your progress!`,
            activityDifficulty: 'Easy',
        },
        {
            activityName: 'Alphabet #1',
            activityId: 'handwriting_alphabet_#1',
            trackId: 'handwriting',
            trackName: 'Handwriting',
            activityDescriptionUltraShort: 'Write the alphabet',
            activityDescriptionShort: `Practice your penmanship by writing the alphabet.`,
            activityDescriptionLong: `Welcome to Ambi! Let's start with some simple handwriting practice. Grab any piece of paper, and transcribe each upper and lower case letter of the alphabet once with your ${"dominant"} hand and then twice with your ${"non-dominant"} (see below “lesson text”). Don't worry if either looks messy — you're on your way to improving your handwriting and strength. Once you're done, take a picture of each transcription of the alphabet and submit them in the appropriate places below. Don't worry, we'll never save any images you upload — this is just so you can track your progress!`,
            lessonText: `Please transcribe the following once with your ${"dominant"} hand and twice with your ${"non-dominant"} hand: “Aa, Bb, Cc, Dd, Ee, Ff, Gg, Hh, Ii, Jj, Kk, Ll, Mm, Nn, Oo, Pp, Qq, Rr, Ss, Tt, Uu, Vv, Ww, Xx, Yy, Zz”`,
            activityDifficulty: 'Easy',
        },
        {
            activityName: 'Sentences #1',
            activityId: 'handwriting_sentences_#1',
            trackId: 'handwriting',
            trackName: 'Handwriting',
            activityDescriptionUltraShort: 'Repeat sentences five times',
            activityDescriptionShort: `Congratulations you’ve made it to Medium handwriting exercises, let’s get started!`,
            activityDescriptionLong: `Congratulations you’ve made it to Medium handwriting exercises, let’s get started! Grab any piece of paper, and transcribe the following sentences once with your ${"dominant"} hand and then four more times with your ${"non-dominant"}. Don't worry if either looks messy — you're on your way to improving your handwriting and strength. Once you're done, take a picture of your transcribed sentences and submit them in the appropriate places below.`,
            lessonText: `Please transcribe the following once with your ${"dominant"} hand and four times with your ${"non-dominant"} hand: “How razorback jumping frogs can level six piqued gymnasts. Grumpy wizards make toxic brew for the evil queen and Jack. Cozy lummox gives intelligent squid who asks for the job pen”`,
            activityDifficulty: 'Medium',
        },
        {
            activityName: 'Passage #1',
            activityId: 'handwriting_passage_#1',
            trackId: 'handwriting',
            trackName: 'Handwriting',
            activityDescriptionUltraShort: 'Repeat passage three times',
            activityDescriptionShort: `Congratulations you’ve made it to Hard handwriting exercises, let’s get started!`,
            activityDescriptionLong: `Congratulations you’ve made it to Hard handwriting exercises, let’s get started! Grab any piece of paper, and transcribe the following passage once with your ${"dominant"} hand and then twice with your ${"non-dominant"} hand. Don't worry if either looks messy — you're on your way to improving your handwriting and strength. Once you're done, take a picture of your transcribed passages and submit them in the appropriate places below. Don't worry, we'll never save any images you upload — this is just so you can track your progress!`,
            lessonText: `Please transcribe the following passage taken from the Tao Te Ching, once with your ${"dominant"} hand and twice with your ${"non-dominant"} hand: “The light overcomes the heavy; the still overcomes the frantic. The wise never forget their dignity; though surrounded by dazzling sights, they remain calm and unmoved. How did it happen that the emperor, master of ten thousand chariots, lost control of his empire? Being flippant himself, he lost the respect of his subjects. Failing to control himself, he lost the control of the empire.”`,
            activityDifficulty: 'Hard',
        }
    ]
}

export const tapGamesTrack = {
    id: 'tap',
    name: 'Tap Games',
    colors: ['#FF7F77', '#FC3DD2'],
    icon: require('../../assets/icons/iphone.png'),
    descriptionShort: 'Tap, drag, and trace to improve fine motor skills',
    activities: [
        {
            activityName: 'Getting Started',
            activityId: 'tap_getting_started',
            trackId: 'tap',
            trackName: 'Tap Games',
            activityDescriptionUltraShort: 'Learn about tap games',
            activityDescriptionShort: `Welcome to Ambi! Let's play some tap games!`,
            activityDescriptionLong: `Welcome to Ambi! Let's play some tap games! These will be on your device on this app.`,
            activityDifficulty: 'Easy',
        }
    ]
}

export const sportsTrack = {
    id: 'sports',
    name: 'Sports',
    colors: ['#09C4FF', '#096BFF'],
    icon: require('../../assets/icons/basketball.png'),
    descriptionShort: 'Improve athletic strength and accuracy',
    activities: [
        {
            activityName: 'Sports Exercise #1',
            activityId: 'sports_exercise_#1',
            trackId: 'sports',
            trackName: 'Sports',
            activityDescriptionUltraShort: 'Clench your hand',
            activityDescriptionShort: `Welcome to Ambi! Let's start with a hand clenching exercise to strengthen your hand.`,
            activityDescriptionLong: `Welcome to Ambi! Let's start with some simple sports exercises to strengthen your hand. Set a timer for three minutes and clench and unclench your ${"non-dominant"} hand continuously. This exercise will stretch your tendon, hand muscles and strengthen your joints`,
            activityDifficulty: 'Easy',
        },
        {
            activityName: 'Sports Exercise #2',
            activityId: 'sports_exercise_#2',
            trackId: 'sports',
            trackName: 'Sports',
            activityDescriptionUltraShort: 'Claw stretch',
            activityDescriptionShort: `Let's start with a claw stretch exercise to strengthen your hand and fingers.`,
            activityDescriptionLong: `Let's start with some simple sports exercises to strengthen your hand. Set a timer for five minutes and hold your ${"non-dominant"} hand out in front of you with your palm facing you. Then bend your fingertips down so that your fingers touch the base of each finger joint. Your hand should resemble that of a claw during this exercise. This exercise will stretch your finger tendons, finger muscles and strengthen your joints.`,
            activityDifficulty: 'Easy',
        },
        {
            activityName: 'Sports Exercise #3',
            activityId: 'sports_exercise_#3',
            trackId: 'sports',
            trackName: 'Sports',
            activityDescriptionUltraShort: 'Thumb exercise #1',
            activityDescriptionShort: `Congratulations on making it to Medium! Let's jump into thumb exercises to strengthen your grip.`,
            activityDescriptionLong: `Congratulations on making it to Medium! Let's jump into thumb exercises to strengthen your grip. The thumb touch exercise will increase the range of motion in your thumb, improving your proficiency in holding food and writing utensils. Begin by holding your hand out in front of you with your wrist straight. Then, gently touch your thumb to each of your fingertips, one at a time making the shape of an O (hold for 10 seconds each). Complete each of the following exercises three times in sets of 10 repetitions each. Repeat this exercise 10 times on your ${"non-dominant"} hand.`,
            activityDifficulty: 'Medium',
        },
        {
            activityName: 'Sports Exercise #4',
            activityId: 'sports_exercise_#4',
            trackId: 'sports',
            trackName: 'Sports',
            activityDescriptionUltraShort: 'Pinch strengthener',
            activityDescriptionShort: `Let's jump into pinching exercises to strengthen your pinch.`,
            activityDescriptionLong: `Let's jump into pinching exercises to strengthen your pinch. This exercise will help you strengthen the muscles of your finger and thumb, improving your proficiency in turning keys, pumping gas, and opening packages. First, grab a foam ball or ball up a sock if you do not have access to a foam ball. Then, pinch your object of choice between your fingers and thumb tightly for 60 seconds. Complete the above exercise 10 times with your ${"non-dominant"} hand.`,
            activityDifficulty: 'Medium',
        },
        {
            activityName: 'Sports Exercise #5',
            activityId: 'sports_exercise_#5',
            trackId: 'sports',
            trackName: 'Sports',
            activityDescriptionUltraShort: 'Thumb exercise #2',
            activityDescriptionShort: `Congratulations on making it to Hard! Let's jump into thumb exercises to strengthen your grip.`,
            activityDescriptionLong: `Congratulations on making it to Hard! Let's jump into thumb exercises to strengthen your grip. Complete each of the following exercises three times in sets of 10 repetitions each. Exercise 1) Begin by laying your ${"non-dominant"} hand palm down on a flat surface. Then wrap a rubber band on the base of your finger joints if you have access to one. Next, gently move your thumb away from the base of your fingers and hold for 10 seconds, and then glide your thumb back to your fingers (repeat 10 times). Exercise 2) Place your hand out in front of your palm up, before extending your thumb away from your fingers as far as you can. Then bend your thumb across your palm so that it meets your pinky finger and hold for 10 seconds (repeat 10 times). Complete each exercise in reps of 10, and switch between the two exercises three times with your ${"non-dominant"} hand,`,
            activityDifficulty: 'Hard',
        },
    ]
}

export const tracks = [
    handwritingTrack,
    tapGamesTrack,
    sportsTrack
]