var quotes = ["When I catch you, I'm gonna pull out your eyes and stick 'em down your pants so you can watch me kick the crap outta you, okay? Next I'm gonna use your tongue to paint my boat!", "I think women and seamen don't mix", "Oh, so they have Internet on computers now!", "Hello, Simpson. I'm riding the bus today becuase Mother hid my car keys to punish me for talking to a woman on the phone. She was right to do it.", "I live in a single room above a bowling alley...and below another bowling alley.", "Last night's 'Itchy and Scratchy' was, without a doubt, the worst episode ever. Rest assured that I was on the Internet within minutes, registering my disgust throughout the world."];
var character = ["Frank Grimes", "Milhouse Van Houten", "Homer Simpson", "Abe Simpson", "Marge Simpson"];

var images = ["https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FFrankGrimes.png?1497567511887", "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002", "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523", "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FChiefWiggum.png?1497567511716", "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMoeSzyslak.png?1497567512411", "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523", "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002", "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"];

document.getElementById("btn").addEventListener("click", function(e) {
    e.preventDefault();
    var random = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[random];
    var randomas = Math.floor(Math.random() * (character.length));
    document.getElementById('character').innerHTML = character[randomas];
    var image = document.getElementById("image");
    var randomGenerate = Math.floor(Math.random() * (images.length));
    image.src = images[randomGenerate];
});