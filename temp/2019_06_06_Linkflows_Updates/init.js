// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
Reveal.initialize({
  // Display presentation control arrows
  controls: true,

  // Display a presentation progress bar
  progress: true,

  // Display the page number of the current slide
	slideNumber: true,

  // Push each slide change to the browser history
  history: true,

  // Enable the slide overview mode
	overview: true,

  // Vertical centering of slides
  center: true,

  // Turns fragments on and off globally
	fragments: true,

  // Flags if speaker notes should be visible to all viewers
	showNotes: false,

  // Transition style
  transition: 'slide', // none/fade/slide/convex/concave/zoom

  dependencies: [
    // Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
		{ src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },

		// Interpret Markdown in <section> elements
		{ src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },

		// Syntax highlight for <code> elements
		{ src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },

		// Zoom in and out with Alt+click
		{ src: 'plugin/zoom-js/zoom.js', async: true },

		// Speaker notes
		{ src: 'plugin/notes/notes.js', async: true }
  ]
});
