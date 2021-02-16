import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routings
import { ArticleRoutingModule } from './article-routing.module';
// Services
import { ArticleService } from '../services/article.service';
// Components
import { ArticlesComponent } from './articles.component';
import { ArticleComponent } from './article.component';

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleComponent,
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ],
  providers: [
    ArticleService
  ],
})
export class ArticleModule { }
