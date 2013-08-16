;(function($){
    $.fn.typeLengthChecker = function() {
        "use strict";

        var LENGTH_MIN = 40,
        LENGTH_MAX = 80,
        DEBUG = false,
        FONT_SIZE_MAX = 100,
        FONT_SIZE_MIN = 10;

        $(this).on('mouseover', function(e){
            e.preventDefault();
            e.stopImmediatePropagation();
            $(this).find('.checker-tooltip').clearQueue().show();
        }).on('mouseout', function(e){
            e.preventDefault();
            e.stopImmediatePropagation();
            $(this).find('.checker-tooltip').clearQueue().hide();
        });

        $(this).each(function(k, block){
            var _block = $(block),
            block_text = _block.text(),
            char_count = block_text.length,
            word_count = block_text.split(' ').length,
            container_height = _block.height(),
            font_size = parseInt(_block.css('font-size').replace('px', ''), 10),
            line_height = parseInt(_block.css('line-height').replace('px', ''), 10),
            number_of_lines = Math.round(container_height / line_height),
            chars_per_line = Math.round(char_count / number_of_lines),
            indicator = '<span class="checker-tooltip"><strong>' + word_count + '</strong> words, totalling <strong>' + char_count + '</strong> characters, across <strong>' + number_of_lines + '</strong> lines. Average characters per line: <strong>' + chars_per_line + '</strong></span>';

            // remove element, reappend
            _block.find('.checker-tooltip').remove();
            _block.append(indicator);

            if(chars_per_line <= LENGTH_MIN || chars_per_line >= LENGTH_MAX) {
                if(DEBUG) {
                    console.log(chars_per_line + ' / ' + LENGTH_MIN);
                }

                // check for subtle deviations and grade based on how far away it is from the range, so it's not so extreme.
                if(chars_per_line + 5 <= LENGTH_MIN || chars_per_line - 5 >= LENGTH_MAX) {
                    _block.css('color', 'orange');
                    if(DEBUG) {
                        console.log('%c slightly off...', 'color:orange');
                    }
                } else if(chars_per_line + 10 <= LENGTH_MIN || chars_per_line - 10 >= LENGTH_MAX) {
                    _block.css('color', 'red');
                    if(DEBUG) {
                        console.log('%c really really far off...', 'color:red');
                    }
                } else if(font_size <= FONT_SIZE_MIN || font_size >= FONT_SIZE_MAX) {
                    _block.css('color', 'red');
                    if(DEBUG) {
                        console.log('%c Font size is way too large or too small', 'color:red');
                    }
                } else {
                    _block.css('color','green').find('.checker-tooltip').remove();
                    if(DEBUG) {
                        console.log('%c perfect!', 'color:green');
                    }
                }
            } else {
                _block.css('color','green').find('.checker-tooltip').remove();
                if(DEBUG) {
                    console.log('%c perfect!', 'color:green');
                }
            }
        });
};
})(jQuery);
