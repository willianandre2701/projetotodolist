import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../dashboard/dashboard.service';
import { Task1 } from '../models/models';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent implements OnInit {

  task: Task1 = {
    
    text: '',
    data: '',
    validador: false
  };

  constructor(
    private service: DashboardService,
    private router: Router,
    private id: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const takeId = this.id.snapshot.paramMap.get('id');
    this.service.readById(String(takeId)).subscribe((task) => {
      this.task = task;
    });
  }

  atualizar(): void {
    if(this.task.text == ''){
      return;
    }
    this.service.atualizar(this.task).subscribe(() => {
      console.log('Tarefa Atualizada')
      this.cancel(); 
    });
  }

  cancel(): void {
    this.router.navigate(['dashboard']);
  }



}
