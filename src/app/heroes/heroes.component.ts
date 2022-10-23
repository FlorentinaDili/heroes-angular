import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'
//import {HEROES} from '../mock-heroes'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //heroes=HEROES;
  heroes: Hero [] = [];
  selectedHero?: Hero;

  hero: Hero = {
    id:1,
    name:'Windstrom'
  };
  
  constructor(private heroServices: HeroService) {
    
  }

  // getHeroes():void{
  //   this.heroes=this.heroServices.getHeroes();
  // }
  getHeroes(): void {
    this.heroServices.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  // selectedHero?: Hero;
  onSelect(hero:Hero): void{
    this.selectedHero=hero;
  }

}
