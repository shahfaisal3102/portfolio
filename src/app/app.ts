import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import AOS from 'aos';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Experience, Skills, Projects, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App
implements OnInit, AfterViewInit {
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: false,
      mirror:true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }

  ngAfterViewInit(): void {
    AOS.refresh();
  }

}