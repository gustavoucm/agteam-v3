import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { AngularFireAuth } from '@angular/fire/auth';
import { AgteamService } from 'src/app/services/agteam.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  BarChart = [];
  score = [];
  loading = true;
  constructor(private auth: AngularFireAuth, private service: AgteamService, private router: Router) {
  }

  ngOnInit() {
    this.auth.auth.onAuthStateChanged( user => {
      if(user){
        this.service.getScores(user['uid']).subscribe(score => {
          score.shift();
          score.forEach(element => {
            if (element == 'null') {
              this.score.push(0);
            } else {
              this.score.push(+element);
            }
          });
          console.log("Score dentro",this.score);
          this.createChart(this.score);
        });
      } else {
        this.router.navigate(['/home']);
      }
    });
    console.log("Score fuera",this.score);    
    
  }

  createChart(scores: any[]) {
    this.BarChart = new Chart('barChart', {
      type: 'bar',
    data: {
     labels: ["Unidad 1", "Unidad 2 -Sin evaluar", "Unidad 3 - Sin evaluar", "Unidad 4 - Sin evaluar"],
     datasets: [{
         label: 'Puntaje obtenido en evaluación',
         data: this.score,
         backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
            
         ],
         borderColor: [
             'rgba(255,99,132,1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',             
         ],
         borderWidth: 1
     }]
    }, 
    options: {
     title:{
         text:"",
         display:true
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true,
                 max:10
             }
         }]
     }
    }
    });    
  }

}
