import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  /** 
 * Retrieves all categories from the server.
 * 
 * This method makes an HTTP GET request to fetch the complete list of categories 
 * from the backend. It returns an Observable that emits an array of Category objects.
 * 
 * @returns {Observable<Category[]>} An Observable that emits an array of Category objects.
 * @throws {HttpErrorResponse} Throws an error if the HTTP request fails.
 * @example
 * this.categoryService.getCategories().subscribe({
 *   next: (categories) => this.categories = categories,
 *   error: (err) => this.handleError(err)
 * });
 */
  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>("http://localhost:3000/categories");
  }

  /** 
   * Retrieves a single category by its unique identifier.
   * 
   * This method makes an HTTP GET request to fetch a specific category from the backend
   * using the provided category ID. It returns an Observable that emits the Category object.
   * 
   * @param {number} id - The unique identifier of the category to retrieve.
   * @returns {Observable<Category>} An Observable that emits the Category with the specified ID.
   * @throws {HttpErrorResponse} Throws an error if the HTTP request fails or the category is not found.
   * @example
   * this.categoryService.getCategoryById(123).subscribe({
   *   next: (category) => this.currentCategory = category,
   *   error: (err) => this.handleError(err)
   * });
   */
  getCategoryById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`http://localhost:3000/categories/${id}`);
  }

  /** 
   * Creates a new category on the server.
   * 
   * This method sends an HTTP POST request to create a new category with the provided
   * category data. It sets the appropriate Content-Type header and returns an Observable
   * that emits the created Category object.
   * 
   * @param {Category} category - The category object to be created.
   * @returns {Observable<Category>} An Observable that emits the newly created Category.
   * @throws {HttpErrorResponse} Throws an error if the category creation fails.
   * @example
   * const newCategory = { name: 'Technology', description: 'Tech-related content' };
   * this.categoryService.postCategory(newCategory).subscribe({
   *   next: (createdCategory) => this.handleSuccess(createdCategory),
   *   error: (err) => this.handleError(err)
   * });
   */
  postCategory(category: Category): Observable<Category> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<Category>("http://localhost:3000/categories", category, { headers: headers });
  }

  /** 
   * Updates an existing category on the server.
   * 
   * This method sends an HTTP PUT request to update a specific category identified
   * by its ID with the provided category data. It sets the appropriate Content-Type
   * header and returns an Observable that emits the updated Category object.
   * 
   * @param {number} id - The unique identifier of the category to update.
   * @param {Category} category - The updated category data.
   * @returns {Observable<Category>} An Observable that emits the updated Category.
   * @throws {HttpErrorResponse} Throws an error if the category update fails.
   * @example
   * const updatedCategory = { name: 'Updated Technology', description: 'Revised tech category' };
   * this.categoryService.putCategory(123, updatedCategory).subscribe({
   *   next: (category) => this.handleSuccess(category),
   *   error: (err) => this.handleError(err)
   * });
   */
  putCategory(id: number, category: Category): Observable<Category> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<Category>(`http://localhost:3000/categories/${id}`, category, { headers: headers });
  }

  /** 
   * Deletes a category from the server.
   * 
   * This method sends an HTTP DELETE request to remove a specific category
   * identified by its ID. It returns an Observable that emits the deleted Category object.
   * 
   * @param {number} id - The unique identifier of the category to delete.
   * @returns {Observable<Category>} An Observable that emits the deleted Category.
   * @throws {HttpErrorResponse} Throws an error if the category deletion fails.
   * @example
   * this.categoryService.deleteCategory(123).subscribe({
   *   next: (deletedCategory) => this.handleDeletion(deletedCategory),
   *   error: (err) => this.handleError(err)
   * });
   */
  deleteCategory(id: number): Observable<Category> {
    return this.httpClient.delete<Category>(`http://localhost:3000/categories/${id}`);
  }
}
