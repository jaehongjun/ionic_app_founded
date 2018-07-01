webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\study\ionic_css\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\study\ionic_css\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\study\ionic_css\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-fab color="different">FAB</button>\n  <label>This is a label that looks different from the one on Contact Page</label>\n</ion-content>\n'/*ion-inline-end:"D:\study\ionic_css\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_kakao_maps_sdk__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, platform, _kakaoMapsProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this._kakaoMapsProvider = _kakaoMapsProvider;
        this.mapConfig = { width: '100%', height: '50%' };
        this.flagg = true;
        this.KaKaoJavascriptAPIKey = '410f51f5cf462c73b12e4eb2af91a86d';
        this.isWindows = platform.is('windows');
        // _kakaoMapsProvider.init('8ab8f62cd70161ec0fa39c1361552dd6', 'kakaomaps-div');
        _kakaoMapsProvider
            .loadKakaoMapSDK(this.KaKaoJavascriptAPIKey)
            .then(function () {
            var mapConfig = {
                center: new __WEBPACK_IMPORTED_MODULE_2_kakao_maps_sdk__["e" /* LatLng */](33.450701, 126.570667),
                mapTypeId: __WEBPACK_IMPORTED_MODULE_2_kakao_maps_sdk__["g" /* MapTypeId */].ROADMAP,
            };
            _kakaoMapsProvider
                .init('kakaomaps-div', mapConfig)
                .then(function () {
                _kakaoMapsProvider.getMapInstance().addControl(new __WEBPACK_IMPORTED_MODULE_2_kakao_maps_sdk__["f" /* MapTypeControl */](), __WEBPACK_IMPORTED_MODULE_2_kakao_maps_sdk__["a" /* ControlPosition */].BOTTOM);
                _kakaoMapsProvider.getMapInstance().addOverlayMapTypeId(__WEBPACK_IMPORTED_MODULE_2_kakao_maps_sdk__["i" /* OverlayMapTypeId */].BICYCLE_HYBRID);
                var events = [
                    'center_changed',
                    'zoom_start',
                    'zoom_changed',
                    'bounds_changed',
                    'click',
                    'dblclick',
                    'rightclick',
                    'mousemove',
                    'dragstart',
                    'drag',
                    'dragend',
                    'idle',
                    'tilesloaded',
                    'maptypeid_changed',
                ];
                _kakaoMapsProvider.addListeners(_kakaoMapsProvider.getMapInstance(), events, function (res) {
                    // if(res.event == 'click'){}
                    // console.log(res);
                });
                _this.marker = new __WEBPACK_IMPORTED_MODULE_2_kakao_maps_sdk__["h" /* Marker */]({ position: new __WEBPACK_IMPORTED_MODULE_2_kakao_maps_sdk__["e" /* LatLng */](33.450701, 126.570667) });
            })
                .catch();
        }, function (err) {
            // console.log('err ', err);
        })
            .catch(function (e) {
            // console.log('catch ', e);
        });
        // _kakaoMapsProvider.getMapInstance().addControl(_kakaoMapsProvider.getZoomControl(), ControlPosition.TOPRIGHT);
        // _kakaoMapsProvider.getMapInstance().addControl(_kakaoMapsProvider.getMapTypeControl(), ControlPosition.TOPRIGHT);
    }
    ContactPage.prototype.addToolbox = function () {
        // 도형 스타일을 변수로 설정합니다
        var strokeColor = '#39f', fillColor = '#cce6ff', fillOpacity = 0.5, hintStrokeStyle = 'dash';
        var options = {
            // Drawing Manager를 생성할 때 사용할 옵션입니다
            map: this._kakaoMapsProvider.getMapInstance(),
            drawingMode: [
                __WEBPACK_IMPORTED_MODULE_2_kakao_maps_sdk__["j" /* OverlayType */].MARKER,
                __WEBPACK_IMPORTED_MODULE_2_kakao_maps_sdk__["j" /* OverlayType */].ARROW,
                __WEBPACK_IMPORTED_MODULE_2_kakao_maps_sdk__["j" /* OverlayType */].POLYLINE,
                __WEBPACK_IMPORTED_MODULE_2_kakao_maps_sdk__["j" /* OverlayType */].RECTANGLE,
                __WEBPACK_IMPORTED_MODULE_2_kakao_maps_sdk__["j" /* OverlayType */].CIRCLE,
                __WEBPACK_IMPORTED_MODULE_2_kakao_maps_sdk__["j" /* OverlayType */].ELLIPSE,
                __WEBPACK_IMPORTED_MODULE_2_kakao_maps_sdk__["j" /* OverlayType */].POLYGON,
            ],
            // 사용자에게 제공할 그리기 가이드 툴팁입니다
            // 사용자에게 도형을 그릴때, 드래그할때, 수정할때 가이드 툴팁을 표시하도록 설정합니다
            guideTooltip: ['draw', 'drag', 'edit'],
            markerOptions: {
                draggable: true,
                removable: true,
            },
            arrowOptions: {
                draggable: true,
                removable: true,
                strokeColor: strokeColor,
                hintStrokeStyle: hintStrokeStyle,
            },
            polylineOptions: {
                draggable: true,
                removable: true,
                strokeColor: strokeColor,
                hintStrokeStyle: hintStrokeStyle,
            },
            rectangleOptions: {
                draggable: true,
                removable: true,
                strokeColor: strokeColor,
                fillColor: fillColor,
                fillOpacity: fillOpacity,
            },
            circleOptions: {
                draggable: true,
                removable: true,
                strokeColor: strokeColor,
                fillColor: fillColor,
                fillOpacity: fillOpacity,
            },
            ellipseOptions: {
                draggable: true,
                removable: true,
                strokeColor: strokeColor,
                fillColor: fillColor,
                fillOpacity: fillOpacity,
            },
            polygonOptions: {
                draggable: true,
                removable: true,
                strokeColor: strokeColor,
                fillColor: fillColor,
                fillOpacity: fillOpacity,
            },
        };
        // 위에 작성한 옵션으로 Drawing Manager를 생성합니다
        var manager = new __WEBPACK_IMPORTED_MODULE_2_kakao_maps_sdk__["b" /* DrawingManager */](options);
        // Toolbox를 생성합니다.
        // Toolbox 생성 시 위에서 생성한 DrawingManager 객체를 설정합니다.
        // DrawingManager 객체를 꼭 설정해야만 그리기 모드와 매니저의 상태를 툴박스에 설정할 수 있습니다.
        var toolbox = new __WEBPACK_IMPORTED_MODULE_2_kakao_maps_sdk__["k" /* Toolbox */]({ drawingManager: manager });
        // 지도 위에 Toolbox를 표시합니다
        // daum.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOP은 위 가운데를 의미합니다.
        this._kakaoMapsProvider.getMapInstance().addControl(toolbox.getElement(), __WEBPACK_IMPORTED_MODULE_2_kakao_maps_sdk__["a" /* ControlPosition */].TOP);
    };
    ContactPage.prototype.removeMarker = function () {
        this.marker.setMap(null);
    };
    ContactPage.prototype.addMarker = function () {
        this.marker.setMap(this._kakaoMapsProvider.getMapInstance());
    };
    ContactPage.prototype.getPosition = function () {
        this.position = this._kakaoMapsProvider.getMapInstance().getCenter();
        this.marker = new __WEBPACK_IMPORTED_MODULE_2_kakao_maps_sdk__["h" /* Marker */]({ position: this.position });
    };
    ContactPage.prototype.addOverlay = function () {
        this._kakaoMapsProvider.getMapInstance().addOverlayMapTypeId(__WEBPACK_IMPORTED_MODULE_2_kakao_maps_sdk__["i" /* OverlayMapTypeId */].TRAFFIC);
    };
    ContactPage.prototype.removeOverlay = function () {
        this._kakaoMapsProvider.getMapInstance().removeOverlayMapTypeId(__WEBPACK_IMPORTED_MODULE_2_kakao_maps_sdk__["i" /* OverlayMapTypeId */].TRAFFIC);
    };
    ContactPage.prototype.changeLayout = function () {
        var option = {
            width: '100%',
            height: '50%',
        };
        if (this.flagg) {
            option = {
                width: '100%',
                height: '30%',
            };
        }
        else {
            option = {
                width: '100%',
                height: '50%',
            };
        }
        this.mapConfig = option;
        this.flagg = !this.flagg;
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\study\ionic_css\src\pages\contact\contact.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-item>\n  <ion-icon name="logo-dropbox" item-left></ion-icon>\n  Files\n  <ion-badge item-right [attr.round-badge] = "isWindows ? \'\' : null">175</ion-badge>\n</ion-item>\n  <kakao-maps [mapConfig]="mapConfig"></kakao-maps>\n  <button (click)="addOverlay()">addOverlay</button>\n  <button (click)="removeOverlay()">removeOverlay</button>\n  <button (click)="changeLayout()">changeLayout</button>\n  <button (click)="addMarker()">addMarker</button>\n  <button (click)="removeMarker()">removeMarker</button>\n  <button (click)="addToolbox()">addToolbox</button>\n  <button (click)="getPosition()">getPosition</button>\n  <p>{{position}}</p>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\study\ionic_css\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_kakao_maps_sdk__["d" /* KakaoMapsProvider */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.presentLoading();
    }
    HomePage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\study\ionic_css\src\pages\home\home.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button color="purple">A Purple Button</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\study\ionic_css\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_kakao_maps_sdk__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_10_kakao_maps_sdk__["c" /* KakaoMapsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\study\ionic_css\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\study\ionic_css\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map