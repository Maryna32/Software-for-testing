const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

class Quiz {
	constructor(questions, results) {
		this.questions = questions; //Масив із питаннями
		this.results = results; //Масив з можливими результатами
		this.score = 0; //Кількість набраних балів
		this.result = 0; //Номер відповіді з масиву
		this.current = 0; //Номер поточного питання
	}

	Click(index) { //Додаємо бали
		let value = this.questions[this.current].Click(index);
		this.score += value;
		let correct = -1;

		//Якщо додано 1 бал, то відповідь правильна
		if (value >= 1) {
			correct = index;
		}
		else {
			//Інакше шукаємо правильну відповідь\
			for (let i = 0; i < this.questions[this.current].answers.length; i++) {
				if(this.questions[this.current].answers[i].value >= 1) {
					correct = i;
					break;
				}
			}
		}

		this.Next();
		return correct;
	}

	Next() { //Перехід до наступного питання
		this.current++;
		if (this.current >= this.questions.length) {
			this.End();
		}
	}

	End() { //Вивід результату в кінці програми
		for (let i = 0; i < this.results.length; i++) {
			if(this.results[i].Check(this.score)) {
				this.result = i;
			}
		}
	}
} 


class Question {
	constructor(text, answers) {
		this.text = text; 
		this.answers = answers; 
	}

	Click(index) {
		return this.answers[index].value; 
	}
}


class Answer {
	constructor(text, value) {
		this.text = text; 
		this.value = value; 
	}
}


class Result {
	constructor(text, value){
		this.text = text;
		this.value = value;
	}

	Check(value) { //Перевірка, чи достатньо балів отримав користувач
		if (this.value <= value) {
			return true;
		}
		else {
			return false;
		}
	}
}


function Update() {
	//Перевірка, чи є ще питання
	if (quiz.current < quiz.questions.length) {
		headElem.innerHTML = quiz.questions[quiz.current].text; //Якщо є, змінюємо саме питання 
		buttonsElem.innerHTML = ""; //Видаляємо старі варіанти відпоідей

		//Створення кнопок для нових варіантів відповідей
		for (let i = 0; i < quiz.questions[quiz.current].answers.length; i++) {
			let btn = document.createElement("button");
			btn.className = "button";
			btn.innerHTML = quiz.questions[quiz.current].answers[i].text;
			btn.setAttribute("index", i);
			buttonsElem.appendChild(btn);
		}
		
		pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length; //Вивід номеру поточного питання
		Init(); //Виклик функції, що прикріпляє відповіді до кнопок
	}
	else {
		//Якщо тест завершився, вивід результату
		buttonsElem.innerHTML = "";
		headElem.innerHTML = `Ваш результат: ` + quiz.results[quiz.result].text + ` бали/балів
		<br><button class="btn_end" onclick="location.reload()">Розпочати знову</button>
		<br><button class="btn_end" onclick="main()">Ha головну</button>`;
		
		pagesElem.innerHTML = "Кількість правильних відповідей: " + quiz.score;

		localStorage.setItem("grade", quiz.results[quiz.result].text);
		localStorage.setItem("result", quiz.score);
	}
}

function Init() {
	let btns = document.getElementsByClassName("button"); //Знаходимо всі кнопки

	for (let i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); }); //При натисканні на кнопку викликається функція Click()
	}
}

function Click(index)  {
	let correct = quiz.Click(index); //Отримуємо номер правильної відповіді
	let btns = document.getElementsByClassName("button"); //Знаходимо всі кнопки

	for (let i = 0; i < btns.length; i++) { //Робимо кнопки сірими
		btns[i].className = "button button_passive";
	}

	//Підсвічуємо правильну відповідь зеленим, а неправильну – червоним
	if (correct >= 0) {
			btns[correct].className = "button button_correct";
	}

	if (index != correct) {
			btns[index].className = "button button_wrong";
	} 
	
	else { //Інакше просто підсвічуємо зеленим відповідь користувача
		btns[index].className = "button button_correct";
	}

	setTimeout(Update, 1000); //Чекаємо секунду і оновлюємо тест
}

function main() {
	window.location.assign("./index.html");
}

function shuffle(array) { //перемішуємо порядок питань
  array.sort(() => Math.random() - 0.5);
} 