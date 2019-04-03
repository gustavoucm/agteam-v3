import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AgteamService } from 'src/app/services/agteam.service';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  session = false;
  name: User;
  user = [];
  constructor(private auth: AngularFireAuth, private rout: Router, private service: AgteamService) {
  }

  ngOnInit() {
    this.auth.auth.onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.session = true;
        this.getUser(user.uid);
      } else {
        this.session = false;
      }
    });
  }

  signout() {
    this.auth.auth.signOut().catch(error => console.log(error));
    this.rout.navigate(['/home']);
  }

  getUser(uidUser: string) {
    this.service.getUser(uidUser).subscribe( (user: any) => {
      this.user = user;
      console.log("Usuario desde getUser ", this.user);
    });
  }
}
