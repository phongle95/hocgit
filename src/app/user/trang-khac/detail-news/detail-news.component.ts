import { Component, OnInit } from '@angular/core';
import { ThamMyVienService } from 'src/app/api/thammyvien.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.scss']
})
export class DetailNewsComponent implements OnInit {

  data: any;
  id: number;
  listNews: any;

  constructor(
    private thamMyVienService: ThamMyVienService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    //ham check thay doi de load trang
    this.router.events.subscribe(() => {
      this.id = this.route.snapshot.params['id'];
      this.getNewById();
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getNewById();
    this.getNews4()
  }

  // lay tin by id
  getNewById() {
    this.thamMyVienService.excuteAllByWhat({ id: this.id }, '14')
      .subscribe(data => {
        this.data = data[0];
        this.data.noiDung = this.data.noiDung.replace(/"/g, '');
        this.data.noiDung = this.data.noiDung.replace(/xxxxxxxx/g, '\"');
        this.data.noiDung = this.data.noiDung.replace(/xxxx/g, "'");
        console.log('phogn', this.data.noiDung);

        this.onActivate();
      })
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
