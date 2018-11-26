'use strict';

module.exports = function () {
    $.gulp.task('sprite:vender', function() {
        var spriteData = $.gulp.src('./source/images/*.png').pipe($.gp.spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.scss'
          }));
          var image = spriteData.img
          .pipe($.gulp.dest('./source/images'));

          var styles = spriteData.css
          .pipe($.gulp.dest('./source/style/common'));

        return spriteData;
    });
}