import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Section } from '../models/section.model';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private sectionsUrl = 'http://lv.arus.org.ua/api/';  // URL to web api

  constructor(private http: HttpClient) { }

  getSectionsFromArticle( id: number ): Observable<Section[]> {
    return this.http.get<Section[]>(this.sectionsUrl + 'sectionsFromArticle/' + id ); 
  }

}
