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
  unitScores = [];

  constructor(private af: AngularFireAuth, private service: AgteamService) {
    this.af.auth.onAuthStateChanged((user:any) => {
      if (!user) {
      this.usr = false;
      this.enrolled = false;
      this.loading = false;
      console.log("loading nu", this.loading);
      console.log("usr nu", this.usr);
      } else {
        console.log("loading", this.loading);
        console.log("usr", this.usr);
        this.usr = true;
        this.userData = user;
        this.service.getScores(this.userData['uid']).subscribe(data => {
          this.unitScores = data;
        });
        this.service.isEnrolled(this.userData['uid']).subscribe((data: any[]) => {         
          if (data.length != 0){
            this.enrolled = true;
          } else {
            this.enrolled = false;
          }
          this.loading = false;
        });
      }
    });
    this.loading = false;
    this.usr = false;
    console.log("loading fuera", this.loading);
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
