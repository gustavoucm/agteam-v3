import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.css']
})
export class TestOneComponent {

  respuestas: Object = {
    uno : "info1",
    dos : "sistema2",
    tres: "dato3",
    cuatro: "entidad4",
    cinco: "red5",
    seis: "red6",
    siete: "red7",
    ocho: "mongo8",
    nueve: "externo9",
    diez: "externo10"
  }
  constructor(private router: Router) { }


  test(datos: NgForm) {
    console.log("form",datos.value);
    var respuesta = datos.value;
    var puntaje = 0;
    if (respuesta['uno'] === 'dato1') {
      puntaje++;
    }
    if(respuesta['dos'] === 'bd2'){
      puntaje++;
    }
    if(respuesta['tres'] === 'atributo3'){
      puntaje++;
    }
    if(respuesta['cuatro'] === 'entidad4'){
      puntaje++;
    }
    if(respuesta['cinco'] === 'jerarquico5'){
      puntaje++;
    }
    if(respuesta['seis'] === 'relacional6'){
      puntaje++;
    }
    if(respuesta['siete'] === 'red7'){
      puntaje++;
    }
    if(respuesta['ocho'] === 'mongo8'){
      puntaje++;
    }
    if(respuesta['nueve'] === 'externo9'){
      puntaje++;
    }
    if(respuesta['diez'] === 'conceptual10'){
      puntaje++;
    }
    console.log("puntaje", puntaje);
    this.router.navigate(['/result', puntaje]);
  }
}
