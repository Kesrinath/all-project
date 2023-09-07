          var data = [
            {
                "id":1,
          "answer":3,
          "question":"Which was not one of Voldemort's Horcruxes?",
          "options":["Harry","Nagini","Helga's Diadem","Tom Riddle's Diary"]
        },
          {
            "id":2,
            "answer":1,
            "question":"Which of these are not one of Hagrid's many pets?",
            "options":["Grawp","Fluffy","Aragog","Noberta"]
        },
        {"id":3,
        "answer":3,
        "question":"Which class did Severus Snape always want to teach?",
        "options":["Potions","Charms","Defense Against Dark Arts","Transfiguration"]
    },
    {"id":4,
    "answer":3,
    "question":"Which Hogwarts house did Moaning Myrtle belong in?",
    "options":["Gryffindor","Slytherin","Ravenclaw","Hufflepuff"]
},
{"id":5,
"answer":2,
"question":"What class did Neville end up teaching at Hogwarts?",
"options":["Astronomy","Herbology","Charms","Muggle Studies"]
}
]
  /* <div class="first">
                <p id="question1"> this is my question </p>
                <ul>
                    <li><input type="radio" name="" class="options" id="">harry</li>
                    <li><input type="radio" name="" class="options" id="">Nagini</li>
                    <li><input type="radio" name="" class="options" id="">Helga's Diadem</li>
                    <li><input type="radio" name="" class="options" id="">Tom Riddle's Diary</li>
                </ul>*/

function createDiv(obj){
let div = document.createElement("div");
div.classList.add("first");
div.id = obj.id;

//create p tag
let p = document.createElement("p");
p.innerText = obj.question

// crate ul
let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
let input = document.createElement("input");
input.type = "radio";
input.classList.add("options");
li1.innertext = obj.options[0];
li2.innertext = obj.options[1];
li3.innertext = obj.options[2];
li4.innertext = obj.options[3];
li1.appendChild(input);
li2.appendChild(input);
li3.appendChild(input);
li4.appendChild(input);
ul.appendChild(li1,li2,li3,li4);
div.appendChild(p);
div.appendChild(ul);

return div;

}

let x = createDiv(data[1]);
console.log(x);