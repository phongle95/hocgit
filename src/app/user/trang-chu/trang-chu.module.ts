import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './trang-chu.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ImageComponent } from './image/image.component';
import { IntroComponent } from './intro/intro.component';
import { DichVuComponent } from './dich-vu/dich-vu.component';
import { SlideComponent } from './slide/slide.component';
import { EventComponent } from './event/event.component';
import { DanhGiaKhachComponent } from './danh-gia-khach/danh-gia-khach.component';

const routing: Routes = [{
  path: '', component: TrangChuComponent,
  children: [
    // {
    //   path: 'quan-ly-nhap-diem/:khoi', component: QuanLyNhapDiemComponent
    // },
    // { path: 'cai-dat-cot-diem/:khoi', component: CaiDatCotDiemComponent },
    // { path: 'quan-ly-ngay-nghi/:khoi', component: QuanLyNgayNghiComponent },
    // { path: 'quan-ly-hoc-sinh/quan-ly-chuyen-lop', component: QuanLyHocSinhComponent },
    // {
    //   path: 'login', component: LoginComponent,
    //   children: [
    //     { path: 'login', component: LogInComponent },
    //     { path: 'forget-password', component: ForgetPasswordComponent },
    //   ]
    // },
  ]
}];

@NgModule({
  declarations: [
    TrangChuComponent,
    ImageComponent,
    IntroComponent,
    DichVuComponent,
    SlideComponent,
    EventComponent,
    DanhGiaKhachComponent,


  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routing),
    MDBBootstrapModule.forRoot(),
    FormsModule,

  ],
  entryComponents: [
    TrangChuComponent
  ],
  exports: [CommonModule, FormsModule]
})
export class TrangChuModule { }
