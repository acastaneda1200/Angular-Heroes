import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
 
})
export class HeroeCardComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() index: number;

  @Output() getHeroe: EventEmitter<number>;
  constructor(private router: Router) {
    this.getHeroe = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    // console.log(this.index);
     this.router.navigate( ['/heroe', this.index] );
   // this.getHeroe.emit(this.index);
  }

}
