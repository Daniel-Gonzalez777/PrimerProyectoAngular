import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //Interpolacion (pasar logica a la vista)
  protected readonly ficha = signal(283);
  protected readonly programa = signal("ADSO");
  protected readonly nombres = signal("Daniel");
  protected readonly titulo = signal("Mejores equipos de Colombia");
  protected readonly texto1 = signal("El fútbol colombiano es una pasión que une a millones de personas en todo el país. A lo largo de su historia, varios clubes han dejado huella en el panorama nacional e internacional, ganándose el respeto y la admiración tanto dentro como fuera de Colombia. A continuación, repasamos algunos de los equipos más importantes y exitosos.");
  protected readonly equipo1 = signal("Atlético Nacional");
  protected readonly foto1 = signal('assets/images/nacional.png');
  protected readonly texto2 = signal("Con sede en Medellín, es uno de los clubes más laureados de Colombia. Fundado en 1947, ha ganado múltiples títulos de la Categoría Primera A y ha tenido destacadas participaciones en la Copa Libertadores, incluyendo su victoria en 1989 y 2016.");
  protected readonly equipo2 = signal("Millonarios FC");
  protected readonly foto2 = signal('assets/images/millonarios.png');
  protected readonly texto3 = signal("Con sede en Bogotá, es otro de los equipos más exitosos del país. Fundado en 1946, Millonarios ha ganado numerosos títulos de liga y ha sido un competidor constante en torneos internacionales.");
  protected readonly equipo3 = signal("América de Cali");
  protected readonly foto3 = signal('assets/images/america.png');
  protected readonly texto4 = signal("Con sede en Cali, es conocido por su rica historia y su gran base de seguidores. Fundado en 1927, América de Cali ha ganado varios títulos de liga y ha tenido destacadas participaciones en la Copa Libertadores.");
  protected readonly equipo4 = signal("Independiente Santa Fe");    
  protected readonly texto5 = signal("También con sede en Bogotá, Santa Fe es uno de los clubes más antiguos y exitosos de Colombia. Fundado en 1941, ha ganado múltiples títulos de liga y ha tenido éxito en competiciones internacionales, incluyendo la Copa Sudamericana en 2015.");
  protected readonly foto4 = signal('assets/images/santaFe.png');
  protected readonly equipo5 = signal("Deportes Quindio");
  protected readonly texto6 = signal("Con sede en Armenia, es un equipo con una rica historia en el fútbol colombiano. Fundado en 1951, Deportes Quindío ha ganado la Categoría Primera A y ha tenido participaciones destacadas en torneos nacionales e internacionales.");
  protected readonly foto5 = signal('assets/images/quindio.png');
  protected readonly equipo6 = signal("Once Caldas");
  protected readonly texto7 = signal("Con sede en Manizales, es conocido por su sorprendente victoria en la Copa Libertadores en 2004. Fundado en 1947, Once Caldas ha ganado varios títulos de liga y es reconocido por su estilo de juego disciplinado y efectivo.");
  protected readonly foto6 = signal('assets/images/oncecaldas.png')
  respuesta(equipo: string) {
    switch(equipo) {
      case 'nacional':
        alert('¡Correcto! El rey de copas');
        break;
      case 'america':
        alert('Tampoco hay que mentirse instru (👻B)');
        break;
      case 'millonarios':
        alert('Ni en broma las gallinas jajaja');
        break;
      case 'quindio':
        alert('Tampoco es mentir por convivir');
        break;
      case 'santafe':
        alert('Incorrecto');
        break;
      case 'once caldas':
        alert('Incorrecto');
        break;
      default:
        alert('Incorrecto');
    }
  }
}

