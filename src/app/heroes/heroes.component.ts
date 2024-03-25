import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
