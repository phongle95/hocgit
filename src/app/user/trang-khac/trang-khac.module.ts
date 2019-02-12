import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TrangKhacComponent } from './trang-khac.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { VideoComponent } from './video/video.component';
import { DetailNewsComponent } from './detail-news/detail-news.component';
import { MyPhamComponent } from './my-pham/my-pham.component';
import { SanPham1Component } from './my-pham/san-pham1/san-pham1.component';
import { DieuTriDaSpaComponent } from './dieu-tri-da-spa/dieu-tri-da-spa.component';
import { TrietLongComponent } from './dieu-tri-da-spa/triet-long/triet-long.component';
import { PhauThuatThamMyComponent } from './phau-thuat-tham-my/phau-thuat-tham-my.component';
import { PhauThuatCamComponent } from './phau-thuat-tham-my/phau-thuat-cam/phau-thuat-cam.component';
import { ThamMyKhacComponent } from './tham-my-khac/tham-my-khac.component';
import { LamToDuongVatComponent } from './tham-my-khac/lam-to-duong-vat/lam-to-duong-vat.component';


const routing: Routes = [{
  path: '', component: TrangKhacComponent,
  children: [

    {
      path: 'tin-tuc', component: TinTucComponent
    },
    { path: 'chi-tiet-tin-tuc/:id', component: DetailNewsComponent },

    {
      path: 'lien-he', component: LienHeComponent
    },
    {
      path: 'gioi-thieu', component: GioiThieuComponent
    },
    { path: 'video', component: VideoComponent },
    { path: 'my-pham', component: MyPhamComponent },
    { path: 'san-pham1', component: SanPham1Component },
    { path: 'dieu-tri-da-spa', component: DieuTriDaSpaComponent },
    { path: 'triet-long', component: TrietLongComponent },
    { path: 'phau-thuat-tham-my', component: PhauThuatThamMyComponent },
    { path: 'phau-thuat-cam', component: PhauThuatCamComponent },
    { path: 'tham-my-khac', component: ThamMyKhacComponent },
    { path: 'lam-to-duong-vat', component: LamToDuongVatComponent }

  ]
}];

@NgModule({
  declarations: [
    TrangKhacComponent,
    TinTucComponent,
    GioiThieuComponent,
    LienHeComponent,
    VideoComponent,
    DetailNewsComponent,
    MyPhamComponent,
    SanPham1Component,
    DieuTriDaSpaComponent,
    TrietLongComponent,
    PhauThuatThamMyComponent,
    PhauThuatCamComponent,
    ThamMyKhacComponent,
    LamToDuongVatComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routing),
    MDBBootstrapModule.forRoot(),
    FormsModule,

  ],
  entryComponents: [
    TrangKhacComponent
  ],
  exports: [CommonModule, FormsModule]
})
export class TrangKhacModule { }
