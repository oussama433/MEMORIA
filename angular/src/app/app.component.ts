import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  navLinks = [
    { label: 'Dashboard', path: '/' },
    { label: 'Patients', path: '/patients' },
    { label: 'Tests cognitifs', path: '/tests-cognitifs' },
    { label: 'Analyses', path: '/analyses' },
    { label: 'Alertes', path: '/alertes' },
    { label: 'Planning', path: '/planning/calendar' },
    { label: 'Communauté', path: '/communaute' },
    { label: 'Activités', path: '/activites' },
    { label: 'Diagnosis', path: '/diagnosis' },
    { label: 'Treatment', path: '/treatment' },
    { label: 'Paramètres', path: '/parametres' }
  ];
}
