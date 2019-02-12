import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  @ViewChild('a',{read:ViewContainerRef})a:ViewContainerRef;
  ngAfterViewInit(): void {
    console.log(this.a.element.nativeElement)
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    // this.go();
    this.router.navigate(['/user/trang-chu']);
  }

  try(){
   console.log('phong',this.a.element);
  // this.a.element.nativeElement.isContentEditable=true;
   
  }

 
}
