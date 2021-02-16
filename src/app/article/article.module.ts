import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routings
import { ArticleRoutingModule } from './article-routing.module';
// Services
import { ArticleService } from '../services/article.service';
import { SectionService } from '../services/section.service';
// Components
import { ArticlesComponent } from './articles.component';
import { ArticleComponent } from './article.component';
import { SectionComponent } from './section/section.component';
// Pipes
import { SafeHtmlPipe } from '../pipes/safe-html.pipe';

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleComponent,
    SectionComponent,
    SafeHtmlPipe,
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ],
  providers: [
    ArticleService,
    SectionService
  ],
})
export class ArticleModule { }
