//Wilson Toy
//CSC 193A: Web Programming
//Assignment 5

// font styling
function setFontSize(id, newFontSize){
    document.getElementById(id).style.fontSize = newFontSize + "px";
}

function setFontWeight(id, newFontWeight) {
    document.getElementById(id).style.fontWeight = newFontWeight;
}

function setFontColor(id, newFontColor) {
    document.getElementById(id).style.color = newFontColor;
}

function setTextDecoration(id, newTextDecoration){
    document.getElementById(id).style.textDecoration = newTextDecoration;
}

function setUpperCase(id){
    document.getElementById(id).value = document.getElementById(id).value.toUpperCase();
}

// moo suffix
function mooSuffix(id) {
    document.getElementById(id).value = document.getElementById(id).value.split(".").join("-Moo.");
}

// alert
function getAlert(id, newFontSize) {
    alert("Font size for id [" + id + "] increased to " + newFontSize + "px.");
}

// buttons
function setBiggerButton(id, fontSize){
    getAlert(id, fontSize);
    setFontSize(id, fontSize);
}

function setMooButton(id) {
    setUpperCase(id);
    mooSuffix(id);
}

// radio buttons
function setFancySchmancy(id, fontColor, fontWeight, textDecoration) {
    setFontColor(id, fontColor);
    setFontWeight(id, fontWeight);
    setTextDecoration(id, textDecoration);
}

function setBoringBetty(id){
    document.getElementById(id).style.color = null;
    document.getElementById(id).style.fontWeight = null;
    document.getElementById(id).style.textDecoration = null;
    
}
