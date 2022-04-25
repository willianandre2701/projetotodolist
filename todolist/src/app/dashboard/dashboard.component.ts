import { Component, OnInit } from '@angular/core';
import { Task1 } from '../models/models';
import { DashboardService } from './dashboard.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  task: Task1 = {
    id: 0,
    text: '',
    data: '',
    validador: false,
  };

  private readonly baseUrl = environment["urlBackend"]; 

  constructor(private dashboardservice:DashboardService , private http: HttpClient) {

   }

  ngOnInit(): void {
  }
  
  adicionar(): void {
    
    this.dashboardservice.newTask(this.task).subscribe(() => {
       
       console.log (this.task)
      });
      
      this.cleanInput();
    
   console.log (this.task)
    }

    cleanInput() {
      this.task.text = '';
      this.task.data = '';
    }
  
   
}
