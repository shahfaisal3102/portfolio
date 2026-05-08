import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-projects',
  imports: [CardModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  @ViewChild('projectsWrapper')
  wrapper!: ElementRef;

  ngAfterViewInit() {

    this.wrapper.nativeElement
      .addEventListener('wheel', (event: WheelEvent) => {

        event.preventDefault();

        this.wrapper.nativeElement.scrollLeft += event.deltaY;

      });

  }
}
