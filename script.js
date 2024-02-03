const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh"),
checkBtn = document.querySelector(".check");

let correctWord , timer;

const initTimer =(maxTime)=>{
    clearInterval((timer));
    timer = setInterval(() => {
        if(maxTime > 0){
            maxTime--;
            return(timeText.innerText = maxTime);
        }
        alert(`Time off ! ${correctWord.toUpperCase()} was the correct word`);
        initGame();
    }, 1000);
};

let words = [
    {
        word:"ADDITION",
        hint:"Process of adding numbers."
    },
    {
        word:"MEETING",
        hint:"Event in which people come together."
    },
    {
        word:"NUMBER",
        hint:"Math symbol used for counting."
    },
    {
        word:"HINTS",
        hint:"A way to help someome."
    },
    {
        word:"FRUSTRATION",
        hint:"Might be realted to tiredness."
    },
    {
        word:"PASSIONATE",
        hint:"A quality of humans."
    },
    {
        word:"EXCITED",
        hint:"To be eager about something."
    },
]

const initGame=()=>{
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for(let i = wordArray.length - 1; i>0; i--){
        let j= Math.floor(Math.random()*(i+1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];

    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = ""
    inputField.setAttribute("maxlength", correctWord.length);
};
initGame();

const checkWord = ()=>{
    let userWord = inputField.value.toLowerCase();
    if (!userWord) return alert("Please entr the word to check!");
    if (userWord!= correctWord)
    return alert(`Opps! ${userWord} is not a correct word`);
alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
initGame();

};

refreshBtn.addEventListener("click",initGame);
checkBtn.addEventListener("click",checkWord);