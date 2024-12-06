// Import the Angular Injectable decorator to define a service
import { Injectable } from '@angular/core';
// Import the Article interface for type-checking, ensuring articles conform to the structure
import { Article } from './article';

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
  constructor() {
    // Create the first article object with its properties (example article data)
    let article1: Article = {
      id: 1,
      title: "Title article",
      subtitle: "Subtitle article",
      imageUrl: "https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=134",
      imageCaption: "caption image",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas sequi voluptatum pariatur! Quae cumque
          quidem dolor maxime enim debitis omnis nemo facilis sequi autem? Quae tenetur, repellat vero deleniti vitae
          dolores? Cum tempore, mollitia provident placeat fugit earum, sint, quae iusto optio ea officiis consectetur sit
          necessitatibus itaque explicabo?`,
      author: "John Doe",
      publishDate: "2024-12-04"
    };

    // Create the second article object with its properties (another example article)
    let article2: Article = {
      id: 2,
      title: "Title article 2",
      subtitle: "Subtitle article 2",
      imageUrl: "https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=134",
      imageCaption: "caption image 2",
      content: `2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas sequi voluptatum pariatur! Quae cumque
          quidem dolor maxime enim debitis omnis nemo facilis sequi autem? Quae tenetur, repellat vero deleniti vitae
          dolores? Cum tempore, mollitia provident placeat fugit earum, sint, quae iusto optio ea officiis consectetur sit
          necessitatibus itaque explicabo?`,
      author: "Jane Doe",
      publishDate: "2024-11-14"
    };

    // Add both articles to the articles array
    this.articles.push(article1);
    this.articles.push(article2);
  }

  // Method to retrieve a list of all articles
  getArticles(): Article[] {
    // Return the array of articles to the caller
    return this.articles;
  }

  // Method to retrieve articles published within one week of today
  getRecentArticles(): Article[] {
    // Fetch all articles
    const articles = this.getArticles();

    // Get the current date
    const today = new Date();

    // Calculate the date one week ago
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(today.getDate() - 7);

    // Filter articles to include only those with a publish date within the past week
    const recentArticles = articles.filter(article => {
      // Convert the publish date of the article to a Date object
      const publishDate = new Date(article.publishDate);
      // Check if the publish date is between one week ago and today
      return publishDate >= oneWeekAgo && publishDate <= today;
    });

    // Return the filtered list of recent articles
    return recentArticles;
  }

  // Method to retrieve a single article by its unique ID
  // If no article with the given ID is found, returns null.
  getArticleById(id: number): Article | null {
    return this.articles.find(a => a.id === id) || null;
  }
}
