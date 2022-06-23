module.exports = function toReadable (number) {
  let arr20 = ["zero","one", "two", "three", "four", "five", "six", "seven","eight", "nine", "ten","eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen","eighteen", "nineteen", "twenty",];
	let arr100 = ["zero","ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "one hundred",];
	if (number >= 0 && number <= 20) {
		let test1 = arr20[number];
		return test1;
	} else if (number > 20 && number <= 100) {
		let numArrey = Array.from(String(number), Number);
		let numUnits = numArrey[1];
		let numDozens = numArrey[0];
		if (number > 20 && number <= 100 && numUnits != 0) {
		let test2 = `${arr100[numDozens]} ${arr20[numUnits]}`;
		return test2;
		} else if( number == 100) {
			let test2 = "one hundred";
			return test2;
		}else {
			let test2 = arr100[numDozens];
			return test2;
		}
	} else if (number > 100 && number < 1000) {
		let numArrey = Array.from(String(number), Number);
		let numUnits = numArrey[2];
		let numDozens = numArrey[1];
		let numHundreds = numArrey[0];
		let numArr;

		if (Number(numDozens) != 0 && Number(numUnits) != 0 && Number(numDozens >= 2)) {
			numArr = `${arr100[Number(numDozens)]} ${arr20[numUnits]}`;
			let test3 = `${arr20[numHundreds]} hundred ${numArr}`;
			return test3;
		} else if (Number(numDozens) != 0 && Number(numUnits) != 0 && Number(numDozens < 2)) {
			numArr = arr20[String(numArrey[1]) + String(numArrey[2])];
			let test3 = `${arr20[numHundreds]} hundred ${numArr}`;
			return test3;
		} else if (Number(numDozens) != 0) {
			numArr = arr100[numDozens];
			let test3 = `${arr20[numHundreds]} hundred ${numArr}`;
			return test3;
		} else if (Number(numUnits) != 0){
			numArr = arr20[numUnits]
			let test3 = `${arr20[numHundreds]} hundred ${numArr}`;
			return test3;
		} else {
			let test3 =`${arr20[numHundreds]} hundred`;
			return test3;
		}
	}
}


