var quotes=["a","b","c","d","e"];
var button=document.getElementById("button");
var text=document.getElementById("quote")
function random(){
    var randomQuote=Math.floor(Math.random() * quotes.length);
    return quotes[randomQuote];
}

button.addEventListener("click",function(){
     text.textContent=random();
});