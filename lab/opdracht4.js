function tables(amount) {
var num1 = 1;
var num2 = 1;
	while(amount > 0){
	for (var i = 0; i < 10; i++){
		document.write(num1 + ' x ' + num2 + ' = ' + (num1 * num2) + '<br />')
		num1++;
	}
	document.write('<br />')
	amount--;
	num2++;
	num1 = 1;
}
}
tables(prompt('How many tables do you want to calculate?'));