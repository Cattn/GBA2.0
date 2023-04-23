// Imported Modules:
import { Module } from "../../modules/modulemanager.js";
import { ModuleDisplay } from "../../modules/display.js";

let modules = [];

let moduleShow = document.getElementById("moduleDislpay");

let moduleManager = new Module();
let moduleDisplay = new ModuleDisplay();
console.log(moduleManager.checkAccess("/main/modules/modulemanager.js"));