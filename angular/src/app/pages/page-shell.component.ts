import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-page-shell',
  imports: [CommonModule, RouterLink],
  template: `
    <header class="page-header">
      <h2>{{ title() }}</h2>
      <p>{{ description() }}</p>
    </header>

    <section class="cards" *ngIf="showDashboard()">
      <article class="card">
        <h3>Patients actifs</h3>
        <strong>128</strong>
      </article>
      <article class="card">
        <h3>Alertes ouvertes</h3>
        <strong>14</strong>
      </article>
      <article class="card">
        <h3>Tâches aujourd'hui</h3>
        <strong>36</strong>
      </article>
    </section>

    <section class="placeholder" *ngIf="!showDashboard()">
      <p>Contenu Angular pour la page <strong>{{ title() }}</strong>.</p>
      <a routerLink="/">Retour au dashboard</a>
    </section>
  `,
  styles: [
    `
      .page-header h2 {
        margin: 0;
        font-size: 28px;
      }
      .page-header p {
        margin: 8px 0 24px;
        color: #6b7280;
      }
      .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 16px;
      }
      .card {
        background: white;
        border-radius: 12px;
        padding: 16px;
        border: 1px solid #e5e7eb;
      }
      .card h3 {
        margin: 0;
        color: #6b7280;
        font-size: 14px;
      }
      .card strong {
        display: block;
        margin-top: 8px;
        font-size: 32px;
      }
      .placeholder {
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        padding: 24px;
      }
    `
  ]
})
export class PageShellComponent {
  private route = inject(ActivatedRoute);

  title = computed(() => this.route.snapshot.data['title'] as string ?? 'Page');
  description = computed(() => this.route.snapshot.data['description'] as string ?? '');
  showDashboard = computed(() => this.route.snapshot.routeConfig?.path === '');
}
