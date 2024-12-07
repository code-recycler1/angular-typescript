// Import the necessary Angular core modules for creating pipes and transforming data
import { Pipe, PipeTransform } from '@angular/core';

// Define a custom pipe using the @Pipe decorator
@Pipe({
  name: 'shortenContent', // Name of the pipe, used to refer to it in templates
  standalone: true // Marks this pipe as standalone, so it doesn't need to be declared in an NgModule
})
export class ShortenContentPipe implements PipeTransform {

  /**
   * The transform method is called whenever the pipe is used in a template.
   * It shortens a string to a specified maximum length and appends an ellipsis (" ...") if truncated.
   *
   * @param {string} value - The string to be transformed.
   * @param {number} [numberOfCharacters] - Optional. The maximum length of the string before truncation.
   *                                         Defaults to 250 if not provided.
   * @returns {string} The shortened string, or the original string if it is within the maximum length.
   */
  transform(value: string, numberOfCharacters?: number): string {

    // If the value length is smaller than the specified number of characters (or default 250),
    // return the value as is without shortening
    if (value.length < (numberOfCharacters ?? 250)) {
      return value;
    } else {
      // If the value is longer than the specified number of characters,
      // slice the string up to the specified length and add an ellipsis (" ...") at the end
      return value.slice(0, numberOfCharacters ?? 250) + " ...";
    }
  }
}
