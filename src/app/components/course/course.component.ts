import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgteamService } from 'src/app/services/agteam.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  private id: string;
  course = [];
  units = [];
  loading = true;
  constructor(private activatedroute: ActivatedRoute, private agteamService: AgteamService,private router: Router) {
    this.activatedroute.params.subscribe(data =>{
      this.id = data['id'];
      this.agteamService.getCourse(this.id).subscribe((data: any) => {
        console.log(data);
        if (data == null) {
          this.router.navigate(['/home']);
        }
        this.course = data;
        this.units = data[4];
        this.units.shift();
        this.loading = false;
      });
    });
  }

  ngOnInit() {
  }

}
