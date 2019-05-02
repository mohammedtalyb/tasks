function main(data) {
	var splitByComma  = data.split(",");
	var splitByHyphen = splitByComma.map(hyphenSplit);
	var finalString   = positioning(splitByHyphen) || "";

	return finalString;
 }

function hyphenSplit(str) {	
		return str.split("-");
}

//placing strings according to its index no//
function positioning(arr) {
	var positionedString = [];
	arr.forEach((arr1) => {
	var str = arr1[0];
			for (var i = 1; i < arr1.length; i++) {
				positionedString[arr1[i]] = str;
			}
		});
	return positionedString.join("");
}
