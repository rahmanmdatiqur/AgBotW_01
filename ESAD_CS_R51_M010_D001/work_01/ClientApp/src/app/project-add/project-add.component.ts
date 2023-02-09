import { Component } from '@angular/core';
import { Project } from '../models/project';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent {
  project: Project = new Project();
  constructor(private service: ApiService) { }
  onSubmitForm() {
    console.log(this.project);
    this.service.post(this.project).subscribe(x => console.log("Data Added"));
  }
}
