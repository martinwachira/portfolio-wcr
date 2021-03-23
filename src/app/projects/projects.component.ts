import { Component, OnInit, HostBinding, Inject, HostListener } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: [
    '../app.component.css',
    './projects.component.css',
  ]
})
export class ProjectsComponent implements OnInit {

  @HostBinding('class.onHover') onHover = false;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('document.getElementById("#figure"):hover', [])
  onToggle() {
    this.onHover = !this.onHover;
  }

}
