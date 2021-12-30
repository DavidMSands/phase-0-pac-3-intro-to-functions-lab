let result;

function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
} 

function logWhisper(string) {
    console.log(string.toLowerCase());
} 

function sayHiToHeadphonedRoommate(string) {
    console.log(string);
    console.log(string.toLowerCase());
    console.log(string.toUpperCase());

    if (string === string.toLowerCase()) {
        result = 'I can\'t hear you!';
    } else if (string === string.toUpperCase()) {
        result = "YES INDEED!"
    } else if (string === "Let's have dinner together!") {
        result = "I would love to!"
    }
    string
    return result;
 };


