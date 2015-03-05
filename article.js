$(function() {
    var referenceLinks = {};

    var references = $('#references li');

    references.each(function(i) {
        $(this).find('a[href]').each(function() {
            referenceLinks[this.href] = i;
        });
    });

    $('#main a').each(function() {
        if (typeof referenceLinks[this.href] == 'undefined') {
            return;
        }

        var referenceIndex = referenceLinks[this.href];

        $(this)/*.wrap('<sup/>')*/.popover({
            trigger: 'hover',
            html: true,
            container: 'body',
            content: function() {
                return references.eq(referenceIndex).html();
            }
        });

        this.elementHeight;
    });
});
