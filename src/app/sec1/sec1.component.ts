import { Component, OnInit } from '@angular/core';
import { HttpboisService } from '../httpbois.service';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DataSource } from '@angular/cdk/table';
import { ScriptbackService } from '../scriptback.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-sec1',
  templateUrl: './sec1.component.html',
  styleUrls: ['./sec1.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class Sec1Component implements OnInit {
 
  liste:any;
  constructor(private boiService: HttpboisService, private back: ScriptbackService ) { }

  ngOnInit(): void {
 this.boiService.getList().subscribe(
(data)=>{
 this.liste=data;
 console.log(this.liste);
},
(error)=>{
	console.log(error);
}
  );


  }


  
 

  dataStudentsList = new MatTableDataSource();
  displayedStudentsColumnsList: string[] = ['denomination', 'raison_sociale', 'responsable', 'actions'];


  status:any;
  callfunction(): void 
  {
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
