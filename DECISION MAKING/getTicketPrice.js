function getTicketPrice(age) {
	let price;

	// Determine ticket price based on age
	if (age > 0 && age <= 12) {
		price = 10;
	} else if (age >= 13 && age <= 17) {
		price = 15;
	} else if (age >= 18) {
		price = 20;
	} else {
		return "Invalid age entered.";
	}

	// Return the ticket price
	return `The price of the movie ticket is $${price}.`;
}

// Example usage:
console.log(getTicketPrice(8)); // "The price of the movie ticket is $10."
console.log(getTicketPrice(16)); // "The price of the movie ticket is $15."
console.log(getTicketPrice(38)); // "The price of the movie ticket is $20."
console.log(getTicketPrice(-5)); // "Invalid age entered."
