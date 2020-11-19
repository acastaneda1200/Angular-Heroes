import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-buscar-texto',
  templateUrl: './buscar-texto.component.html',
  styles: [
  ]
})
export class BuscarTextoComponent implements OnInit {
  heroes: any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['texto'];
      this.heroes = this._heroesService.buscarTextoHeroe(params['texto']);


    })


  }
}
