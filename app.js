let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

// Функція для показу відповідних товарів при виборі категорії
function showItems(category) {
	let itemsContainer = document.getElementById("itemsContainer");
	itemsContainer.innerHTML = ""; // Очистити контейнер перед виведенням нових товарів

	switch (category) {
		case "Автотовари":
			itemsContainer.innerHTML = `
				<div class="item">
					<img src="2.jpg" alt="" class="img">
					<button class="btn" id="btn1">Add</button>
				</div>
				<div class="item">
					<img src="2.jpg" alt="" class="img">
					<button class="btn" id="btn2">Add</button>
				</div>
				<div class="item">
					<img src="2.jpg" alt="" class="img">
					<button class="btn" id="btn3">Add</button>
				</div>
			`;
			break;
		case "Взуття":
			itemsContainer.innerHTML = `
				<div class="item">
					<img src="1.png" alt="" class="img">
					<button class="btn" id="btn4">Add</button>
				</div>
				<div class="item">
					<img src="1.png" alt="" class="img">
					<button class="btn" id="btn5">Add</button>
				</div>
			`;
			break;
		case "Електроніка":
			itemsContainer.innerHTML = `
				<div class="item">
					<img src="3.jpg" alt="" class="img">
					<button class="btn" id="btn6">Add</button>
				</div>
			`;
			break;
		default:
			break;
	}
}

// Обробники подій для кнопок категорій
document.addEventListener("click", function(event) {
	if (event.target.classList.contains("category-btn")) {
		let selectedCategory = event.target.textContent;
		item = selectedCategory;
		showItems(item); // Показувати відповідні товари
	}
});

// Обробники подій для кнопок товарів
document.addEventListener("click", function(event) {
	if (event.target.classList.contains("btn")) {
		let selectedItemId = event.target.id;
		switch (selectedItemId) {
			case "btn1":
				item = "Товар 1";
				break;
			case "btn2":
				item = "Товар 2";
				break;
			case "btn3":
				item = "Товар 3";
				break;
			case "btn4":
				item = "Товар 4";
				break;
			case "btn5":
				item = "Товар 5";
				break;
			case "btn6":
				item = "Товар 6";
				break;
			default:
				break;
		}
		tg.MainButton.setText("Ви вибрали " + item + "!");
		tg.MainButton.show();
	}
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
