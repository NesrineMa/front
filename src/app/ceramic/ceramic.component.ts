import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpceramicService } from '../httpceramic.service';

@Component({
  selector: 'app-ceramic',
  templateUrl: './ceramic.component.html',
  styleUrls: ['./ceramic.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CeramicComponent implements OnInit {

  liste:any;
  constructor(private boiService: HttpceramicService ) { }

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
