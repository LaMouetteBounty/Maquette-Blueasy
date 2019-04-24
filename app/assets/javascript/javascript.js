filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// *************************FORMULAIRE**********************

// document.getElementById("formulaire").addEventListener("submit", function (e) {

//     e.preventDefault();
//     console.log("declaration document - ligne 4")

// var nom = document.querySelector("#nom");
// function verifNom(){
//     if(nom.value.lenght < 2 || nom.value.lenght > 30){
//         console.log("ok");
//     } else if (!formGroupExampleInput.value){
//         console.log ("pas de valeur");
//     } 
//     else {
//         console.log ("faux");
//     }
// }
// }
// );
fname = document.querySelector('#fname')
document.getElementById("formulaire").addEventListener("submit", function (e) {

    e.preventDefault();
    console.log("declaration document - ligne 4");
    var erreur;
    if (!fname.value) {
        if (validFname != true) {
            erreur = "Veuillez saisir votre nom";
        console.log("if first name");
        }
        
    }
    if (validFname == true) {
        e.preventDefault();
        alert('Formulaire envoyé !');
        console.log("message validation envoyé");
    } 
    if (validFname == false); {
        e.preventDefault();
        alert('Formulaire incomplet !');
        console.log("message validation INCOMPLETE");
        // break;
    }
});

errorFname = document.querySelector('#errorfname');

fname.addEventListener('blur', erreurFname)


var validFname;
function erreurFname() {
    var letters = ("[A-Za-z'àáâãäåçèéêëìíîïðòóôõöùúûüýÿ -]");
    console.log("variable lettre uniquement");
    if (document.querySelector('#fname').value.match(letters)) {
        errorFname.innerHTML = "";
        event.target.style.borderColor = "#99ff66";
        validFname = true;
        return true;
    } else if (document.querySelector('#fname') == "") {
        // errorFname = "Veuillez saisir votre nom";
        event.target.style.borderColor = "#ff0000";
        return false;
    } else {
        // (alert("Veuillez saisir un nom valide"));
        // errorFname = "Veuillez saisir un nom valide";
        event.target.style.borderColor = "#ff0000";
        return false;
    }
}