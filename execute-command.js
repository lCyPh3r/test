window.onload = function() {
    if (opener) {
        opener.location = `alert(1)`;
    } else {
        console.error('No opener found');
    }
};
