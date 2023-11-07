export default function capitaliseFirstLetter(str: string) {
  // Split the string into an array of words
  const words = str.split(" ");

  // Create an array to store the capitalized words
  const capitalizedWords = [];

  for (const word of words) {
    // Capitalize the first letter of each word and add it to the array
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedWords.push(capitalizedWord);
  }

  // Join the capitalized words back into a string
  const result = capitalizedWords.join(" ");

  return result;
}

// Example usage with a sentence:
const inputString = "hello world";
const capitalizedString = capitaliseFirstLetter(inputString);
console.log(capitalizedString); // Output: "Hello World"
