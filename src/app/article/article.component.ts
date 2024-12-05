// Import necessary Angular core module
import { Component } from '@angular/core';

// Decorator to define the metadata for the ArticleComponent
@Component({
  // Selector specifies the custom HTML tag to use this component
  selector: 'app-article',

  // Marks this component as standalone, meaning it doesn't need to be declared in an NgModule
  standalone: true,

  // Array of other modules or components to be imported for this component (currently empty)
  imports: [],

  // Path to the HTML template file that defines the view for this component
  templateUrl: './article.component.html',

  // Path to the CSS file(s) that define styles scoped to this component
  styleUrls: ['./article.component.css']
})
// The main class for the ArticleComponent, which contains logic and properties for the component
export class ArticleComponent {
  // Currently, this component has no properties or methods defined.
}
