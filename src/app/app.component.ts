// Import the necessary Angular core module and components
import { Component } from '@angular/core';
// Import RouterOutlet for routing functionality within the application
import { RouterOutlet } from '@angular/router';
// Import the ArticleComponent to be used within the app
import { ArticleComponent } from './article/article.component';
// Import the MenuComponent to be used within the app
import { MenuComponent } from "./menu/menu.component";

// Decorator to define the metadata for the root AppComponent
@Component({
  // Selector specifies the custom HTML tag that will represent this component
  selector: 'app-root',

  // Marks this component as standalone, meaning it doesn't require inclusion in an NgModule
  standalone: true,

  // Array of other components or modules to be imported for this component
  imports: [RouterOutlet, ArticleComponent, MenuComponent],

  // Path to the HTML template that defines the view for this component
  templateUrl: './app.component.html',

  // Path to the CSS file(s) to style the component's view
  styleUrls: ['./app.component.css']
})
// Main class for the AppComponent, which contains the logic for the root of the app
export class AppComponent {
  // The title property, typically displayed in the template or used in the app's UI
  title = 'my-news';
}
