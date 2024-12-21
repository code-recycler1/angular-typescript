// Import the Angular core module for creating components
import { Component } from '@angular/core';
// Import the Article interface to define the structure of articles
import { Article } from '../article';
// Import the ArticleService to retrieve article data
import { ArticleService } from '../article.service';
// Import the ArticleComponent to display individual articles
import { ArticleComponent } from '../article/article.component';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

// Decorator to define metadata for the HomeComponent
@Component({
  // Selector specifies the custom HTML tag to use this component
  selector: 'app-home',

  // Marks this component as standalone, meaning it operates independently without requiring an NgModule
  standalone: true,

  // Array of other components or modules to be imported for use in this component
  imports: [ArticleComponent, CommonModule],

  // Path to the HTML template that defines the structure and content of this component's view
  templateUrl: './home.component.html',

  // Path to the CSS file(s) defining styles scoped to this component
  styleUrls: ['./home.component.css']
})
// Main class for the HomeComponent, which represents the home page of the application
export class HomeComponent {
  // Property to hold the list of articles retrieved from the ArticleService
  articles$: Observable<Article[]> = new Observable<Article[]>();

  // Constructor that injects the ArticleService for dependency management
  constructor(private articleService: ArticleService) { }

  // Angular lifecycle hook called once after the component is initialized
  ngOnInit(): void {
    // Use the ArticleService to fetch articles and assign them to the articles property
    this.articles$ = this.articleService.getArticles();
    // this.articles$ = this.articleService.getRecentArticles();
  }
}
