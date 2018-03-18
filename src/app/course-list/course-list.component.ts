import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Entry<any>[] = [];

  constructor(private router: Router, private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getCourses()
      .then(courses => this.courses = courses);
  }

  goToCourseDetailsPage(courseId) {
    this.router.navigate(['/course', courseId]);
  }

}
