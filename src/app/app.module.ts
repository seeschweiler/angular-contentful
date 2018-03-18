import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ContentfulService } from './contentful.service';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { MdToHtmlPipe } from './md-to-html.pipe';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full'},
  { path: 'courses', component: CourseListComponent },
  { path: 'course/:id', component: CourseDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseDetailsComponent,
    MdToHtmlPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
