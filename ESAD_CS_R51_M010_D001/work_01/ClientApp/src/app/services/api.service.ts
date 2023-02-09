import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  get(): Observable<Project[]> {
    return this.http.get<Project[]>("http://localhost:57334/api/Projects");
  }
  post(data: Project): Observable<Project> {
    return this.http.post<Project>("http://localhost:57334/api/Projects", { title: data.title, startDate: data.startDate, budget: data.budget });
  }
}
