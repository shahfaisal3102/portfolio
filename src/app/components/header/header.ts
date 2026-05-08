import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [ButtonModule, CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

   menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
