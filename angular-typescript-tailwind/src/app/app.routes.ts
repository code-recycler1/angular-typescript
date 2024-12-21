// Import the Routes type from Angular Router for defining route configurations
import { Routes } from '@angular/router';

// Import the components that will be associated with specific routes
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';

// Define the application's route configuration
export const routes: Routes = [
    // Route for the default path ('') that maps to the HomeComponent
    {
        path: '', // Empty path represents the root of the application
        component: HomeComponent // Component to render for this route
    },
    // Route for the 'article' path that maps to the ArticleComponent
    {
        path: 'article', // URL path for navigating to the article page
        component: ArticleComponent // Component to render for this route
    },
    // Route for the 'article/:id' path that maps to the ArticleDetailComponent
    {
        path: 'article/:id', // Dynamic route that captures the article ID (e.g., 'article/1')
        component: ArticleDetailComponent // Component to render for this route (Article detail page)
    },
    // Route for the 'contact' path that maps to the ContactComponent
    {
        path: 'contact', // URL path for navigating to the contact page
        component: ContactComponent // Component to render for this route
    },
    // Route for the 'admin/category' path that maps to the CategoryListComponent
    {
        path: 'admin/category', // URL path for navigating to the admin catergory page
        component: CategoryListComponent // Component to render for this route
    },
    // Route for the 'admin/category/form' path that maps to the CategoryFormComponent
    {
        path: 'admin/category/form', // URL path for navigating to the admin catergory form page
        component: CategoryFormComponent // Component to render for this route
    }
];
