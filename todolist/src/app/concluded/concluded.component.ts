import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { Task1 } from '../models/models';

@Component({
  selector: 'app-concluded',
  templateUrl: './concluded.component.html',
  styleUrls: ['./concluded.component.scss']
})
export class ConcludedComponent implements OnInit {
  
  listar_concluidas : Task1[] = []
  task: Task1
  constructor(private service : DashboardService) {
    this.task= {
      id: 0,
      text: '', 
      data: '',
      validador: true
  }
   }

  ngOnInit(): void {
    this.service.readConcluida().subscribe(listConcluidas => {
      this.listar_concluidas = listConcluidas;
    })
  }

  pendente(id: number) {
    this.service.markPendente(id).subscribe(
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
}
