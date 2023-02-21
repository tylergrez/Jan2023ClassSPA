export { default as Header } from "./Header";
// this is a one line export and import statement, we are importing into this index.js with the {} then exporting again
// with the export statement that leads the expression
export { default as Footer } from "./Footer";
export { default as Main } from "./Main";
export { default as Nav } from "./Nav";
// index.js acts an aggregator of the other modules where the HTML code lies (only for the main components of every page)
// like header, footer, nav, and main
