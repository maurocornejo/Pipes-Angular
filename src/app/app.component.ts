import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'CoronaVirus';
  nombre2:string = 'maurRIciO CoRnEjO rOssI'

  arreglo  = [1,2,3,4,5,6,7,8,9,10];

  PI: number = Math.PI

  porcentaje: number = 0.2020;

  salario : number = 1555.7;

  fecha : Date = new Date();

  activar : boolean = true;

  idioma : string = 'en';

  videoUrl : string = 'https://www.youtube.com/embed/gdKWeboPxgY';

  valorPromise = new Promise<string>((resolve) => {

    setTimeout(()=>{
      resolve('llegaron los datos');
    },5000);
  })

  heroe ={
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 22
    }
  }
}
