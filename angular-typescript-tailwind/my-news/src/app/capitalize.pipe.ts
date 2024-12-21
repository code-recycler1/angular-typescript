// Import the necessary Angular core modules for creating pipes and transforming data
import { Pipe, PipeTransform } from '@angular/core';

// Define the CapitalizePipe as an Angular Pipe
@Pipe({
  name: 'capitalize', // Name of the pipe to use in templates
  standalone: true    // Marks this pipe as standalone, not requiring declaration in an NgModule
})
export class CapitalizePipe implements PipeTransform {

  /**
   * Transforms the input string by capitalizing the first word.
   * @param value - The string to be transformed
   * @returns A new string with the first word capitalized, or the original string if invalid
   */
  transform(value: string): string {
    // Check if the value is null, undefined, or an empty string
    if (!value) {
      return value; // Return the value as-is if it's falsy
    }

    // Split the string into an array of words
    const words = value.split(' ');

    // If the array is not empty, capitalize the first word
    if (words.length > 0) {
      words[0] = words[0].toUpperCase(); // Capitalize the first word
    }

    // Join the words back into a single string and return the result
    return words.join(' ');
  }
}
