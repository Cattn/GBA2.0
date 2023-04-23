// Must list which files they would like access to, * means all.
// Example, { files: ['*'] } means access to all files in the project.
// Example, { files: ['*.js'] } means access to all js files in the project.
// Example, { files: ['*.js', 'main/test.html'] } means access to all js files, and the test.html file in the main folder.
// Also please export the config object.

export const config = {
    author: 'Cattn',
    name: 'Module Manager',
    description: 'This module manages the modules.',
    files: ['/main/modules/modulemanager.js']
};

export class Module {
    constructor() {
        this.config = config;
    }

    checkAccess(current) {
        let files = this.config.files;
        let allowed = false;
        for (let i = 0; i < files.length; i++) {
            if (files[i] == '*') {
                allowed = true;
                return allowed;
            }
            if (current.includes(files[i])) {
                allowed = true;
                return allowed;
            }
        }
        if (!allowed) {
            return allowed;
        }
    }

    getAuthor() {
        return this.config.author;
    }
}