import { Component, OnInit } from '@angular/core';
import { ScriptbackService } from '../scriptback.service';
import { HttpagroalimentaireService } from '../httpagroalimentaire.service';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-agro',
  templateUrl: './agro.component.html',
  styleUrls: ['./agro.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AgroComponent implements OnInit {

  liste:any;
  constructor(private boiService: HttpagroalimentaireService ) { }


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
   
   

}
