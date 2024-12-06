// Import the necessary Angular core modules for creating pipes and transforming data
import { Pipe, PipeTransform } from '@angular/core';

// Define a custom pipe using the @Pipe decorator
@Pipe({
  name: 'shortenContent', // Name of the pipe, used to refer to it in templates
  standalone: true // Marks this pipe as standalone, so it doesn't need to be declared in an NgModule
})
export class ShortenContentPipe implements PipeTransform {

  // The transform method is called whenever the pipe is used in a template
  // It takes a string value to be shortened and an optional numberOfCharacters parameter to define the maximum length
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
