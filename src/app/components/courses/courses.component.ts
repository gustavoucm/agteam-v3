import { Component, OnInit } from '@angular/core';
import { AgteamService } from 'src/app/services/agteam.service';
import { Course } from 'src/app/interfaces/course.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Object[] = [];
  loading = true;
  constructor(private agteamService: AgteamService) {
    this.agteamService.getCourses().subscribe( (data: any) => {
      this.courses = data;
      console.log(this.courses);
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}
