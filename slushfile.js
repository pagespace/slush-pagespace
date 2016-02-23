var gulp = require('gulp'),
    gulpFilter = require('gulp-filter'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    inquirer = require('inquirer');

var filterWithoutImages = gulpFilter(['**/**', '!**/*.png', '!**/*.jpg', '!**/*.ico'], { restore: true });

gulp.task('default', function (done) {
    inquirer.prompt([
            { type: 'input', name: 'name', message: 'Give your new site a name', default: getNameProposal() },
            { type: 'confirm', name: 'moveon', message: 'Continue?'}
        ],
        function (answers) {
            if (!answers.moveon) {
                return done();
            }
            gulp.src(__dirname + '/templates/**')
                .pipe(filterWithoutImages)
                .pipe(template(answers))
                .pipe(filterWithoutImages.restore)
                .pipe(conflict('./'))
                .pipe(gulp.dest('./'))
                .pipe(install())
                .on('end', function () {
                    done();
                })
                .resume();
        });
});

function getNameProposal() {
    var path = require('path');
    try {
        return require(path.join(process.cwd(), 'package.json')).name;
    } catch (e) {
        return path.basename(process.cwd());
    }
}