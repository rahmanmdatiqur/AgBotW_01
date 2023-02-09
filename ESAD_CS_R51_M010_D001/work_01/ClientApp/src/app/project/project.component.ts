import { Component } from '@angular/core';
import { Project } from '../models/project';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  constructor(private service: ApiService) { }
  projects: Project[] = [];
  ngOnInit() {
    this.service.get().subscribe(x => {
      this.projects = x;
      console.log(x);
    })
  }
}
