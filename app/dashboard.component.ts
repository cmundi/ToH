import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	moduleId: module.id,		// Without this, template must be in root folder
	selector: 'my-dashboard',
	templateUrl: 'dashboard.component.html'	// But with moduleId, this must be in same folder
})

export class DashboardComponent {
	heroes: Hero[] = [];

	constructor(private heroService: HeroService){}

	ngOnInit(): void {
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(1,5));
	}
}
