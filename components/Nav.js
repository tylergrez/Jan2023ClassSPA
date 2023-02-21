import html from "html-literal";

export default (links) => html`<nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
    ${links.map(
        (link) =>
          `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>` // title = page view and text = link presentation on page //
      ).join("")}
    <!-- <li><a href="index.html">Home</a></li>
      <li><a href="bio.html">Bio</a></li>
      <li><a href= "pizza.html">Pizza</a></li>
      <li><a href= "order.html">Order</a></li> -->
    </ul>
  </nav>`;
// one-line command to export the anonymous function, the "html" in front of the literal simply allows us to view
// the code as HTML rather than blanket burnt orange color
// the () establishes an anonymous function to be called in index.js
