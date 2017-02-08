var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
		}
});


resetButton.addEventListener("click", function(){
	//losowanie nowych kolorów
	colors = generateRandomColors(6);
	//ustawia nowy kolor do trafiania
	pickedColor = pickColor();
	//zmienia opis koloru do zgadnięcia
	colorDisplay.textContent = pickedColor;
	//zmienia kolory kwadratów
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
h1.style.background = "#232323";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i< squares.length; i++){
	//dodaje kolory do kwadratów
	squares[i].style.background = colors[i];

	//dodaje wyjątki do kwadratów
	squares[i].addEventListener("click", function(){
		//pobiera kolor klikniętego kwadratu
		var clickedColor = this.style.background;
		//porównuje pobrany kolor z kolorem wylosowanym
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Brawo!";
			resetButton.textContent = "Nowa gra?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Nie ten kolor!";
		}
	});
}

function changeColors(color) {
	//pętla przez wszystkie kwadraty zmeiniająca kolory po kliknięciu
	for(var i = 0; i <squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//tworzy łańcuch
	var arr = [];
	//dodaje num losowych kolorów
	for(var i =0; i< num; i++) {
		arr.push(randomColor());
	}


	return arr;
}

function randomColor(){
	//generuje czerwony
	var r = Math.floor(Math.random()* 256);
	//generuje zielony
	var g = Math.floor(Math.random()* 256);
	//generuje niebieski
	var b = Math.floor(Math.random()* 256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}