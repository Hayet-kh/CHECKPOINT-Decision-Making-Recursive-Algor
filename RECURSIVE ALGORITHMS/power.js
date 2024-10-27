function power(base, exponent) {
	// Base case: any number raised to the power of 0 is 1
	if (exponent === 0) {
		return 1;
	}
	// Handle negative exponents
	if (exponent < 0) {
		return 1 / power(base, -exponent);
	}
	// Recursive case: multiply the base by the result of power for the decreased exponent
	return base * power(base, exponent - 1);
}

// Example usage:
console.log(power(2, 3)); // 8
console.log(power(5, 0)); // 1
console.log(power(3, -2)); // 0.1111111111111111
console.log(power(2, 10)); // 1024
