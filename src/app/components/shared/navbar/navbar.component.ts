import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
 
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  buscarHeroe(termino:string){
    
    if (termino.length > 0){
      this.router.navigate(['/buscar', termino])
    }else{
      this.router.navigate(['/heroes']);

    }
     
    
  }

  buscarTextoHeroe(termino2:string){
    
    if (termino2.length > 0){
      this.router.navigate(['/buscarT', termino2])
    }else{
      this.router.navigate(['/heroes']);

    }
     
    
  }

}
