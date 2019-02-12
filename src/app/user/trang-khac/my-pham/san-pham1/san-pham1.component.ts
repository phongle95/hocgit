import { Component, OnInit } from '@angular/core';
import { ThamMyVienService } from 'src/app/api/thammyvien.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-san-pham1',
  templateUrl: './san-pham1.component.html',
  styleUrls: ['./san-pham1.component.scss']
})
export class SanPham1Component implements OnInit {

  data: any;
  id: number;
  listNews: any;

  constructor(
    private thamMyVienService: ThamMyVienService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getNews4()
  }

  // lay 4 tin moi nhat
  getNews4() {
    this.thamMyVienService.excuteAllByWhat({}, '16')
      .subscribe(data => {
        this.listNews = data;

      })
  }

  //ham  len dau trang
  onActivate() {
    window.scrollTo(0, 0);
  }
}
