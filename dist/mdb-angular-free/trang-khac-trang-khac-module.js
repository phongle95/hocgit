(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trang-khac-trang-khac-module"],{

/***/ "./src/app/user/trang-khac/detail-news/detail-news.component.html":
/*!************************************************************************!*\
  !*** ./src/app/user/trang-khac/detail-news/detail-news.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-7 col-md-12\">\n      <br>\n      <h5 class=\"font-weight:800 black-text\" >{{data.tieuDe}}</h5>\n      <div style=\"font-weight:400\" innerHTML=\"{{data.noiDung}}\"></div>\n\n    </div>\n    <div class=\"col-lg-5 col-md-12\">\n      <br>\n      <h3><span class=\"badge badge-primary\">Tin mới nhất</span></h3>\n      <hr>\n      <div *ngFor=\"let news of listNews\">\n\n        <!-- Small news -->\n        <div class=\"single-news mb-4\">\n\n          <!-- Grid row -->\n          <div class=\"row\">\n\n            <!-- Grid column -->\n            <div class=\"col-md-3\">\n\n              <!--Image-->\n              <div class=\"view overlay rounded z-depth-1 mb-4\">\n                <img class=\"img-fluid\" src=\"{{news.hinhAnh}}\" alt=\"Sample image\">\n                <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{news.id}}\">\n                  <div class=\"mask rgba-white-slight\"></div>\n                </a>\n              </div>\n\n            </div>\n            <!-- Grid column -->\n\n            <!-- Grid column -->\n            <div class=\"col-md-9\">\n\n              <!-- Excerpt -->\n              <p class=\"font-weight-bold dark-grey-text\">{{news.ngayDang}}<img class=\"img-fluid\" src=\"http://caytrongduoclieu.com/asset/image/hot.gif\" alt=\"Sample image\"></p>\n              <div class=\"d-flex justify-content-between\">\n                <div class=\"col-11 text-truncate pl-0 mb-3\">\n                  <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{news.id}}\" class=\"dark-grey-text\">{{news.tieuDe}}</a>\n                </div>\n                <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{news.id}}\"> <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i></a>\n              </div>\n\n            </div>\n            <!-- Grid column -->\n\n          </div>\n          <!-- Grid row -->\n\n        </div>\n        <!-- Small news -->\n        <hr>\n      </div>\n      <iframe src=\"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs&width=400&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId\"\n        width=\"330\" height=\"214\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\"\n        allow=\"encrypted-media\"></iframe>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/trang-khac/detail-news/detail-news.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/user/trang-khac/detail-news/detail-news.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdHJhbmcta2hhYy9kZXRhaWwtbmV3cy9kZXRhaWwtbmV3cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user/trang-khac/detail-news/detail-news.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/user/trang-khac/detail-news/detail-news.component.ts ***!
  \**********************************************************************/
/*! exports provided: DetailNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailNewsComponent", function() { return DetailNewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_thammyvien_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/thammyvien.service */ "./src/app/api/thammyvien.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailNewsComponent = /** @class */ (function () {
    function DetailNewsComponent(thamMyVienService, route, router) {
        var _this = this;
        this.thamMyVienService = thamMyVienService;
        this.route = route;
        this.router = router;
        //ham check thay doi de load trang
        this.router.events.subscribe(function () {
            _this.id = _this.route.snapshot.params['id'];
            _this.getNewById();
        });
    }
    DetailNewsComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.getNewById();
        this.getNews4();
    };
    // lay tin by id
    DetailNewsComponent.prototype.getNewById = function () {
        var _this = this;
        this.thamMyVienService.excuteAllByWhat({ id: this.id }, '14')
            .subscribe(function (data) {
            _this.data = data[0];
            _this.data.noiDung = _this.data.noiDung.replace(/"/g, '');
            _this.data.noiDung = _this.data.noiDung.replace(/xxxxxxxx/g, '\"');
            _this.data.noiDung = _this.data.noiDung.replace(/xxxx/g, "'");
            console.log('phogn', _this.data.noiDung);
            _this.onActivate();
        });
    };
    // lay 4 tin moi nhat
    DetailNewsComponent.prototype.getNews4 = function () {
        var _this = this;
        this.thamMyVienService.excuteAllByWhat({}, '16')
            .subscribe(function (data) {
            _this.listNews = data;
        });
    };
    //ham  len dau trang
    DetailNewsComponent.prototype.onActivate = function () {
        window.scrollTo(0, 0);
    };
    DetailNewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-news',
            template: __webpack_require__(/*! ./detail-news.component.html */ "./src/app/user/trang-khac/detail-news/detail-news.component.html"),
            styles: [__webpack_require__(/*! ./detail-news.component.scss */ "./src/app/user/trang-khac/detail-news/detail-news.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_api_thammyvien_service__WEBPACK_IMPORTED_MODULE_1__["ThamMyVienService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetailNewsComponent);
    return DetailNewsComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/dieu-tri-da-spa/dieu-tri-da-spa.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/user/trang-khac/dieu-tri-da-spa/dieu-tri-da-spa.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<img src=\"https://www.vienthammykhothi.vn/upload/source/danh-muc/dieu-tri-da/banner-dieu-tri-da.jpg\" class=\"img img-fluid\"\n  alt=\"Second sample avatar image\">\n<div class=\"container\">\n  <h2 class=\"h2-responsive text-center text-uppercase font-weight-bold my-5 \" style=\"color:#A65606\">điều trị da & spa\n  </h2>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <!-- Card -->\n      <div class=\"card\">\n        <div class=\"view view-cascade overlay\">\n          <img src=\"https://www.vienthammykhothi.vn/upload/source/hair-motif-remover/hair-motif-remover-01.jpg\" class=\"img-fluid hinh\"\n            width=\"100%\" alt=\"sample photo\">\n          <a routerLink=\"/user/trang-khac/triet-long\">\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n        <!-- Card content -->\n        <div class=\"card-body\">\n\n          <a routerLink=\"/user/trang-khac/triet-long\">\n            <p class=\"font-weight-normal text-uppercase white-text\" style=\"font-size:80%\">\n              <i class=\"fa fa-angle-double-right fa-1x white-text\"></i>\n              Triệt lông motif hair hair-motif-remover\n            </p>\n          </a>\n        </div>\n\n      </div>\n      <!-- Card -->\n\n    </div>\n\n    <div class=\"col-lg-4\">\n      <!-- Card -->\n      <div class=\"card\">\n        <div class=\"view view-cascade overlay\">\n          <img src=\"https://www.vienthammykhothi.vn/upload/source/hair-motif-remover/hair-motif-remover-01.jpg\" class=\"img-fluid hinh\"\n            width=\"100%\" alt=\"sample photo\">\n          <a routerLink=\"/user/trang-khac/triet-long\">\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n        <!-- Card content -->\n        <div class=\"card-body\">\n\n          <a routerLink=\"/user/trang-khac/triet-long\">\n            <p class=\"font-weight-normal text-uppercase white-text\" style=\"font-size:80%\">\n              <i class=\"fa fa-angle-double-right fa-1x white-text\"></i>\n              Triệt lông motif hair hair-motif-remover\n            </p>\n          </a>\n        </div>\n\n      </div>\n      <!-- Card -->\n\n    </div>\n\n    <div class=\"col-lg-4\">\n      <!-- Card -->\n      <div class=\"card\">\n        <div class=\"view view-cascade overlay\">\n          <img src=\"https://www.vienthammykhothi.vn/upload/source/hair-motif-remover/hair-motif-remover-01.jpg\" class=\"img-fluid hinh\"\n            width=\"100%\" alt=\"sample photo\">\n          <a routerLink=\"/user/trang-khac/triet-long\">\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n        <!-- Card content -->\n        <div class=\"card-body\">\n\n          <a routerLink=\"/user/trang-khac/triet-long\">\n            <p class=\"font-weight-normal text-uppercase white-text\" style=\"font-size:80%\">\n              <i class=\"fa fa-angle-double-right fa-1x white-text\"></i>\n              Triệt lông motif hair hair-motif-remover\n            </p>\n          </a>\n        </div>\n\n      </div>\n      <!-- Card -->\n\n    </div>\n  </div>\n\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <!-- Card -->\n      <div class=\"card\">\n        <div class=\"view view-cascade overlay\">\n          <img src=\"https://www.vienthammykhothi.vn/upload/source/hair-motif-remover/hair-motif-remover-01.jpg\" class=\"img-fluid hinh\"\n            width=\"100%\" alt=\"sample photo\">\n          <a routerLink=\"/user/trang-khac/triet-long\">\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n        <!-- Card content -->\n        <div class=\"card-body\">\n\n          <a routerLink=\"/user/trang-khac/triet-long\">\n            <p class=\"font-weight-normal text-uppercase white-text\" style=\"font-size:80%\">\n              <i class=\"fa fa-angle-double-right fa-1x white-text\"></i>\n              Triệt lông motif hair hair-motif-remover\n            </p>\n          </a>\n        </div>\n\n      </div>\n      <!-- Card -->\n\n    </div>\n\n    <div class=\"col-lg-4\">\n      <!-- Card -->\n      <div class=\"card\">\n        <div class=\"view view-cascade overlay\">\n          <img src=\"https://www.vienthammykhothi.vn/upload/source/hair-motif-remover/hair-motif-remover-01.jpg\" class=\"img-fluid hinh\"\n            width=\"100%\" alt=\"sample photo\">\n          <a routerLink=\"/user/trang-khac/triet-long\">\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n        <!-- Card content -->\n        <div class=\"card-body\">\n\n          <a routerLink=\"/user/trang-khac/triet-long\">\n            <p class=\"font-weight-normal text-uppercase white-text\" style=\"font-size:80%\">\n              <i class=\"fa fa-angle-double-right fa-1x white-text\"></i>\n              Triệt lông motif hair hair-motif-remover\n            </p>\n          </a>\n        </div>\n\n      </div>\n      <!-- Card -->\n\n    </div>\n\n    <div class=\"col-lg-4\">\n      <!-- Card -->\n      <div class=\"card\">\n        <div class=\"view view-cascade overlay\">\n          <img src=\"https://www.vienthammykhothi.vn/upload/source/hair-motif-remover/hair-motif-remover-01.jpg\" class=\"img-fluid hinh\"\n            width=\"100%\" alt=\"sample photo\">\n          <a routerLink=\"/user/trang-khac/triet-long\">\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n        <!-- Card content -->\n        <div class=\"card-body\">\n\n          <a routerLink=\"/user/trang-khac/triet-long\">\n            <p class=\"font-weight-normal text-uppercase white-text\" style=\"font-size:80%\">\n              <i class=\"fa fa-angle-double-right fa-1x white-text\"></i>\n              Triệt lông motif hair hair-motif-remover\n            </p>\n          </a>\n        </div>\n\n      </div>\n      <!-- Card -->\n\n    </div>\n  </div>\n</div>\n<br>"

/***/ }),

/***/ "./src/app/user/trang-khac/dieu-tri-da-spa/dieu-tri-da-spa.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/user/trang-khac/dieu-tri-da-spa/dieu-tri-da-spa.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 1068px) {\n  .img {\n    height: 100px; } }\n\n.card-body {\n  background-color: #A65606;\n  height: 60px; }\n\n.hinh {\n  height: 250px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90cmFuZy1raGFjL2RpZXUtdHJpLWRhLXNwYS9DOlxceGFtcHBcXGh0ZG9jc1xcdGhhbV9teV92aWVuL3NyY1xcYXBwXFx1c2VyXFx0cmFuZy1raGFjXFxkaWV1LXRyaS1kYS1zcGFcXGRpZXUtdHJpLWRhLXNwYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksY0FBYSxFQUNoQixFQUFBOztBQUdMO0VBQ0ksMEJBQXlCO0VBQ3pCLGFBQVksRUFDZjs7QUFDRDtFQUNJLGNBQWEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3RyYW5nLWtoYWMvZGlldS10cmktZGEtc3BhL2RpZXUtdHJpLWRhLXNwYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiAxMDY4cHgpIHtcclxuICAgIC5pbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQtYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBNjU2MDY7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuLmhpbmh7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/trang-khac/dieu-tri-da-spa/dieu-tri-da-spa.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/user/trang-khac/dieu-tri-da-spa/dieu-tri-da-spa.component.ts ***!
  \******************************************************************************/
/*! exports provided: DieuTriDaSpaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DieuTriDaSpaComponent", function() { return DieuTriDaSpaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DieuTriDaSpaComponent = /** @class */ (function () {
    function DieuTriDaSpaComponent() {
    }
    DieuTriDaSpaComponent.prototype.ngOnInit = function () {
    };
    DieuTriDaSpaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dieu-tri-da-spa',
            template: __webpack_require__(/*! ./dieu-tri-da-spa.component.html */ "./src/app/user/trang-khac/dieu-tri-da-spa/dieu-tri-da-spa.component.html"),
            styles: [__webpack_require__(/*! ./dieu-tri-da-spa.component.scss */ "./src/app/user/trang-khac/dieu-tri-da-spa/dieu-tri-da-spa.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DieuTriDaSpaComponent);
    return DieuTriDaSpaComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/dieu-tri-da-spa/triet-long/triet-long.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/user/trang-khac/dieu-tri-da-spa/triet-long/triet-long.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<img src=\"https://www.vienthammykhothi.vn/upload/source/danh-muc/dieu-tri-da/banner-dieu-tri-da.jpg\" class=\"img img-fluid\"\n  alt=\"Second sample avatar image\">\n<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-lg-7 col-md-12\">\n      <h2 class=\"h3-responsive text-center text-uppercase font-weight-bold my-5 \" style=\"color:#A65606\">VĨNH BIỆT ĐÁM\n        VI-Ô-LÔNG ĐÁNG GHÉT VỚI CÔNG NGHỆ TRIỆT LÔNG HAIR MOTIF REMOVER\n      </h2>\n      <p class=\"font-weight-normal\" style=\"color:#A65606\">\n        HAIR MOTIF REMOVER LÀ GÌ\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        Công nghệ Triệt long Hair Motif Remover ứng dụng công nghệ OPT để nâng cao khả năng triệt vĩnh viễn lông một\n        cách nhanh hơn và tránh gây tác dụng phụ lên da, kể cả những vùng da yếu và nhạy cảm. Thông qua sự hấp thu ánh\n        sáng có chọn lọc công nghệ OPT sẽ phụ thuộc vào từng màu da cụ thể mà tác động vào nang lông.\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        Công nghệ Motif tự động điều chỉnh nhiệt độ, tần số theo làn da, không làm đau, nhói các vùng da nhỏ, nhạy cảm\n        như một số công nghệ ánh sáng cũ điều chỉnh theo cảm tính của kĩ thuật viên.\n      </p>\n      <img class=\"img-fluid\" src=\"https://www.vienthammykhothi.vn/upload/source/hair-motif-remover/hair-motif-remover-01.jpg\">\n      <p class=\"font-weight-normal\" style=\"color:#A65606\">\n        <br>\n        THÔNG TIN ĐIỀU TRỊ\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i>\n        Triệt lông Hair Motif Remover với tốc độ triệt lông cực nhanh\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i>\n        Triệt được cả trên những vùng lớn: lưng, ngực, bụng, chân\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i>\n        Ít đau tại các vùng nhạy cảm: bikini, vùng mép, vùng nách\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i>\n        An toàn, không gây bỏng da với kỹ thuật lạnh trực tiếp 50C\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i>\n        Các thông số hoạt động có độ chính xác cao\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i>\n        Bất kỳ ai cũng có thể sử dụng phương pháp này bởi an toàn – nhanh chóng và hiệu quả\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i>\n        Gói triệt lông nhiều lần hay ít lần tùy theo vùng triệt và mật độ lông của khách hàng.\n      </p>\n      <p class=\"font-weight-normal\" style=\"color:#A65606\">\n        ƯU ĐIỂM TUYỆT VỜI CỦA CÔNG NGHỆ TRIỆT LÔNG HAIR MOTIF REMOVER\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        Công nghệ sử dụng nguồn năng lượng có biên độ thấp với tần số cao, cộng hưởng nhiệt để xóa bỏ những sợi lông\n        cứng đầu nhất, nguồn năng lượng đi sâu vào nang lông mà không ảnh hưởng đến lớp biểu bì\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        Chương trình tự động Motif kiểm soát trở kháng làn da sau mỗi xung ánh sáng giúp kĩ thuật viên nhận biết được\n        khu vực hoàn thành và chuyển sang khu vực khác.\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        Kỹ thuật lạnh trực tiếp 50C bảo vệ bề mặt da.\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        Máy có 2 đầu tiếp xúc dành riêng cho vùng da hẹp và vùng da rộng. Đối với vùng da rộng, máy trượt nhanh mà\n        không bỏ sót nang lông nào.\n      </p>\n    </div>\n    <div class=\"col-lg-5 col-md-12\">\n      <br>\n      <h3><span class=\"badge badge-primary\">Tin mới nhất</span></h3>\n      <hr>\n      <div *ngFor=\"let news of listNews\">\n\n        <!-- Small news -->\n        <div class=\"single-news mb-4\">\n\n          <!-- Grid row -->\n          <div class=\"row\">\n\n            <!-- Grid column -->\n            <div class=\"col-md-3\">\n\n              <!--Image-->\n              <div class=\"view overlay rounded z-depth-1 mb-4\">\n                <img class=\"img-fluid\" src=\"{{news.hinhAnh}}\" alt=\"Sample image\">\n                <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{news.id}}\">\n                  <div class=\"mask rgba-white-slight\"></div>\n                </a>\n              </div>\n\n            </div>\n            <!-- Grid column -->\n\n            <!-- Grid column -->\n            <div class=\"col-md-9\">\n\n              <!-- Excerpt -->\n              <p class=\"font-weight-bold dark-grey-text\">{{news.ngayDang}}<img class=\"img-fluid\" src=\"http://caytrongduoclieu.com/asset/image/hot.gif\"\n                  alt=\"Sample image\"></p>\n              <div class=\"d-flex justify-content-between\">\n                <div class=\"col-11 text-truncate pl-0 mb-3\">\n                  <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{news.id}}\" class=\"dark-grey-text\">{{news.tieuDe}}</a>\n                </div>\n                <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{news.id}}\"> <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i></a>\n              </div>\n\n            </div>\n            <!-- Grid column -->\n\n          </div>\n          <!-- Grid row -->\n\n        </div>\n        <!-- Small news -->\n        <hr>\n      </div>\n      <iframe src=\"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs&width=400&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId\"\n        width=\"330\" height=\"214\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\"\n        allow=\"encrypted-media\"></iframe>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/trang-khac/dieu-tri-da-spa/triet-long/triet-long.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/user/trang-khac/dieu-tri-da-spa/triet-long/triet-long.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".a {\n  margin-left: 10px;\n  margin-right: 10px; }\n\n@media (max-width: 1068px) {\n  .img {\n    height: 100px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90cmFuZy1raGFjL2RpZXUtdHJpLWRhLXNwYS90cmlldC1sb25nL0M6XFx4YW1wcFxcaHRkb2NzXFx0aGFtX215X3ZpZW4vc3JjXFxhcHBcXHVzZXJcXHRyYW5nLWtoYWNcXGRpZXUtdHJpLWRhLXNwYVxcdHJpZXQtbG9uZ1xcdHJpZXQtbG9uZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFpQjtFQUNqQixtQkFDSixFQUFDOztBQUdEO0VBQ0k7SUFDSSxjQUFhLEVBQ2hCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL3RyYW5nLWtoYWMvZGlldS10cmktZGEtc3BhL3RyaWV0LWxvbmcvdHJpZXQtbG9uZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5he1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHhcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDY4cHgpIHtcclxuICAgIC5pbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/trang-khac/dieu-tri-da-spa/triet-long/triet-long.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/user/trang-khac/dieu-tri-da-spa/triet-long/triet-long.component.ts ***!
  \************************************************************************************/
/*! exports provided: TrietLongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrietLongComponent", function() { return TrietLongComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_thammyvien_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/thammyvien.service */ "./src/app/api/thammyvien.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrietLongComponent = /** @class */ (function () {
    function TrietLongComponent(thamMyVienService, route, router) {
        var _this = this;
        this.thamMyVienService = thamMyVienService;
        this.route = route;
        this.router = router;
        //ham check thay doi de load trang
        this.router.events.subscribe(function () {
            _this.id = _this.route.snapshot.params['id'];
            _this.getNewById();
        });
    }
    TrietLongComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.getNewById();
        this.getNews4();
    };
    // lay tin by id
    TrietLongComponent.prototype.getNewById = function () {
        var _this = this;
        this.thamMyVienService.excuteAllByWhat({ id: this.id }, '14')
            .subscribe(function (data) {
            _this.data = data[0];
            _this.data.noiDung = _this.data.noiDung.replace(/"/g, '');
            _this.data.noiDung = _this.data.noiDung.replace(/xxxxxxxx/g, '\"');
            _this.data.noiDung = _this.data.noiDung.replace(/xxxx/g, "'");
            console.log('phogn', _this.data.noiDung);
            _this.onActivate();
        });
    };
    // lay 4 tin moi nhat
    TrietLongComponent.prototype.getNews4 = function () {
        var _this = this;
        this.thamMyVienService.excuteAllByWhat({}, '16')
            .subscribe(function (data) {
            _this.listNews = data;
        });
    };
    //ham  len dau trang
    TrietLongComponent.prototype.onActivate = function () {
        window.scrollTo(0, 0);
    };
    TrietLongComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-triet-long',
            template: __webpack_require__(/*! ./triet-long.component.html */ "./src/app/user/trang-khac/dieu-tri-da-spa/triet-long/triet-long.component.html"),
            styles: [__webpack_require__(/*! ./triet-long.component.scss */ "./src/app/user/trang-khac/dieu-tri-da-spa/triet-long/triet-long.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_api_thammyvien_service__WEBPACK_IMPORTED_MODULE_1__["ThamMyVienService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TrietLongComponent);
    return TrietLongComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/gioi-thieu/gioi-thieu.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/user/trang-khac/gioi-thieu/gioi-thieu.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <br>\n    <!-- <div class=\"row\">\n        <div class=\"col  wow bounceInLeft\" data-wow-delay=\"0.1s\">\n            <img class=\"custom-img img-fluid\" src=\"http://mediaold.tiin.vn:8080/media_old_2016//medias12//2015/08/19/2bb501cc-21fb-4782-b178-e352a1b0accc.jpg\">\n        </div>\n        <div class=\"col wow  bounceInRight\" data-wow-delay=\"0.1s\">\n            <img class=\"custom-img img-fluid\" src=\"https://png.pngtree.com/png_detail/18/09/10/pngtree-black-piano-model-png-clipart_3110087.jpg\">\n        </div>\n    </div>\n    <br> -->\n    <div class=\"row\">\n        <div class=\"col-lg-12 col-md-6 mb-lg-0 mb-5\">\n            <h3 class=\"text-center font-weight-bold\">Giới Thiệu</h3>\n            <br>\n            <p class=\"font-weight-normal text-left\">\n                Xã hội ngày càng văn minh tiến bộ, con người không chỉ đơn giản có nhu cầu về “ăn ngon, mặc đẹp” mà nhu cầu về tinh thần\n                cũng được nâng cao. Vì thế, sau bao bộn bề, lo toan của cuộc sống, con người tìm đến âm nhạc như một “món\n                ăn” tinh thần thiết yếu.\n            </p>\n\n            <p class=\"font-weight-normal text-left\">\n                Sẽ như thế nào nếu vào một đêm trăng thanh gió mát, bạn ngồi ngoài ban công nhâm nhi tách trà và nghe điệu nhạc du dương\n                phát ra từ cây đàn piano do chính vợ bạn, con bạn đang chơi? Điều ấy thật tuyệt vời!\n            </p>\n            <img class=\"custom-img img-fluid\" src=\"https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/47681675_974914839370064_3756747047009517568_o.jpg?_nc_cat=106&_nc_ht=scontent.fdad1-1.fna&oh=3ed0cfbdd611b44c8d78aad7eb120396&oe=5C8BF54C\">\n\n\n            <p class=\"font-weight-normal text-left\">\n                <br> Đêm nhạc cũng sẽ không hoàn hảo nếu thiếu đi tiếng đàn mộc mạc của guitar. Một buổi dã ngoại ngoài trời\n                sẽ kém phần sôi động khi thiếu đi tiếng đàn guitar. Quãng đời sinh viên cũng sẽ “nhạt” nếu không có những\n                buổi đàn hát cùng nhau.\n            </p>\n\n            <p class=\"font-weight-normal text-left\">\n                Từ những khoảnh khắc rất đổi bình thường trên mới thấy âm nhạc thật sự rất cần cho cuộc sống của chúng ta. Đầu tư cho âm\n                nhạc là đầu tư cho cho tinh thần, cho sự văn minh, cho đam mê và thậm chí là sự nghiệp cho con bạn.\n            </p>\n            <img class=\"custom-img img-fluid\" src=\"https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/33902502_1998818950338629_3964288508226437120_o.jpg?_nc_cat=106&_nc_ht=scontent.fdad1-1.fna&oh=bad32205426d1ce26ff6a1ce304a2dda&oe=5CA12870\">\n\n            <p class=\"font-weight-normal text-left\">\n                <br> Kính thưa Quý khách, Công ty TNHH – Salem Piano hay còn gọi Piano Salem được thành lập vào năm 2002 với\n                sản phẩm chính là đàn piano cũ, trải qua 16 năm hoạt động, hiện công ty đã có mối quan hệ thương mại với\n                các hãng nhạc cụ nổi tiếng trên thế giới của Đức, Pháp, Hà Lan, Italia, Mỹ, Anh, Nhật Bản, Đài Loan, Trung\n                Quốc, Hàn Quốc,… Chủng loại sản phẩm cũng được mở rộng phong phú, đa dạng hơn với các loại nhạc cụ được nhập\n                từ các nước nói trên như đàn Piano cơ, Piano điện tử, Organ, Guitar, Trống, Kèn, các thiết bị âm thanh và\n                phụ kiện âm nhạc khác\n            </p>\n            <img class=\"custom-img img-fluid\" src=\"https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/17553863_1799245863629273_4933453990315646529_n.jpg?_nc_cat=105&_nc_ht=scontent.fdad1-1.fna&oh=a87eebbef4d531c04e2879d5e0736b4e&oe=5CD62315\">\n\n            <p class=\"font-weight-normal text-left\">\n                <br> Đến nay, sau nhiều năm hoạt động, với đội ngũ cán bộ, nhân viên năng động, nhiệt tình, có trình độ chuyên\n                môn cao, Công ty Salem Piano đã được khách hàng tin tưởng và trở thành một trong những Công ty nhạc cụ lớn\n                nhất Thành phố Đà Nẵng.\n            </p>\n            <img class=\"custom-img img-fluid\" src=\"https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/40797690_922850404576508_6521566706903547904_o.jpg?_nc_cat=107&_nc_ht=scontent.fdad2-1.fna&oh=2f35f059b95d3497d975a74b53a78a07&oe=5CCBAA80\">\n\n\n            <p class=\"font-weight-bold text-left\">\n                <br> Cửa hàng Salem Piano cam kết đem đến cho khách hàng:\n            </p>\n            <p class=\"font-weight-normal text-left\">\n                <i class=\"fa fa-angle-double-right fa-1x blue-text\"></i>\n                Hàng hóa chính hãng, đảm bảo chất lượng\n            </p>\n\n            <p class=\"font-weight-normal text-left\">\n                <i class=\"fa fa-angle-double-right fa-1x blue-text\"></i>\n                Giá hàng hoá phải chăng\n            </p>\n\n            <p class=\"font-weight-normal text-left\">\n                <i class=\"fa fa-angle-double-right fa-1x blue-text\"></i>\n                Giao hàng nhanh chóng, thuận tiện\n            </p>\n\n            <p class=\"font-weight-normal text-left\">\n                <i class=\"fa fa-angle-double-right fa-1x blue-text\"></i>\n                Đội ngũ nhân viên giàu chuyên nghiệp, giàu kinh nghiệm sẽ tư vấn những giải pháp hợp lý, tối ưu, phù hợp nhu cầu của khách\n                hàng\n            </p>\n\n            <p class=\"font-weight-normal text-left\">\n                <i class=\"fa fa-angle-double-right fa-1x blue-text\"></i>\n                Chế độ bảo trì, bảo hành tiện lợi\n            </p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/trang-khac/gioi-thieu/gioi-thieu.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/user/trang-khac/gioi-thieu/gioi-thieu.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custum-body {\n  background-color: #2E2E2E;\n  height: 100px; }\n\n.abc {\n  height: 100px;\n  width: 100px;\n  background-color: rgba(62, 69, 81, 0.1); }\n\n@media (min-width: 1199.98px) {\n  .custom-img {\n    height: 550px;\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90cmFuZy1raGFjL2dpb2ktdGhpZXUvQzpcXHhhbXBwXFxodGRvY3NcXHRoYW1fbXlfdmllbi9zcmNcXGFwcFxcdXNlclxcdHJhbmcta2hhY1xcZ2lvaS10aGlldVxcZ2lvaS10aGlldS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUF5QjtFQUN6QixjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWix3Q0FBc0MsRUFDekM7O0FBR0Q7RUFFSTtJQUNFLGNBQWE7SUFDYixZQUFXLEVBQ1osRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdHJhbmcta2hhYy9naW9pLXRoaWV1L2dpb2ktdGhpZXUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdHVtLWJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUyRTJFO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmFiY3tcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNjIsIDY5LCA4MSwgMC4xKTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMTk5Ljk4cHgpIHtcclxuXHJcbiAgICAuY3VzdG9tLWltZ3tcclxuICAgICAgaGVpZ2h0OiA1NTBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/user/trang-khac/gioi-thieu/gioi-thieu.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/user/trang-khac/gioi-thieu/gioi-thieu.component.ts ***!
  \********************************************************************/
/*! exports provided: GioiThieuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GioiThieuComponent", function() { return GioiThieuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GioiThieuComponent = /** @class */ (function () {
    function GioiThieuComponent() {
    }
    GioiThieuComponent.prototype.ngOnInit = function () {
    };
    GioiThieuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gioi-thieu',
            template: __webpack_require__(/*! ./gioi-thieu.component.html */ "./src/app/user/trang-khac/gioi-thieu/gioi-thieu.component.html"),
            styles: [__webpack_require__(/*! ./gioi-thieu.component.scss */ "./src/app/user/trang-khac/gioi-thieu/gioi-thieu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GioiThieuComponent);
    return GioiThieuComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/lien-he/lien-he.component.html":
/*!****************************************************************!*\
  !*** ./src/app/user/trang-khac/lien-he/lien-he.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<img src=\"https://www.vienthammykhothi.vn/public/img/banner-lienhe.jpg\" class=\"img img-fluid\" alt=\"Second sample avatar image\">\n<div class=\"container\">\n  <!-- Section: Contact v.1 -->\n  <section class=\"my-5\">\n\n    <!-- Section heading -->\n    <h2 class=\"h1-responsive font-weight-bold text-center my-5\">Liên hệ với chúng tôi</h2>\n    <!-- Section description -->\n    <p class=\"text-center w-responsive font-weight-normal mx-auto pb-5\">\"Thành công luôn đồng hành cùng nhan sắt hoàn\n      hảo! vinass luôn mang đến cho bạn sự đẳng cấp cũng như chất lượng dịch vụ tốt nhất từ trang thiết bị đến đội ngũ\n      bác sỹ và nhân viên phục vụ\"</p>\n\n    <!-- Grid row -->\n    <div class=\"row\">\n\n      <!-- Grid column -->\n      <div class=\"col-lg-5 col-md-6 mb-lg-0 mb-5\">\n\n        <!-- Form with header -->\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <!-- Header -->\n            <div class=\"form-header blue accent-1\">\n              <h3 class=\"mt-2\">\n                <i class=\"fa fa-envelope\"></i>Viết cho chúng tôi</h3>\n            </div>\n            <!-- Body -->\n            <div class=\"md-form\">\n              <i class=\"fa fa-user prefix grey-text\"></i>\n              <input type=\"text\" id=\"form-name\" class=\"form-control\" placeholder=\"Tên bạn\">\n            </div>\n            <div class=\"md-form\">\n              <i class=\"fa fa-envelope prefix grey-text\"></i>\n              <input type=\"text\" id=\"form-email\" class=\"form-control\" placeholder=\"Địa chỉ email\">\n            </div>\n            <div class=\"md-form\">\n              <i class=\"fa fa-tag prefix grey-text\"></i>\n              <input type=\"text\" id=\"form-Subject\" class=\"form-control\" placeholder=\"Tiêu đề\">\n            </div>\n            <div class=\"md-form\">\n              <i class=\"fa fa-pencil prefix grey-text\"></i>\n              <textarea type=\"text\" id=\"form-text\" class=\"form-control md-textarea\" rows=\"3\" placeholder=\"Nội dung\"></textarea>\n            </div>\n            <div class=\"text-center\">\n              <button class=\"btn btn-light-blue\">Gởi</button>\n            </div>\n          </div>\n        </div>\n        <!-- Form with header -->\n\n      </div>\n      <!-- Grid column -->\n\n      <!-- Grid column -->\n      <div class=\"col-lg-7 col-md-6 mb-lg-0 mb-5\">\n\n        <!--Google map-->\n        <div id=\"map-container-section\" class=\"z-depth-1-half map-container-section mb-4\" style=\"height: 400px\">\n          <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61349.64667008503!2d108.17168658967925!3d16.047165906925596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0xfc14e3a044436487!2zxJDDoCBO4bq1bmcsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1547284712621\"\n            width=\"635\" height=\"400\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n        </div>\n        <!-- Buttons-->\n        <div class=\"row text-center\">\n          <div class=\"col-md-4\">\n            <a class=\"btn-floating blue accent-1\">\n              <i class=\"fa fa-map-marker\"></i>\n            </a>\n            <p>Thành Phố : Đà Nẵng</p>\n          </div>\n          <div class=\"col-md-4\">\n            <a class=\"btn-floating blue accent-1\">\n              <i class=\"fa fa-phone\"></i>\n            </a>\n            <p>+ 032 8811 678</p>\n            <p class=\"mb-md-0\">Mon - Fri, 8:00-22:00</p>\n          </div>\n          <div class=\"col-md-4\">\n            <a class=\"btn-floating blue accent-1\">\n              <i class=\"fa fa-envelope\"></i>\n            </a>\n            <p>lehongphongcntt@gmail.com</p>\n          </div>\n        </div>\n\n      </div>\n      <!-- Grid column -->\n\n    </div>\n    <!-- Grid row -->\n\n  </section>\n  <!-- Section: Contact v.1 -->\n</div>"

/***/ }),

/***/ "./src/app/user/trang-khac/lien-he/lien-he.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/user/trang-khac/lien-he/lien-he.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 1068px) {\n  .img {\n    height: 100px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90cmFuZy1raGFjL2xpZW4taGUvQzpcXHhhbXBwXFxodGRvY3NcXHRoYW1fbXlfdmllbi9zcmNcXGFwcFxcdXNlclxcdHJhbmcta2hhY1xcbGllbi1oZVxcbGllbi1oZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJO0lBQ0ksY0FBYSxFQUNoQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci90cmFuZy1raGFjL2xpZW4taGUvbGllbi1oZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AbWVkaWEgKG1heC13aWR0aDogMTA2OHB4KSB7XHJcbiAgICAuaW1ne1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/trang-khac/lien-he/lien-he.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user/trang-khac/lien-he/lien-he.component.ts ***!
  \**************************************************************/
/*! exports provided: LienHeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LienHeComponent", function() { return LienHeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LienHeComponent = /** @class */ (function () {
    function LienHeComponent() {
    }
    LienHeComponent.prototype.ngOnInit = function () {
    };
    LienHeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lien-he',
            template: __webpack_require__(/*! ./lien-he.component.html */ "./src/app/user/trang-khac/lien-he/lien-he.component.html"),
            styles: [__webpack_require__(/*! ./lien-he.component.scss */ "./src/app/user/trang-khac/lien-he/lien-he.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LienHeComponent);
    return LienHeComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/my-pham/my-pham.component.html":
/*!****************************************************************!*\
  !*** ./src/app/user/trang-khac/my-pham/my-pham.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<img src=\"https://www.vienthammykhothi.vn/public/img/banner-sanpham.jpg\" class=\"img img-fluid\" alt=\"Second sample avatar image\">\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <!-- Section: Products v.2 -->\n      <section class=\"text-center my-5\">\n        <h2 class=\"h2-responsive text-center text-uppercase font-weight-bold my-5 \" style=\"color:#A65606\">mỹ phẩm\n        </h2>\n        <hr>\n        <!-- Grid row -->\n        <div class=\"row\">\n\n          <!-- Grid column -->\n          <div class=\"col-lg-4 col-md-12 mb-lg-0 mb-4\">\n            <!-- Card -->\n            <div class=\"card card-cascade wider card-ecommerce\">\n              <!-- Card image -->\n              <div class=\"view view-cascade overlay\">\n                <img src=\"https://vienthammykhothi.vn/upload/images/product/ab03-review-thumb.jpg?1483607863649\" width=\"100%\"\n                  class=\"img-fluid\" alt=\"sample photo\">\n                <a routerLink=\"/user/trang-khac/san-pham1\">\n                  <div class=\"mask rgba-white-slight\"></div>\n                </a>\n              </div>\n              <!-- Card image -->\n              <!-- Card content -->\n              <div class=\"card-body card-body-cascade text-center\">\n                <!-- Category & Title -->\n\n                <h4 class=\"card-title\">\n                  <h5 class=\"font-weight-normal\">COLD PRESSED ORGANIC</h5>\n                  <!-- <button type=\"button\" class=\"btn btn-amber\">Xem</button> -->\n                </h4>\n                <!-- Description -->\n                <p class=\"card-text\">Làm mờ vết thâm, tàn nhang Làm trắng da Giảm tình trạng ngứa và khó\n                  chịu cho da.</p>\n                <!-- Card footer -->\n                <div class=\"card-footer px-1\">\n                  <span class=\"float-center font-weight-bold\">\n                    <strong><img class=\"img-fluid\" src=\"http://caytrongduoclieu.com/asset/image/hot.gif\" alt=\"Sample image\">\n                      85$</strong>\n                  </span>\n\n                </div>\n              </div>\n              <!-- Card content -->\n            </div>\n            <!-- Card -->\n          </div>\n          <!-- Grid column -->\n\n          <!-- Grid column -->\n          <div class=\"col-lg-4 col-md-12 mb-lg-0 mb-4\">\n            <!-- Card -->\n            <div class=\"card card-cascade wider card-ecommerce\">\n              <!-- Card image -->\n              <div class=\"view view-cascade overlay\">\n                <img src=\"https://vienthammykhothi.vn/upload/images/product/ab03-review-thumb.jpg?1483607863649\" width=\"100%\"\n                  class=\"img-fluid\" alt=\"sample photo\">\n                <a routerLink=\"/user/trang-khac/san-pham1\">\n                  <div class=\"mask rgba-white-slight\"></div>\n                </a>\n              </div>\n              <!-- Card image -->\n              <!-- Card content -->\n              <div class=\"card-body card-body-cascade text-center\">\n                <!-- Category & Title -->\n\n                <h4 class=\"card-title\">\n                  <h5 class=\"font-weight-normal\">COLD PRESSED ORGANIC</h5>\n                  <!-- <button type=\"button\" class=\"btn btn-amber\">Xem</button> -->\n                </h4>\n                <!-- Description -->\n                <p class=\"card-text\">Làm mờ vết thâm, tàn nhang Làm trắng da Giảm tình trạng ngứa và khó\n                  chịu cho da.</p>\n                <!-- Card footer -->\n                <div class=\"card-footer px-1\">\n                  <span class=\"float-center font-weight-bold\">\n                    <strong><img class=\"img-fluid\" src=\"http://caytrongduoclieu.com/asset/image/hot.gif\" alt=\"Sample image\">\n                      85$</strong>\n                  </span>\n\n                </div>\n              </div>\n              <!-- Card content -->\n            </div>\n            <!-- Card -->\n          </div>\n          <!-- Grid column -->\n\n          <!-- Grid column -->\n          <div class=\"col-lg-4 col-md-12 mb-lg-0 mb-4\">\n            <!-- Card -->\n            <div class=\"card card-cascade wider card-ecommerce\">\n              <!-- Card image -->\n              <div class=\"view view-cascade overlay\">\n                <img src=\"https://vienthammykhothi.vn/upload/images/product/ab03-review-thumb.jpg?1483607863649\" width=\"100%\"\n                  class=\"img-fluid\" alt=\"sample photo\">\n                <a routerLink=\"/user/trang-khac/san-pham1\">\n                  <div class=\"mask rgba-white-slight\"></div>\n                </a>\n              </div>\n              <!-- Card image -->\n              <!-- Card content -->\n              <div class=\"card-body card-body-cascade text-center\">\n                <!-- Category & Title -->\n\n                <h4 class=\"card-title\">\n                  <h5 class=\"font-weight-normal\">COLD PRESSED ORGANIC</h5>\n                  <!-- <button type=\"button\" class=\"btn btn-amber\">Xem</button> -->\n                </h4>\n                <!-- Description -->\n                <p class=\"card-text\">Làm mờ vết thâm, tàn nhang Làm trắng da Giảm tình trạng ngứa và khó\n                  chịu cho da.</p>\n                <!-- Card footer -->\n                <div class=\"card-footer px-1\">\n                  <span class=\"float-center font-weight-bold\">\n                    <strong><img class=\"img-fluid\" src=\"http://caytrongduoclieu.com/asset/image/hot.gif\" alt=\"Sample image\">\n                      85$</strong>\n                  </span>\n\n                </div>\n              </div>\n              <!-- Card content -->\n            </div>\n            <!-- Card -->\n          </div>\n          <!-- Grid column -->\n\n        </div>\n        <!-- Grid row -->\n        <hr>\n        <!-- Grid row -->\n        <div class=\"row\">\n\n          <!-- Grid column -->\n          <div class=\"col-lg-4 col-md-12 mb-lg-0 mb-4\">\n            <!-- Card -->\n            <div class=\"card card-cascade wider card-ecommerce\">\n              <!-- Card image -->\n              <div class=\"view view-cascade overlay\">\n                <img src=\"https://vienthammykhothi.vn/upload/images/product/ab03-review-thumb.jpg?1483607863649\" width=\"100%\"\n                  class=\"img-fluid\" alt=\"sample photo\">\n                <a routerLink=\"/user/trang-khac/san-pham1\">\n                  <div class=\"mask rgba-white-slight\"></div>\n                </a>\n              </div>\n              <!-- Card image -->\n              <!-- Card content -->\n              <div class=\"card-body card-body-cascade text-center\">\n                <!-- Category & Title -->\n\n                <h4 class=\"card-title\">\n                  <h5 class=\"font-weight-normal\">COLD PRESSED ORGANIC</h5>\n                  <!-- <button type=\"button\" class=\"btn btn-amber\">Xem</button> -->\n                </h4>\n                <!-- Description -->\n                <p class=\"card-text\">Làm mờ vết thâm, tàn nhang Làm trắng da Giảm tình trạng ngứa và khó\n                  chịu cho da.</p>\n                <!-- Card footer -->\n                <div class=\"card-footer px-1\">\n                  <span class=\"float-center font-weight-bold\">\n                    <strong><img class=\"img-fluid\" src=\"http://caytrongduoclieu.com/asset/image/hot.gif\" alt=\"Sample image\">\n                      85$</strong>\n                  </span>\n\n                </div>\n              </div>\n              <!-- Card content -->\n            </div>\n            <!-- Card -->\n          </div>\n          <!-- Grid column -->\n\n          <!-- Grid column -->\n          <div class=\"col-lg-4 col-md-12 mb-lg-0 mb-4\">\n            <!-- Card -->\n            <div class=\"card card-cascade wider card-ecommerce\">\n              <!-- Card image -->\n              <div class=\"view view-cascade overlay\">\n                <img src=\"https://vienthammykhothi.vn/upload/images/product/ab03-review-thumb.jpg?1483607863649\" width=\"100%\"\n                  class=\"img-fluid\" alt=\"sample photo\">\n                <a routerLink=\"/user/trang-khac/san-pham1\">\n                  <div class=\"mask rgba-white-slight\"></div>\n                </a>\n              </div>\n              <!-- Card image -->\n              <!-- Card content -->\n              <div class=\"card-body card-body-cascade text-center\">\n                <!-- Category & Title -->\n\n                <h4 class=\"card-title\">\n                  <h5 class=\"font-weight-normal\">COLD PRESSED ORGANIC</h5>\n                  <!-- <button type=\"button\" class=\"btn btn-amber\">Xem</button> -->\n                </h4>\n                <!-- Description -->\n                <p class=\"card-text\">Làm mờ vết thâm, tàn nhang Làm trắng da Giảm tình trạng ngứa và khó\n                  chịu cho da.</p>\n                <!-- Card footer -->\n                <div class=\"card-footer px-1\">\n                  <span class=\"float-center font-weight-bold\">\n                    <strong><img class=\"img-fluid\" src=\"http://caytrongduoclieu.com/asset/image/hot.gif\" alt=\"Sample image\">\n                      85$</strong>\n                  </span>\n\n                </div>\n              </div>\n              <!-- Card content -->\n            </div>\n            <!-- Card -->\n          </div>\n          <!-- Grid column -->\n\n          <!-- Grid column -->\n          <div class=\"col-lg-4 col-md-12 mb-lg-0 mb-4\">\n            <!-- Card -->\n            <div class=\"card card-cascade wider card-ecommerce\">\n              <!-- Card image -->\n              <div class=\"view view-cascade overlay\">\n                <img src=\"https://vienthammykhothi.vn/upload/images/product/ab03-review-thumb.jpg?1483607863649\" width=\"100%\"\n                  class=\"img-fluid\" alt=\"sample photo\">\n                <a routerLink=\"/user/trang-khac/san-pham1\">\n                  <div class=\"mask rgba-white-slight\"></div>\n                </a>\n              </div>\n              <!-- Card image -->\n              <!-- Card content -->\n              <div class=\"card-body card-body-cascade text-center\">\n                <!-- Category & Title -->\n\n                <h4 class=\"card-title\">\n                  <h5 class=\"font-weight-normal\">COLD PRESSED ORGANIC</h5>\n                  <!-- <button type=\"button\" class=\"btn btn-amber\">Xem</button> -->\n                </h4>\n                <!-- Description -->\n                <p class=\"card-text\">Làm mờ vết thâm, tàn nhang Làm trắng da Giảm tình trạng ngứa và khó\n                  chịu cho da.</p>\n                <!-- Card footer -->\n                <div class=\"card-footer px-1\">\n                  <span class=\"float-center font-weight-bold\">\n                    <strong><img class=\"img-fluid\" src=\"http://caytrongduoclieu.com/asset/image/hot.gif\" alt=\"Sample image\">\n                      85$</strong>\n                  </span>\n\n                </div>\n              </div>\n              <!-- Card content -->\n            </div>\n            <!-- Card -->\n          </div>\n          <!-- Grid column -->\n\n        </div>\n        <!-- Grid row -->\n\n      </section>\n      <!-- Section: Products v.2 -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/trang-khac/my-pham/my-pham.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/user/trang-khac/my-pham/my-pham.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 1068px) {\n  .img {\n    height: 100px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90cmFuZy1raGFjL215LXBoYW0vQzpcXHhhbXBwXFxodGRvY3NcXHRoYW1fbXlfdmllbi9zcmNcXGFwcFxcdXNlclxcdHJhbmcta2hhY1xcbXktcGhhbVxcbXktcGhhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJO0lBQ0ksY0FBYSxFQUNoQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci90cmFuZy1raGFjL215LXBoYW0vbXktcGhhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AbWVkaWEgKG1heC13aWR0aDogMTA2OHB4KSB7XHJcbiAgICAuaW1ne1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/trang-khac/my-pham/my-pham.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user/trang-khac/my-pham/my-pham.component.ts ***!
  \**************************************************************/
/*! exports provided: MyPhamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPhamComponent", function() { return MyPhamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyPhamComponent = /** @class */ (function () {
    function MyPhamComponent() {
    }
    MyPhamComponent.prototype.ngOnInit = function () {
    };
    MyPhamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-pham',
            template: __webpack_require__(/*! ./my-pham.component.html */ "./src/app/user/trang-khac/my-pham/my-pham.component.html"),
            styles: [__webpack_require__(/*! ./my-pham.component.scss */ "./src/app/user/trang-khac/my-pham/my-pham.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MyPhamComponent);
    return MyPhamComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/my-pham/san-pham1/san-pham1.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/user/trang-khac/my-pham/san-pham1/san-pham1.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<img src=\"https://www.vienthammykhothi.vn/public/img/banner-sanpham.jpg\" class=\"img img-fluid\" alt=\"Second sample avatar image\">\n<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-lg-7 col-md-12\">\n      <h2 class=\"h3-responsive text-center text-uppercase font-weight-bold my-5 \" style=\"color:#A65606\">COLD PRESSED\n        ORGANIC\n      </h2>\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-12\">\n          <div class=\"card\">\n            <img src=\"https://vienthammykhothi.vn/upload/images/product/ab03-review-thumb.jpg?1483607863649\" class=\" img-fluid\"\n              alt=\"Second sample avatar image\">\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-12\">\n\n          <p class=\"font-weight-normal\" style=\"color:#A65606\">\n            Mã sản phẩm : <span class=\"black-text\">AB03</span>\n          </p>\n          <p class=\"font-weight-normal\" style=\"color:#A65606\">\n            Tình trạng : <span class=\"black-text\">Còn hàng</span>\n          </p>\n          <p class=\"font-weight-normal\" style=\"color:#A65606\">\n            Giá : <span class=\"black-text\">85 USD</span>\n          </p>\n          <p class=\"font-weight-normal\" style=\"color:#A65606\">\n            Dung lượng : <span class=\"black-text\">30ml</span>\n          </p>\n          <p class=\"font-weight-normal\" style=\"color:#A65606\">\n            Thành phần :\n          </p>\n          <ul class=\"font-weight-normal\">\n            <li>\n              Pearl Extract chống lão hóa.\n            </li>\n            <li>\n              Phenoxyethanol kháng khuẩn.\n            </li>\n            <li>\n              Dương cam cúc làm dịu da.\n            </li>\n            <li>\n              Camomile Extract chống viêm.\n            </li>\n          </ul>\n        </div>\n        <div class=\"a\">\n\n          <b class=\"font-weight-normal text-left\" style=\"color:#A65606\">Công dụng:\n            <ul class=\"font-weight-normal black-text\">\n              <li>\n                Làm mờ vết thâm, tàn nhang.\n              </li>\n              <li>\n                Làm trắng da.\n              </li>\n              <li>\n                Giảm tình trạng ngứa và khó chịu cho da.\n              </li>\n\n            </ul>\n          </b>\n\n          <p class=\"font-weight-normal text-left\" style=\"color:#A65606\">\n            Hướng dẫn sử dụng : <span class=\"black-text\">Khi thấy da khó chịu có thể xịt 1 ngày 3 - 4 lần</span>\n          </p>\n          <p class=\"font-weight-normal text-left\" style=\"color:#A65606\">\n            Đặc tính : <span class=\"black-text\"> Thích hợp cho mọi loại da</span>\n          </p>\n          <p class=\"font-weight-normal text-left\" style=\"color:#A65606\">\n            Chú ý : <span class=\"black-text\">Chỉ sử dụng bên ngoài da tránh tiếp xúc với mắt. Ngưng sử dụng nếu bị kích\n              ứng</span>\n          </p>\n          <p class=\"font-weight-normal text-left\" style=\"color:#A65606\">\n            Hạn sử dụng : <span class=\"black-text\">3 năm</span>\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-5 col-md-12\">\n      <br>\n      <h3><span class=\"badge badge-primary\">Tin mới nhất</span></h3>\n      <hr>\n      <div *ngFor=\"let news of listNews\">\n\n        <!-- Small news -->\n        <div class=\"single-news mb-4\">\n\n          <!-- Grid row -->\n          <div class=\"row\">\n\n            <!-- Grid column -->\n            <div class=\"col-md-3\">\n\n              <!--Image-->\n              <div class=\"view overlay rounded z-depth-1 mb-4\">\n                <img class=\"img-fluid\" src=\"{{news.hinhAnh}}\" alt=\"Sample image\">\n                <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{news.id}}\">\n                  <div class=\"mask rgba-white-slight\"></div>\n                </a>\n              </div>\n\n            </div>\n            <!-- Grid column -->\n\n            <!-- Grid column -->\n            <div class=\"col-md-9\">\n\n              <!-- Excerpt -->\n              <p class=\"font-weight-bold dark-grey-text\">{{news.ngayDang}}<img class=\"img-fluid\" src=\"http://caytrongduoclieu.com/asset/image/hot.gif\"\n                  alt=\"Sample image\"></p>\n              <div class=\"d-flex justify-content-between\">\n                <div class=\"col-11 text-truncate pl-0 mb-3\">\n                  <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{news.id}}\" class=\"dark-grey-text\">{{news.tieuDe}}</a>\n                </div>\n                <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{news.id}}\"> <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i></a>\n              </div>\n\n            </div>\n            <!-- Grid column -->\n\n          </div>\n          <!-- Grid row -->\n\n        </div>\n        <!-- Small news -->\n        <hr>\n      </div>\n      <iframe src=\"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs&width=400&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId\"\n        width=\"330\" height=\"214\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\"\n        allow=\"encrypted-media\"></iframe>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/trang-khac/my-pham/san-pham1/san-pham1.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/user/trang-khac/my-pham/san-pham1/san-pham1.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".a {\n  margin-left: 10px;\n  margin-right: 10px; }\n\n@media (max-width: 1068px) {\n  .img {\n    height: 100px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90cmFuZy1raGFjL215LXBoYW0vc2FuLXBoYW0xL0M6XFx4YW1wcFxcaHRkb2NzXFx0aGFtX215X3ZpZW4vc3JjXFxhcHBcXHVzZXJcXHRyYW5nLWtoYWNcXG15LXBoYW1cXHNhbi1waGFtMVxcc2FuLXBoYW0xLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWlCO0VBQ2pCLG1CQUNKLEVBQUM7O0FBR0Q7RUFDSTtJQUNJLGNBQWEsRUFDaEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdHJhbmcta2hhYy9teS1waGFtL3Nhbi1waGFtMS9zYW4tcGhhbTEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTA2OHB4KSB7XHJcbiAgICAuaW1ne1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/trang-khac/my-pham/san-pham1/san-pham1.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/user/trang-khac/my-pham/san-pham1/san-pham1.component.ts ***!
  \**************************************************************************/
/*! exports provided: SanPham1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanPham1Component", function() { return SanPham1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_thammyvien_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/thammyvien.service */ "./src/app/api/thammyvien.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SanPham1Component = /** @class */ (function () {
    function SanPham1Component(thamMyVienService, route, router) {
        this.thamMyVienService = thamMyVienService;
        this.route = route;
        this.router = router;
    }
    SanPham1Component.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.getNews4();
    };
    // lay 4 tin moi nhat
    SanPham1Component.prototype.getNews4 = function () {
        var _this = this;
        this.thamMyVienService.excuteAllByWhat({}, '16')
            .subscribe(function (data) {
            _this.listNews = data;
        });
    };
    //ham  len dau trang
    SanPham1Component.prototype.onActivate = function () {
        window.scrollTo(0, 0);
    };
    SanPham1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-san-pham1',
            template: __webpack_require__(/*! ./san-pham1.component.html */ "./src/app/user/trang-khac/my-pham/san-pham1/san-pham1.component.html"),
            styles: [__webpack_require__(/*! ./san-pham1.component.scss */ "./src/app/user/trang-khac/my-pham/san-pham1/san-pham1.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_api_thammyvien_service__WEBPACK_IMPORTED_MODULE_1__["ThamMyVienService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SanPham1Component);
    return SanPham1Component;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/phau-thuat-tham-my/phau-thuat-cam/phau-thuat-cam.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/user/trang-khac/phau-thuat-tham-my/phau-thuat-cam/phau-thuat-cam.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<img src=\"https://vienthammykhothi.vn/upload/source/danh-muc/phau-thuat-tham-my/phau-thuat-tham-my-banner.jpg\" class=\"img img-fluid\"\n  alt=\"Second sample avatar image\">\n<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-lg-7 col-md-12\">\n      <h2 class=\"h3-responsive text-center text-uppercase font-weight-bold my-5 \" style=\"color:#A65606\">CĂNG DA THÁI\n        DƯƠNG BÁN PHẦN - XÓA BỎ MỌI DẤU HIỆU CỦA TUỔI TÁC\n      </h2>\n      <p class=\"font-weight-normal\" style=\"color:#A65606\">\n        CĂNG DA THÁI DƯƠNG BÁN PHẦN LÀ GÌ?\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        Căng da thái dương bán phần là phẫu thuật nhỏ nhằm làm căng da, trẻ hóa nửa trên của khuôn mặt từ đuôi mắt đến\n        chân tóc của trán.\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        Phương pháp này chỉ cần thực hiện với một đường rạch nhỏ ở đường chân tóc, rồi dùng dụng cụ chuyên dụng để loại\n        bỏ những vùng da dư và kéo căng vùng da từ đuôi mắt lên trên thái dương. Căng da thái dương có thể khắc phục\n        được rất nhiều nhược điểm của độ tuổi tác như sụp mí, da chùng nhão, chảy xệ, vết chân chim, …\n      </p>\n      <img class=\"img-fluid\" src=\"https://vienthammykhothi.vn/upload/source/thai-duong-ban-phan/cang-da-thai-duong-ban-phan-xoa-bo-moi-dau-hieu-cua-tuoi-tac-01.jpg\">\n      <p class=\"font-weight-normal\" style=\"color:#A65606\">\n        <br>\n        BÁC SĨ THỰC HIỆN\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        Phẫu thuật căng da thái dương bán phần tại Viện thẩm mỹ Vinass được thực hiện bởi Thạc sĩ - Bác sĩ Kim Young\n        Hwan đến từ Hàn Quốc, bậc thầy phẫu thuật thẩm mỹ đang công tác cơ hữu tại Bệnh viện thẩm mỹ Hàn Quốc với vai\n        trò Viện trưởng.\n\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i> Tại Việt Nam, bác đang hợp tác độc quyền với\n        Viện thẩm mỹ Vinass. Triệt lông Hair Motif Remover với tốc độ triệt lông cực nhanh\n      </p>\n      <img class=\"img-fluid\" src=\"https://vienthammykhothi.vn/upload/source/thai-duong-ban-phan/cang-da-thai-duong-ban-phan-xoa-bo-moi-dau-hieu-cua-tuoi-tac-02.JPG\">\n      <p class=\"font-weight-normal\" style=\"color:#A65606\">\n        <br>\n        ĐỐI TƯỢNG CĂNG DA THÁI DƯƠNG BÁN PHẦN\n      </p>\n\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i>\n        Người đang bước vào giai đoạn lão hóa, da vùng thái dương bị chùng nhão.\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i>\n        Người có nhiều vết chân chim xuất hiện vùng đuôi mắt.\n      </p>\n      <p class=\"font-weight-normal\" style=\"color:#A65606\">\n        <br>\n        ƯU ĐIỂM CỦA PHƯƠNG PHÁP CĂNG DA THÁI DƯƠNG BÁN PHẦN\n      </p>\n\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i>\n        Loại bỏ được phần da thừa nhăn nheo vĩnh viễn\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i>\n        Không để lại sẹo, không lộ dấu vết phẫu thuật thẩm mỹ\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i>\n        Vết mổ nhỏ, thời gian phục hồi nhanh\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i>\n        Xóa bỏ mọi nếp nhăn, mang lại khuôn mặt trẻ trung, tươi tắn\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i>\n        Loại bỏ lượng mỡ dư thừa ngăn chặn tình trạng da bị chùng nhão trở lại\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i>\n        Bảo tồn được các dây thần kinh cảm giác, vận động vùng mặt\n      </p>\n\n    </div>\n    <div class=\"col-lg-5 col-md-12\">\n      <br>\n      <h3><span class=\"badge badge-primary\">Tin mới nhất</span></h3>\n      <hr>\n      <div *ngFor=\"let news of listNews\">\n\n        <!-- Small news -->\n        <div class=\"single-news mb-4\">\n\n          <!-- Grid row -->\n          <div class=\"row\">\n\n            <!-- Grid column -->\n            <div class=\"col-md-3\">\n\n              <!--Image-->\n              <div class=\"view overlay rounded z-depth-1 mb-4\">\n                <img class=\"img-fluid\" src=\"{{news.hinhAnh}}\" alt=\"Sample image\">\n                <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{news.id}}\">\n                  <div class=\"mask rgba-white-slight\"></div>\n                </a>\n              </div>\n\n            </div>\n            <!-- Grid column -->\n\n            <!-- Grid column -->\n            <div class=\"col-md-9\">\n\n              <!-- Excerpt -->\n              <p class=\"font-weight-bold dark-grey-text\">{{news.ngayDang}}<img class=\"img-fluid\" src=\"http://caytrongduoclieu.com/asset/image/hot.gif\"\n                  alt=\"Sample image\"></p>\n              <div class=\"d-flex justify-content-between\">\n                <div class=\"col-11 text-truncate pl-0 mb-3\">\n                  <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{news.id}}\" class=\"dark-grey-text\">{{news.tieuDe}}</a>\n                </div>\n                <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{news.id}}\"> <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i></a>\n              </div>\n\n            </div>\n            <!-- Grid column -->\n\n          </div>\n          <!-- Grid row -->\n\n        </div>\n        <!-- Small news -->\n        <hr>\n      </div>\n      <iframe src=\"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs&width=400&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId\"\n        width=\"330\" height=\"214\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\"\n        allow=\"encrypted-media\"></iframe>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/trang-khac/phau-thuat-tham-my/phau-thuat-cam/phau-thuat-cam.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/user/trang-khac/phau-thuat-tham-my/phau-thuat-cam/phau-thuat-cam.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdHJhbmcta2hhYy9waGF1LXRodWF0LXRoYW0tbXkvcGhhdS10aHVhdC1jYW0vcGhhdS10aHVhdC1jYW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user/trang-khac/phau-thuat-tham-my/phau-thuat-cam/phau-thuat-cam.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/user/trang-khac/phau-thuat-tham-my/phau-thuat-cam/phau-thuat-cam.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PhauThuatCamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhauThuatCamComponent", function() { return PhauThuatCamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_thammyvien_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/thammyvien.service */ "./src/app/api/thammyvien.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhauThuatCamComponent = /** @class */ (function () {
    function PhauThuatCamComponent(thamMyVienService, route, router) {
        this.thamMyVienService = thamMyVienService;
        this.route = route;
        this.router = router;
    }
    PhauThuatCamComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.getNews4();
    };
    // lay 4 tin moi nhat
    PhauThuatCamComponent.prototype.getNews4 = function () {
        var _this = this;
        this.thamMyVienService.excuteAllByWhat({}, '16')
            .subscribe(function (data) {
            _this.listNews = data;
        });
    };
    //ham  len dau trang
    PhauThuatCamComponent.prototype.onActivate = function () {
        window.scrollTo(0, 0);
    };
    PhauThuatCamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-phau-thuat-cam',
            template: __webpack_require__(/*! ./phau-thuat-cam.component.html */ "./src/app/user/trang-khac/phau-thuat-tham-my/phau-thuat-cam/phau-thuat-cam.component.html"),
            styles: [__webpack_require__(/*! ./phau-thuat-cam.component.scss */ "./src/app/user/trang-khac/phau-thuat-tham-my/phau-thuat-cam/phau-thuat-cam.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_api_thammyvien_service__WEBPACK_IMPORTED_MODULE_1__["ThamMyVienService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PhauThuatCamComponent);
    return PhauThuatCamComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/phau-thuat-tham-my/phau-thuat-tham-my.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/user/trang-khac/phau-thuat-tham-my/phau-thuat-tham-my.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<img src=\"https://vienthammykhothi.vn/upload/source/danh-muc/phau-thuat-tham-my/phau-thuat-tham-my-banner.jpg\" class=\"img img-fluid\"\n  alt=\"Second sample avatar image\">\n<div class=\"container\">\n  <h2 class=\"h2-responsive text-center text-uppercase font-weight-bold my-5 \" style=\"color:#A65606\">PHẪU THUẬT THẨM MỸ\n  </h2>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <!-- Card -->\n      <div class=\"card\">\n        <div class=\"view view-cascade overlay\">\n          <img src=\"https://vienthammykhothi.vn/upload/source/cang-da-noi-soi/cang-da-noi-soi-cai-lao-hoan-nien-ngai-chi-tuoi-tac-05.jpg\" class=\"img-fluid hinh\"\n            width=\"100%\" alt=\"sample photo\">\n          <a routerLink=\"/user/trang-khac/phau-thuat-cam\">\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n        <!-- Card content -->\n        <div class=\"card-body\">\n\n          <a routerLink=\"/user/trang-khac/phau-thuat-cam\">\n            <p class=\"font-weight-normal text-uppercase white-text\" style=\"font-size:80%\">\n              <i class=\"fa fa-angle-double-right fa-1x white-text\"></i>\n              Căn da thái dương bán phần\n            </p>\n          </a>\n        </div>\n\n      </div>\n      <!-- Card -->\n\n    </div>\n\n    <div class=\"col-lg-4\">\n      <!-- Card -->\n      <div class=\"card\">\n        <div class=\"view view-cascade overlay\">\n          <img src=\"https://vienthammykhothi.vn/upload/source/cang-da-noi-soi/cang-da-noi-soi-cai-lao-hoan-nien-ngai-chi-tuoi-tac-05.jpg\" class=\"img-fluid hinh\"\n            width=\"100%\" alt=\"sample photo\">\n          <a routerLink=\"/user/trang-khac/phau-thuat-cam\">\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n        <!-- Card content -->\n        <div class=\"card-body\">\n\n          <a routerLink=\"/user/trang-khac/phau-thuat-cam\">\n            <p class=\"font-weight-normal text-uppercase white-text\" style=\"font-size:80%\">\n              <i class=\"fa fa-angle-double-right fa-1x white-text\"></i>\n              Căn da thái dương bán phần\n            </p>\n          </a>\n        </div>\n\n      </div>\n      <!-- Card -->\n\n    </div>\n\n    <div class=\"col-lg-4\">\n      <!-- Card -->\n      <div class=\"card\">\n        <div class=\"view view-cascade overlay\">\n          <img src=\"https://vienthammykhothi.vn/upload/source/cang-da-noi-soi/cang-da-noi-soi-cai-lao-hoan-nien-ngai-chi-tuoi-tac-05.jpg\" class=\"img-fluid hinh\"\n            width=\"100%\" alt=\"sample photo\">\n          <a routerLink=\"/user/trang-khac/phau-thuat-cam\">\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n        <!-- Card content -->\n        <div class=\"card-body\">\n\n          <a routerLink=\"/user/trang-khac/phau-thuat-cam\">\n            <p class=\"font-weight-normal text-uppercase white-text\" style=\"font-size:80%\">\n              <i class=\"fa fa-angle-double-right fa-1x white-text\"></i>\n              Căn da thái dương bán phần\n            </p>\n          </a>\n        </div>\n\n      </div>\n      <!-- Card -->\n\n    </div>\n  </div>\n\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <!-- Card -->\n      <div class=\"card\">\n        <div class=\"view view-cascade overlay\">\n          <img src=\"https://vienthammykhothi.vn/upload/source/cang-da-noi-soi/cang-da-noi-soi-cai-lao-hoan-nien-ngai-chi-tuoi-tac-05.jpg\" class=\"img-fluid hinh\"\n            width=\"100%\" alt=\"sample photo\">\n          <a routerLink=\"/user/trang-khac/phau-thuat-cam\">\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n        <!-- Card content -->\n        <div class=\"card-body\">\n\n          <a routerLink=\"/user/trang-khac/phau-thuat-cam\">\n            <p class=\"font-weight-normal text-uppercase white-text\" style=\"font-size:80%\">\n              <i class=\"fa fa-angle-double-right fa-1x white-text\"></i>\n              Căn da thái dương bán phần\n            </p>\n          </a>\n        </div>\n\n      </div>\n      <!-- Card -->\n\n    </div>\n\n    <div class=\"col-lg-4\">\n      <!-- Card -->\n      <div class=\"card\">\n        <div class=\"view view-cascade overlay\">\n          <img src=\"https://vienthammykhothi.vn/upload/source/cang-da-noi-soi/cang-da-noi-soi-cai-lao-hoan-nien-ngai-chi-tuoi-tac-05.jpg\" class=\"img-fluid hinh\"\n            width=\"100%\" alt=\"sample photo\">\n          <a routerLink=\"/user/trang-khac/phau-thuat-cam\">\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n        <!-- Card content -->\n        <div class=\"card-body\">\n\n          <a routerLink=\"/user/trang-khac/phau-thuat-cam\">\n            <p class=\"font-weight-normal text-uppercase white-text\" style=\"font-size:80%\">\n              <i class=\"fa fa-angle-double-right fa-1x white-text\"></i>\n              Căn da thái dương bán phần\n            </p>\n          </a>\n        </div>\n\n      </div>\n      <!-- Card -->\n\n    </div>\n\n    <div class=\"col-lg-4\">\n      <!-- Card -->\n      <div class=\"card\">\n        <div class=\"view view-cascade overlay\">\n          <img src=\"https://vienthammykhothi.vn/upload/source/cang-da-noi-soi/cang-da-noi-soi-cai-lao-hoan-nien-ngai-chi-tuoi-tac-05.jpg\" class=\"img-fluid hinh\"\n            width=\"100%\" alt=\"sample photo\">\n          <a routerLink=\"/user/trang-khac/phau-thuat-cam\">\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n        <!-- Card content -->\n        <div class=\"card-body\">\n\n          <a routerLink=\"/user/trang-khac/phau-thuat-cam\">\n            <p class=\"font-weight-normal text-uppercase white-text\" style=\"font-size:80%\">\n              <i class=\"fa fa-angle-double-right fa-1x white-text\"></i>\n              Căn da thái dương bán phần\n            </p>\n          </a>\n        </div>\n\n      </div>\n      <!-- Card -->\n\n    </div>\n  </div>\n</div>\n<br>"

/***/ }),

/***/ "./src/app/user/trang-khac/phau-thuat-tham-my/phau-thuat-tham-my.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/user/trang-khac/phau-thuat-tham-my/phau-thuat-tham-my.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 1068px) {\n  .img {\n    height: 100px; } }\n\n.card-body {\n  background-color: #A65606;\n  height: 60px; }\n\n.hinh {\n  height: 250px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90cmFuZy1raGFjL3BoYXUtdGh1YXQtdGhhbS1teS9DOlxceGFtcHBcXGh0ZG9jc1xcdGhhbV9teV92aWVuL3NyY1xcYXBwXFx1c2VyXFx0cmFuZy1raGFjXFxwaGF1LXRodWF0LXRoYW0tbXlcXHBoYXUtdGh1YXQtdGhhbS1teS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksY0FBYSxFQUNoQixFQUFBOztBQUdMO0VBQ0ksMEJBQXlCO0VBQ3pCLGFBQVksRUFDZjs7QUFDRDtFQUNJLGNBQWEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3RyYW5nLWtoYWMvcGhhdS10aHVhdC10aGFtLW15L3BoYXUtdGh1YXQtdGhhbS1teS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiAxMDY4cHgpIHtcclxuICAgIC5pbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQtYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBNjU2MDY7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuLmhpbmh7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/trang-khac/phau-thuat-tham-my/phau-thuat-tham-my.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/user/trang-khac/phau-thuat-tham-my/phau-thuat-tham-my.component.ts ***!
  \************************************************************************************/
/*! exports provided: PhauThuatThamMyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhauThuatThamMyComponent", function() { return PhauThuatThamMyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhauThuatThamMyComponent = /** @class */ (function () {
    function PhauThuatThamMyComponent() {
    }
    PhauThuatThamMyComponent.prototype.ngOnInit = function () {
    };
    PhauThuatThamMyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-phau-thuat-tham-my',
            template: __webpack_require__(/*! ./phau-thuat-tham-my.component.html */ "./src/app/user/trang-khac/phau-thuat-tham-my/phau-thuat-tham-my.component.html"),
            styles: [__webpack_require__(/*! ./phau-thuat-tham-my.component.scss */ "./src/app/user/trang-khac/phau-thuat-tham-my/phau-thuat-tham-my.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PhauThuatThamMyComponent);
    return PhauThuatThamMyComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/tham-my-khac/lam-to-duong-vat/lam-to-duong-vat.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/user/trang-khac/tham-my-khac/lam-to-duong-vat/lam-to-duong-vat.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<img src=\"https://vienthammykhothi.vn/upload/source/cay-mo/cay-mo-caunho-pc.jpg\" class=\"img img-fluid\" alt=\"Second sample avatar image\">\n<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-lg-7 col-md-12\">\n      <h2 class=\"h3-responsive text-center text-uppercase font-weight-bold my-5 \" style=\"color:#A65606\">TĂNG KÍCH THƯỚC\n        “CẬU NHỎ” AN TOÀN BẰNG PHƯƠNG PHÁP CẤY MỠ TỰ THÂN LIPIVAGE\n      </h2>\n      <p class=\"font-weight-normal\" style=\"color:#A65606\">\n        CẤY MỠ LIPIVAGE TĂNG KÍCH THƯỚC DƯƠNG VẬT LÀ GÌ?\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        Cấy mỡ tự thân trong phẫu thuật thẩm mỹ là một tiến bộ mới giúp dương vật nam giới được cải thiện một cách đáng\n        kể. Đây là phương pháp lấy mỡ từ những vùng nhiều mỡ thừa trên cơ thể như bụng, mông, đùi, …rồi ghép vào dọc\n        theo hai bên trục dương vật để làm tăng kích thước của bộ phận này.\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        Với công nghệ cấy mỡ LipiVage, mỡ sau khi lấy ra sẽ được đưa vào hệ thống máy chuyên dụng nhằm loại bỏ mọi tạp\n        chất, chọn lọc ra những tế bào gốc chứa hàng triệu yếu tố sinh trưởng. Mô mỡ nguyên bào có tác dụng làm cho tổ\n        chức mỡ tăng sinh, kích thích gia tăng số lượng tế bào mỡ, giúp cho tế bào mỡ tồn tại bền vững trên vùng mô\n        cấy.\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        Vì vậy, khi cấy trở lại vào dương vật, mỡ nguyên bào này sẽ giúp dương vật gia tăng kích thước toàn tự nhiên và\n        có hiệu quả kéo dài.\n      </p>\n      <img class=\"img-fluid\" src=\"https://vienthammykhothi.vn/upload/source/cay-mo-tu-than-lipivage/cay-mo-tu-than-lipivage-01.jpg\">\n      <p class=\"font-weight-normal\" style=\"color:#A65606\">\n        <br>\n        BÁC SĨ THỰC HIỆN\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        Tăng kích thước dương vật bằng mỡ tự thân LipiVage được Tiến sĩ, bác sĩ Allan Wong Shiang Ju- chuyên ngành tiêm\n        thẩm mỹ, trẻ hóa bằng mỡ tự thân trực tiếp thực hiện.\n\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        Với chuyên môn cao và kinh nghiệm dày dặn của bác sĩ, tế bào mỡ được cấy một cách chính xác, định hình cao,\n        không bị gồ ghề móp méo, không để lại sẹo, đảm bảo an toàn tuyệt đối.\n      </p>\n      <img class=\"img-fluid\" src=\"https://vienthammykhothi.vn/upload/source/cay-mo-tu-than-lipivage/cay-mo-tu-than-lipivage-02.jpg\">\n      <p class=\"text-center\">Tiến sĩ, bác sĩ Allan Wong Shiang Ju</p>\n      <p class=\"font-weight-normal\" style=\"color:#A65606\">\n        <br>\n        ĐỐI TƯỢNG TĂNG KÍCH THƯỚC DƯƠNG VẬT BẰNG CẤY MỠ LIPIVAGE\n      </p>\n\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i>\n        Nam giới không hài lòng về kích thước dương vật của mình.\n      </p>\n\n      <p class=\"font-weight-normal\" style=\"color:#A65606\">\n        <br>\n        ƯU ĐIỂM CỦA PHƯƠNG PHÁP TĂNG KÍCH THƯỚC DƯƠNG VẬT BẰNG CẤY MỠ LIPIVAGE\n      </p>\n\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i>\n        Không cần phẫu thuật, không để lại sẹo, an toàn, không để lại di chứng\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i>\n        Không ảnh hưởng đến khả năng cương cứng của dương vật hay chức năng sinh sản.\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i>\n        Tăng cảm giác khi quan hệ tình dục\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i>\n        Tăng từ 2 - 5cm chu vi dương vật\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i>\n        Không sử dụng bất kỳ chất làm đầy nhân tạo nào, chỉ dùng mỡ tự thân nên hoàn toàn, tương thích với cơ thể và\n        không phải lo ngại về những rủi ro biến chứng\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i>\n        Công nghệ LipiVage chọn lọc được những tế bào mỡ nguyên bào, giúp dương vật tăng kích thước tự nhiên và hiệu\n        quả dài lâu\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i>\n        Có thể ra về luôn trong ngày không cần nằm viện. Thời gian để vết thương lành lại cũng rất ngắn\n      </p>\n      <img class=\"img-fluid\" src=\"https://vienthammykhothi.vn/upload/source/cay-mo-tu-than-lipivage/cay-mo-tu-than-lipivage-03.jpg\">\n      <p class=\"text-center\">Dương vật tăng kích thước giúp tăng cảm giác khi quan hệ tình dục</p>\n    </div>\n    <div class=\"col-lg-5 col-md-12\">\n      <br>\n      <h3><span class=\"badge badge-primary\">Tin mới nhất</span></h3>\n      <hr>\n      <div *ngFor=\"let news of listNews\">\n\n        <!-- Small news -->\n        <div class=\"single-news mb-4\">\n\n          <!-- Grid row -->\n          <div class=\"row\">\n\n            <!-- Grid column -->\n            <div class=\"col-md-3\">\n\n              <!--Image-->\n              <div class=\"view overlay rounded z-depth-1 mb-4\">\n                <img class=\"img-fluid\" src=\"{{news.hinhAnh}}\" alt=\"Sample image\">\n                <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{news.id}}\">\n                  <div class=\"mask rgba-white-slight\"></div>\n                </a>\n              </div>\n\n            </div>\n            <!-- Grid column -->\n\n            <!-- Grid column -->\n            <div class=\"col-md-9\">\n\n              <!-- Excerpt -->\n              <p class=\"font-weight-bold dark-grey-text\">{{news.ngayDang}}<img class=\"img-fluid\" src=\"http://caytrongduoclieu.com/asset/image/hot.gif\"\n                  alt=\"Sample image\"></p>\n              <div class=\"d-flex justify-content-between\">\n                <div class=\"col-11 text-truncate pl-0 mb-3\">\n                  <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{news.id}}\" class=\"dark-grey-text\">{{news.tieuDe}}</a>\n                </div>\n                <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{news.id}}\"> <i class=\"fa fa-angle-double-right fa-1x deep-orange-text\"></i></a>\n              </div>\n\n            </div>\n            <!-- Grid column -->\n\n          </div>\n          <!-- Grid row -->\n\n        </div>\n        <!-- Small news -->\n        <hr>\n      </div>\n      <iframe src=\"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs&width=400&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId\"\n        width=\"330\" height=\"214\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\"\n        allow=\"encrypted-media\"></iframe>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/trang-khac/tham-my-khac/lam-to-duong-vat/lam-to-duong-vat.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/user/trang-khac/tham-my-khac/lam-to-duong-vat/lam-to-duong-vat.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdHJhbmcta2hhYy90aGFtLW15LWtoYWMvbGFtLXRvLWR1b25nLXZhdC9sYW0tdG8tZHVvbmctdmF0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/trang-khac/tham-my-khac/lam-to-duong-vat/lam-to-duong-vat.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/user/trang-khac/tham-my-khac/lam-to-duong-vat/lam-to-duong-vat.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: LamToDuongVatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LamToDuongVatComponent", function() { return LamToDuongVatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_thammyvien_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/thammyvien.service */ "./src/app/api/thammyvien.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LamToDuongVatComponent = /** @class */ (function () {
    function LamToDuongVatComponent(thamMyVienService, route, router) {
        this.thamMyVienService = thamMyVienService;
        this.route = route;
        this.router = router;
    }
    LamToDuongVatComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.getNews4();
    };
    // lay 4 tin moi nhat
    LamToDuongVatComponent.prototype.getNews4 = function () {
        var _this = this;
        this.thamMyVienService.excuteAllByWhat({}, '16')
            .subscribe(function (data) {
            _this.listNews = data;
        });
    };
    //ham  len dau trang
    LamToDuongVatComponent.prototype.onActivate = function () {
        window.scrollTo(0, 0);
    };
    LamToDuongVatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lam-to-duong-vat',
            template: __webpack_require__(/*! ./lam-to-duong-vat.component.html */ "./src/app/user/trang-khac/tham-my-khac/lam-to-duong-vat/lam-to-duong-vat.component.html"),
            styles: [__webpack_require__(/*! ./lam-to-duong-vat.component.scss */ "./src/app/user/trang-khac/tham-my-khac/lam-to-duong-vat/lam-to-duong-vat.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_api_thammyvien_service__WEBPACK_IMPORTED_MODULE_1__["ThamMyVienService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LamToDuongVatComponent);
    return LamToDuongVatComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/tham-my-khac/tham-my-khac.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/user/trang-khac/tham-my-khac/tham-my-khac.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<img src=\"https://vienthammykhothi.vn/upload/source/danh-muc/tham-my-khong-phau-thuat/tham-my-khong-phau-thuat-banner.jpg\"\n  class=\"img img-fluid\" alt=\"Second sample avatar image\">\n<div class=\"container\">\n  <h2 class=\"h2-responsive text-center text-uppercase font-weight-bold my-5 \" style=\"color:#A65606\">THẨM MỸ KHÔNG PHẪU\n    THUẬT\n  </h2>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <!-- Card -->\n      <div class=\"card\">\n        <div class=\"view view-cascade overlay\">\n          <img src=\"https://vienthammykhothi.vn/upload/source/cay-mo-tu-than-lipivage/cay-mo-tu-than-lipivage-01.jpg\"\n            class=\"img-fluid hinh\" width=\"100%\" alt=\"sample photo\">\n          <a routerLink=\"/user/trang-khac/lam-to-duong-vat\">\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n        <!-- Card content -->\n        <div class=\"card-body\">\n\n          <a routerLink=\"/user/trang-khac/lam-to-duong-vat\">\n            <p class=\"font-weight-normal text-uppercase white-text\" style=\"font-size:80%\">\n              <i class=\"fa fa-angle-double-right fa-1x white-text\"></i>\n              Tư vấn cấy mở làm to dương vật\n            </p>\n          </a>\n        </div>\n\n      </div>\n      <!-- Card -->\n\n    </div>\n\n    <div class=\"col-lg-4\">\n      <!-- Card -->\n      <div class=\"card\">\n        <div class=\"view view-cascade overlay\">\n          <img src=\"https://vienthammykhothi.vn/upload/source/cay-mo-tu-than-lipivage/cay-mo-tu-than-lipivage-01.jpg\"\n            class=\"img-fluid hinh\" width=\"100%\" alt=\"sample photo\">\n          <a routerLink=\"/user/trang-khac/lam-to-duong-vat\">\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n        <!-- Card content -->\n        <div class=\"card-body\">\n\n          <a routerLink=\"/user/trang-khac/lam-to-duong-vat\">\n            <p class=\"font-weight-normal text-uppercase white-text\" style=\"font-size:80%\">\n              <i class=\"fa fa-angle-double-right fa-1x white-text\"></i>\n              Tư vấn cấy mở làm to dương vật\n            </p>\n          </a>\n        </div>\n\n      </div>\n      <!-- Card -->\n\n    </div>\n\n    <div class=\"col-lg-4\">\n      <!-- Card -->\n      <div class=\"card\">\n        <div class=\"view view-cascade overlay\">\n          <img src=\"https://vienthammykhothi.vn/upload/source/cay-mo-tu-than-lipivage/cay-mo-tu-than-lipivage-01.jpg\"\n            class=\"img-fluid hinh\" width=\"100%\" alt=\"sample photo\">\n          <a routerLink=\"/user/trang-khac/lam-to-duong-vat\">\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n        <!-- Card content -->\n        <div class=\"card-body\">\n\n          <a routerLink=\"/user/trang-khac/lam-to-duong-vat\">\n            <p class=\"font-weight-normal text-uppercase white-text\" style=\"font-size:80%\">\n              <i class=\"fa fa-angle-double-right fa-1x white-text\"></i>\n              Tư vấn cấy mở làm to dương vật\n            </p>\n          </a>\n        </div>\n\n      </div>\n      <!-- Card -->\n\n    </div>\n  </div>\n\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <!-- Card -->\n      <div class=\"card\">\n        <div class=\"view view-cascade overlay\">\n          <img src=\"https://vienthammykhothi.vn/upload/source/cay-mo-tu-than-lipivage/cay-mo-tu-than-lipivage-01.jpg\"\n            class=\"img-fluid hinh\" width=\"100%\" alt=\"sample photo\">\n          <a routerLink=\"/user/trang-khac/lam-to-duong-vat\">\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n        <!-- Card content -->\n        <div class=\"card-body\">\n\n          <a routerLink=\"/user/trang-khac/lam-to-duong-vat\">\n            <p class=\"font-weight-normal text-uppercase white-text\" style=\"font-size:80%\">\n              <i class=\"fa fa-angle-double-right fa-1x white-text\"></i>\n              Tư vấn cấy mở làm to dương vật\n            </p>\n          </a>\n        </div>\n\n      </div>\n      <!-- Card -->\n\n    </div>\n\n    <div class=\"col-lg-4\">\n      <!-- Card -->\n      <div class=\"card\">\n        <div class=\"view view-cascade overlay\">\n          <img src=\"https://vienthammykhothi.vn/upload/source/cay-mo-tu-than-lipivage/cay-mo-tu-than-lipivage-01.jpg\"\n            class=\"img-fluid hinh\" width=\"100%\" alt=\"sample photo\">\n          <a routerLink=\"/user/trang-khac/lam-to-duong-vat\">\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n        <!-- Card content -->\n        <div class=\"card-body\">\n\n          <a routerLink=\"/user/trang-khac/lam-to-duong-vat\">\n            <p class=\"font-weight-normal text-uppercase white-text\" style=\"font-size:80%\">\n              <i class=\"fa fa-angle-double-right fa-1x white-text\"></i>\n              Tư vấn cấy mở làm to dương vật\n            </p>\n          </a>\n        </div>\n\n      </div>\n      <!-- Card -->\n\n    </div>\n\n    <div class=\"col-lg-4\">\n      <!-- Card -->\n      <div class=\"card\">\n        <div class=\"view view-cascade overlay\">\n          <img src=\"https://vienthammykhothi.vn/upload/source/cay-mo-tu-than-lipivage/cay-mo-tu-than-lipivage-01.jpg\"\n            class=\"img-fluid hinh\" width=\"100%\" alt=\"sample photo\">\n          <a routerLink=\"/user/trang-khac/lam-to-duong-vat\">\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n        <!-- Card content -->\n        <div class=\"card-body\">\n\n          <a routerLink=\"/user/trang-khac/lam-to-duong-vat\">\n            <p class=\"font-weight-normal text-uppercase white-text\" style=\"font-size:80%\">\n              <i class=\"fa fa-angle-double-right fa-1x white-text\"></i>\n              Tư vấn cấy mở làm to dương vật\n            </p>\n          </a>\n        </div>\n\n      </div>\n      <!-- Card -->\n\n    </div>\n  </div>\n</div>\n<br>"

/***/ }),

/***/ "./src/app/user/trang-khac/tham-my-khac/tham-my-khac.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/user/trang-khac/tham-my-khac/tham-my-khac.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 1068px) {\n  .img {\n    height: 100px; } }\n\n.card-body {\n  background-color: #A65606;\n  height: 60px; }\n\n.hinh {\n  height: 250px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90cmFuZy1raGFjL3RoYW0tbXkta2hhYy9DOlxceGFtcHBcXGh0ZG9jc1xcdGhhbV9teV92aWVuL3NyY1xcYXBwXFx1c2VyXFx0cmFuZy1raGFjXFx0aGFtLW15LWtoYWNcXHRoYW0tbXkta2hhYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksY0FBYSxFQUNoQixFQUFBOztBQUdMO0VBQ0ksMEJBQXlCO0VBQ3pCLGFBQVksRUFDZjs7QUFDRDtFQUNJLGNBQWEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3RyYW5nLWtoYWMvdGhhbS1teS1raGFjL3RoYW0tbXkta2hhYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiAxMDY4cHgpIHtcclxuICAgIC5pbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQtYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBNjU2MDY7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuLmhpbmh7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/trang-khac/tham-my-khac/tham-my-khac.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/user/trang-khac/tham-my-khac/tham-my-khac.component.ts ***!
  \************************************************************************/
/*! exports provided: ThamMyKhacComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThamMyKhacComponent", function() { return ThamMyKhacComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThamMyKhacComponent = /** @class */ (function () {
    function ThamMyKhacComponent() {
    }
    ThamMyKhacComponent.prototype.ngOnInit = function () {
    };
    ThamMyKhacComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tham-my-khac',
            template: __webpack_require__(/*! ./tham-my-khac.component.html */ "./src/app/user/trang-khac/tham-my-khac/tham-my-khac.component.html"),
            styles: [__webpack_require__(/*! ./tham-my-khac.component.scss */ "./src/app/user/trang-khac/tham-my-khac/tham-my-khac.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ThamMyKhacComponent);
    return ThamMyKhacComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/tin-tuc/tin-tuc.component.html":
/*!****************************************************************!*\
  !*** ./src/app/user/trang-khac/tin-tuc/tin-tuc.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div>\n        <!-- begin line 1 -->\n        <div class=\"row\">\n            <!-- col 1 -->\n            <div class=\"col-lg-8\">\n                <mdb-carousel [animation]=\"'slide'\">\n                    <mdb-carousel-item>\n                        <img class=\"d-block w-100 custom-img custom-slide\" src=\"https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/17553863_1799245863629273_4933453990315646529_n.jpg?_nc_cat=105&_nc_ht=scontent.fdad1-1.fna&oh=a87eebbef4d531c04e2879d5e0736b4e&oe=5CD62315\"\n                            alt=\"First slide\">\n                    </mdb-carousel-item>\n                    <mdb-carousel-item>\n                        <img class=\"d-block w-100 custom-img custom-slide\" src=\"https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/47013847_2131594100394446_5578308407422615552_o.jpg?_nc_cat=105&_nc_ht=scontent.fdad1-1.fna&oh=393bb7499052725bcd007c1b306f3997&oe=5C95E044\"\n                            alt=\"Second slide\">\n                    </mdb-carousel-item>\n                    <mdb-carousel-item>\n                        <img class=\"d-block w-100 custom-img custom-slide\" src=\"https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/46384967_2125095051044351_8327041074035949568_o.jpg?_nc_cat=101&_nc_ht=scontent.fdad2-1.fna&oh=39d5843bbbb05151c9b168e4d20e44e2&oe=5C8DB5D3\" alt=\"Third slide\">\n                    </mdb-carousel-item>\n                </mdb-carousel>\n\n                <div *ngIf=\"tintuc==''\">\n                    <div *ngFor=\"let tin of listTin\">\n\n                        <div class=\"row\">\n                            <!-- Grid column -->\n                            <div class=\"col-lg-5 col-xl-4\">\n                                <br>\n                                <!-- Featured image -->\n                                <div class=\"view overlay rounded mb-lg-0 mb-4 \">\n                                    <img class=\"img-fluid imgtin\" src=\"{{tin.hinhAnh}}\" alt=\"{{tin.tuKhoa}}\">\n                                    <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{tin.id}}\">\n                                        <div class=\"mask rgba-white-slight\"></div>\n                                    </a>\n                                </div>\n                            </div>\n                            <!-- Grid column -->\n                            <!-- Grid column -->\n                            <div class=\"col-lg-7 col-xl-8\">\n                                <br>\n                                <!-- Post title -->\n                                <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{tin.id}}\" class=\"custom-title \">{{tin.tieuDe}}</a>\n                                <!-- Excerpt -->\n                                <p class=\"custom-description\">{{tin.tomTat}}\n                                </p>\n                                <!-- Post data -->\n                            </div>\n                            <!-- Grid column -->\n                        </div>\n                        <hr>\n\n                    </div>\n\n                    <!-- pagination -->\n                    <nav aria-label=\"Page navigation example\">\n                        <ul class=\"pagination pagination-circle pg-blue justify-content-center\">\n\n                            <li class=\"page-item disabled\">\n                                <a class=\"page-link\" aria-label=\"Previous\" mdbWavesEffect>\n                                    <span aria-hidden=\"true\">&laquo;</span>\n                                    <span class=\"sr-only\">Previous</span>\n                                </a>\n                            </li>\n                            <li class=\"page-item active\">\n                                <a class=\"page-link\" mdbWavesEffect (click)=\"onClickChange1()\">1</a>\n                            </li>\n                            <li class=\"page-item\">\n                                <a class=\"page-link\" mdbWavesEffect (click)=\"onClickChange2()\">2</a>\n                            </li>\n\n                            <li class=\"page-item\">\n                                <a class=\"page-link\" aria-label=\"Next\" mdbWavesEffect>\n                                    <span aria-hidden=\"true\">&raquo;</span>\n                                    <span class=\"sr-only\">Next</span>\n                                </a>\n                            </li>\n\n                        </ul>\n                    </nav>\n                </div>\n\n\n                <div *ngIf=\"tintuc=='trang2'\">\n                    <div *ngFor=\"let tin of listTin55\">\n\n                        <div class=\"row\">\n                            <!-- Grid column -->\n                            <div class=\"col-lg-5 col-xl-4\">\n                                <br>\n                                <!-- Featured image -->\n                                <div class=\"view overlay rounded mb-lg-0 mb-4 \">\n                                    <img class=\"img-fluid imgtin\" src=\"{{tin.hinhAnh}}\" alt=\"{{tin.tuKhoa}}\">\n                                    <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{tin.id}}\">\n                                        <div class=\"mask rgba-white-slight\"></div>\n                                    </a>\n                                </div>\n                            </div>\n                            <!-- Grid column -->\n                            <!-- Grid column -->\n                            <div class=\"col-lg-7 col-xl-8\">\n                                <br>\n                                <!-- Post title -->\n                                <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{tin.id}}\" class=\"custom-title \">{{tin.tieuDe}}</a>\n                                <!-- Excerpt -->\n                                <p class=\"custom-description\">{{tin.tomTat}}\n                                </p>\n                                <!-- Post data -->\n                            </div>\n                            <!-- Grid column -->\n                        </div>\n                        <hr>\n\n                    </div>\n\n                    <!-- pagination -->\n                    <nav aria-label=\"Page navigation example\">\n                        <ul class=\"pagination pagination-circle pg-blue justify-content-center\">\n\n                            <li class=\"page-item disabled\">\n                                <a class=\"page-link\" aria-label=\"Previous\" mdbWavesEffect>\n                                    <span aria-hidden=\"true\">&laquo;</span>\n                                    <span class=\"sr-only\">Previous</span>\n                                </a>\n                            </li>\n                            <li class=\"page-item \">\n                                <a class=\"page-link\" mdbWavesEffect (click)=\"onClickChange1()\">1</a>\n                            </li>\n                            <li class=\"page-item active\">\n                                <a class=\"page-link\" mdbWavesEffect (click)=\"onClickChange1()\">2</a>\n                            </li>\n\n                            <li class=\"page-item\">\n                                <a class=\"page-link\" aria-label=\"Next\" mdbWavesEffect>\n                                    <span aria-hidden=\"true\">&raquo;</span>\n                                    <span class=\"sr-only\">Next</span>\n                                </a>\n                            </li>\n\n                        </ul>\n                    </nav>\n                </div>\n\n\n            </div>\n            <!-- col 2 -->\n            <div class=\"col-lg-4\">\n                <h4 class=\" custom-new mt-5\">Tiêu điểm</h4>\n                <hr>\n\n                <div *ngFor=\"let tin of tieuDiem\">\n                    <div class=\"row\">\n                        <!-- Grid column -->\n                        <div class=\"col-lg-4\">\n                            <!-- Featured image -->\n                            <div class=\"view overlay rounded  mb-lg-0 mb-4\">\n                                <img class=\"img-fluid img\" src=\"{{tin.hinhAnh}}\" alt=\"{{tin.tuKhoa}}\">\n                                <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{tin.id}}\">\n                                    <div class=\"mask rgba-white-slight\"></div>\n                                </a>\n                            </div>\n\n                        </div>\n                        <!-- Grid column -->\n                        <!-- Grid column -->\n                        <div class=\"col-lg-8\">\n                            <!-- Category -->\n                            <p>\n                                <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{tin.id}}\" class=\"custom-description \">{{tin.tieuDe}}</a>\n                            </p>\n\n                            <p class=\"font-weight-bold dark-grey-text text-center\">\n                            </p>\n                        </div>\n                        <!-- Grid column -->\n                    </div>\n                    <hr>\n\n                </div>\n\n\n            </div>\n        </div>\n        <br>\n        <br>\n\n        <!-- begin line 2 -->\n\n        <h4 class=\"custom-new \">Bài viết liên quan</h4>\n\n        <hr>\n        <br>\n        <div class=\"row\">\n            <!-- Card deck -->\n            <div class=\"card-deck\">\n                <!-- Card -->\n                <div class=\"card mb-4\" *ngFor=\"let tin of tinMoi\">\n                    <!--Card image-->\n                    <div class=\"view overlay\">\n                        <img class=\"card-img-top imghinh\" src=\"{{tin.hinhAnh}}\" alt=\"Card image cap\">\n                        <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{tin.id}}\">\n                            <div class=\"mask rgba-white-slight\"></div>\n                        </a>\n                    </div>\n                    <!--Card content-->\n                    <div class=\"card-body custom-body\">\n                        <!--Title-->\n\n                        <!--Text-->\n                        <a class=\"custom-description\" routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{tin.id}}\">\n                            {{tin.tieuDe}}\n                        </a>\n                        <div class=\"color\">\n                            <i class=\"fa fa-star\"> </i>\n                            <i class=\"fa fa-star\"> </i>\n                            <i class=\"fa fa-star\"> </i>\n                            <i class=\"fa fa-star\"> </i>\n                            <i class=\"fa fa-star\"> </i>\n                        </div>\n                    </div>\n                </div>\n                <!-- Card -->\n\n            </div>\n            <!-- Card deck -->\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/user/trang-khac/tin-tuc/tin-tuc.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/user/trang-khac/tin-tuc/tin-tuc.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imghinh {\n  height: 220px; }\n\n.custom-image {\n  height: 200px; }\n\n.custom-title {\n  text-align: left;\n  font-weight: 350;\n  color: #37474F;\n  font-size: 152%;\n  font-family: \"Helvetica\", Times, serif; }\n\n.custom-new {\n  text-align: left;\n  font-weight: 350;\n  color: #004d40;\n  font-size: 152%;\n  font-family: \"Helvetica\", Times, serif; }\n\n.custom-price {\n  text-align: center;\n  font-weight: 500;\n  color: #ff4444;\n  font-size: 90%;\n  font-family: \"Helvetica\", Times, serif;\n  text-transform: uppercase; }\n\n.custom-description {\n  text-align: left;\n  font-weight: 300;\n  color: #37474F;\n  font-size: 115%;\n  font-family: Times, serif; }\n\n@media (max-width: 1199.98px) {\n  .custom-slide {\n    height: 200px;\n    width: 100%; }\n  .img {\n    height: 100%;\n    width: 100%; }\n  .imgtin {\n    height: 100%;\n    width: 100%; } }\n\n@media (min-width: 1199.98px) {\n  .custom-img {\n    height: 300px;\n    width: 100%; }\n  .img {\n    height: 80px;\n    width: 90px; }\n  .imgtin {\n    height: 190px;\n    width: 400px; } }\n\n.custom-body {\n  background-color: #e0e0e0; }\n\n.color {\n  color: #ffca28; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90cmFuZy1raGFjL3Rpbi10dWMvQzpcXHhhbXBwXFxodGRvY3NcXHRoYW1fbXlfdmllbi9zcmNcXGFwcFxcdXNlclxcdHJhbmcta2hhY1xcdGluLXR1Y1xcdGluLXR1Yy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGNBQWEsRUFFaEI7O0FBR0Q7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBQ0csaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWU7RUFDZix1Q0FBc0MsRUFFeEM7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGVBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsdUNBQXNDLEVBRXhDOztBQUdGO0VBQ0csbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBYztFQUNkLHVDQUFzQztFQUN0QywwQkFBeUIsRUFDM0I7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZTtFQUNmLDBCQUF5QixFQUMzQjs7QUFHRDtFQUVHO0lBQ0UsY0FBYTtJQUNiLFlBQVcsRUFDWjtFQUNEO0lBQ0ksYUFBVztJQUNYLFlBQVcsRUFDZDtFQUVEO0lBQ0ksYUFBVztJQUNYLFlBQVcsRUFDZCxFQUFBOztBQUdIO0VBRUU7SUFDRSxjQUFhO0lBQ2IsWUFBVyxFQUNaO0VBQ0Q7SUFDSSxhQUFZO0lBQ1osWUFBVyxFQUNkO0VBRUQ7SUFDSSxjQUFhO0lBQ2IsYUFBWSxFQUNmLEVBQUE7O0FBS0w7RUFDSSwwQkFBMkIsRUFDOUI7O0FBR0Q7RUFDRyxlQUFlLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdXNlci90cmFuZy1raGFjL3Rpbi10dWMvdGluLXR1Yy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5pbWdoaW5oe1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIC8vIHdpZHRoOiAzNTBweDtcclxufVxyXG5cclxuXHJcbi5jdXN0b20taW1hZ2V7IFxyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufSBcclxuXHJcbi5jdXN0b20tdGl0bGV7XHJcbiAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgIGNvbG9yOiAjMzc0NzRGIDsgXHJcbiAgIGZvbnQtc2l6ZTogMTUyJTtcclxuICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIFRpbWVzLCBzZXJpZjtcclxuLy8gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufSBcclxuXHJcbi5jdXN0b20tbmV3e1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBjb2xvcjogIzAwNGQ0MCAgOyBcclxuICAgIGZvbnQtc2l6ZTogMTUyJTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiLCBUaW1lcywgc2VyaWY7XHJcbiAvLyAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gfSBcclxuIFxyXG5cclxuLmN1c3RvbS1wcmljZXtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBmb250LXdlaWdodDogNTAwO1xyXG4gICBjb2xvcjogI2ZmNDQ0NCA7IFxyXG4gICBmb250LXNpemU6IDkwJTtcclxuICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIFRpbWVzLCBzZXJpZjtcclxuICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufSBcclxuXHJcbi5jdXN0b20tZGVzY3JpcHRpb257XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjMzc0NzRGIDsgXHJcbiAgICBmb250LXNpemU6IDExNSU7XHJcbiAgICBmb250LWZhbWlseTogVGltZXMsIHNlcmlmO1xyXG4gfVxyXG5cclxuIFxyXG4gQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xyXG5cclxuICAgIC5jdXN0b20tc2xpZGV7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmltZ3tcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmltZ3RpbntcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMTk5Ljk4cHgpIHtcclxuXHJcbiAgICAuY3VzdG9tLWltZ3tcclxuICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuaW1ne1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB3aWR0aDogOTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmltZ3RpbntcclxuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIFxyXG4uY3VzdG9tLWJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwICA7XHJcbn1cclxuXHJcblxyXG4uY29sb3J7XHJcbiAgIGNvbG9yOiAgI2ZmY2EyODtcclxufVxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/user/trang-khac/tin-tuc/tin-tuc.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user/trang-khac/tin-tuc/tin-tuc.component.ts ***!
  \**************************************************************/
/*! exports provided: TinTucComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinTucComponent", function() { return TinTucComponent; });
/* harmony import */ var _api_piano_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../api/piano.service */ "./src/app/api/piano.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TinTucComponent = /** @class */ (function () {
    function TinTucComponent(pianoService) {
        this.pianoService = pianoService;
        this.tintuc = '';
    }
    TinTucComponent.prototype.ngOnInit = function () {
        this.getNews();
        this.getTieuDiem();
        this.getTinMoi();
        this.getNews55();
    };
    TinTucComponent.prototype.onClickChange1 = function () {
        this.tintuc = '';
    };
    TinTucComponent.prototype.onClickChange2 = function () {
        this.tintuc = 'trang2';
    };
    // lay tin moi nhat
    TinTucComponent.prototype.getNews = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '15')
            .subscribe(function (data) {
            _this.listTin = data;
        });
    };
    // lay tin moi nhat vi tri thu 5 lay 5
    TinTucComponent.prototype.getNews55 = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '18')
            .subscribe(function (data) {
            _this.listTin55 = data;
        });
    };
    //lay tieu diem
    TinTucComponent.prototype.getTieuDiem = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '16')
            .subscribe(function (data) {
            _this.tieuDiem = data;
        });
    };
    //lay tin moi
    TinTucComponent.prototype.getTinMoi = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '17')
            .subscribe(function (data) {
            _this.tinMoi = data;
        });
    };
    TinTucComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tin-tuc',
            template: __webpack_require__(/*! ./tin-tuc.component.html */ "./src/app/user/trang-khac/tin-tuc/tin-tuc.component.html"),
            styles: [__webpack_require__(/*! ./tin-tuc.component.scss */ "./src/app/user/trang-khac/tin-tuc/tin-tuc.component.scss")]
        }),
        __metadata("design:paramtypes", [_api_piano_service__WEBPACK_IMPORTED_MODULE_0__["PianoService"]])
    ], TinTucComponent);
    return TinTucComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/trang-khac.component.html":
/*!***********************************************************!*\
  !*** ./src/app/user/trang-khac/trang-khac.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet (activate)=\"onActivate()\"></router-outlet>"

/***/ }),

/***/ "./src/app/user/trang-khac/trang-khac.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/user/trang-khac/trang-khac.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-fixed {\n  height: 100vh;\n  width: 270px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  z-index: 1050;\n  background-color: #fff;\n  padding: 1.5rem;\n  padding-top: 0; }\n\n.sidebar-fixed .list-group .active {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 5px; }\n\n.sidebar-fixed .logo-wrapper {\n  padding: 2.5rem; }\n\n.sidebar-fixed .logo-wrapper img {\n  max-height: 50px; }\n\n@media (min-width: 1200px) {\n  .navbar,\n  .page-footer,\n  main {\n    padding-left: 270px; } }\n\n@media (max-width: 1199.98px) {\n  .sidebar-fixed {\n    display: none; } }\n\n/* custom tree styles */\n\n.custom-card {\n  width: 300px;\n  float: left;\n  padding-bottom: 500px;\n  margin-right: 352px;\n  position: fixed; }\n\n/* custom tree styles */\n\n.custom-tree.wj-treeview {\n  color: #5c6bc0;\n  padding-top: 35px;\n  font-size: 75%;\n  font-family: \"Helvetica\", Times, serif;\n  font-weight: 600; }\n\n/* level 0 and deeper nodes */\n\n.custom-tree.wj-treeview .wj-nodelist > .wj-node {\n  font-size: 100%; }\n\n/* level 1 and deeper nodes (larger font, vertical line along the left) */\n\n.custom-tree.wj-treeview .wj-nodelist > .wj-nodelist > .wj-node,\n.custom-tree.wj-treeview .wj-nodelist > .wj-nodelist > .wj-nodelist {\n  font-size: 100%;\n  border-left: 4px solid rgba(128, 4, 77, 0.3); }\n\n/* level 2 and deeper nodes (smaller font, thinner border) */\n\n.custom-tree.wj-treeview .wj-nodelist > .wj-nodelist > .wj-nodelist > .wj-node,\n.custom-tree.wj-treeview .wj-nodelist > .wj-nodelist > .wj-nodelist > .wj-nodelist {\n  font-size: 100%;\n  border-left: 2px solid rgba(128, 4, 77, 0.3); }\n\n/* expanded node glyph */\n\n.custom-tree.wj-treeview .wj-nodelist .wj-node:before {\n  content: \"\\e114\";\n  font-family: 'Glyphicons Halflings';\n  top: 4px;\n  border: none;\n  opacity: .3;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }\n\n/* collapsed node glyph */\n\n.custom-tree.wj-treeview .wj-nodelist .wj-node.wj-state-collapsed:before,\n.custom-tree.wj-treeview .wj-nodelist .wj-node.wj-state-collapsing:before {\n  -webkit-transform: rotate(-180deg);\n      -ms-transform: rotate(-180deg);\n          transform: rotate(-180deg);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90cmFuZy1raGFjL0M6XFx4YW1wcFxcaHRkb2NzXFx0aGFtX215X3ZpZW4vc3JjXFxhcHBcXHVzZXJcXHRyYW5nLWtoYWNcXHRyYW5nLWtoYWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUVaLDhFQUE2RTtFQUM3RSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGdCQUFlO0VBQ2YsZUFBYyxFQUFHOztBQUNqQjtFQUVFLDhFQUE2RTtFQUU3RSxtQkFBa0IsRUFBRzs7QUFDdkI7RUFDRSxnQkFBZSxFQUFHOztBQUNsQjtFQUNFLGlCQUFnQixFQUFHOztBQUV6QjtFQUNFOzs7SUFHRSxvQkFBbUIsRUFBRyxFQUFBOztBQUUxQjtFQUNFO0lBQ0UsY0FBYSxFQUFHLEVBQUE7O0FBSXRCLHdCQUF3Qjs7QUFDeEI7RUFHSSxhQUFXO0VBQ1gsWUFBVztFQUNYLHNCQUFxQjtFQUNyQixvQkFBbUI7RUFDbkIsZ0JBQWUsRUFDbEI7O0FBRUQsd0JBQXdCOztBQUN4QjtFQUNJLGVBQWU7RUFDZixrQkFBaUI7RUFDakIsZUFBYztFQUNkLHVDQUFzQztFQUN0QyxpQkFBZ0IsRUFDbkI7O0FBRUQsOEJBQThCOztBQUM5QjtFQUNJLGdCQUFlLEVBQ2xCOztBQUVELDBFQUEwRTs7QUFDMUU7O0VBRUksZ0JBQWU7RUFDZiw2Q0FBNEMsRUFDL0M7O0FBRUQsNkRBQTZEOztBQUM3RDs7RUFFSSxnQkFBZTtFQUNmLDZDQUE0QyxFQUMvQzs7QUFFRCx5QkFBeUI7O0FBQ3pCO0VBQ0ksaUJBQWdCO0VBQ2hCLG9DQUFtQztFQUNuQyxTQUFRO0VBQ1IsYUFBWTtFQUNaLFlBQVc7RUFDWCxrREFBMkMsRUFDOUM7O0FBRUQsMEJBQTBCOztBQUMxQjs7RUFFSSxtQ0FBMEI7TUFBMUIsK0JBQTBCO1VBQTFCLDJCQUEwQjtFQUMxQixrREFBMkMsRUFDOUMiLCJmaWxlIjoic3JjL2FwcC91c2VyL3RyYW5nLWtoYWMvdHJhbmcta2hhYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyLWZpeGVkIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMjcwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICB6LWluZGV4OiAxMDUwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAwOyB9XHJcbiAgICAuc2lkZWJhci1maXhlZCAubGlzdC1ncm91cCAuYWN0aXZlIHtcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cclxuICAgIC5zaWRlYmFyLWZpeGVkIC5sb2dvLXdyYXBwZXIge1xyXG4gICAgICBwYWRkaW5nOiAyLjVyZW07IH1cclxuICAgICAgLnNpZGViYXItZml4ZWQgLmxvZ28td3JhcHBlciBpbWcge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7IH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAubmF2YmFyLFxyXG4gICAgLnBhZ2UtZm9vdGVyLFxyXG4gICAgbWFpbiB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjcwcHg7IH0gfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcclxuICAgIC5zaWRlYmFyLWZpeGVkIHtcclxuICAgICAgZGlzcGxheTogbm9uZTsgfSB9XHJcbiAgXHJcblxyXG4gXHJcbi8qIGN1c3RvbSB0cmVlIHN0eWxlcyAqL1xyXG4uY3VzdG9tLWNhcmQgIHtcclxuICAgIC8vIGNvbG9yOiAjODAwNDRkO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogNTJweDtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM1MnB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG4vKiBjdXN0b20gdHJlZSBzdHlsZXMgKi9cclxuLmN1c3RvbS10cmVlLndqLXRyZWV2aWV3ICB7XHJcbiAgICBjb2xvcjogIzVjNmJjMCA7XHJcbiAgICBwYWRkaW5nLXRvcDogMzVweDsgXHJcbiAgICBmb250LXNpemU6IDc1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4vKiBsZXZlbCAwIGFuZCBkZWVwZXIgbm9kZXMgKi9cclxuLmN1c3RvbS10cmVlLndqLXRyZWV2aWV3IC53ai1ub2RlbGlzdCA+IC53ai1ub2RlICB7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbn1cclxuXHJcbi8qIGxldmVsIDEgYW5kIGRlZXBlciBub2RlcyAobGFyZ2VyIGZvbnQsIHZlcnRpY2FsIGxpbmUgYWxvbmcgdGhlIGxlZnQpICovXHJcbi5jdXN0b20tdHJlZS53ai10cmVldmlldyAud2otbm9kZWxpc3QgPiAud2otbm9kZWxpc3QgPiAud2otbm9kZSxcclxuLmN1c3RvbS10cmVlLndqLXRyZWV2aWV3IC53ai1ub2RlbGlzdCA+IC53ai1ub2RlbGlzdCA+IC53ai1ub2RlbGlzdCAge1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCByZ2JhKDEyOCwgNCwgNzcsIDAuMyk7XHJcbn1cclxuXHJcbi8qIGxldmVsIDIgYW5kIGRlZXBlciBub2RlcyAoc21hbGxlciBmb250LCB0aGlubmVyIGJvcmRlcikgKi9cclxuLmN1c3RvbS10cmVlLndqLXRyZWV2aWV3IC53ai1ub2RlbGlzdCA+IC53ai1ub2RlbGlzdCAgPiAud2otbm9kZWxpc3QgPiAud2otbm9kZSxcclxuLmN1c3RvbS10cmVlLndqLXRyZWV2aWV3IC53ai1ub2RlbGlzdCA+IC53ai1ub2RlbGlzdCAgPiAud2otbm9kZWxpc3QgPiAud2otbm9kZWxpc3QgIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiYSgxMjgsIDQsIDc3LCAwLjMpO1xyXG59XHJcblxyXG4vKiBleHBhbmRlZCBub2RlIGdseXBoICovXHJcbi5jdXN0b20tdHJlZS53ai10cmVldmlldyAud2otbm9kZWxpc3QgLndqLW5vZGU6YmVmb3JlICB7IFxyXG4gICAgY29udGVudDogXCJcXGUxMTRcIjtcclxuICAgIGZvbnQtZmFtaWx5OiAnR2x5cGhpY29ucyBIYWxmbGluZ3MnO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAuMztcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7XHJcbn1cclxuXHJcbi8qIGNvbGxhcHNlZCBub2RlIGdseXBoICovXHJcbi5jdXN0b20tdHJlZS53ai10cmVldmlldyAud2otbm9kZWxpc3QgLndqLW5vZGUud2otc3RhdGUtY29sbGFwc2VkOmJlZm9yZSxcclxuLmN1c3RvbS10cmVlLndqLXRyZWV2aWV3IC53ai1ub2RlbGlzdCAud2otbm9kZS53ai1zdGF0ZS1jb2xsYXBzaW5nOmJlZm9yZSAge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGN1YmljLWJlemllciguNCwwLC4yLDEpO1xyXG59XHJcbiAgICAiXX0= */"

/***/ }),

/***/ "./src/app/user/trang-khac/trang-khac.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/trang-khac/trang-khac.component.ts ***!
  \*********************************************************/
/*! exports provided: TrangKhacComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangKhacComponent", function() { return TrangKhacComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_admin_extral_admin_common_login_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin/extral-admin/common/login-cookie */ "./src/app/admin/extral-admin/common/login-cookie.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Router } from '@angular/router';
var TrangKhacComponent = /** @class */ (function () {
    function TrangKhacComponent(router, loginCookie) {
        this.router = router;
        this.loginCookie = loginCookie;
    }
    TrangKhacComponent.prototype.ngOnInit = function () {
    };
    TrangKhacComponent.prototype.onActivate = function () {
        window.scrollTo(0, 0);
    };
    TrangKhacComponent.prototype.ngAfterViewInit = function () {
    };
    TrangKhacComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trang-khac',
            template: __webpack_require__(/*! ./trang-khac.component.html */ "./src/app/user/trang-khac/trang-khac.component.html"),
            styles: [__webpack_require__(/*! ./trang-khac.component.scss */ "./src/app/user/trang-khac/trang-khac.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_admin_extral_admin_common_login_cookie__WEBPACK_IMPORTED_MODULE_2__["LoginCookie"]])
    ], TrangKhacComponent);
    return TrangKhacComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/trang-khac.module.ts":
/*!******************************************************!*\
  !*** ./src/app/user/trang-khac/trang-khac.module.ts ***!
  \******************************************************/
/*! exports provided: TrangKhacModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangKhacModule", function() { return TrangKhacModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _trang_khac_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trang-khac.component */ "./src/app/user/trang-khac/trang-khac.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tin-tuc/tin-tuc.component */ "./src/app/user/trang-khac/tin-tuc/tin-tuc.component.ts");
/* harmony import */ var _gioi_thieu_gioi_thieu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gioi-thieu/gioi-thieu.component */ "./src/app/user/trang-khac/gioi-thieu/gioi-thieu.component.ts");
/* harmony import */ var _lien_he_lien_he_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lien-he/lien-he.component */ "./src/app/user/trang-khac/lien-he/lien-he.component.ts");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./video/video.component */ "./src/app/user/trang-khac/video/video.component.ts");
/* harmony import */ var _detail_news_detail_news_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./detail-news/detail-news.component */ "./src/app/user/trang-khac/detail-news/detail-news.component.ts");
/* harmony import */ var _my_pham_my_pham_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./my-pham/my-pham.component */ "./src/app/user/trang-khac/my-pham/my-pham.component.ts");
/* harmony import */ var _my_pham_san_pham1_san_pham1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./my-pham/san-pham1/san-pham1.component */ "./src/app/user/trang-khac/my-pham/san-pham1/san-pham1.component.ts");
/* harmony import */ var _dieu_tri_da_spa_dieu_tri_da_spa_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dieu-tri-da-spa/dieu-tri-da-spa.component */ "./src/app/user/trang-khac/dieu-tri-da-spa/dieu-tri-da-spa.component.ts");
/* harmony import */ var _dieu_tri_da_spa_triet_long_triet_long_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dieu-tri-da-spa/triet-long/triet-long.component */ "./src/app/user/trang-khac/dieu-tri-da-spa/triet-long/triet-long.component.ts");
/* harmony import */ var _phau_thuat_tham_my_phau_thuat_tham_my_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./phau-thuat-tham-my/phau-thuat-tham-my.component */ "./src/app/user/trang-khac/phau-thuat-tham-my/phau-thuat-tham-my.component.ts");
/* harmony import */ var _phau_thuat_tham_my_phau_thuat_cam_phau_thuat_cam_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./phau-thuat-tham-my/phau-thuat-cam/phau-thuat-cam.component */ "./src/app/user/trang-khac/phau-thuat-tham-my/phau-thuat-cam/phau-thuat-cam.component.ts");
/* harmony import */ var _tham_my_khac_tham_my_khac_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tham-my-khac/tham-my-khac.component */ "./src/app/user/trang-khac/tham-my-khac/tham-my-khac.component.ts");
/* harmony import */ var _tham_my_khac_lam_to_duong_vat_lam_to_duong_vat_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tham-my-khac/lam-to-duong-vat/lam-to-duong-vat.component */ "./src/app/user/trang-khac/tham-my-khac/lam-to-duong-vat/lam-to-duong-vat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routing = [{
        path: '', component: _trang_khac_component__WEBPACK_IMPORTED_MODULE_4__["TrangKhacComponent"],
        children: [
            {
                path: 'tin-tuc', component: _tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_6__["TinTucComponent"]
            },
            { path: 'chi-tiet-tin-tuc/:id', component: _detail_news_detail_news_component__WEBPACK_IMPORTED_MODULE_10__["DetailNewsComponent"] },
            {
                path: 'lien-he', component: _lien_he_lien_he_component__WEBPACK_IMPORTED_MODULE_8__["LienHeComponent"]
            },
            {
                path: 'gioi-thieu', component: _gioi_thieu_gioi_thieu_component__WEBPACK_IMPORTED_MODULE_7__["GioiThieuComponent"]
            },
            { path: 'video', component: _video_video_component__WEBPACK_IMPORTED_MODULE_9__["VideoComponent"] },
            { path: 'my-pham', component: _my_pham_my_pham_component__WEBPACK_IMPORTED_MODULE_11__["MyPhamComponent"] },
            { path: 'san-pham1', component: _my_pham_san_pham1_san_pham1_component__WEBPACK_IMPORTED_MODULE_12__["SanPham1Component"] },
            { path: 'dieu-tri-da-spa', component: _dieu_tri_da_spa_dieu_tri_da_spa_component__WEBPACK_IMPORTED_MODULE_13__["DieuTriDaSpaComponent"] },
            { path: 'triet-long', component: _dieu_tri_da_spa_triet_long_triet_long_component__WEBPACK_IMPORTED_MODULE_14__["TrietLongComponent"] },
            { path: 'phau-thuat-tham-my', component: _phau_thuat_tham_my_phau_thuat_tham_my_component__WEBPACK_IMPORTED_MODULE_15__["PhauThuatThamMyComponent"] },
            { path: 'phau-thuat-cam', component: _phau_thuat_tham_my_phau_thuat_cam_phau_thuat_cam_component__WEBPACK_IMPORTED_MODULE_16__["PhauThuatCamComponent"] },
            { path: 'tham-my-khac', component: _tham_my_khac_tham_my_khac_component__WEBPACK_IMPORTED_MODULE_17__["ThamMyKhacComponent"] },
            { path: 'lam-to-duong-vat', component: _tham_my_khac_lam_to_duong_vat_lam_to_duong_vat_component__WEBPACK_IMPORTED_MODULE_18__["LamToDuongVatComponent"] }
        ]
    }];
var TrangKhacModule = /** @class */ (function () {
    function TrangKhacModule() {
    }
    TrangKhacModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _trang_khac_component__WEBPACK_IMPORTED_MODULE_4__["TrangKhacComponent"],
                _tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_6__["TinTucComponent"],
                _gioi_thieu_gioi_thieu_component__WEBPACK_IMPORTED_MODULE_7__["GioiThieuComponent"],
                _lien_he_lien_he_component__WEBPACK_IMPORTED_MODULE_8__["LienHeComponent"],
                _video_video_component__WEBPACK_IMPORTED_MODULE_9__["VideoComponent"],
                _detail_news_detail_news_component__WEBPACK_IMPORTED_MODULE_10__["DetailNewsComponent"],
                _my_pham_my_pham_component__WEBPACK_IMPORTED_MODULE_11__["MyPhamComponent"],
                _my_pham_san_pham1_san_pham1_component__WEBPACK_IMPORTED_MODULE_12__["SanPham1Component"],
                _dieu_tri_da_spa_dieu_tri_da_spa_component__WEBPACK_IMPORTED_MODULE_13__["DieuTriDaSpaComponent"],
                _dieu_tri_da_spa_triet_long_triet_long_component__WEBPACK_IMPORTED_MODULE_14__["TrietLongComponent"],
                _phau_thuat_tham_my_phau_thuat_tham_my_component__WEBPACK_IMPORTED_MODULE_15__["PhauThuatThamMyComponent"],
                _phau_thuat_tham_my_phau_thuat_cam_phau_thuat_cam_component__WEBPACK_IMPORTED_MODULE_16__["PhauThuatCamComponent"],
                _tham_my_khac_tham_my_khac_component__WEBPACK_IMPORTED_MODULE_17__["ThamMyKhacComponent"],
                _tham_my_khac_lam_to_duong_vat_lam_to_duong_vat_component__WEBPACK_IMPORTED_MODULE_18__["LamToDuongVatComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routing),
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            entryComponents: [
                _trang_khac_component__WEBPACK_IMPORTED_MODULE_4__["TrangKhacComponent"]
            ],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
        })
    ], TrangKhacModule);
    return TrangKhacModule;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/video/video.component.html":
/*!************************************************************!*\
  !*** ./src/app/user/trang-khac/video/video.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <br>\n  <h4>\n    <span class=\"badge badge-warning\">VIDEOS</span>\n  </h4>\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-6 mb-lg-0 mb-5\" *ngFor=\"let salem of video\">\n      <iframe class=\"img-fluid iframe\" [src]='sanitizer.bypassSecurityTrustResourceUrl(salem.urlVideo)' frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n        allowfullscreen></iframe>\n      <h6 class=\"font-weight-normal\">\n        {{salem.tenVideo}}</h6>\n    </div>\n\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-6 mb-lg-0 mb-5\" *ngFor=\"let salem of video1\">\n      <iframe class=\"img-fluid iframe\" [src]='sanitizer.bypassSecurityTrustResourceUrl(salem.urlVideo)' frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n        allowfullscreen></iframe>\n      <h6 class=\"font-weight-normal\">\n        {{salem.tenVideo}}</h6>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-6 mb-lg-0 mb-5\" *ngFor=\"let salem of video2\">\n      <iframe class=\"img-fluid iframe\" [src]='sanitizer.bypassSecurityTrustResourceUrl(salem.urlVideo)' frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n        allowfullscreen></iframe>\n      <h6 class=\"font-weight-normal\">\n        {{salem.tenVideo}}</h6>\n    </div>\n  </div>\n</div>\n<br>\n<br>"

/***/ }),

/***/ "./src/app/user/trang-khac/video/video.component.scss":
/*!************************************************************!*\
  !*** ./src/app/user/trang-khac/video/video.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 1199.98px) {\n  .iframe {\n    height: 300px;\n    width: 100%; } }\n\n@media (min-width: 1199.98px) {\n  .iframe {\n    height: 300px;\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90cmFuZy1raGFjL3ZpZGVvL0M6XFx4YW1wcFxcaHRkb2NzXFx0aGFtX215X3ZpZW4vc3JjXFxhcHBcXHVzZXJcXHRyYW5nLWtoYWNcXHZpZGVvXFx2aWRlby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUlJO0lBQ0ksY0FBYTtJQUNiLFlBQVksRUFDZixFQUFBOztBQUdMO0VBSUk7SUFDSSxjQUFhO0lBQ2IsWUFBWSxFQUNmLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL3RyYW5nLWtoYWMvdmlkZW8vdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcclxuXHJcbiAgXHJcblxyXG4gICAgLmlmcmFtZXtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4OyAgXHJcbiAgICAgICAgd2lkdGg6IDEwMCUgOyAgXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMTk5Ljk4cHgpIHtcclxuXHJcbiAgXHJcblxyXG4gICAgLmlmcmFtZXtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4OyAgXHJcbiAgICAgICAgd2lkdGg6IDEwMCUgOyAgXHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/trang-khac/video/video.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user/trang-khac/video/video.component.ts ***!
  \**********************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var src_app_api_piano_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/piano.service */ "./src/app/api/piano.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoComponent = /** @class */ (function () {
    function VideoComponent(pianoService, sanitizer) {
        this.pianoService = pianoService;
        this.sanitizer = sanitizer;
    }
    VideoComponent.prototype.ngOnInit = function () {
        this.getVideo();
        this.getVideo1();
        this.getVideo2();
    };
    // lay video
    VideoComponent.prototype.getVideo = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '45')
            .subscribe(function (data) {
            _this.video = data;
            console.log('phog', _this.video);
        });
    };
    // lay video
    VideoComponent.prototype.getVideo1 = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '46')
            .subscribe(function (data) {
            _this.video1 = data;
        });
    };
    // lay video
    VideoComponent.prototype.getVideo2 = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '47')
            .subscribe(function (data) {
            _this.video2 = data;
        });
    };
    VideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/user/trang-khac/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.scss */ "./src/app/user/trang-khac/video/video.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_api_piano_service__WEBPACK_IMPORTED_MODULE_0__["PianoService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=trang-khac-trang-khac-module.js.map