import { Component, OnInit, Input } from '@angular/core';
import { Title, Meta }     from '@angular/platform-browser';
/** Animations */
import { trigger, state,group,query,stagger, style, animate, transition } from '@angular/animations';
/** custom Classes */
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article.model';

/** 
 * The Articles Component 
 * 
 * See {@link Article} for details about the main data of this store
 */
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  animations: [
    trigger('title', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s cubic-bezier(.8,-0.6,0.2,1.5)',  
          style({  opacity: 1 }))
      ])
    ]),
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(":enter", [
          style({ opacity: 0 }),
          stagger(300, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  Title: string = 'Articles - WWM';

  @Input() title: string;
  @Input() slug: string;

  state:string = 'none';

  constructor(private titleService: Title,
              private meta: Meta, 
              private articleService: ArticleService) { }

  ngOnInit(): void {
      this.setTitle();
      this.setMeta();
      this.onGetArticles();
  }

  ngAfterViewInit() {
    this.state = 'maximum';
  }

  public setTitle() {
      this.titleService.setTitle( this.Title );
  }

  public setMeta() {
      this.meta.addTags([
          { name: 'description', content: this.Title },   
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },   
          { name: 'robots', content: 'INDEX, FOLLOW' },
          { name: 'author', content: 'wwm' },
          { name: 'keywords', content: 'worldmusic, wwm' },
          { httpEquiv: 'Content-Type', content: 'text/html' },
          { property: 'og:title', content: this.Title },
          { property: 'og:type', content: "website" },
          { charset: 'UTF-8' }
      ]);
  }

  onGetArticles(): void {
      this.articleService.getArticles()
        .subscribe(
            articles => this.articles = articles, 
            (er) => {console.log(er)}, 
            () => {console.log(this.articles)}
        );
  }

}
