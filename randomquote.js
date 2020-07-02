document.addEventListener('DOMContentLoaded', () => {
const arr=[["The greatest glory in living lies not in never falling, but in rising every time we fall.", "Nelson Mandela"],
["The way to get started is to quit talking and begin doing." ,"Walt Disney"],
["Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", "Steve Jobs"],
["If life were predictable it would cease to be life, and be without flavor." ,"Eleanor Roosevelt"],
["If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", "Oprah Winfrey"],
["If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." ,"James Cameron"],
["Life is what happens when you're busy making other plans." ,"John Lennon"],
["You will face many defeats in life, but never let yourself be defeated.","Maya Angelou"],
["The greatest glory in living lies not in never falling, but in rising every time we fall." ,"Nelson Mandela"],
["In the end, it's not the years in your life that count. It's the life in your years." ,"Abraham Lincoln"],
["Never let the fear of striking out keep you from playing the game.","Babe Ruth"],
["Life is either a daring adventure or nothing at all." ,"Helen Keller"],
["Many of life's failures are people who did not realize how close they were to success when they gave up." ,"Thomas A. Edison"],
["You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose." ,"Dr. Seuss"],
["Success is not final; failure is not fatal: It is the courage to continue that counts." ,"Winston S. Churchill"],
["Success usually comes to those who are too busy to be looking for it." ,"Henry David Thoreau"],
["The way to get started is to quit talking and begin doing." ,"Walt Disney"],
["If you really look closely, most overnight successes took a long time." ,"Steve Jobs"],
["The secret of success is to do the common thing uncommonly well." ,"John D. Rockefeller Jr."],
["I find that the harder I work, the more luck I seem to have." ,"Thomas Jefferson"],
["The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere." ,"Barack Obama"]]
// let bg=document.body.style.backgroundColor;
let qBox=document.getElementById("quote-box");
const bg=["#D0B70F","#BA3418","#204D43","#204D43","#97203C","#A08739","#2F5213","#7B8B88","#374525","#EE3598"];
const colors=["#b590ca","#a8d3da","#f5cab3","#f3ecb8","#8ac6d1","#a7e9af","#c2e8ce","#f5b5fc","#c6cfff","#f2f2b0","#eec1ea","#A79090","#77EDB4"];
let random=Math.floor(Math.random()*colors.length);
let randbg=Math.floor(Math.random()*bg.length);
qBox.style.backgroundColor="white";
document.body.style.backgroundColor=bg[randbg];
let btn=document.getElementById("new-quote");
btn.addEventListener("click",generateQuote);
btn.style.backgroundColor=bg[randbg];
let text=document.getElementById("text");
text.style.color=bg[randbg];
let qq=document.getElementById("quoteg");
let authorText=document.getElementById("author");
authorText.style.color=bg[randbg];
qq.style.color=bg[randbg];
document.getElementById("tweet").style.color=bg[randbg];

function generateQuote()
{
    
const r=Math.floor(Math.random() * arr.length);
const quote=arr[r][0];
const author=arr[r][1];
document.getElementById("text").innerHTML=quote;
authorText.innerHTML="~"+author;
random=Math.floor(Math.random()*colors.length);
randbg=Math.floor(Math.random()*bg.length);
document.body.style.backgroundColor=bg[randbg];
text.style.color=bg[randbg];
qq.style.color=bg[randbg];
document.getElementById("author").style.color=bg[randbg];
btn.style.backgroundColor=bg[randbg];
document.getElementById("tweet").style.color=bg[randbg]
// qBox.style.backgroundColor=colors[random];


}
});

// $("#tweet-quote").hover(function(){
//     $(".fa-twitter").removeClass("fa-3x").addClass("fa-4x")
//     }, function(){
//     $(".fa-twitter").removeClass("fa-4x").addClass("fa-3x");
//   });
