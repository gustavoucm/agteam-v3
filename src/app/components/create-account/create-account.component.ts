import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/interfaces/user.interface';
import { AgteamService } from 'src/app/services/agteam.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  existAccount = false;
  constructor(private af: AngularFireAuth, private service: AgteamService, private router: Router) {}

  ngOnInit() {
  }

  createAccount(email: string, password: string, name: string, lastname: string) {
    console.log(email, password);

    this.af.auth.createUserWithEmailAndPassword(email, password).catch( (e) => {
      console.log('Error', e);
      if (e.code === 'auth/email-already-in-use' ) {
        this.existAccount = true;
        console.log('Cuenta existente');
      }
    }).then(() => {
      this.af.auth.currentUser.sendEmailVerification().then().catch(error => {
        console.log(error);
      });
      this.af.auth.onAuthStateChanged(user => {
          let us: User = {
          name,
          lastname,
          id: user["uid"],
          description: '',
          email
        };
          this.service.setUser(us);
          this.router.navigate(['/home']);
      });
    });

  }
}
