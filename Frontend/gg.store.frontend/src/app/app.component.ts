import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonButton} from '@ionic/angular/standalone';
import{ register }from 'swiper/element/bundle';


//PD. Tuve que instalar la librería de swifper para utilizar los slides.
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonButton,]
})
export class AppComponent {
  constructor() {}
}
