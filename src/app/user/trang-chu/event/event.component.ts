import { Component, OnInit } from '@angular/core';
import { ThamMyVienService } from 'src/app/api/thammyvien.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  data: any;
  listNews: any;

  constructor(
    private thamMyVienService: ThamMyVienService
  ) { }

  ngOnInit() {
    this.getNews1();
    this.getNews4();
  }

  // lay 1 tin moi nhat
  getNews1() {
    this.thamMyVienService.excuteAllByWhat({}, '15')
      .subscribe(data => {
        this.data = data[0];
        // console.log('phogn',this.data);

      })
  }

  // lay 4 tin moi nhat
  getNews4() {
    this.thamMyVienService.excuteAllByWhat({}, '16')
      .subscribe(data => {
        this.listNews = data;
        console.log('phogn', this.listNews);

      })
  }

}
