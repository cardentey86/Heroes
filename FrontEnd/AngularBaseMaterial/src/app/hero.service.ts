import { Injectable } from '@angular/core';
import { Hero } from './heroes/heroe';
import { HEROES } from './mock-heroe';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private mesageService: MessageService) { }

    getHeroes(): Observable<Hero[]>  {
        this.messageService.add('HeroService: fetched heroes');
        return of(HEROES);
    }
}
