function clothingAdviser(temperature, isRaining) {
	let advice;

	if (isRaining) {
		advice = "It's raining, so wear a waterproof jacket and take an umbrella.";
	} else {
		if (temperature < 0) {
			advice = "It's freezing! Wear a heavy coat, gloves, and a hat.";
		} else if (temperature >= 0 && temperature <= 15) {
			advice = "It's a bit chilly. Wear a warm jacket.";
		} else if (temperature > 15 && temperature <= 25) {
			advice = "The weather is nice. A light jacket or sweater should be fine.";
		} else {
			advice = "It's warm! You can wear shorts and a t-shirt.";
		}
	}

	return advice;
}

console.log(clothingAdviser(-2, false));
console.log(clothingAdviser(30, true));
