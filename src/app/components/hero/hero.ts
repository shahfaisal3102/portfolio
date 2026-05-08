import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js'
import { RouterLink } from "@angular/router";
import { ButtonIcon } from "primeng/button";
import { Bind } from "../../../../../node_modules/primeng/types/primeng-bind";

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit {

  @ViewChild('typedElement')
  typedElement!: ElementRef;

  ngAfterViewInit(): void {

    new Typed(
      this.typedElement.nativeElement,
      {
      strings: [

        'ML Enthusiast',
        'Frappe/ERPNext Backend Developer',
        'Front-End Developer',
        'Data Analyst',
        'Power BI Developer'

      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|'

    });

  }

}