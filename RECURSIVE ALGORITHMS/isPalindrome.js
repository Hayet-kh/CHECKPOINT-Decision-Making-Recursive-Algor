function isPalindrome(str) {
	// Helper function to clean the string
	function cleanString(s) {
		return s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
	}

	const cleanedStr = cleanString(str);

	// Recursive function to check palindrome
	function checkPalindrome(s) {
		if (s.length <= 1) return true; // Base case: single character or empty string
		if (s[0] !== s[s.length - 1]) return false; // Check first and last characters
		return checkPalindrome(s.slice(1, -1)); // Recur with the substring
	}

	return checkPalindrome(cleanedStr);
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("No 'x' in Nixon")); // true
console.log(isPalindrome("Hello")); // false
