//Масив з результатами/оцінювання
const results = [
	new Result("Повторіть тему! 0", 0),
	new Result("1", 2),
	new Result("2", 4),
	new Result("3", 6),
	new Result("4", 8),
	new Result("5", 10)
];
	
//Масив з питаннями. 1 - правильна відповідь, 0 - неправильна
const questions = [
	new Question("Що таке ідентифікатор?", 
	[
		new Answer("Змінна", 0),
		new Answer("Програма, яка реалізує процес обробки даних, оперує з різними типами даних, на які необхідно якимось чином посилатися.", 0),
		new Answer("Це будь-яка кінцева послідовність літер, цифр і символу підкреслення, яка починається з букви.", 1),
		new Answer("Опис дій над даними", 0)
	]),
	
	new Question("Чи розрізняються великі і малі літери в ідентифікаторах при роботі програми?", 
	[
		new Answer("Так", 0),
		new Answer("Hi", 1)
	]),
	
	new Question("Розділ операторів починається службовим словом ...", 
	[
		new Answer("type", 0),
		new Answer("begin", 1),
		new Answer("label", 0),
		new Answer("end", 0)
	]),
	
	new Question("Як виглядає оператор присвоєння?", 
	[
		new Answer(":=", 1),
		new Answer("=", 0),
		new Answer("==", 0),
		new Answer("!=", 0)
	]),
	
	new Question("Заголовок програми починається зі слова ...", 
	[
		new Answer("heading", 0),
		new Answer("program", 1),
		new Answer("title", 0)
	]),
	
	new Question("Оберіть зарезервоване слово", 
	[
		new Answer("let", 0),
		new Answer("list", 0),
		new Answer("untill", 1),
		new Answer("range", 0),
		new Answer("so", 0)
	]),
	
	new Question("Розділ опису змінних починається службовим словом ...", 
	[
		new Answer("var", 1),
		new Answer("begin", 0),
		new Answer("const", 0),
		new Answer("type", 0)
	]),
	
	new Question("Розділ опису позначок починається службовим словом ...", 
	[
		new Answer("var", 0),
		new Answer("begin", 0),
		new Answer("label", 1),
		new Answer("end", 0)
	]),
	
	new Question("Розділ означення констант починається службовим словом ...", 
	[
		new Answer("var", 0),
		new Answer("begin", 0),
		new Answer("const", 1),
		new Answer("end", 0)
	]),
	
	new Question("Розділ операторів закінчується службовим словом ...", 
	[
		new Answer("type", 0),
		new Answer("begin", 0),
		new Answer("label", 0),
		new Answer("end", 1)
	])
];

shuffle(questions);

const quiz = new Quiz(questions, results);
Update();

