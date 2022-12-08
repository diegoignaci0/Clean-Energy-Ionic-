import { Component } from '@angular/core';

interface Componente{
  icon: string; 
  name: string; 
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {
      icon: 'home-outline',
      name: 'INICIO',
      redirecTo: '/descripcion'
    },
    {
      icon : 'log-in-outline',
      name : 'COMENTARIOS',
      redirecTo : '/comentarios'
    },
    {
      icon : 'help-outline',
      name : 'AYUDA',
      redirecTo : '/ayuda'
    },
    {
      icon : 'information-circle-outline',
      name : 'ACERCA DE',
      redirecTo : '/acerca-de'
    }
    
  ];

}


