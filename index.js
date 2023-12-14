const main = document.getElementById("main");

main.innerHTML = [`<div id="word1" class="word">John</div>
<div id="word2" class="word">Alex</div>
<div id="word3" class="word">Andrew</div>
<div id="word4" class="word">George</div>
<div id="word5" class="word">georgia</div>`];

const words = ["john","alex","andrew","george","georgia"];
const elements = [`<div id="word1" class="word">John</div>`,
`<div id="word2" class="word">Alex</div>`,
`<div id="word3" class="word">Andrew</div>`,
`<div id="word4" class="word">George</div>`,
`<div id="word5" class="word">georgia</div>`]

const inp = document.getElementById('title');

function wording(){

    var check = inp.value;

    if(words[0].includes(check) == true){
        console.log("0");
        var word0 = "true";
    }
    if(words[1].includes(check) == true){
        console.log("1");
        var word1 = "true";
    }
    if(words[2].includes(check) == true){
        console.log("2");
        var word2 = "true";
    }
    if(words[3].includes(check) == true){
        console.log("3");
        var word3 = "true";
    }
    if(words[4].includes(check) == true){
        console.log("4");
        var word4 = "true";
    }

    main.innerHTML = [` `];

    if(word0 == "true"){
        main.innerHTML = main.innerHTML + `<div id="word1" class="word">John</div>`;
        console.log("epic0")
    }

    if(word1 == "true"){
        main.innerHTML = main.innerHTML + `<div id="word2" class="word">Alex</div>`;
        console.log("epic1")
    }


    if(word2 == "true"){
        main.innerHTML = main.innerHTML + `<div id="word3" class="word">Andrew</div>`;
        console.log("epic2")
    }

    if(word3 == "true"){
        main.innerHTML = main.innerHTML + `<div id="word4" class="word">George</div>`;
        console.log("epic3")
    }

    if(word4 == "true"){
        main.innerHTML = main.innerHTML + `<div id="word5" class="word">georgia</div>`;
        console.log("epic4")
    }
}