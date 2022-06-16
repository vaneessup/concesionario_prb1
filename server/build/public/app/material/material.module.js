"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialModule = void 0;
const core_1 = require("@angular/core");
//MODULOS DE ANGULAR MATERIAL
const sidenav_1 = require("@angular/material/sidenav");
const toolbar_1 = require("@angular/material/toolbar");
const button_1 = require("@angular/material/button");
const icon_1 = require("@angular/material/icon");
const list_1 = require("@angular/material/list");
const table_1 = require("@angular/material/table");
const card_1 = require("@angular/material/card");
const dialog_1 = require("@angular/material/dialog");
const forms_1 = require("@angular/forms");
const form_field_1 = require("@angular/material/form-field");
const select_1 = require("@angular/material/select");
const input_1 = require("@angular/material/input");
const snack_bar_1 = require("@angular/material/snack-bar");
let MaterialModule = class MaterialModule {
};
MaterialModule = __decorate([
    (0, core_1.NgModule)({
        exports: [
            sidenav_1.MatSidenavModule,
            toolbar_1.MatToolbarModule,
            button_1.MatButtonModule,
            list_1.MatListModule,
            icon_1.MatIconModule,
            card_1.MatCardModule,
            dialog_1.MatDialogModule,
            forms_1.FormsModule,
            form_field_1.MatFormFieldModule,
            select_1.MatSelectModule,
            table_1.MatTableModule,
            forms_1.ReactiveFormsModule,
            snack_bar_1.MatSnackBarModule,
            input_1.MatInputModule
        ]
    })
], MaterialModule);
exports.MaterialModule = MaterialModule;
