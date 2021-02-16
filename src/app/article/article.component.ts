import { Component, OnInit } from '@angular/core';
import { Title, Meta }     from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
/** Animations */
import { trigger, state,group,query,stagger, style, animate, transition } from '@angular/animations';
/** custom Classes */
import { ArticleService } from '../services/article.service';
import { SectionService } from '../services/section.service';
import { Article } from '../models/article.model';
import { Section } from '../models/section.model';

/** 
 * The Article Component 
 * 
 * See {@link Article} for details about the main data of this store
 */
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  animations: [
    trigger('banner', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s',  style({  opacity: 1 }))
      ])
    ]),
    trigger('banner2', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1.5s',  style({  opacity: 1 }))
      ])
    ]),
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger(1000, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ArticleComponent implements OnInit {
  article: Article;
  id: number;
  errorStatus: boolean = false;
  statusText: string;
  updateText: string;
  editTitle = ''; 
  editSlug = '';
  editDesc = '';
  image_url = '';
  sections: Section[];

  constructor ( private titleService: Title,
                private meta: Meta,
                private route: ActivatedRoute, 
                private articleService: ArticleService,
                private sectionService: SectionService) {
      let id = route.snapshot.params['id'];
      this.id = id;
  }

  ngOnInit(): void {
      this.getArticle();
  }

  setTitle( newTitle: string) {
      this.titleService.setTitle( newTitle );
  }

  setMeta(article) {
      this.meta.addTags([
          { name: 'description', content: article.title + ' - WWM' },   
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },   
          { name: 'robots', content: 'INDEX, FOLLOW' },
          { name: 'author', content: 'wwm' },
          { name: 'keywords', content: 'worldmusic, wwm' },
          { name: 'date', content: article.date, scheme: 'YYYY-MM-DD' },
          { httpEquiv: 'Content-Type', content: 'text/html' },
          { property: 'og:title', content: article.title + ' - WWM' },
          { property: 'og:type', content: "website" },
          { charset: 'UTF-8' }
      ]);
  }

  getArticle() {
      this.articleService.getArticle(this.id)
        .subscribe(
            (article) => { this.article = article;
                          this.editTitle = this.article.title;
                          this.editSlug = this.article.slug;
                          this.image_url = this.article.image_url;
                          this.editDesc = this.article.descriptions;
                          this.setTitle( this.article.title + ' - WWM' );
                          this.setMeta(this.article);
                          this.getSections(this.id);
                        },
            (error) => { console.log(error.statusText); 
                      this.errorStatus = true; 
                      this.statusText = error.statusText; }, 
            () => { console.log(this.article); }
        );
  }

  getSections(id: number){
      this.sectionService.getSectionsFromArticle(id)
        .subscribe(
            (sections) => { this.sections = sections; }, 
            (error) => { console.log(error) }, 
            () => { console.log(this.sections); }
        );
  }

}
