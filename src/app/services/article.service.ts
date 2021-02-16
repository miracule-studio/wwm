import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articlesUrl = 'http://lv.arus.org.ua/api/';  // URL to web api

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articlesUrl + 'articles');
  }

  getArticle( id: number ): Observable<Article> {
    const body = JSON.stringify({ id: id });
    return this.http.get<Article>(this.articlesUrl + 'articles/' + id );
  }

  findArticles(req: string): Observable<Article[]> {
    return this.http.get<Article[]>(this.articlesUrl + 'findArticles/' + req);
  }
  
}