//1.Stand in line 

// function nextInLine(arr, item) {
//     arr.push(item);
//     var remove = arr.shift();
//     return remove;
// }


//2. Golf Code

// var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
//     if(strokes == 1) {
//         return names[0];
//     } else if (strokes <= par - 2) {
//         return names[1];
//     } else if (strokes == par - 1) {
//         return names[2];
//     } else if (strokes == par) {
//         return names[3];
//     } else if (strokes == par + 1) {
//         return names[4];
//     } else if (strokes == par + 2) {
//         return names[5];
//     } else {
//         return names[6];
//     };    
// };


//3.Counting Cards

// var count = 0;

// function cc(card) {
//     var highCards = /[JKQA]/;

//     if(card > 1 && card < 7) {
//         count++;
//     } else if (card === 10 || String(card).match(highCards)) {
//         count--;
//     }

//     if(count > 0) return count + ' Bet';
//         return count + ' Hold';

// }

//4.  Profile Lookup

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfiles(name, prop) {
    for()
}






