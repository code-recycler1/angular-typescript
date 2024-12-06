// Import the Angular core module for creating components
import { Component } from '@angular/core';
// Import the RouterModule to enable routing functionalities such as navigation links
import { RouterModule } from '@angular/router';

// Decorator to define metadata for the MenuComponent
@Component({
  // Selector specifies the custom HTML tag that will represent this component
  selector: 'app-menu',

  // Marks this component as standalone, allowing it to operate independently without an NgModule
  standalone: true,

  // Array of imports required for this component, including RouterModule for routing features
  imports: [RouterModule],

  // Path to the HTML template that defines the structure and content of this component's view
  templateUrl: './menu.component.html',

  // Path to the CSS file(s) for styling this component
  styleUrls: ['./menu.component.css']
})
// The main class for the MenuComponent, which encapsulates its logic and behavior
export class MenuComponent {
  // Currently, this component does not contain any properties or methods.
}
