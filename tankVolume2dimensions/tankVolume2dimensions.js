var tankVolume2DimensionsMap = {
	// 10: [{width: , height: , depth: }],
	// 20: [{width: , height: , depth: }],
	// 25: [{width: , height: , depth: }],
	// 30: [{width: , height: , depth: }],
	// 35: [{width: , height: , depth: }],
	// 38: [{width: , height: , depth: }],
	// 40: [{width: , height: , depth: }],
	45: [{width: 50, height: 30, depth: 30}],
	52.5: [{width: 50, height: 30, depth: 35}],
	54: [{width: 60, height: 30, depth: 30}],
	60: [{width: 50, height: 40, depth: 30}],
	63: [{width: 60, height: 30, depth: 35}],
	70: [{width: 50, height: 40, depth: 35}],
	72: [{width: 60, height: 40, depth: 30}, {width: 80, height: 30, depth: 30}],
	84: [{width: 60, height: 40, depth: 35}, {width: 80, height: 30, depth: 35}],
	96: [{width: 80, height: 40, depth: 30}],
	112: [{width: 80, height: 40, depth: 35}]//,
	// 10: [{width: , height: , depth: }],
	// 10: [{width: , height: , depth: }],
	// 10: [{width: , height: , depth: }],
	// 10: [{width: , height: , depth: }],
	// 10: [{width: , height: , depth: }],
	// 10: [{width: , height: , depth: }],
	// 10: [{width: , height: , depth: }],
	// 10: [{width: , height: , depth: }],
	// 10: [{width: , height: , depth: }],
};

function errorMessage(v) {
	return v + "is is not a standard tank volume.";
} 

function v2d(v) {
	var dimensionses = tankVolume2Dimensions(v);

	if (dimensionses === undefined) {
		throw errorMessage(v);
	}


	dimensionses.forEach(function printDimensions(dimensions) {
		var gapSize = dimensions.height.toString().length + 7;
		
		var gap = "";
		for (var i = 0; i < gapSize; i++) {
			gap = gap.concat(" ");
		}

		var figure = "|/_";

		console.log(gap + dimensions.depth + " cm");
		console.log(dimensions.height + " cm " + figure + " " + dimensions.width + " cm (" + dimensions.width + ")");
		console.log("");
	});
}

function tankVolume2Dimensions(v) {
	return tankVolume2DimensionsMap[v];
}