
class node{
    constructor(qText){
        this.qText = qText;
        this.rhs = null;
        this.lhs = null;
    }

    buildTree(list){
        i++;
        if(list[i] == '' || i > 10)return;
        this.lhs = new node(list[i]);
        this.lhs.buildTree(list)
        i++;
        if(list[i] == '' || i > 10)return;
        this.rhs = new node(list[i]);
        this.rhs.buildTree(list)
    }

    iterateTree(){
        console.log(this.qText);
        if(this.lhs != null)
            this.lhs.iterateTree();
        if(this.rhs != null)
            this.rhs.iterateTree();
    }
}

let x = 5;
let currentNode;

i = 0;
/*
cardBoardList = ["So this is cardboard, is it colored?", "So it is colored, is there any packing tape on it?", 
                "Can you remove it?", "Remove it and recycle!", "" ,"Try harder buddy(not recyclable)", "",
                "Recycle!", "", "You have uncolored cardboard huh, ok...", ""];
*/
cardBoardList = ["Is it waxed or greasy?", "Not recyclable", "", "Recycle, but make sure to flatten the cardboard",""];
let cardboard = new node(cardBoardList[i]);
cardboard.buildTree(cardBoardList);

i = 0;
glassList = ["Is it broken?", "Not recyclable, dispose in the landfill", "",
                "Is it a beverage bottle or food jar", "Recyclable, though make sure to clean and dry before disposing", "",
                "Here are a list of non-recyclables: <br>Ceramics, Pyrex or other heat resistant glass<br>Light bulbs<br>Computer monitors, phone screens, <br>Plate glass: windows, sliding doors (can be recycled separately)<br>Safety glass, car windshields<br>Art glass and leaded crystal<br>Mirrors<br>Otherwise it might be okay",""];
let glass = new node(glassList[i]);
glass.iterateTree();
glass.buildTree(glassList);

i = 0;
metalList = ["Is it scrap metal?", "Not recyclable", "",
            "Is it aluminum, steel, or tin?", "Recyclable", "",
                "Not recyclable, some metals are hazardous and should be dropped off at the Yolo County Central Landfill", ""];
let metal = new node(metalList[i]);
metal.buildTree(metalList);

i = 0;
plasticList = ["Is there a recycling label that is #1, #2, #3, #5, #6, or #7?", "Recyclable", "",
                "Is it a rigid plastic with a recycling label of #4?", "Recyclable", "", 
                "Is it a plastic lid, toy, laundry basket, crate, flower pot, nursery tray, container, CD or DVD case, PVC pipe, or furniture?",
                "Recyclable, but make sure it is clean and dry", "", "Not recyclable", ""];
let plastic = new node(plasticList[i]);
plastic.buildTree(plasticList);

i = 0;
paperList = ["Is it plastic/wax coated or thermal paper, or a refrigerated or shelf-stable carton?", "Not recyclable","",
    "Is it a frozen food box, paper towel, paper tissue, or photograph", "Not recyclable?", "", "Is it blueprint paper, Mylar paper, or carbon paper?",
    "Not recyclable","", "Most likely recyclable",""];
let paper = new node(paperList[i]);
paper.buildTree(paperList);

function theSelection(initialType){
   //document.getElementById('inputs').removeChild();
   // inputs = document.getElementsByClassName('initButtons');

    switch(initialType){
        case "cardboard":
            currentNode = cardboard;
            break;
        case "glass":
            currentNode = glass;
            break;
        case "metal":
            currentNode = metal;
            break;
        case "plastic":
            currentNode = plastic;
            break;
        case "paper":
            currentNode = paper;
            break;
    }
    document.getElementById('response').setAttribute("font-size", "70px");
    document.getElementById('response').setAttribute("left", "0px");
    document.getElementById('response').innerHTML = currentNode.qText;
    
    inputs = document.querySelectorAll('.initButtons');
    inputs.forEach(i => {
        i.remove();
      });
    var yes = document.createElement("button");
    yes.type = "button";
    yes.className = "selectButtons";
    yes.setAttribute("onClick", "yesInput()")
    yes.setAttribute("ID", "yes")
    yes.innerHTML = "Yes";

    var no = document.createElement("button");
    no.type = "button";
    no.className = "selectButtons";
    no.setAttribute("onClick", "noInput()")
    no.setAttribute("ID", "no")
    no.innerHTML = "No";

    document.getElementById('inputs').appendChild(yes);
    document.getElementById('inputs').appendChild(no);
}

function checkEnd(){
    if(currentNode.rhs == null && currentNode.lhs == null){
        inputs = document.querySelectorAll('.selectButtons');
        inputs.forEach(i => {i.remove();});

        var refresh = document.createElement("button");
        refresh.type = "button";
        refresh.className = "refresh";
        refresh.setAttribute("onClick", "reloadPage()");
        refresh.innerHTML = "Check Another Item";
        document.getElementById('inputs').appendChild(refresh);
    }
}

function yesInput(){
    currentNode = currentNode.lhs;
    console.log(currentNode.qText);
    document.getElementById('response').innerHTML = currentNode.qText;
    checkEnd();
}

function noInput(){
    currentNode = currentNode.rhs;
    document.getElementById('response').innerHTML = currentNode.qText;
    checkEnd();
}

function reloadPage(){
    document.location.reload()
}

function glassInfo(){
    document.getElementById('answer').innerHTML="RECYCLABLE<br>-jars<br>-beer/wine/beverage bottles<br><br>NOT RECYCLABLE<br>-auto glass<br>-wine glasses<br>-mirrors";
 }
 function metalInfo(){
    document.getElementById("answer").innerHTML="RECYCLABLE<br>-aluminum cans/foil<br>-tin/steel cans<br>-empty aerosol cans<br>-empty paint cans<br>-metal lids and caps<br><br>NOT RECYCLABLE<br>-electronics<br>-scrap metal<br>-fluorescent/incandescent light bulbs";
 }
 function plasticInfo(){
    document.getElementById("answer").innerHTML="RECYCLABLE<br>-caps and lids<br>-toys<br>-baskets/crates<br>-CD and DVD cases<br>-all #1-7 plastics<br><br>NOT RECYCLABLE<br>-plastic bags<br>-packing foam<br>-biodegradable or compostable plastic containers";
 }
 function cardboardInfo(){
    document.getElementById("answer").innerHTML="RECYCLABLE<br>-must be empty, flattened, and clean";
 }
 function paperInfo(){
    document.getElementById("answer").innerHTML="RECYCLABLE<br>-boxes<br>-notebook paper<br>-magazines<br>-paper folders<br>-egg cartons<br>-books<br><br>NOT RECYCLABLE<br>-any refrigerated cartons<br>-shelf-stable cartons<br>-frozen boxes<br>-paper towels<br>-tissues<br>-photographs";
 }
 
 