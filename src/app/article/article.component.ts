// Import necessary Angular core modules for creating components and lifecycle hooks
import { Component, Input, OnInit } from '@angular/core';
// Import the Article interface or class to type-check the input property
import { Article } from '../article';
import { Router } from '@angular/router';
// Import Location service to navigate back to the previous page
import { Location } from '@angular/common';
import { ShortenContentPipe } from '../shorten-content.pipe';

// Decorator to define metadata for the ArticleComponent
@Component({
  // Selector specifies the custom HTML tag that will represent this component
  selector: 'app-article',

  // Marks this component as standalone, meaning it doesn't need to be declared in an NgModule
  standalone: true,

  // Array of other modules or components to be imported for this component
  imports: [ShortenContentPipe],

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

  // Constructor for the component, used for dependency injection (injecting Location for going back)
  constructor(private router: Router, private location: Location) { }

  // Angular lifecycle hook called once after the component's data-bound properties are initialized
  ngOnInit(): void {
    // Logic to run when the component is initialized (currently empty)
    // Additional initialization logic could be added here if needed
  }

  // Method to navigate to the article detail page
  detail(id: number): void {
    // Use Angular's router to navigate to the article detail route, passing the article ID
    this.router.navigate(['/article', id]); // Navigates to the route '/article/{id}' for the given article
  }

  // Method to navigate back to the previous page using the Location service
  goBack(): void {
    this.location.back(); // Goes back to the previous page in the browser's history
  }
}
