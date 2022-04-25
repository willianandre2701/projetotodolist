import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Task1 } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly baseUrl = environment["urlBackend"];

  constructor(private http:HttpClient ) {
    
   }
   read(): Observable<Task1[]> {
    return this.http.get<Task1[]>(this.baseUrl);
  }

  readById(id: string): Observable<Task1>{
    return this.http.get<Task1>(`${this.baseUrl}/${id}`)

  }

  newTask(newTask: Task1): Observable<Task1> {
    return this.http.post<Task1>(this.baseUrl, newTask);
  }

  atualizar(task: Task1): Observable<Task1>{
    const url = `${this.baseUrl}/${task.id}`
    return this.http.put<Task1>(url, task)
  }

  readConcluida(): Observable<Task1[]> {
    return this.http.get<Task1[]>(`${this.baseUrl}/concluidas`);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  markConcluida(id: number){
    return this.http.put(`${this.baseUrl}/concluir/${id}`,id);
  }

  markPendente(id: number){
    return this.http.put(`${this.baseUrl}/desmarcar/${id}`,id);
  }
}
