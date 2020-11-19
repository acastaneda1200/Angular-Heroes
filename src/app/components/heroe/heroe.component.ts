import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor(private ActivatedRoute: ActivatedRoute,
              private _heroesService: HeroesService
    ) {
    this.ActivatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
      
      
    })

   }


  ngOnInit(): void {
  }

}
