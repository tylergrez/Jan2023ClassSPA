import html from "html-literal";

export default () => html`<section id="jumbotron">
    <h2>SavvyCoders JavaScript Fullstack Bootcamp</h2>
    <a href="index.html">"Call to Action" "Button"</a>
  </section>`;
// one-line command to export the anonymous function, the "html" in front of the literal simply allows us to view
// the code as HTML rather than blanket burnt orange color
// the () establishes an anonymous function to be called in index.js

import * as views from "./views";
// using the * to bring all exports from the views index.js

export default (state) => html`
${views[state.view](state)}
${views['Home']()}
`;


<!-- // ${views["Home"]()},
// ${views["Bio"]()},
// ${views["Pizza"]()},
// ${views["Order"]()} --> // by using the above template literals, the links are now dynamic based on
// the state provided in root index.js and then accessing the views object from the views folder
