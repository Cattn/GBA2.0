const config = {
    author: 'Cattn',
    name: 'Display Module',
    description: 'This module displays other modules.',
    files: ['*']
};

// Imported Modules:
import { Module } from './modulemanager.js';

// Display Module
export class ModuleDisplay {
  constructor() {
    this.config = config;
  }

}
