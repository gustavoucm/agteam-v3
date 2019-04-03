import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AgteamService } from 'src/app/services/agteam.service';
declare var jQuery: any;
declare var $:any;

@Component({
  selector: 'app-dbfundamentals',
  templateUrl: './dbfundamentals.component.html',
  styleUrls: ['./dbfundamentals.component.css']
})
export class DbfundamentalsComponent implements OnInit {
  usr = true;
  userData: Object [] = [];
  enrolled = false;
  loading = true;
  constructor(private af: AngularFireAuth, private service: AgteamService) {
    this.af.auth.onAuthStateChanged((user:any) => {
      this.usr = true;
      if (!user) {
      this.usr = false;
      this.enrolled = false;
      } else {
        this.userData = user;
        console.log('usuario',this.userData);
        this.service.isEnrolled(this.userData['uid']).subscribe((data: any[]) => {
          console.log("enrolled",data);
          if (data.length != 0){
            this.enrolled = true;
          } else {
            this.enrolled = false;
          }
          this.loading = false;
        });
      }
    });
   
  }

  ngOnInit() {
    
  }

  enroll() {
    if (!this.usr) {
      $('#exampleModal').modal('show');
    } else {
      console.log('datos', this.userData);
      this.service.enrollUser({
        id: this.userData['uid'],
        u1: 'null',
        u2: 'null',
        u3: 'null',
        u4: 'null'
      });
    }
  }
}
