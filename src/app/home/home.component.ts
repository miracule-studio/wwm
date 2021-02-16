import { Component, OnInit, AfterViewInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  title = 'home';

  elem: HTMLElement;

  @ViewChild('myDiv') myDiv: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    //this.elem = document.getElementById('ud');
  }

  ngAfterViewInit() {
    //console.log( this.myDiv.nativeElement );
    this.elem = this.myDiv.nativeElement;
  }

  over(){
    this.renderer.removeClass(this.elem, 'transform-hover');
    //console.log('mouseenter');
  }
  out(){
    this.renderer.addClass(this.elem, 'transform-hover');
    //console.log('mouseleave');
  }

}
