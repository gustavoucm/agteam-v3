import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router'
import { AgteamService } from 'src/app/services/agteam.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  score = "";  
  constructor(private router: ActivatedRoute, private auth: AngularFireAuth,
    private route: Router,private service: AgteamService) {
    this.router.params.subscribe(param => {
      this.score = param['id'];
      this.auth.auth.onAuthStateChanged(user => {
        console.log("usuario",user);
        if (user) {          
          this.service.setScore(user['uid'], this.score);
        } else {
          this.route.navigate(['/home']);
        }
      });
    });
    
  }

  ngOnInit() {
  }

}
