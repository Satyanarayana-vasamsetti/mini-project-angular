import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainingcourse',
  templateUrl: './trainingcourse.component.html',
  styleUrls: ['./trainingcourse.component.css']
})
export class TrainingcourseComponent {
  constructor(private router:Router){}
  contact(){
    this.router.navigate(['/contact']);
  }
}
