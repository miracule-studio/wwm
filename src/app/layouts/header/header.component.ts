import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from "../../models/article.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  articles: Article[];
  searchArticle: string = '';

  events: string[] = [];
  opened: boolean;

  openmenu: boolean;
  opensearch: boolean;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
      this.openmenu = false;
      this.opensearch = false;
  }

  openMenu(){
    this.openmenu = true;
  }

  closeMenu(){
    this.openmenu = false;
  }

  openSearch(){
    this.opensearch = true;
  }

  closeSearch(){
    this.opensearch = false;
  }

  onFindArticles(): void{
    this.articleService.findArticles(this.searchArticle)
      .subscribe(
        articles => this.articles = articles, 
        (er) => {console.log(er)}, 
        () => {console.log("Authors",this.articles)}
      );
  }

}
