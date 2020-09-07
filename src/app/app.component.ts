import { Component } from '@angular/core';
import { ScriptbackService } from './scriptback.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contacts';

  constructor(private back: ScriptbackService ) { }

  


  

}
