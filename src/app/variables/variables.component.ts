import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-variables',
//   templateUrl: './variables.component.html',
//   styleUrls: ['./variables.component.css']
// })

type NavigationPages = "home" | "stickers" | "about" | "contact";
interface PageInfo {
  title: string;
  url: string;
  axTitle?: string;
}

export interface Hero {
  id: number;
  name: string;
}



//La informacion viaja del Padre al Hijo por medio del Input que esta en el hijo
@Component({
  selector: 'app_variable_padre',
  template: `
    <h2>Paso del Padre al Hijo</h2>
    <h1>Variable en el hijo: {{variable}}</h1>
    <app_variable_hijo 
      [inombre]="variable" 
      [imasDatos]="arreglo"
      [inavegacion]="navigationInfo"

      [iheroes]="heroes"

      *ngFor="let oheroe of heroes2"
      [iotroHeroe]="oheroe"  
      >
        <!--
            * En esta parte no iria [iotroHeroe]="oheroe" porque no lo reconoce. Debe ir dentro del tag del elemento  app_variable_hijo
            * Se puede pasar todo el arreglo heroes o cada elemento iotroHeroe de tipo Hero
            * Por el ngFor desde el Padre, se repetiran los valores segun el numero de elementos de heroes2
            * En cada repeticion estara completo el arreglo heroes
        -->
    </app_variable_hijo>
      `
})



export class VariablesParentComponent {

  //arreglo de dos dimensiones
  heroes: Hero[] = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }]

  heroes2: Hero[] = [
    { id: 1, name: 'Batman' },
    { id: 2, name: 'Superman' },
    { id: 3, name: 'Flash' }]

  //variables
  variable = 'Mervyn';

  //arreglo de una dimension
  arreglo: (Date | string[])[] = [new Date(), new Date(), ["Casado", "Ingeniero"]];

  //objetos
  navigationInfo: Record<NavigationPages, PageInfo> = {
    home: { title: "Home", url: "/" },
    about: { title: "About", url: "/about" },
    contact: { title: "Contact", url: "/contact" },
    stickers: { title: "Stickers", url: "/stickers/all" },
  };




}

//-------------------------------------------------------------------

//EL Input lo tiene el hijo
@Component({
  selector: 'app_variable_hijo',
  template: `
    <h2>Variable inombre</h2>
    <p>Hola, yo me llamo {{inombre}}</p>

    <h2>Variable imasDatos</h2>
    <p>Fecha: {{imasDatos[0]}}</p>
    <p>Fecha1: {{imasDatos[1]}}</p>
    <p>Datos Estado : {{imasDatos[2][0]}}</p>
    <p>Ocupacion : {{imasDatos[2][1]}}</p>

    <h2>Variable inavegacion</h2>
    Aqui me sale el titulo respectivo
    <p>Navegacion : {{inavegacion.home.title}}</p>
    Aqui me sale un objeto
    <p>Navegacion : {{inavegacion.contact}}</p>

    <h2>For desde el Hijo Navegacion </h2>
    <p *ngFor="let nav of inavegacion | keyvalue">
      key: {{nav.key}} and Value: {{nav.value}}
    </p>

    
    
    <h2>Acceso directo sin For</h2>
    {{iheroes[0].id}} - {{iheroes[0].name}}
    
   
    <h2>For desde el Hijo</h2>
    <p *ngFor="let heroe of iheroes">
      {{heroe.id}} - {{heroe.name}}
    </p>
   
    <h2>For desde el Padre</h2>
    <ul>
        <li>
          {{iotroHeroe.id}} - {{iotroHeroe.name}}
        </li>
      </ul>    
   
  `
})
export class VariablesComponent {
  @Input() inombre!: String;
  @Input() imasDatos!: any;
  @Input() inavegacion!: any;
  @Input() iheroes!: any;
  @Input() iotroHeroe!: any;

}