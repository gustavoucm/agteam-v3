import { Component, OnInit } from '@angular/core';
import { AgteamService } from 'src/app/services/agteam.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/interfaces/user.interface';
import { Router } from '@angular/router';
declare var jQuery: any;
declare var $:any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  enrolled = false; // Saber si esta inscrito al curso
  course = []; // Obtener información del curso
  loading  = true;
  band=false;
  constructor(private af: AngularFireAuth, private service: AgteamService, private router: Router) {
    
    this.af.auth.onAuthStateChanged(_user => {
      if (_user) {
        this.service.getUser(_user.uid).subscribe((us: any) => {
          this.user = us;
          console.log("Usuario desde perfil",this.user);
          this.service.isEnrolled(us[2]).subscribe((data: any) => {
            console.log(data);
            if (data.length == 0){
              this.enrolled = false;
              console.log("entre en false");
              this.loading = false;
            } else {
                console.log("data",data);
                this.enrolled = true;
                this.service.getCourse('1').subscribe(data => {
                 this.course = data;
                 console.log(this.course);
                 this.loading = false;
                 console.log("entre en true");
               });
            }
          });
        });
    
      } else {
        this.router.navigate(['/home']);
      }
    });

  }

  ngOnInit() {
  }

  showEdit(){
    this.band = !this.band;
    console.log(this.band);
  }

  edit(description: string){
    console.log(description, this.user[2]);
    this.service.setDescription(description, this.user[2]);
    this.band = !this.band;
    $(".descForm").css('visibility', 'hidden');
  }
}
