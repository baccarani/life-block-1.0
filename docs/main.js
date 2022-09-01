(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+zU0":
/*!**************************************************!*\
  !*** ./src/app/insurance/insurance.component.ts ***!
  \**************************************************/
/*! exports provided: InsuranceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceComponent", function() { return InsuranceComponent; });
/* harmony import */ var _raw_loader_insurance_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./insurance.component.html */ "TlyI");
/* harmony import */ var _insurance_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insurance.component.css */ "Ha6E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web3 */ "8v0y");
/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../policy */ "XQtO");
/* harmony import */ var _report__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../report */ "X5l3");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blockchain.service */ "AKdi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var InsuranceComponent = /** @class */ (function () {
    function InsuranceComponent(blockchainService) {
        this.blockchainService = blockchainService;
        this.beneficiaries = [];
        this.isLoading = false;
        this.isSuccess = false;
    }
    InsuranceComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.blockchainService.sharedMessage.subscribe(function (test) { return console.log(test); });
                        _a = this;
                        return [4 /*yield*/, _web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getBalance(_policy__WEBPACK_IMPORTED_MODULE_4__["default"].options.address)];
                    case 1:
                        _a.balance = _b.sent();
                        this.balance = _web3__WEBPACK_IMPORTED_MODULE_3__["default"].utils.fromWei(this.balance, 'ether');
                        console.log('Function getBalance() works, balance = ' + this.balance);
                        return [2 /*return*/];
                }
            });
        });
    };
    InsuranceComponent.prototype.ngAfterContentInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, _report__WEBPACK_IMPORTED_MODULE_5__["default"].methods.manager().call()];
                    case 1:
                        _a.manager = _e.sent();
                        console.log('This contract is managed by ' + this.manager);
                        _b = this;
                        return [4 /*yield*/, _policy__WEBPACK_IMPORTED_MODULE_4__["default"].methods.getBeneficiaries().call()];
                    case 2:
                        _b.beneficiaries = _e.sent();
                        console.log('Function getBeneficiaries() = ' + this.beneficiaries);
                        _c = this;
                        return [4 /*yield*/, _report__WEBPACK_IMPORTED_MODULE_5__["default"].methods.getReports().call()];
                    case 3:
                        _c.reportStruct = _e.sent();
                        console.log(this.blockchainService.nextMessage(this.reportStruct));
                        console.log(this.reportStruct);
                        console.log(this.reportStruct.length);
                        console.log(this.reportStruct[0].recipient);
                        _d = this;
                        return [4 /*yield*/, _web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getBalance(_policy__WEBPACK_IMPORTED_MODULE_4__["default"].options.address)];
                    case 4:
                        _d.balance = _e.sent();
                        this.balance = _web3__WEBPACK_IMPORTED_MODULE_3__["default"].utils.fromWei(this.balance, 'ether');
                        console.log('Function getBalance() works, balance = ' + this.balance);
                        return [2 /*return*/];
                }
            });
        });
    };
    InsuranceComponent.prototype.onEnter = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, _policy__WEBPACK_IMPORTED_MODULE_4__["default"].methods.enter().send({
                                from: this.manager,
                                value: _web3__WEBPACK_IMPORTED_MODULE_3__["default"].utils.toWei(form.value.amount, 'ether')
                            })];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, _web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getBalance(_policy__WEBPACK_IMPORTED_MODULE_4__["default"].options.address)];
                    case 2:
                        _a.balance = _b.sent();
                        this.balance = _web3__WEBPACK_IMPORTED_MODULE_3__["default"].utils.fromWei(this.balance, 'ether');
                        console.log('Function onEnter() complete, amount entered is = ' + _web3__WEBPACK_IMPORTED_MODULE_3__["default"].utils.toWei(form.value.amount, 'ether'));
                        this.isLoading = false;
                        this.isSuccess = true;
                        setTimeout(function () {
                            _this.isSuccess = false;
                        }, 10000);
                        return [2 /*return*/];
                }
            });
        });
    };
    InsuranceComponent.prototype.payBeneficiaries = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.isLoading = true;
                        _a = this;
                        _b = this;
                        return [4 /*yield*/, _report__WEBPACK_IMPORTED_MODULE_5__["default"].methods.getReportsCount().call()];
                    case 1:
                        _a.reportCount = _b.reportCount = _c.sent();
                        if (!(this.reportStruct[this.reportCount - 1].meansOfDeath != 'Undetermined')) return [3 /*break*/, 3];
                        return [4 /*yield*/, _policy__WEBPACK_IMPORTED_MODULE_4__["default"].methods.payBeneficiaries().send({ from: this.manager })];
                    case 2:
                        _c.sent();
                        console.log('Beneficiaries paid-out');
                        return [3 /*break*/, 4];
                    case 3:
                        console.log('Beneficiaries not paid-out');
                        _c.label = 4;
                    case 4:
                        this.isLoading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    InsuranceComponent.ctorParameters = function () { return [
        { type: _blockchain_service__WEBPACK_IMPORTED_MODULE_6__["BlockchainService"] }
    ]; };
    InsuranceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-insurance',
            template: _raw_loader_insurance_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_insurance_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_blockchain_service__WEBPACK_IMPORTED_MODULE_6__["BlockchainService"]])
    ], InsuranceComponent);
    return InsuranceComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bpha\Angular\life-block-1.0\src\main.ts */"zUnb");


/***/ }),

/***/ "06FS":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-xs-10\">\n    <app-shopping-edit></app-shopping-edit>\n    <hr>\n    <ul class=\"list-group\">\n      <a\n        class=\"list-group-item\"\n        style=\"cursor: pointer\"\n        *ngFor=\"let ingredient of ingredients; let i = index\"\n        (click)=\"onEditItem(i)\"\n      >\n        {{ ingredient.name }} ({{ ingredient.amount }})\n      </a>\n    </ul>\n  </div>\n</div>\n");

/***/ }),

/***/ 1:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3POl":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\n      style=\"cursor: pointer;\"\n      [routerLink]=\"[index]\"\n      routerLinkActive=\"active\"\n      class=\"list-group-item clearfix\">\n      <div class=\"pull-left\">\n        <h4 class=\"list-group-item-heading\">{{ recipe.name }}</h4>\n        <p class=\"list-group-item-text\">{{ recipe.description }}</p>\n      </div>\n      <span class=\"pull-right\">\n        <img\n          [src]=\"recipe.imagePath\"\n          alt=\"{{ recipe.name }}\"\n          class=\"img-responsive\"\n          style=\"max-height: 50px;\">\n      </span>\n    </a>");

/***/ }),

/***/ "3V6w":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    DropdownDirective.propDecorators = {
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.open',] }],
        toggleOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
    };
    DropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdown]'
        })
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ 4:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "4JH1":
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ 5:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "8v0y":
/*!*************************!*\
  !*** ./src/app/web3.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "meUc");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

window.ethereum.request({
  method: "eth_requestAccounts"
});
var web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(window.ethereum);
/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ }),

/***/ "9rNa":
/*!********************************************!*\
  !*** ./src/app/shared/ingredient.model.ts ***!
  \********************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
var Ingredient = /** @class */ (function () {
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingredient;
}());



/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.css */ "RV7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.documentClick = function (event) {
        this.router.navigate(['/insurance']);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    HomeComponent.propDecorators = {
        documentClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['document:click', ['$event'],] }]
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AKdi":
/*!***************************************!*\
  !*** ./src/app/blockchain.service.ts ***!
  \***************************************/
/*! exports provided: BlockchainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainService", function() { return BlockchainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web3 */ "8v0y");
/* harmony import */ var _report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report */ "X5l3");
/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./policy */ "XQtO");
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @metamask/detect-provider */ "TEHo");
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var BlockchainService = /** @class */ (function () {
    function BlockchainService() {
        var _this = this;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('First Message');
        this.sharedMessage = this.subject.asObservable();
        this.reportStruct = this.subject.asObservable();
        this.onSubmit = function (form) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        event.preventDefault();
                        console.log(form);
                        // import factory campaign
                        // const accounts = await web3.eth.getAccounts();
                        // console.log(accounts); 
                        // await report.methods.createRequest()
                        // console.log(form.value.name)
                        // return reports 
                        this.reportList = Promise.all(Array(parseInt(this.reportCount))
                            .fill(0, this.reportCount)
                            .map(function (element, index) {
                            return _report__WEBPACK_IMPORTED_MODULE_3__["default"].methods.requests(index).call();
                        }));
                        _a = this;
                        return [4 /*yield*/, _report__WEBPACK_IMPORTED_MODULE_3__["default"].methods.getReportsCount().call()];
                    case 1:
                        _a.reportCount = _d.sent();
                        // prints the name and address for each report in the list
                        // for (let i = 0; i < this.reportStruct.length; i++) {
                        //  console.log('name: ' + this.reportStruct[i].name);
                        //  console.log('address: ' + this.reportStruct[i].address);
                        // }
                        _b = this;
                        return [4 /*yield*/, _report__WEBPACK_IMPORTED_MODULE_3__["default"].methods.createReport(form.value.name, this.manager).send({ from: this.manager })];
                    case 2:
                        // prints the name and address for each report in the list
                        // for (let i = 0; i < this.reportStruct.length; i++) {
                        //  console.log('name: ' + this.reportStruct[i].name);
                        //  console.log('address: ' + this.reportStruct[i].address);
                        // }
                        _b.reports = _d.sent();
                        console.log('Function createReport is called and = ' + this.reports);
                        _c = this;
                        return [4 /*yield*/, _report__WEBPACK_IMPORTED_MODULE_3__["default"].methods.getReports().call()];
                    case 3:
                        _c.reportStruct = _d.sent();
                        console.log('Function getReportsCount() works, Type reportCount = ' + this.reportCount);
                        console.log('Report struct = ' + this.reportStruct);
                        console.log('Report struct name = ' + this.reportStruct[0].name);
                        return [2 /*return*/];
                }
            });
        }); };
    }
    BlockchainService.prototype.nextMessage = function (reportStruct) {
        this.subject.next(reportStruct);
    };
    BlockchainService.prototype.ngOnInit = function () {
        console.log('Web3 version = ' + _web3__WEBPACK_IMPORTED_MODULE_2__["default"].version);
        _web3__WEBPACK_IMPORTED_MODULE_2__["default"].eth.getAccounts().then(console.log);
    };
    BlockchainService.prototype.ngAfterContentInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, _report__WEBPACK_IMPORTED_MODULE_3__["default"].methods.manager().call()];
                    case 1:
                        _a.manager = _f.sent();
                        console.log('This contract is managed by ' + this.manager);
                        _b = this;
                        return [4 /*yield*/, _report__WEBPACK_IMPORTED_MODULE_3__["default"].methods.getPlayers().call()];
                    case 2:
                        _b.players = _f.sent();
                        console.log('Function getPlayers() = ' + this.players);
                        _c = this;
                        return [4 /*yield*/, _web3__WEBPACK_IMPORTED_MODULE_2__["default"].eth.getBalance(_report__WEBPACK_IMPORTED_MODULE_3__["default"].options.address)];
                    case 3:
                        _c.balance = _f.sent();
                        this.balance = _web3__WEBPACK_IMPORTED_MODULE_2__["default"].utils.fromWei(this.balance, 'ether');
                        console.log('Function getBalance() = ' + this.balance);
                        console.log('Function getReportsCount() to display list array of  Reports = ' + this.reportList);
                        _d = this;
                        return [4 /*yield*/, _report__WEBPACK_IMPORTED_MODULE_3__["default"].methods.getReportsCount().call()];
                    case 4:
                        _d.reportCount = _f.sent();
                        console.log('Function getReportsCount() works, Type reportCount = ' + this.reportCount);
                        _e = this;
                        return [4 /*yield*/, _report__WEBPACK_IMPORTED_MODULE_3__["default"].methods.getReports().call()];
                    case 5:
                        _e.reportStruct = _f.sent();
                        console.log('Report struct = ' + this.reportStruct);
                        console.log('Report struct one whole item = ' + this.reportStruct[0]);
                        console.log('Report struct name = ' + this.reportStruct[0].name);
                        console.log('Function createReport is called and = ' + this.reports);
                        return [2 /*return*/];
                }
            });
        });
    };
    BlockchainService.prototype.getReportStruct = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, _report__WEBPACK_IMPORTED_MODULE_3__["default"].methods.getReports().call()];
                    case 1:
                        _a.reportStruct = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BlockchainService.prototype.payBeneficiaries = function (lastArrayItem) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.reportStruct[lastArrayItem].meansOfDeaths != 'Undetermined')) return [3 /*break*/, 2];
                        return [4 /*yield*/, _policy__WEBPACK_IMPORTED_MODULE_4__["default"].methods.payBeneficiaries().send({ from: this.manager })];
                    case 1:
                        _a.sent();
                        console.log('Beneficiaries paid-out');
                        return [3 /*break*/, 3];
                    case 2:
                        console.log('Beneficiaries not paid-out');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BlockchainService.prototype.signInWithMetaMask = function () {
        var ethereum;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_5___default()()).pipe();
    };
    BlockchainService.ctorParameters = function () { return []; };
    BlockchainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BlockchainService);
    return BlockchainService;
}());



/***/ }),

/***/ "AKvW":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-5\">\n    <app-recipe-list></app-recipe-list>\n  </div>\n  <div class=\"col-md-7\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"banner\"></div>\n\n");

/***/ }),

/***/ "Ha6E":
/*!***************************************************!*\
  !*** ./src/app/insurance/insurance.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN1cmFuY2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "JI/q":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.ts ***!
  \****************************************************************/
/*! exports provided: RecipeStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeStartComponent", function() { return RecipeStartComponent; });
/* harmony import */ var _raw_loader_recipe_start_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./recipe-start.component.html */ "gqx7");
/* harmony import */ var _recipe_start_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-start.component.css */ "e6+t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeStartComponent = /** @class */ (function () {
    function RecipeStartComponent() {
    }
    RecipeStartComponent.prototype.ngOnInit = function () {
    };
    RecipeStartComponent.ctorParameters = function () { return []; };
    RecipeStartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-recipe-start',
            template: _raw_loader_recipe_start_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_recipe_start_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], RecipeStartComponent);
    return RecipeStartComponent;
}());



/***/ }),

/***/ "OBK4":
/*!*******************************************************!*\
  !*** ./src/app/health-care/health-care.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFsdGgtY2FyZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "OF5Z":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list/recipe-list.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <button class=\"btn btn-success\" (click)=\"onNewRecipe()\">New Recipe</button>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <app-recipe-item \n    *ngFor=\"let recipeEl of recipes; let i = index\"\n    [recipe]=\"recipeEl\"\n    [index]=\"i\"></app-recipe-item>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "RV7M":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner\r\n{\r\n    background-image: url('home.png');\r\n    background-position: center;\r\n    background-size: cover;\r\n\r\n\r\n    position: fixed; \r\n    top: 0; \r\n    left: 0; \r\n      \r\n    /* Preserve aspect ratio */\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxpQ0FBZ0Q7SUFDaEQsMkJBQTJCO0lBQzNCLHNCQUFzQjs7O0lBR3RCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTzs7SUFFUCwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2hvbWUucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG5cclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgICB0b3A6IDA7IFxyXG4gICAgbGVmdDogMDsgXHJcbiAgICAgIFxyXG4gICAgLyogUHJlc2VydmUgYXNwZWN0IHJhdGlvICovXHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ "RfMi":
/*!***************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtaXRlbS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "TlyI":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/insurance/insurance.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Life Insurance Smart Contract</h2>\n\n<p>This contract is managed by {{ manager }}</p>\n<p>The beneficiaries of this Life Insurance policy are:</p>\n<li> {{beneficiaries[0]}}</li>\n<li> {{beneficiaries[1]}}</li>\n\n<hr>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <form (ngSubmit)=\"onEnter(f)\" #f=\"ngForm\">\n                <div id=\"user-data\">\n                    <div class=\"form-group\">\n                        <label for=\"amount\">Amount of Ethereum in this Smart Contract = {{balance}} Ether</label>\n                        <input \n                        type=\"text\"\n                        id=\"amount\"\n                        class=\"form-control\"\n                        ngModel\n                        name=\"amount\">\n                    </div>\n                    <div>\n                        <button [disabled]=\"isLoading\" class=\"btn btn-primary\" type=\"submit\" style='margin-right:16px'>\n                            <img *ngIf=\"isLoading\" width=\"20px\" src=\"../../assets/img/spinner.gif\"/> Enter Amount</button>\n                        <button [disabled]=\"isLoading\" class=\"btn btn-default\" type=\"button\" style='margin-right:16px' (click)=\"payBeneficiaries()\">\n                            <img *ngIf=\"isLoading\" width=\"20px\" src=\"../../assets/img/spinner.gif\"/> Pay Beneficiaries</button>\n                    </div> <br>\n                    <div *ngIf=\"isSuccess\" class=\"alert alert-success\">\n                        <strong>Success!</strong> Ethereum has been entered into the life insurance smart contract. \n                      </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "V5ZI":
/*!**************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: RecipeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function() { return RecipeItemComponent; });
/* harmony import */ var _raw_loader_recipe_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./recipe-item.component.html */ "3POl");
/* harmony import */ var _recipe_item_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-item.component.css */ "RfMi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../recipe.model */ "ekAf");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RecipeItemComponent = /** @class */ (function () {
    function RecipeItemComponent() {
    }
    RecipeItemComponent.prototype.ngOnInit = function () {
    };
    RecipeItemComponent.propDecorators = {
        recipe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    RecipeItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-recipe-item',
            template: _raw_loader_recipe_item_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_recipe_item_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], RecipeItemComponent);
    return RecipeItemComponent;
}());



/***/ }),

/***/ "VIpv":
/*!************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: ShoppingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingEditComponent", function() { return ShoppingEditComponent; });
/* harmony import */ var _raw_loader_shopping_edit_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./shopping-edit.component.html */ "YpRY");
/* harmony import */ var _shopping_edit_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-edit.component.css */ "Z2z6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/ingredient.model */ "9rNa");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shopping-list.service */ "ozzT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShoppingEditComponent = /** @class */ (function () {
    function ShoppingEditComponent(slService) {
        this.slService = slService;
        this.editMode = false;
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.slService.startedEditing
            .subscribe(function (index) {
            _this.editedItemIndex = index;
            _this.editMode = true;
            _this.editedItem = _this.slService.getIngredient(index);
            _this.slForm.setValue({
                name: _this.editedItem.name,
                amount: _this.editedItem.amount
            });
        });
    };
    ShoppingEditComponent.prototype.onSubmit = function (form) {
        var value = form.value;
        var newIngredient = new src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_4__["Ingredient"](value.name, value.amount);
        if (this.editMode) {
            this.slService.updateIngredient(this.editedItemIndex, newIngredient);
        }
        else {
            this.slService.addIngredient(newIngredient);
        }
        this.editMode = false;
        form.reset();
    };
    ShoppingEditComponent.prototype.onClear = function () {
        this.slForm.reset();
        this.editMode = false;
    };
    ShoppingEditComponent.prototype.onDelete = function () {
        this.slService.deleteIngredient(this.editedItemIndex);
        this.onClear();
    };
    ShoppingEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ShoppingEditComponent.ctorParameters = function () { return [
        { type: _shopping_list_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingListService"] }
    ]; };
    ShoppingEditComponent.propDecorators = {
        slForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['f',] }]
    };
    ShoppingEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-shopping-edit',
            template: _raw_loader_shopping_edit_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_shopping_edit_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_shopping_list_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingListService"]])
    ], ShoppingEditComponent);
    return ShoppingEditComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "X5l3":
/*!***************************!*\
  !*** ./src/app/report.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "8v0y");

var address = '0x80FF401ea96c2E4a9Dcbc7549B16a28AdaA8D58A';
var abi = [{
  "constant": true,
  "inputs": [],
  "name": "getReportsCount",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "manager",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "pickWinner",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getPlayers",
  "outputs": [{
    "name": "",
    "type": "address[]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getReports",
  "outputs": [{
    "components": [{
      "name": "recipient",
      "type": "address"
    }, {
      "name": "name",
      "type": "string"
    }, {
      "name": "dateOfDeath",
      "type": "string"
    }, {
      "name": "timeOfDeath",
      "type": "string"
    }, {
      "name": "placeOfDeath",
      "type": "string"
    }, {
      "name": "city",
      "type": "string"
    }, {
      "name": "postalCode",
      "type": "string"
    }, {
      "name": "country",
      "type": "string"
    }, {
      "name": "province",
      "type": "string"
    }, {
      "name": "medicalCauseOfDeath",
      "type": "string"
    }, {
      "name": "meansOfDeath",
      "type": "string"
    }],
    "name": "",
    "type": "tuple[]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "",
    "type": "uint256"
  }],
  "name": "reports",
  "outputs": [{
    "name": "recipient",
    "type": "address"
  }, {
    "name": "name",
    "type": "string"
  }, {
    "name": "dateOfDeath",
    "type": "string"
  }, {
    "name": "timeOfDeath",
    "type": "string"
  }, {
    "name": "placeOfDeath",
    "type": "string"
  }, {
    "name": "city",
    "type": "string"
  }, {
    "name": "postalCode",
    "type": "string"
  }, {
    "name": "country",
    "type": "string"
  }, {
    "name": "province",
    "type": "string"
  }, {
    "name": "medicalCauseOfDeath",
    "type": "string"
  }, {
    "name": "meansOfDeath",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "recipient",
    "type": "address"
  }, {
    "name": "name",
    "type": "string"
  }, {
    "name": "dateOfDeath",
    "type": "string"
  }, {
    "name": "timeOfDeath",
    "type": "string"
  }, {
    "name": "placeOfDeath",
    "type": "string"
  }, {
    "name": "city",
    "type": "string"
  }, {
    "name": "postalCode",
    "type": "string"
  }, {
    "name": "country",
    "type": "string"
  }, {
    "name": "province",
    "type": "string"
  }, {
    "name": "medicalCauseOfDeath",
    "type": "string"
  }, {
    "name": "meansOfDeath",
    "type": "string"
  }],
  "name": "createReport",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "enter",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "",
    "type": "uint256"
  }],
  "name": "players",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}];
/* harmony default export */ __webpack_exports__["default"] = (new _web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(abi, address));

/***/ }),

/***/ "XQtO":
/*!***************************!*\
  !*** ./src/app/policy.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "8v0y");

var address = '0x00fE4937340967d12bd4e9B0B1e72F4a4b053f50';
var abi = [{
  "constant": true,
  "inputs": [],
  "name": "getBalance",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "policyHolder",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getBeneficiaries",
  "outputs": [{
    "name": "",
    "type": "address[]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "enter",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "payBeneficiaries",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "",
    "type": "uint256"
  }],
  "name": "beneficiaries",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}];
/* harmony default export */ __webpack_exports__["default"] = (new _web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(abi, address));

/***/ }),

/***/ "YpRY":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-edit/shopping-edit.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"col-sm-5 form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" id=\"name\" class=\"form-control\" name=\"name\" ngModel required>\n        </div>\n        <div class=\"col-sm-2 form-group\">\n          <label for=\"amount\">Amount</label>\n          <input type=\"number\" id=\"amount\" class=\"form-control\" name=\"amount\" ngModel required pattern=\"^[1-9]+[0-9]*$\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <button class=\"btn btn-success\" type=\"submit\"[disabled]=\"!f.valid\">{{ editMode ? 'Update' : 'Add' }}</button>\n          <button class=\"btn btn-danger\" type=\"button\" (click)=\"onDelete()\" *ngIf=\"editMode\">Delete</button>\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">Clear</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "Z2z6":
/*!*************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wcGluZy1lZGl0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipes/recipes.component */ "juFZ");
/* harmony import */ var _recipes_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes/recipe-list/recipe-list.component */ "pH56");
/* harmony import */ var _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes/recipe-detail/recipe-detail.component */ "vpfn");
/* harmony import */ var _recipes_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipes/recipe-list/recipe-item/recipe-item.component */ "V5ZI");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "vKZt");
/* harmony import */ var _shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shopping-list/shopping-edit/shopping-edit.component */ "VIpv");
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/dropdown.directive */ "3V6w");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shopping-list/shopping-list.service */ "ozzT");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blockchain.service */ "AKdi");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./recipes/recipe-start/recipe-start.component */ "JI/q");
/* harmony import */ var _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./recipes/recipe-edit/recipe-edit.component */ "wn/g");
/* harmony import */ var _health_care_health_care_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./health-care/health-care.component */ "l5Jd");
/* harmony import */ var _insurance_insurance_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./insurance/insurance.component */ "+zU0");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_5__["RecipesComponent"],
                _recipes_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_6__["RecipeListComponent"],
                _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_7__["RecipeDetailComponent"],
                _recipes_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_8__["RecipeItemComponent"],
                _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_9__["ShoppingListComponent"],
                _shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_10__["ShoppingEditComponent"],
                _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__["DropdownDirective"],
                _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_15__["RecipeStartComponent"],
                _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_16__["RecipeEditComponent"],
                _health_care_health_care_component__WEBPACK_IMPORTED_MODULE_17__["HealthCareComponent"],
                _insurance_insurance_component__WEBPACK_IMPORTED_MODULE_18__["InsuranceComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"]
            ],
            providers: [_shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_12__["ShoppingListService"], _blockchain_service__WEBPACK_IMPORTED_MODULE_13__["BlockchainService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "auR4":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-edit/recipe-edit.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <form [formGroup]=\"recipeForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <button type=\"submit\" class=\"btn btn-success\">Save</button>\n                    <button type=\"button\" class=\"btn btn-danger\">Cancel</button>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <div class=\"form-group\">\n                        <label for=\"name\">Name</label>\n                        <input \n                        type=\"text\"\n                        id=\"name\"\n                        formControlName=\"name\"\n                        class=\"form-control\"\n                        >\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <div class=\"form-group\">\n                        <label for=\"imagePath\">Image URL</label>\n                        <input \n                        type=\"text\"\n                        id=\"imagePath\"\n                        formControlName=\"imagePath\"\n                        class=\"form-control\"\n                        >\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <img src=\"\" class=\"img-responsive\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <div class=\"form-group\">\n                        <label for=\"description\">Description</label>\n                        <textarea \n                        type=\"text\"\n                        id=\"description\"\n                        class=\"form-control\"\n                        formControlName=\"description\"\n                        rows=\"6\"\n                        ></textarea>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12\" formArrayName=\"ingredient\">\n                    <div class=\"row\" *ngFor=\"let ingredientCtrl of recipeForm.get('ingredients').controls; let i = index\" formGroupName=\"i\" style=\"margin-top: 10px;\">\n                        <div class=\"col-xs-8\">\n                            <input \n                                type=\"text\"\n                                class=\"form-control\"\n                                formControlName=\"name\">\n                        </div>\n                        <div class=\"col-xs-2\">\n                            <input \n                                type=\"number\"\n                                class=\"form-control\"\n                                formControlName=\"amount\">\n                        </div>\n                        <div class=\"col-xs-2\">\n                            <button class=\"btn btn-danger\">X</button>\n                        </div>\n                    </div>\n                    <hr>\n                    <div class=\"row\">\n                        <div class=\"col-xs-12\">\n                            <button type=\"button\" class=\"btn btn-success\" (click)=\"onAddIngredient()\">Add Ingredient</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "ceC1":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipe.service.ts ***!
  \*******************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/ingredient.model */ "9rNa");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopping-list/shopping-list.service */ "ozzT");
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe.model */ "ekAf");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipeService = /** @class */ (function () {
    function RecipeService(slService) {
        this.slService = slService;
        this.recipes = [
            new _recipe_model__WEBPACK_IMPORTED_MODULE_3__["Recipe"]('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [
                new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('Meat', 1),
                new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('French Fries', 20)
            ]),
            new _recipe_model__WEBPACK_IMPORTED_MODULE_3__["Recipe"]('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [
                new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('Buns', 2),
                new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('Meat', 1)
            ])
        ];
    }
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    RecipeService.prototype.getRecipe = function (index) {
        return this.recipes[index];
    };
    RecipeService.prototype.addIngredientsToShoppingList = function (ingredients) {
        this.slService.addIngredients(ingredients);
    };
    RecipeService.ctorParameters = function () { return [
        { type: _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"] }
    ]; };
    RecipeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"]])
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "cmNj":
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtZWRpdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "e6+t":
/*!*****************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtc3RhcnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "ekAf":
/*!*****************************************!*\
  !*** ./src/app/recipes/recipe.model.ts ***!
  \*****************************************/
/*! exports provided: Recipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    function Recipe(name, desc, imagePath, ingredients) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
    return Recipe;
}());



/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./header.component.html */ "kjkU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "gqx7":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-start/recipe-start.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Please select a recipe</h2>");

/***/ }),

/***/ "iBH0":
/*!*******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n    <div class=\"logo\">\n    </div>\n    <div class=\"container\">\n        <div class=\"connect-your-wallet\">Connect your wallet</div>\n        <div style=\"text-align:center;\">\n            <button class=\"metamask-button\" (click)=\"onConnectMetamask()\"><img src=\"../../assets/img/metamask-logo.svg\" /></button>\n        </div>\n    </div>\n</body>\n");

/***/ }),

/***/ "juFZ":
/*!**********************************************!*\
  !*** ./src/app/recipes/recipes.component.ts ***!
  \**********************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var _raw_loader_recipes_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./recipes.component.html */ "AKvW");
/* harmony import */ var _recipes_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipes.component.css */ "zpyO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe.service */ "ceC1");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipesComponent = /** @class */ (function () {
    function RecipesComponent() {
    }
    RecipesComponent.prototype.ngOnInit = function () {
    };
    RecipesComponent.ctorParameters = function () { return []; };
    RecipesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-recipes',
            template: _raw_loader_recipes_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            providers: [_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"]],
            styles: [_recipes_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], RecipesComponent);
    return RecipesComponent;
}());



/***/ }),

/***/ "kjkU":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a href=\"#\" class=\"navbar-brand\">Life Block</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <!-- <li routerLinkActive=\"active\"><a routerLink=\"/recipes\">Recipes</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/shopping-list\">Shopping List</a></li> -->\n        <li routerLinkActive=\"active\"><a routerLink=\"/insurance\">Life Insurance</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/health-care\">Death Certificate</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/login\">Decenterlife</a></li>\n\n      </ul>\n      <!-- <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\" appDropdown>\n          <a style=\"cursor: pointer;\" class=\"dropdown-toggle\" role=\"button\">Manage <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a style=\"cursor: pointer;\">Save Data</a></li>\n            <li><a style=\"cursor: pointer;\">Fetch Data</a></li>\n          </ul>\n        </li>\n      </ul> -->\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "kxD1":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-detail/recipe-detail.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <img [src]=\"recipe.imagePath\" alt=\"{{ recipe.name }}\" class=\"img-responsive\" style=\"max-height: 300px\"> \n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h1>{{ recipe.name }}</h1>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <div class=\"btn-group\" appDropdown>\n      <button\n        type=\"button\"\n        class=\"btn btn-primary dropdown-toggle\">\n        Manage Recipe <span class=\"caret\"></span>\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li><a (click)=\"onAddToShoppingList()\" style=\"cursor: pointer;\">To Shopping List</a></li>\n        <li><a style=\"cursor: pointer;\" (click)=\"onEditRecipe()\">Edit Recipe</a></li>\n        <li><a style=\"cursor: pointer;\">Delete Recipe</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    {{ recipe.description }}\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <ul class=\"list-group\">\n      <li \n      class=\"list-group-item\"\n      *ngFor=\"let ingredient of recipe.ingredients\">\n      {{ ingredient.name }} - {{ ingredient.amount }}\n      </li>\n    </ul>\n  </div>\n</div>\n");

/***/ }),

/***/ "l5Jd":
/*!******************************************************!*\
  !*** ./src/app/health-care/health-care.component.ts ***!
  \******************************************************/
/*! exports provided: HealthCareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthCareComponent", function() { return HealthCareComponent; });
/* harmony import */ var _raw_loader_health_care_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./health-care.component.html */ "rrL4");
/* harmony import */ var _health_care_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./health-care.component.css */ "OBK4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web3 */ "8v0y");
/* harmony import */ var _report__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../report */ "X5l3");
/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../policy */ "XQtO");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blockchain.service */ "AKdi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var HealthCareComponent = /** @class */ (function () {
    function HealthCareComponent(blockchainService) {
        var _this = this;
        this.blockchainService = blockchainService;
        this.medicalCauses = ['Heart Disease', 'Cancer', 'COVID-19', 'Accidents', 'Drowning'];
        this.meansOfDeaths = ['Natural Cause', 'Accident', 'Homicide', 'Suicide', 'Undetermined'];
        this.beneficiaries = [];
        this.isLoading = false;
        this.isSuccess = false;
        this.isError = false;
        this.onSubmit = function (form) { return __awaiter(_this, void 0, void 0, function () {
            var accounts, i, _a, _b, index, _c, _d;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        this.isLoading = true;
                        console.log("onSubmit function called");
                        console.log(form);
                        return [4 /*yield*/, _web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getAccounts()];
                    case 1:
                        accounts = _e.sent();
                        console.log(accounts);
                        // await report.methods.createRequest()
                        console.log(form.value.name);
                        // return reports 
                        this.reportList = Promise.all(Array(parseInt(this.reportCount))
                            .fill(0, this.reportCount)
                            .map(function (element, index) {
                            return _report__WEBPACK_IMPORTED_MODULE_4__["default"].methods.requests(index).call();
                        }));
                        for (i = 0; i < this.reportStruct.length; i++) {
                            console.log('name: ' + this.reportStruct[i].name);
                            console.log('address: ' + this.reportStruct[i].address);
                        }
                        console.log(this.manager);
                        console.log(form.value.name);
                        console.log(form.value.dateOfDeath);
                        console.log(form.value.timeOfDeath);
                        console.log(form.value.placeOfDeath);
                        console.log(form.value.city);
                        console.log(form.value.postalCode);
                        console.log(form.value.country);
                        console.log(form.value.province);
                        console.log(form.value.medicalCauseOfDeaths);
                        console.log(form.value.meansOfDeaths);
                        return [4 /*yield*/, _report__WEBPACK_IMPORTED_MODULE_4__["default"].methods.createReport(this.manager, form.value.name, form.value.dateOfDeath, form.value.timeOfDeath, form.value.placeOfDeath, form.value.city, form.value.postalCode, form.value.country, form.value.province, form.value.medicalCauseOfDeaths, form.value.meansOfDeaths).send({ from: this.manager })];
                    case 2:
                        _e.sent();
                        _a = this;
                        return [4 /*yield*/, _report__WEBPACK_IMPORTED_MODULE_4__["default"].methods.getReportsCount().call()];
                    case 3:
                        _a.reportCount = _e.sent();
                        console.log('Report Count = ' + this.reportCount);
                        _b = this;
                        return [4 /*yield*/, _report__WEBPACK_IMPORTED_MODULE_4__["default"].methods.getReports().call()];
                    case 4:
                        _b.reportStruct = _e.sent();
                        console.log('Function getReportsCount() works, Type reportCount = ' + this.reportCount);
                        console.log('Report struct = ' + this.reportStruct);
                        console.log('Report struct name = ' + this.reportStruct[this.reportCount - 1].meansOfDeath);
                        for (index = 0; index < this.reportStruct.length; index++) {
                            console.log(this.reportStruct[index]);
                        }
                        if (!(this.reportStruct[this.reportCount - 1].meansOfDeath != 'Undetermined')) return [3 /*break*/, 7];
                        return [4 /*yield*/, _policy__WEBPACK_IMPORTED_MODULE_5__["default"].methods.payBeneficiaries().send({ from: this.manager })];
                    case 5:
                        _e.sent();
                        console.log('Beneficiaries paid-out');
                        _c = this;
                        return [4 /*yield*/, _web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getBalance(_policy__WEBPACK_IMPORTED_MODULE_5__["default"].options.address)];
                    case 6:
                        _c.balance = _e.sent();
                        this.balance = _web3__WEBPACK_IMPORTED_MODULE_3__["default"].utils.fromWei(this.balance, 'ether');
                        console.log('Function getBalance() works, balance = ' + this.balance);
                        this.isSuccess = true;
                        setTimeout(function () {
                            _this.isSuccess = false;
                        }, 10000);
                        return [3 /*break*/, 9];
                    case 7:
                        console.log('Beneficiaries not paid-out');
                        _d = this;
                        return [4 /*yield*/, _web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getBalance(_policy__WEBPACK_IMPORTED_MODULE_5__["default"].options.address)];
                    case 8:
                        _d.balance = _e.sent();
                        this.balance = _web3__WEBPACK_IMPORTED_MODULE_3__["default"].utils.fromWei(this.balance, 'ether');
                        console.log('Function getBalance() works, balance = ' + this.balance);
                        this.isError = true;
                        setTimeout(function () {
                            _this.isError = false;
                        }, 10000);
                        _e.label = 9;
                    case 9:
                        this.isLoading = false;
                        return [2 /*return*/];
                }
            });
        }); };
    }
    HealthCareComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log('Web3 version = ' + _web3__WEBPACK_IMPORTED_MODULE_3__["default"].version);
                        _web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getAccounts().then(console.log);
                        _a = this;
                        return [4 /*yield*/, _web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getBalance(_policy__WEBPACK_IMPORTED_MODULE_5__["default"].options.address)];
                    case 1:
                        _a.balance = _c.sent();
                        this.balance = _web3__WEBPACK_IMPORTED_MODULE_3__["default"].utils.fromWei(this.balance, 'ether');
                        console.log('Function getBalance() works, balance = ' + this.balance);
                        _b = this;
                        return [4 /*yield*/, _policy__WEBPACK_IMPORTED_MODULE_5__["default"].methods.getBeneficiaries().call()];
                    case 2:
                        _b.beneficiaries = _c.sent();
                        console.log('Function getBeneficiaries() = ' + this.beneficiaries);
                        return [2 /*return*/];
                }
            });
        });
    };
    HealthCareComponent.prototype.ngAfterContentInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, _report__WEBPACK_IMPORTED_MODULE_4__["default"].methods.manager().call()];
                    case 1:
                        _a.manager = _f.sent();
                        console.log('This contract is managed by = ' + this.manager);
                        console.log('This contract is managed by (BlockchainService) = ' + this.blockchainService.manager);
                        _b = this;
                        return [4 /*yield*/, _report__WEBPACK_IMPORTED_MODULE_4__["default"].methods.getPlayers().call()];
                    case 2:
                        _b.players = _f.sent();
                        console.log('Function getPlayers() = ' + this.players);
                        console.log('Function getReportsCount() to display list array of  Reports = ' + this.reportList);
                        _c = this;
                        return [4 /*yield*/, _report__WEBPACK_IMPORTED_MODULE_4__["default"].methods.getReportsCount().call()];
                    case 3:
                        _c.reportCount = _f.sent();
                        console.log('Function getReportsCount() works, Type reportCount = ' + this.reportCount);
                        _d = this;
                        return [4 /*yield*/, _report__WEBPACK_IMPORTED_MODULE_4__["default"].methods.getReports().call()];
                    case 4:
                        _d.reportStruct = _f.sent();
                        this.blockchainService.nextMessage(this.reportStruct);
                        console.log('Report struct from BlockchainService = ' + this.blockchainService.getReportStruct());
                        console.log('Report struct = ' + this.reportStruct);
                        console.log('Report struct one whole item = ' + this.reportStruct[0]);
                        console.log('Function createReport is called and = ' + this.reports);
                        _e = this;
                        return [4 /*yield*/, _report__WEBPACK_IMPORTED_MODULE_4__["default"].methods.getReportsCount().call()];
                    case 5:
                        _e.reportCount = _f.sent();
                        console.log(this.reportCount - 1);
                        console.log('Report struct meansofDeath = ' + this.reportStruct[this.reportCount - 1].meansOfDeath);
                        return [2 /*return*/];
                }
            });
        });
    };
    HealthCareComponent.ctorParameters = function () { return [
        { type: _blockchain_service__WEBPACK_IMPORTED_MODULE_6__["BlockchainService"] }
    ]; };
    HealthCareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-health-care',
            template: _raw_loader_health_care_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            providers: [_blockchain_service__WEBPACK_IMPORTED_MODULE_6__["BlockchainService"]],
            styles: [_health_care_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_blockchain_service__WEBPACK_IMPORTED_MODULE_6__["BlockchainService"]])
    ], HealthCareComponent);
    return HealthCareComponent;
}());



/***/ }),

/***/ "n7sk":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n    background-color: #6667AB !important;\r\n\r\n}\r\n\r\n\r\n.logo {\r\n    display: grid;\r\n    height: 50vh;\r\n    margin: 0px;\r\n    grid-template-rows: auto auto;\r\n    background-size: cover;\r\n    border-radius: 25px 20px 0px 0px;\r\n    background-position: center;\r\n\r\n    background-image: url('decentrelife-logo.svg');\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-color: #6667AB;\r\n\r\n}\r\n\r\n\r\n.container {\r\n    display: grid;\r\n    height: 50vh;\r\n    margin: 0px;\r\n    background-color: white; \r\n    background-size: cover;\r\n    border-radius: 25px 25px 0px 0px;\r\n}\r\n\r\n\r\n.connect-your-wallet {\r\n    vertical-align: top;\r\n    font-weight: bold;\r\n    color: #6667AB;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    top: -50px;\r\n    position: relative;\r\n\r\n}\r\n\r\n\r\n.metamask-button {\r\n    background-color: transparent;\r\n    border: none;\r\n    top: -80px;\r\n    position: relative;\r\n}\r\n\r\n\r\n.metamask-button:hover {\r\n    background-color: lightgrey;\r\n  }\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7O0FBRXhDOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLDJCQUEyQjs7SUFFM0IsOENBQTZEO0lBQzdELDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIseUJBQXlCOztBQUU3Qjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGdDQUFnQztBQUNwQzs7O0FBR0E7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7O0FBRXRCOzs7QUFHQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSwyQkFBMkI7RUFDN0IiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjdBQiAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuXHJcbi5sb2dvIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjBweCAwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2RlY2VudHJlbGlmZS1sb2dvLnN2Zyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjdBQjtcclxuXHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwcHggMHB4O1xyXG59XHJcblxyXG5cclxuLmNvbm5lY3QteW91ci13YWxsZXQge1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM2NjY3QUI7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxufVxyXG5cclxuXHJcbi5tZXRhbWFzay1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0b3A6IC04MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWV0YW1hc2stYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICB9XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "ozzT":
/*!********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.service.ts ***!
  \********************************************************/
/*! exports provided: ShoppingListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListService", function() { return ShoppingListService; });
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ingredient.model */ "9rNa");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");


var ShoppingListService = /** @class */ (function () {
    function ShoppingListService() {
        this.ingredientsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.ingredients = [
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__["Ingredient"]('Apples', 5),
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__["Ingredient"]('Tomatoes', 10),
        ];
    }
    ShoppingListService.prototype.getIngredients = function () {
        return this.ingredients.slice();
    };
    ;
    ShoppingListService.prototype.getIngredient = function (index) {
        return this.ingredients[index];
    };
    ShoppingListService.prototype.addIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.addIngredients = function (ingredients) {
        var _a;
        (_a = this.ingredients).push.apply(_a, ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.updateIngredient = function (index, newIngredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.deleteIngredient = function (index) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    return ShoppingListService;
}());



/***/ }),

/***/ "pH56":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var _raw_loader_recipe_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./recipe-list.component.html */ "OF5Z");
/* harmony import */ var _recipe_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-list.component.css */ "4JH1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recipe.service */ "ceC1");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent(recipeService, router, route) {
        this.recipeService = recipeService;
        this.router = router;
        this.route = route;
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        this.recipes = this.recipeService.getRecipes();
    };
    RecipeListComponent.prototype.onNewRecipe = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    RecipeListComponent.ctorParameters = function () { return [
        { type: _recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    RecipeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-recipe-list',
            template: _raw_loader_recipe_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_recipe_list_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RecipeListComponent);
    return RecipeListComponent;
}());



/***/ }),

/***/ "rrL4":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/health-care/health-care.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <h2>Life Insurance Policy Contract</h2>\n<p>This contract is managed by {{ manager }}. The beneficiaries of this Life Insurance policy are:</p>\n<li> {{beneficiaries[0]}}</li>\n<li> {{beneficiaries[1]}}</li>\n<hr>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <form (ngSubmit)=\"onEnter(p)\" #p=\"ngForm\">\n                <div id=\"user-data\">\n                    <div class=\"form-group\">\n                        <label for=\"amount\">Amount = {{balance}} Ether</label>\n                        <input \n                        type=\"text\"\n                        id=\"amount\"\n                        class=\"form-control\"\n                        ngModel\n                        name=\"amount\">\n                    </div>\n                    <button class=\"btn btn-primary\" type=\"submit\" style='margin-right:16px'>Enter Amount</button>\n                    <button class=\"btn btn-default\" type=\"button\" style='margin-right:16px' (click)=\"payBeneficiaries()\">Pay Beneficiaries</button>\n\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n<br> <br> <br> -->\n\n<h2>Death Certificate Smart Contract</h2>\n<p>A lump-sum pay-out will be made to the beneficiaries if the \"Means of death\" is not \"Undetermined\"</p>\n\n<hr>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <form (ngSubmit)=\"onSubmit(r)\" #r=\"ngForm\">\n                <div id=\"user-data\">\n                    <div class=\"form-group\">\n                        <label for=\"name\">Name</label>\n                        <input \n                        type=\"text\"\n                        id=\"name\"\n                        class=\"form-control\"\n                        ngModel\n                        name=\"name\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"dateOfDeath\">Date of death</label>\n                        <input \n                        type=\"date\"\n                        id=\"dateOfDeath\"\n                        class=\"form-control\"\n                        ngModel\n                        name=\"dateOfDeath\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"timeOfDeath\">Time of death</label>\n                        <input \n                        type=\"time\"\n                        id=\"timeOfDeath\"\n                        class=\"form-control\"\n                        ngModel\n                        name=\"timeOfDeath\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"placeOfDeath\">Place of death (name of facility or location)</label>\n                        <input \n                        type=\"text\"\n                        id=\"placeOfDeath\"\n                        class=\"form-control\"\n                        ngModel\n                        name=\"placeOfDeath\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"city\">City</label>\n                        <input \n                        type=\"text\"\n                        id=\"city\"\n                        class=\"form-control\"\n                        ngModel\n                        name=\"city\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"postalCode\">Postal code</label>\n                        <input \n                        type=\"text\"\n                        id=\"postalCode\"\n                        class=\"form-control\"\n                        ngModel\n                        name=\"postalCode\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"country\">Country</label>\n                        <input \n                        type=\"text\"\n                        id=\"country\"\n                        class=\"form-control\"\n                        ngModel\n                        name=\"country\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"province\">Province</label>\n                        <input \n                        type=\"text\"\n                        id=\"province\"\n                        class=\"form-control\"\n                        ngModel\n                        name=\"province\">\n                    </div>\n                    <!-- <div class=\"form-group\">\n                        <label for=\"medicalCauseOfDeath\">Medical cause of death</label><br>\n                        <div>\n                            <input type=\"radio\" id=\"heartDisease\" value=\"heartDisease\" name=\"medicalCauseOfDeath\" ngModel>\n                            <label for=\"heartDisease\">Heart Disease</label>\n                        </div>\n                        <div>\n                            <input type=\"radio\" id=\"cancer\" value=\"cancer\" name=\"medicalCauseOfDeath\" ngModel>\n                            <label for=\"cancer\">Cancer</label>\n                        </div>\n                        <div>\n                            <input type=\"radio\" id=\"covid19\" value=\"covid19\" name=\"medicalCauseOfDeath\" ngModel>\n                            <label for=\"covid19\">COVID-19</label>\n                        </div>\n                        <div>\n                            <input type=\"radio\" id=\"accident\" value=\"accident\" name=\"medicalCauseOfDeath\" ngModel>\n                            <label for=\"accident\">Accident</label>\n                        </div>\n                        <div>\n                            <input type=\"radio\" id=\"drowning\" value=\"drowning\" name=\"medicalCauseOfDeath\" ngModel>\n                            <label for=\"drowning\">Drowning</label>\n                        </div>\n                    </div> -->\n                    <div class=\"form-group\">\n                        <label for=\"medicalCauseOfDeaths\">Medical cause of death</label><br>\n                        <select name=\"medicalCauseOfDeaths\" id=\"medicalCauseOfDeaths\" ngModel>\n                            <option *ngFor=\"let medicalCause of medicalCauses\" value={{medicalCause}}>{{medicalCause}}</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"meansOfDeath\">Means of death</label><br>\n                        <select name=\"meansOfDeaths\" id=\"meansOfDeaths\" ngModel>\n                            <option *ngFor=\"let meansOfDeath of meansOfDeaths\" value={{meansOfDeath}}>{{meansOfDeath}}</option>\n                        </select>\n                    </div> <br>\n                    <!-- <div class=\"form-group\">\n                        <label for=\"medical-cause-of-death\">Medical cause of death</label>\n                        <input \n                        type=\"text\"\n                        id=\"medical-cause-of-death\"\n                        class=\"form-control\"\n                        ngModel\n                        name=\"medical-cause-of-death\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"means-of-death\">Means of death</label>\n                        <input \n                        type=\"text\"\n                        id=\"means-of-death\"\n                        class=\"form-control\"\n                        ngModel\n                        name=\"means-of-death\">\n                    </div> -->\n                    <button [disabled]=\"isLoading\" class=\"btn btn-primary\" type=\"submit\" style='margin-right:16px'>\n                        <img *ngIf=\"isLoading\" width=\"20px\" src=\"../../assets/img/spinner.gif\"/> Submit</button>\n                        <br><div *ngIf=\"isSuccess\" class=\"alert alert-success\">\n                            <strong>Success!</strong> Ethereum has been paid-out to beneficiaries. \n                          </div>\n                          <br><div *ngIf=\"isError\" class=\"alert alert-danger\">\n                            <strong>Warning!</strong> Ethereum has not been paid-out to beneficiaries as 'Means of Death' was 'Undetermined'. \n                          </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n<br> <br> <br>");

/***/ }),

/***/ "uq+n":
/*!***********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wcGluZy1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "vKZt":
/*!**********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var _raw_loader_shopping_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./shopping-list.component.html */ "06FS");
/* harmony import */ var _shopping_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-list.component.css */ "uq+n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-list.service */ "ozzT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShoppingListComponent = /** @class */ (function () {
    function ShoppingListComponent(slService) {
        this.slService = slService;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ingredients = this.slService.getIngredients();
        this.igChangeSub = this.slService.ingredientsChanged
            .subscribe(function (ingredients) {
            _this.ingredients = ingredients;
        });
    };
    ShoppingListComponent.prototype.onEditItem = function (index) {
        this.slService.startedEditing.next(index);
    };
    ShoppingListComponent.prototype.ngOnDestroy = function () {
        this.igChangeSub.unsubscribe();
    };
    ShoppingListComponent.ctorParameters = function () { return [
        { type: _shopping_list_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingListService"] }
    ]; };
    ShoppingListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-shopping-list',
            template: _raw_loader_shopping_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_shopping_list_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_shopping_list_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingListService"]])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _health_care_health_care_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./health-care/health-care.component */ "l5Jd");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _insurance_insurance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./insurance/insurance.component */ "+zU0");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes/recipe-detail/recipe-detail.component */ "vpfn");
/* harmony import */ var _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes/recipe-edit/recipe-edit.component */ "wn/g");
/* harmony import */ var _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipes/recipe-start/recipe-start.component */ "JI/q");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipes/recipes.component */ "juFZ");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "vKZt");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'recipes', component: _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_9__["RecipesComponent"], children: [
            { path: '', component: _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_8__["RecipeStartComponent"] },
            { path: 'new', component: _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__["RecipeEditComponent"] },
            { path: ':id', component: _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_6__["RecipeDetailComponent"] },
            { path: ':id/edit', component: _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__["RecipeEditComponent"] },
        ] },
    { path: 'shopping-list', component: _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_10__["ShoppingListComponent"] },
    { path: 'insurance', component: _insurance_insurance_component__WEBPACK_IMPORTED_MODULE_4__["InsuranceComponent"] },
    { path: 'health-care', component: _health_care_health_care_component__WEBPACK_IMPORTED_MODULE_2__["HealthCareComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "vpfn":
/*!******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var _raw_loader_recipe_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./recipe-detail.component.html */ "kxD1");
/* harmony import */ var _recipe_detail_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-detail.component.css */ "iBH0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recipe.service */ "ceC1");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipeDetailComponent = /** @class */ (function () {
    function RecipeDetailComponent(recipeService, route, router) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.recipe = _this.recipeService.getRecipe(_this.id);
        });
    };
    RecipeDetailComponent.prototype.onAddToShoppingList = function () {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    };
    RecipeDetailComponent.prototype.onEditRecipe = function () {
        this.router.navigate(['edit'], { relativeTo: this.route });
    };
    RecipeDetailComponent.ctorParameters = function () { return [
        { type: _recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    RecipeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-recipe-detail',
            template: _raw_loader_recipe_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_recipe_detail_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());



/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "in5m");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.css */ "n7sk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web3 */ "8v0y");
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @metamask/detect-provider */ "TEHo");
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blockchain.service */ "AKdi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(blockchainService) {
        this.blockchainService = blockchainService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onConnectMetamask = function () {
        return __awaiter(this, void 0, void 0, function () {
            var provider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Web3 version = ' + _web3__WEBPACK_IMPORTED_MODULE_3__["default"].version);
                        _web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getAccounts().then(console.log);
                        return [4 /*yield*/, _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_4___default()()];
                    case 1:
                        provider = _a.sent();
                        console.log("detectEthereumProvider() is working, and = " + provider);
                        console.log(window.ethereum);
                        return [4 /*yield*/, _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_4___default()()
                            // return await ethereum.request({ method: 'eth_requestAccounts' });
                        ];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _blockchain_service__WEBPACK_IMPORTED_MODULE_5__["BlockchainService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_blockchain_service__WEBPACK_IMPORTED_MODULE_5__["BlockchainService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "wn/g":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEditComponent", function() { return RecipeEditComponent; });
/* harmony import */ var _raw_loader_recipe_edit_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./recipe-edit.component.html */ "auR4");
/* harmony import */ var _recipe_edit_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-edit.component.css */ "cmNj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recipe.service */ "ceC1");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RecipeEditComponent = /** @class */ (function () {
    function RecipeEditComponent(route, recipeService) {
        this.route = route;
        this.recipeService = recipeService;
        this.editMode = false;
    }
    RecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            _this.initForm();
        });
    };
    RecipeEditComponent.prototype.onSubmit = function () {
        console.log(this.recipeForm);
    };
    RecipeEditComponent.prototype.onAddIngredient = function () {
        this.recipeForm.get('ingredients').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
        }));
    };
    RecipeEditComponent.prototype.initForm = function () {
        var recipeName = '';
        var recipeImagePath = '';
        var recipeDesciprtion = '';
        var recipeIngredients = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]);
        if (this.editMode) {
            var recipe = this.recipeService.getRecipe(this.id);
            recipeName = recipe.name;
            recipeImagePath = recipe.imagePath;
            recipeDesciprtion = recipe.description;
            if (recipe['ingredients']) {
                for (var _i = 0, _a = recipe.ingredients; _i < _a.length; _i++) {
                    var ingredient = _a[_i];
                    recipeIngredients.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ingredient.name),
                        'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ingredient.amount)
                    }));
                }
            }
        }
        this.recipeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeName),
            'imagePath': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeImagePath),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeDesciprtion),
            'ingredients': recipeIngredients
        });
    };
    RecipeEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _recipe_service__WEBPACK_IMPORTED_MODULE_5__["RecipeService"] }
    ]; };
    RecipeEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-recipe-edit',
            template: _raw_loader_recipe_edit_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_recipe_edit_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _recipe_service__WEBPACK_IMPORTED_MODULE_5__["RecipeService"]])
    ], RecipeEditComponent);
    return RecipeEditComponent;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "zpyO":
/*!***********************************************!*\
  !*** ./src/app/recipes/recipes.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map