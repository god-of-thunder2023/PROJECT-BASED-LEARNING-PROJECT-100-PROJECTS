const generateQuoteBtn = document.getElementById("quotebtn"); 
const quoteOutput = document.getElementById("quoteOutput");
const authorOutput = document.getElementById("authorOut");

generateQuoteBtn.addEventListener('click', generateQuote);

const arrayOfQuotes = [
    {
        author: "Albert Einstein",
        quote: "We cannot solve problems with the kind of thinking we employed when we came up with them."
    },
    {
        author: "Mark Twain",
        quote: "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too."
    },
    {
        author: "Eleanor Roosevelt",
        quote: "When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out."
    },
    {
        author: "Walter Anderson",
        quote: "It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest."
    },
    {
        author: "Diane McLaren",
        quote: "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together."
    },
    {
        author: "Mister Rogers",
        quote: "There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind."
    },
    
];

function generateQuote (){
    let random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1); 
    quoteOutput.innerHTML = `<span>${arrayOfQuotes[random].quote}</span>`;
    authorOutput.innerHTML = `<small>-${arrayOfQuotes[random].author}-</small>`;

    
}
// generateQuoteBtn.addEventListener('click', () => {
//     fetch('https://api.quotable.io/random')
//     .then((response) => response.json())
//     .then((data) => {
//         quoteOutput.innerHTML = data.content;
//         authorOutput.innerHTML = data.author;
//     })
// })