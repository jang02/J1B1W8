function calculate() {
	addition(10, 12);
	subtraction(58, 34);
	multiplication(6, 7);
	division(144, 12);
	increment(12);
	decrement(34);
}

function addition(num1, num2){
	document.write(num1 + ' + ' + num2 + ' = ' + (num1 + num2) + '<br />');
}

function subtraction(num1, num2){
	document.write(num1 + ' - ' + num2 + ' = ' + (num1 - num2) + '<br />');
}

function multiplication(num1, num2){
	document.write(num1 + ' x ' + num2 + ' = ' + (num1 * num2) + '<br />');
}

function division(num1, num2){
	document.write(num1 + ' / ' + num2 + ' = ' + (num1 / num2) + '<br />');
}

function increment(num1){
	document.write(num1 + ' + ' + '1' + ' = ' + (num1++) + '<br />');
}

function decrement(num1){
	document.write(num1 + ' - ' + '1' + ' = ' + (num1--));
}
