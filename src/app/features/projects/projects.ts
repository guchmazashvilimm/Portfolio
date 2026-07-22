import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

type ProjectCategory =
  | 'All'
  | 'Angular'
  | 'JavaScript'
  | 'React'
  | 'Python'
  | 'SQL'
  | 'Professional';

interface Project {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  description: string;
  technologies: string[];
  number: string;
  visualClass: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects {
  readonly categories: ProjectCategory[] = [
    'All',
    'Angular',
    'React',
    'JavaScript',
    'Python',
    'SQL',
    'Professional'
  ];

  readonly projects: Project[] = [
    {
      id: 1,
      number: '01',
      title: 'Mini Bank Customer Management',
      category: 'Angular',
      description:
        'A polished customer management portal for banking workflows, including client search, editable records, data tables and REST integration.',
      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'REST API',
        'SCSS'
      ],
      visualClass: 'project-visual--angular',
      githubUrl:
        'https://github.com/guchmazashvilimm/angular__trainig_final',
      featured: true
    },
    {
      id: 2,
      number: '02',
      title: 'Angular Reactive Full Form',
      category: 'Angular',
      description:
        'A complete reactive Angular form system with validation, dynamic controls and polished error handling for production-ready UX.',
      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'Reactive Forms',
        'SCSS'
      ],
      visualClass: 'project-visual--portfolio',
      githubUrl:
        'https://github.com/guchmazashvilimm/ng-reactive-form'
    },
    {
      id: 3,
      number: '03',
      title: 'Angular Simon Game',
      category: 'Angular',
      description:
        'A modern Simon memory game built in Angular with animated feedback, responsive interactions and score tracking.',
      technologies: [
        'Angular',
        'TypeScript',
        'CSS',
        'Animations'
      ],
      visualClass: 'project-visual--commerce',
      githubUrl:
        'https://github.com/guchmazashvilimm/Angular-SimonGame'
    },
    {
      id: 4,
      number: '04',
      title: 'React E-commerce Store',
      category: 'React',
      description:
        'A responsive storefront experience with product listings, filtering, routing and checkout-ready UI components.',
      technologies: [
        'React',
        'JavaScript',
        'REST API',
        'CSS'
      ],
      visualClass: 'project-visual--tasks',
      githubUrl:
        'https://github.com/guchmazashvilimm/react-ecommerce-store'
    },
    {
      id: 5,
      number: '05',
      title: 'Loan Management Backend',
      category: 'SQL',
      description:
        'A PL/SQL loan management backend with issue processing, loan tracking and database-powered business logic.',
      technologies: [
        'PL/SQL',
        'Oracle',
        'SQL',
        'Stored Procedures'
      ],
      visualClass: 'project-visual--payments',
      githubUrl:
        'https://github.com/guchmazashvilimm/issue_loan_PL-SQL'
    },
     {
      id: 6,
      number: '06',
      title: 'Python QR Code Generator',
      category: 'Python',
      description:
        'A utility for generating styled QR codes in Python with PNG/SVG export and customizable payload settings.',
      technologies: [
        'Python',
        'qrcode',
        'Pillow',
        'CLI'
      ],
      visualClass: 'project-visual--payments',
      githubUrl:
        'https://github.com/guchmazashvilimm/Qr_code_Generator'
    }
  ];

  private readonly projectsSubject =
    new BehaviorSubject<Project[]>(this.projects);

  readonly selectedCategory$ =
    new BehaviorSubject<ProjectCategory>('All');

  readonly filteredProjects$ = combineLatest([
    this.projectsSubject,
    this.selectedCategory$
  ]).pipe(
    map(([projects, category]) => {
      if (category === 'All') {
        return projects;
      }

      return projects.filter(
        project => project.category === category
      );
    })
  );

  selectCategory(category: ProjectCategory): void {
    this.selectedCategory$.next(category);
  }

  trackProject(
    _index: number,
    project: Project
  ): number {
    return project.id;
  }
}