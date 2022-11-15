var quote = document.getElementById("quote");
var writer = document.getElementById("writer");

var quotes = [
    {
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        writer: "Marilyn Monroe"
    },
    {
        quote: "“Be yourself; everyone else is already taken.”",
        writer: "Oscar Wilde"
    },
    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        writer: "Albert Einstein"
    },
    {
        quote: "“So many books, so little time.”",
        writer: "Frank Zappa"
    },
    {
        quote: "“A room without books is like a body without a soul.”",
        writer: "Marcus Tullius Cicero"
    },
]

function showQuote() {

    var rdmQuote = Math.floor(Math.random() * quotes.length);
    console.log(rdmQuote)
    document.getElementById("quote").innerHTML = quotes[rdmQuote].quote;
    document.getElementById("writer").innerHTML = quotes[rdmQuote].writer;

}