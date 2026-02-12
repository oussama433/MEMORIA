import { Routes } from '@angular/router';
import { PageShellComponent } from './pages/page-shell.component';

export const routes: Routes = [
  { path: '', component: PageShellComponent, data: { title: 'Dashboard', description: 'Vue principale Memoria.' } },
  { path: 'patients', component: PageShellComponent, data: { title: 'Patients', description: 'Liste des patients suivis.' } },
  { path: 'patients/:id', component: PageShellComponent, data: { title: 'Détail patient', description: 'Fiche de suivi patient.' } },
  { path: 'tests-cognitifs', component: PageShellComponent, data: { title: 'Tests cognitifs', description: 'Centre des évaluations cognitives.' } },
  { path: 'tests-cognitifs/memoire', component: PageShellComponent, data: { title: 'Test mémoire', description: 'Évaluation de la mémoire.' } },
  { path: 'tests-cognitifs/langage', component: PageShellComponent, data: { title: 'Test langage', description: 'Évaluation du langage.' } },
  { path: 'tests-cognitifs/orientation', component: PageShellComponent, data: { title: 'Test orientation', description: 'Évaluation orientation temporelle et spatiale.' } },
  { path: 'analyses', component: PageShellComponent, data: { title: 'Analyses', description: 'Indicateurs et rapports.' } },
  { path: 'alertes', component: PageShellComponent, data: { title: 'Alertes', description: 'Surveillance des alertes.' } },
  { path: 'alertes/create', component: PageShellComponent, data: { title: 'Créer une alerte', description: 'Nouveau scénario d’alerte.' } },
  { path: 'alertes/reports', component: PageShellComponent, data: { title: 'Rapports alertes', description: 'Historique et export des alertes.' } },
  { path: 'alertes/:id', component: PageShellComponent, data: { title: 'Détail alerte', description: 'Détail d’une alerte.' } },
  { path: 'planning/calendar', component: PageShellComponent, data: { title: 'Calendrier', description: 'Vue calendrier des interventions.' } },
  { path: 'planning/scheduling', component: PageShellComponent, data: { title: 'Scheduling', description: 'Planification des ressources.' } },
  { path: 'planning/tasks', component: PageShellComponent, data: { title: 'Tâches', description: 'Organisation des tâches.' } },
  { path: 'planning/availability', component: PageShellComponent, data: { title: 'Disponibilité', description: 'Disponibilité des équipes.' } },
  { path: 'communaute', component: PageShellComponent, data: { title: 'Communauté', description: 'Espace communautaire.' } },
  { path: 'communaute/:id', component: PageShellComponent, data: { title: 'Fil communauté', description: 'Détail d’un flux communautaire.' } },
  { path: 'communaute/analytics', component: PageShellComponent, data: { title: 'Analytics communauté', description: 'Métriques de participation.' } },
  { path: 'activites', component: PageShellComponent, data: { title: 'Activités', description: 'Suivi des activités.' } },
  { path: 'diagnosis', component: PageShellComponent, data: { title: 'Diagnosis', description: 'Tableau de diagnostic.' } },
  { path: 'diagnosis/:id/execute', component: PageShellComponent, data: { title: 'Exécution diagnostic', description: 'Lancer un diagnostic.' } },
  { path: 'diagnosis/:id/results', component: PageShellComponent, data: { title: 'Résultat diagnostic', description: 'Résultats de diagnostic.' } },
  { path: 'treatment', component: PageShellComponent, data: { title: 'Treatment', description: 'Suivi des traitements.' } },
  { path: 'treatment/zones/create', component: PageShellComponent, data: { title: 'Zones de sécurité', description: 'Création des zones de sécurité.' } },
  { path: 'treatment/tracking', component: PageShellComponent, data: { title: 'Tracking temps réel', description: 'Suivi en temps réel.' } },
  { path: 'parametres', component: PageShellComponent, data: { title: 'Paramètres', description: 'Configuration de la plateforme.' } },
  { path: '**', component: PageShellComponent, data: { title: 'Page non trouvée', description: 'La route demandée n’existe pas.' } }
];
