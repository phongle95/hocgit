import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/model/news';
import { ThamMyVienService } from 'src/app/api/thammyvien.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {
  news = new News();
  listData: any = [];

  constructor(
    private thamMyVienService:ThamMyVienService ,
  ) { }

  /**
   * ngOnInit
   */
  ngOnInit() {
    // get all new
    this.getAllNews();
  }

  /**
   * get all new
   */
  getAllNews() {
    // get all new
    this.thamMyVienService.subscription.push(
      this.thamMyVienService.excuteAllByWhat({}, '10')
        .subscribe(data => {
          // đổ data lên màn hình
          this.listData = data;
          console.log('phong',this.listData);
          
        })
    );
  }

  /**
   * xóa tin tức
   * @param id 
   */
  deleteNewsById(id: number) {
    // xóa tin tức
    this.thamMyVienService.subscription.push(
      this.thamMyVienService.excuteAllByWhat({ id: id }, '13')
        .subscribe(() => {
          this.thamMyVienService.showSuccess('Xóa thành công!')
          this.getAllNews();
        })
    );
  }

  /**
   * ngOnDestroy
   */
  ngOnDestroy() {
    this.thamMyVienService.destroySubcribe();
  }

}
