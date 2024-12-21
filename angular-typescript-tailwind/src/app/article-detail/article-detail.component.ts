// Import the required Angular modules for component creation and lifecycle hooks
import { Component, OnInit } from '@angular/core';
// Import the ArticleComponent to be used within the template
import { ArticleComponent } from '../article/article.component';
// Import the Article interface to type-check the article data
import { Article } from '../article';
// Import the service to fetch article data
import { ArticleService } from '../article.service';
// Import ActivatedRoute to access route parameters (article ID)
import { ActivatedRoute } from '@angular/router';

// Define the metadata for the ArticleDetailComponent using the @Component decorator
@Component({
  // The custom HTML tag for this component
  selector: 'app-article-detail',

  // Marks this component as standalone, no need for a module
  standalone: true,

  // Import ArticleComponent to use it in the template (if necessary)
  imports: [ArticleComponent],

  // Path to the HTML template for this component
  templateUrl: './article-detail.component.html',

  // Path to the CSS file(s) for styling the component
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  // Declare a property to hold the article data that will be displayed
  article!: Article; // The article will be set after fetching it from the service

  // Inject the necessary services (ArticleService to fetch article data and ActivatedRoute to get the article ID from the URL)
  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  // Angular lifecycle hook that runs after the component is initialized
  ngOnInit(): void {
    // Retrieve the article ID from the route parameters
    const articleId = this.route.snapshot.paramMap.get('id');

    // Check if an article ID is available in the URL
    if (articleId != null) {
      this.articleService.getArticleById(+articleId).subscribe(result =>
        this.article = result);
    }
  }
}
