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





  status:any;
  callfunction(): void 
  {
   alert("Attention! Cette opération peut durer quelques minutes...")

    this.back.getList().subscribe(
      (data)=>{
       this.status=data;
       if (this.status == true) 
          {
              console.log(this.status );
          }

        else{
            console.log('No');
        }   
              },

      (error)=>{
        console.log(error);
      }
        );  }


  

}
