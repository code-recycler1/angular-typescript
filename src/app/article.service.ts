// Import the Angular Injectable decorator to define a service
import { Injectable } from '@angular/core';
// Import the Article interface for type-checking, ensuring articles conform to the structure
import { Article } from './article';

import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

// Use the Injectable decorator to define the ArticleService as a dependency-injectable service
@Injectable({
  // Specifies that this service should be provided at the root level (singleton throughout the app)
  providedIn: 'root'
})
// Service to manage article-related logic and data
export class ArticleService {
  // Initialize an empty array to store articles
  private articles: Article[] = [];

  // Constructor for the service (useful for dependency injection)
  constructor(private httpClient: HttpClient) { }

  /** 
   * Retrieves a list of all articles from the server.
   * 
   * This method makes an HTTP GET request to fetch all articles stored in the backend.
   * It returns an Observable that emits an array of Article objects.
   * 
   * @returns {Observable<Article[]>} An Observable that emits an array of Article objects.
   * @throws {HttpErrorResponse} Throws an error if the HTTP request fails.
   * @example
   * this.articleService.getArticles().subscribe({
   *   next: (articles) => this.articles = articles,
   *   error: (err) => this.handleError(err)
   * });
   */
  getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>("http://localhost:3000/articles");
  }

  /**
   * Retrieves a list of articles that were published within one week of today.
   * 
   * This method fetches all articles and filters them to include only those 
   * published within the last 7 days from the current date. It uses RxJS operators 
   * to handle the asynchronous data retrieval and filtering.
   * 
   * @returns {Observable<Article[]>} An Observable emitting an array of recent articles.
   */
  getRecentArticles(): Observable<Article[]> {
    return this.getArticles().pipe(
      map(articles => {
        // Get the current date
        const today = new Date();

        // Calculate the date one week ago
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(today.getDate() - 7);

        // Filter articles to include only those with a publish date within the past week
        return articles.filter(article => {
          // Convert the publish date of the article to a Date object
          const publishDate = new Date(article.publishDate);

          // Check if the publish date is between one week ago and today
          return publishDate >= oneWeekAgo && publishDate <= today;
        });
      })
    );
  }

  /** 
   * Retrieves a single article by its unique identifier.
   * 
   * This method makes an HTTP GET request to fetch a specific article from the backend
   * using the provided article ID. It returns an Observable that emits the Article object.
   * 
   * @param {number} id - The unique identifier of the article to retrieve.
   * @returns {Observable<Article>} An Observable that emits the Article with the specified ID.
   * @throws {HttpErrorResponse} Throws an error if the HTTP request fails or the article is not found.
   * @example
   * this.articleService.getArticleById(123).subscribe({
   *   next: (article) => this.currentArticle = article,
   *   error: (err) => this.handleError(err)
   * });
   */
  getArticleById(id: number): Observable<Article> {
    return this.httpClient.get<Article>("http://localhost:3000/articles/" + id);
  }
}
