// Import the Angular core module for creating components
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import the RouterModule to enable routing functionalities such as navigation links
import { RouterModule, Router } from '@angular/router';

// Decorator to define metadata for the MenuComponent
@Component({
  // Selector specifies the custom HTML tag that will represent this component
  selector: 'app-menu',

  // Marks this component as standalone, allowing it to operate independently without an NgModule
  standalone: true,

  // Array of imports required for this component, including RouterModule for routing features
  imports: [RouterModule, CommonModule],

  // Path to the HTML template that defines the structure and content of this component's view
  templateUrl: './menu.component.html',

  // Path to the CSS file(s) for styling this component
  styleUrls: ['./menu.component.css']
})
// The main class for the MenuComponent, which encapsulates its logic and behavior
export class MenuComponent implements OnInit {

  // Indicates whether the hamburger menu is currently open or closed
  hamburgerOpen = false;

  // Injects the Angular Router for navigation purposes
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
 * Toggles the state of the hamburger menu between open and closed.
 */
  toggleHamburger(): void {
    this.hamburgerOpen = !this.hamburgerOpen;
  }

  /**
 * Closes the hamburger menu if it is open.
 * Typically called when an item in the menu is clicked.
 */
  onHamburgerItemClick() {
    if (this.hamburgerOpen) {
      this.hamburgerOpen = false;
    }
  }

  /**
 * Navigates to a specified path and closes the hamburger menu.
 * @param path - The path to navigate to.
 */
  navigateTo(path: string) {
    this.hamburgerOpen = false;
    this.router.navigate([path]);
  }
}
