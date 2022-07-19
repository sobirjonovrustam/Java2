var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elText = document.querySelector(".text");
var elBtn = document.querySelector(".reset");

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    var inputVaule = elInput.value.trim();

    var newArray = inputVaule.split(" ");

    numbers = 0;

    for (let i = 0; i < newArray.length; i++) {
        numbers += Number(newArray[i]);
    };

    elText.textContent = numbers;

    console.log(numbers);

    elBtn.addEventListener("click", function() {
        elText.textContent = "0"
    })
});