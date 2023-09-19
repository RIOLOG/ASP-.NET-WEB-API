import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super.hero';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable'

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  baseUrl = 'https://localhost:7290/api'
  url = "SuperHeroContoller"

  constructor(private http: HttpClient) { }



  public getSuperHeroes() : Observable<SuperHero[]>
  {
    return this.http.get<SuperHero[]>(`${this.baseUrl}/${this.url}`)
  }

  public updateHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.put<SuperHero[]>(
      `${this.baseUrl}/${this.url}`,
      hero
    );
  }

  public createHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.post<SuperHero[]>(
      `${this.baseUrl}/${this.url}`,
      hero
    );
  }

  public deleteHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.delete<SuperHero[]>(
      `${this.baseUrl}/${this.url}`
    );
  }

}
