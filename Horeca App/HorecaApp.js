//aantallen
var totalbier = 0;
var totalwijn = 0;
var totalfris = 0;
var balschalen8 = 0;
var balschalen16 = 0;
//prijzen
const bierprijs = 1.99
const wijnprijs = 2.49
const frisprijs = 1.49
const bal8prijs = 2.69
const bal16prijs = 4.99

function order() {
	while ((order = prompt('Welke bestelling wilt u toevoegen?\nfris, bier, wijn of snacks')) !== 'stop'){ //snacks of drinken kiezen
			if (order === 'fris'){    //fris
				var insert = parseInt(prompt('Hoeveel ' + order + ' wilt u?')); //aantal fris
				totalfris += insert;		//rekent het aantal fris uit, als het 2 keer word gedaan pakt hij de 1e input en doet die bij elkaar op
			}
			else if ((order === 'bier')){
				var insert = parseInt(prompt('Hoeveel ' + order + ' wilt u?'));
				totalbier += insert;				
			}
			else if ((order === 'wijn')){
				var insert = parseInt(prompt('Hoeveel ' + order + ' wilt u?'));
				totalwijn += insert;
			}
			else if (order == 'snacks'){	//snacks optie
			if ((bitterballen = prompt('Hoeveel bitterballen wilt u?\n Kies uit 8 of 16.')) == 8){
				var balschalen8 = prompt('Hoeveel schalen van ' + bitterballen + ' bitterballen wilt u bestellen?')
			}
			else if (bitterballen == 16){
				var balschalen16 = prompt('Hoeveel schalen van ' + bitterballen + ' bitterballen wilt u bestellen?')
			}
			else {
				alert('Je kan alleen 8 of 16 invoeren!\nDe snacks waren niet toegevoegd aan de bestelling.')
			}
		}
	}
	//totaalprijzen 
	var biertotalprice;
	var fristotalprice;
	var wijntotalprice;
	var ball8total;
	var ball16total;
	var totalprice = 0;
	//maakt het bonnetje 
	document.writeln('<h1>Drankjes</h1> <br />')
	if (totalbier > 0){
		document.writeln('Aantal bier: ' + totalbier + '<br />')		
		document.writeln('Prijs per stuk: &#8364;' + bierprijs + '<br />');
		document.writeln('Totaal prijs: &#8364;' + (biertotalprice = bierprijs * totalbier).toFixed(2) + '<br /><br />');
		totalprice += biertotalprice;
	}
	if (totalfris > 0){
		document.writeln('Aantal fris: ' + totalfris + '<br />')		
		document.writeln('Prijs per stuk: &#8364;' + frisprijs + '<br />');
		document.writeln('Totaal prijs: &#8364;' + (fristotalprice = frisprijs * totalfris).toFixed(2) + '<br /><br />');
		totalprice += fristotalprice;
	}
	if (totalwijn > 0){
		document.writeln('Aantal wijn: ' + totalwijn + '<br />')		
		document.writeln('Prijs per stuk: &#8364;' + wijnprijs + '<br />');
		document.writeln('Totaal prijs: &#8364;' + (wijntotalprice = wijnprijs * totalwijn).toFixed(2) + '<br /><br />');
		totalprice += wijntotalprice;
	}
	document.writeln('<h1>Snacks</h1> <br />')
	if (balschalen8 > 0){
		document.writeln('Aantal bitterballen: ' + balschalen8 + ' schalen van 8 bitterballen <br />')		
		document.writeln('Prijs per schaal: &#8364;' + bal8prijs + '<br />');
		document.writeln('Totaal prijs: &#8364;' + (ball8total = balschalen8 * bal8prijs).toFixed(2) + '<br /><br />');
		totalprice += ball8total;
	}
	if (balschalen16 > 0){
		document.writeln('Aantal bitterballen: ' + balschalen16 + ' schalen van 16 bitterballen <br />')		
		document.writeln('Prijs per schaal: &#8364;' + bal16prijs + '<br />');
		document.writeln('Totaal prijs: &#8364;' + (ball16total = balschalen16 * bal16prijs).toFixed(2) + '<br /><br />');
		totalprice += ball16total;
	}
	document.writeln('---------------------------------------------------------------------------------------------<br />');
	document.writeln('<br />Totaal: &#8364;' + totalprice.toFixed(2));
}
order();
