function isLeapYear(year) {
	// Check if the year is divisible by 4
	if (year % 4 === 0) {
		// Check if the year is divisible by 100
		if (year % 100 === 0) {
			// If divisible by 100, check if it is also divisible by 400
			return year % 400 === 0;
		}
		// If not divisible by 100, it is a leap year
		return true;
	}
	// If not divisible by 4, it is not a leap year
	return false;
}

// Example usage:
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2023)); // false
