var quotes=[
    '“Its the possibility of having a dream come true that makes life interesting" ― Paulo Coelho, The Alchemist',
    '“There is no greater agony than bearing an untold story inside you.” ― Maya Angelou, I Know Why the Caged Bird Sings',
    '“And so we beat on, boats against the current, borne back ceaselessly into the past.”— F. Scott Fitzgerald, The Great Gatsby',
    '"I took a deep breath and listened to the old brag of my heart: I am, I am, I am."— Sylvia Plath, The Bell Jar',
    '   “It was times like these when I thought my father, who hated guns and had never been to any wars, was the bravest man who ever lived.” — Harper Lee, To Kill A Mockingbird',
    '“Memories warm you up from the inside. But they also tear you apart.” ― Haruki Murakami, Kafka on the Shore',
    '“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You are on your own. And you know what you know. And YOU are the one who will decide where to go...” ― Dr. Seuss, Oh, The Places Youll Go!',
    '“We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.” —J. K. Rowling, Harry Potter and the Order of the Phoenix',
    '"All that is gold does not glitter,Not all those who wander are lost;The old that is strong does not wither,Deep roots are not reached by the frost."— J. R. R. Tolkien, The Fellowship of the Ring '
];
var button=document.getElementById("button");
var text=document.getElementById("quote");
let images=[ 
"url(img/danielle-macinnes-222441-unsplash.jpg)",
"url(img/simon-matzinger-320332-unsplash.jpg)",
"url(img/banter-snaps-249352-unsplash.jpg)",
"url(img/kristopher-roller-188180-unsplash.jpg)"];
let box=document.getElementById("box");


function randomQuote(){
    var randomQuote=Math.floor(Math.random() * quotes.length);
    return quotes[randomQuote];
}

function randomImage(){
    for(let i=0;i<quotes.length;i++){
    var randomImage=Math.floor(Math.random() * images.length);
    return images[randomImage];
       
    }
       

    
}

button.addEventListener("click",function(){
    text.textContent=randomQuote();
    box.style.backgroundImage=randomImage();

});