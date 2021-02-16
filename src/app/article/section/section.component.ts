import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
/** custom Classes */
import { SectionService } from '../../services/section.service';

/** 
 * The Section Component 
 */
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  /** Section from array in Article component */
  @Input() section: any;
  /** Current sort number of Section */
  @Input() sort: number;
  /**  Number of Section */
  id: number;
  /** Title of Section */
  title: string;
  /** Content of Section */
  content: string;
  /** Template of Section */
  template: string;
  /** CSS Classes of Section */
  class_css: string;
  /** Temlate Name of Section */
  name_template: string;
  /** Image url of Section */
  image_url = '';

  /**
   * Constructor
   * 
   * @param { SectionService } sectionService SectionService
   * @param { Router } router Router
   */
  constructor( private sectionService: SectionService, private router: Router ) { }

  /** ngOnInit */
  ngOnInit(): void {
      this.section = this.section;
      this.id = this.section.id;
      this.title = this.section.title;
      this.sort = this.section.sort;
      this.content = this.section.content;
      this.name_template = this.section.template;
      this.class_css = this.section.class;
      this.image_url = (this.section.image_url != null) ? this.section.image_url : "";
      console.log(this.image_url);
  }

  /** processLinks(e) */
  processLinks(e) {
      const element: HTMLElement = e.target;
      if (element.nodeName === 'A') {
          e.preventDefault();
          const link = element.getAttribute('href');
          this.router.navigate([link]);
          console.log([link]);
      }
  }

  /** selectData(e) */
  selectData(e) {
      const element: HTMLElement = e.target;
      if (element.nodeName === 'A') {
          e.preventDefault();
          const link = element.getAttribute('href');
          console.log([link]);
      }
  }

}
