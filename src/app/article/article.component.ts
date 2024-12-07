// Import necessary Angular core modules for creating components and lifecycle hooks
import { Component, Input, OnInit } from '@angular/core';
// Import the Article interface or class to type-check the input property
import { Article } from '../article';
// Import Router for navigation
import { Router } from '@angular/router';
// CommonModule for Angular directives and Location service
import { CommonModule, Location } from '@angular/common';
// Custom pipe for truncating content
import { ShortenContentPipe } from '../shorten-content.pipe';
// Custom pipe for capitalizing text
import { CapitalizePipe } from '../capitalize.pipe';
// FormsModule for two-way data binding
import { FormsModule } from '@angular/forms';

// Decorator to define metadata for the ArticleComponent
@Component({
  // Selector specifies the custom HTML tag that will represent this component
  selector: 'app-article',

  // Marks this component as standalone, meaning it doesn't need to be declared in an NgModule
  standalone: true,

  // Array of other modules or components to be imported for this component
  imports: [ShortenContentPipe, CapitalizePipe, FormsModule, CommonModule],

  // Path to the HTML template file that defines the view for this component
  templateUrl: './article.component.html',

  // Path to the CSS file(s) that define styles scoped to this component
  styleUrls: ['./article.component.css']
})
// The main class for the ArticleComponent, which contains logic and properties for the component
export class ArticleComponent implements OnInit {
  // Input property to receive an `Article` object from a parent component
  // The `!` non-null assertion operator indicates that this property will always be initialized by the parent
  @Input() article!: Article;

  // Input property to indicate whether the component is displaying a detailed view or not
  @Input() isDetail: boolean = false;

  // A boolean flag used to toggle the visibility of a paragraph based on a checkbox.
  showParagraph: boolean = false;

  showSecondDiv: boolean = false;
  color: string = 'orange';
  colorOptions: string[] = ['orange', 'green', 'blue'];

  // Define a type for button configurations
  buttonConfig = {
    orange: { bgClass: 'bg-orange-500 hover:bg-orange-700' },
    green: { bgClass: 'bg-green-500 hover:bg-green-700' },
    blue: { bgClass: 'bg-blue-500 hover:bg-blue-700' }
  };

  // Constructor for the component, used for dependency injection (injecting Location for going back)
  constructor(private router: Router, private location: Location) { }

  // Angular lifecycle hook called once after the component's data-bound properties are initialized
  ngOnInit(): void {
    // Logic to run when the component is initialized (currently empty)
    // Additional initialization logic could be added here if needed
  }

  /**
   * Navigates to the detailed view of an article.
   * @param id - The ID of the article to navigate to
   */
  detail(id: number): void {
    // Use Angular's router to navigate to the article detail route, passing the article ID
    this.router.navigate(['/article', id]); // Navigates to the route '/article/{id}' for the given article
  }

  /**
   * Navigates back to the previous page using the browser's history.
   */
  goBack(): void {
    this.location.back();
  }

  /**
   * Opens the specified image URL in a new browser tab.
   * @param imageUrl - The URL of the image to open
  */
  showImage(imageUrl: string): void {
    if (imageUrl) {
      window.open(imageUrl, '_blank');
    }
  }

  // Getter to retrieve current button configuration
  get currentButtonConfig() {
    return this.buttonConfig[this.color as keyof typeof this.buttonConfig];
  }
}
