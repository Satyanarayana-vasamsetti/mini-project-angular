import { Component } from '@angular/core';
import { StrechingService } from '../services/streching.service';
import { Streching } from '../model/streching';

@Component({
  selector: 'app-streching',
  templateUrl: './streching.component.html',
  styleUrls: ['./streching.component.css']
})
export class StrechingComponent {
  details:Streching[]=[];
  constructor(private service:StrechingService){}
  ngOnInit():void{
    this.service.onSubmit().subscribe(data=>this.details=data);
  }
}
