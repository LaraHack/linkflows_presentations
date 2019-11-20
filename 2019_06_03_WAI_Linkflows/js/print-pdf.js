// Printing and PDF exports
// Usage: append to link and then CTRL+P
// ?print-pdf#/
// ?print-pdf&showNotes=true#/

var link = document.createElement( 'link' );
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = window.location.search.match( /print-pdf/gi ) ? 'css/print/pdf.css' : 'css/print/paper.css';
document.getElementsByTagName( 'head' )[0].appendChild( link );
