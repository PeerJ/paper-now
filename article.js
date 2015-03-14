// table style

$(function() {
    $('figure table').addClass('table table-bordered');
});

// references

$(function() {
    var referenceLinks = {};

    var referencesList = $('#references > ul');

    var references = referencesList.find('li');

    references.each(function(i) {
        $(this).find('a[href]').each(function() {
            referenceLinks[this.href] = i;
        });
    });

    // start from the bottom, so the reference list gets re-ordered correctly
    var links = $('#main a').get().reverse();

    $(links).each(function() {
        if (typeof referenceLinks[this.href] == 'undefined') {
            return;
        }

        var referenceIndex = referenceLinks[this.href];

        var reference = references.eq(referenceIndex);

        // move the reference to the top of the list
        referencesList.prepend(reference);

        $(this)/*.wrap('<sup/>')*/.popover({
            trigger: 'hover',
            html: true,
            container: 'body',
            content: function() {
                return reference.html();
            }
        });

        this.elementHeight;
    });
});

// sidebar embeds

$(function() {
    $('#sidebar iframe').each(function() {
        var node = $(this);
        var parent = node.parent();
        var ratio = parent.width() / node.width();
        node.css({
            transform: 'scale(' + ratio + ')',
            transformOrigin: 'top left'
        });
        parent.height(parent.height() * ratio).css('position', 'relative');
        node.css('position', 'absolute');
    });
});
