// Import necessary Angular modules and services
import { Component } from '@angular/core';
import { Category } from '../category';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  // Selector specifies the custom HTML tag for this component
  selector: 'app-category-form',

  // Marks the component as standalone, enabling it to work independently
  standalone: true,

  // Specifies required imports, such as FormsModule for template-driven forms
  imports: [FormsModule],

  // Path to the HTML template that defines the component's structure and content
  templateUrl: './category-form.component.html',

  // Path to the CSS file(s) for styling the component
  styleUrl: './category-form.component.css'
})

// Main class for managing category forms (Add/Edit functionality)
export class CategoryFormComponent {
  // Flags to determine whether the form is in "Add" or "Edit" mode
  isAdd: boolean = false;
  isEdit: boolean = false;

  // Stores the ID of the category being edited (if applicable)
  categoryId: number = 0;

  // Model for the form, representing the category data
  category: Category = { id: 0, name: '' };

  // Tracks the submission status of the form
  isSubmitted: boolean = false;

  // Holds error messages for display if the form submission fails
  errorMessage: string = '';

  /**
   * Constructor to inject dependencies and initialize the form state.
   * @param router - Angular Router for navigation and state management.
   * @param categoryService - Service for interacting with category data.
   */
  constructor(private router: Router, private categoryService: CategoryService) {
    // Retrieve navigation state to determine form mode (Add/Edit) and category ID
    const state = this.router.getCurrentNavigation()?.extras.state || {};

    // Set mode flags based on navigation state
    this.isAdd = state['mode'] === 'add';
    this.isEdit = state['mode'] === 'edit';

    // Retrieve category ID from state (if applicable)
    this.categoryId = +state['id'];

    // Default to "Add" mode if neither "Add" nor "Edit" is specified
    if (!this.isAdd && !this.isEdit) {
      this.isAdd = true;
    }

    // If editing, fetch the category data by ID and initialize the form
    if (this.categoryId != null && this.categoryId > 0) {
      this.categoryService.getCategoryById(this.categoryId).subscribe(result => {
        this.category = result;
      });
    }
  }

  /**
   * Handles form submission for both "Add" and "Edit" modes.
   * Submits the category data to the service and navigates to the category list page on success.
   */
  onSubmit(): void {
    this.isSubmitted = true;

    // If in "Add" mode, create a new category
    if (this.isAdd) {
      this.categoryService.postCategory(this.category).subscribe({
        next: () => this.router.navigateByUrl('/admin/category'), // Navigate to the category list
        error: (e) => (this.errorMessage = e.message) // Display error message on failure
      });
    }

    // If in "Edit" mode, update the existing category
    if (this.isEdit) {
      this.categoryService.putCategory(this.categoryId, this.category).subscribe({
        next: () => this.router.navigateByUrl('/admin/category'), // Navigate to the category list
        error: (e) => (this.errorMessage = e.message) // Display error message on failure
      });
    }
  }
}
