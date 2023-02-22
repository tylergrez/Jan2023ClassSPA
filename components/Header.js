import html from "html-literal";
export default state => html`
  <header>
    <h1>${state.header}</h1>
  </header>
`;
// one-line command to export the anonymous function, the "html" in front of the literal simply allows us to view
// the code as HTML rather than blanket burnt orange color
// the () establishes an anonymous function to be called in index.js
