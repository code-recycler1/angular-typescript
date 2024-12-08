// Import necessary Angular modules and services
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Observable } from 'rxjs';
import { Category } from '../category';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  // Selector specifies the custom HTML tag that represents this component
  selector: 'app-category-list',

  // Marks the component as standalone, so it doesn't require declaration in an NgModule
  standalone: true,

  // Imports required for this component, such as AsyncPipe for handling asynchronous data
  imports: [AsyncPipe],

  // Path to the HTML template that defines the structure and content of this component
  templateUrl: './category-list.component.html',

  // Path to the CSS file(s) for styling this component
  styleUrl: './category-list.component.css'
})

// The main class that encapsulates the logic for the category list component
export class CategoryListComponent implements OnInit {
  // Observable holding the list of categories retrieved from the service
  categories$!: Observable<Category[]>;

  // Stores error messages encountered during service calls
  errorMessage: string = '';

  /**
   * Constructor to inject dependencies.
   * @param categoryService - Service for managing categories.
   * @param router - Angular Router for navigation.
   */
  constructor(private categoryService: CategoryService, private router: Router) { }

  /**
   * Lifecycle hook that is called after the component's data-bound properties are initialized.
   * Initiates the process of fetching categories.
   */
  ngOnInit(): void {
    this.getCategories();
  }

  /**
   * Fetches the list of categories from the service and assigns it to the `categories$` observable.
   */
  getCategories(): void {
    this.categories$ = this.categoryService.getCategories();
  }

  /**
   * Navigates to the category form in "add" mode to create a new category.
   */
  add(): void {
    this.router.navigate(['admin/category/form'], { state: { mode: 'add' } });
  }

  /**
   * Navigates to the category form in "edit" mode to update an existing category.
   * @param id - The ID of the category to be edited.
   */
  edit(id: number): void {
    this.router.navigate(['admin/category/form'], { state: { id: id, mode: 'edit' } });
  }

  /**
   * Deletes a category using the service, and refreshes the category list on success.
   * Handles errors by updating the `errorMessage` property.
   * @param id - The ID of the category to be deleted.
   */
  delete(id: number): void {
    this.categoryService.deleteCategory(id).subscribe({
      next: () => this.getCategories(),
      error: (e) => (this.errorMessage = e.message)
    });
  }
}
