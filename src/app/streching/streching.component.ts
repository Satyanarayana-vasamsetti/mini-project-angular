import { Component } from '@angular/core';
import { StrechingService } from '../services/streching.service';
import { Streching } from '../model/streching';
import { Router } from '@angular/router';

@Component({
  selector: 'app-streching',
  templateUrl: './streching.component.html',
  styleUrls: ['./streching.component.css']
})
export class StrechingComponent {
  details:Streching[]=[];
  constructor(private service:StrechingService,private router :Router){}
  ngOnInit():void{
    this.service.onSubmit().subscribe(data=>this.details=data);
  }
  Onclick(){
    this.router.navigate(['/trainingcourse']);
  }
}
