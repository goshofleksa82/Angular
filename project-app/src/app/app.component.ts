import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './core/navigation-bar/navigation-bar.component';
import { FooterComponent } from './core/footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { EditComponent } from './shared/edit/edit.component';
import { DetailsComponent } from './shared/details/details.component';
import { AuthenticateComponent } from './authenticate/authenticate/authenticate.component';
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';
// import { CatalogComponent } from "./shared/catalog/catalog.component";
// import { SearchComponent } from './shared/search/search.component';
// import { AboutComponent } from './shared/about/about.component';
// import { DetailsComponent } from './shared/details/details.component';
// import { LatestCourseComponent } from './shared/latest-courses/latest-courses.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationBarComponent,
    FooterComponent,
    EditComponent,
    DetailsComponent,
    AuthenticateComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project-app';
}
