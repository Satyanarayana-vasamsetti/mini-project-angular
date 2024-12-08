import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  constructor(private router:Router) { }
    OnClick(){
      this.router.navigate(['/streching'])
    }
  }


