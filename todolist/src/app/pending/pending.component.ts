import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { Task1 } from '../models/models';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})



export class PendingComponent implements OnInit {

  listar_task : Task1[] = []
  task: Task1
  constructor(private service : DashboardService) {
    this.task= {
      
      text: '',
      data: '',
      validador: false 
  }
   }

  
  concluir(id: number) {
    this.service.markConcluida(id).subscribe(
      (erro => {
        console.log(erro);
      })
    )
    setTimeout(() => {
      location.reload();

    }, 300)
  }

  deletar(id: number) {
    this.service.delete(id).subscribe(
      (erro => {
        console.log(erro);
      })
    )
    setTimeout(() => {
      location.reload();

    }, 300)
  }
 
  
  ngOnInit(): void {
    this.service.read().subscribe(list => {
      this.listar_task = list;
    });
    }
 
  
}
