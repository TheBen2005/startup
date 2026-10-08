# What I have learned

## Startup HTML
* UTF-8 is a dictionary used by the computer to convert numbers into letters
* meta name="viewport" content="width=device-width, initial-scale=1.0"  is used to make screens fit to phones and computers
* Head is infromation used for the Browser while the body contains the contents of the browser
* Learned use cases for each of the HTML elements.
* Deeper understanding of use and purpose of HTML
* IMPORTANT: The most important thing I learned and to remember about HTML, is HTML is used simply to establish the hierarchy of the page and define what each element is. When deciding what HTML element to use, never make formatting and styling factor into that decision. That is a mistake I repeatedly made at the start of this unit.

## Startup CSS
* IMPORTANT: HTML was used to establish hierarchy and state what each element is while CSS is used for styling and layout.
* I learned how to incorporate CSS into my application and how to use various bootstrap classes
* The order that the CSS classes are loaded into the page is very significant. If classes from either main, bootstrap or the specific CSS page affect an element, the CSS class that was loaded last wins. However if a class uses a more specific styling on an element such as hover: It wins regardless of the ordering.
* My thought process when applying CSS. Does this element need a design or does it just influence layout of children? Then is this styling going to be used site wide? If so go to main.css if not go to the specific pages CSS. Next, is there a bootstrap class that already exists for what I am designing like a button for example? Or should I make this from scratch?

## Startup React P1: Routing
* I learned how to switch my appplication from rendering different components depending on the URL path on a single page rather than having an HTML document for each of my pages. I can already notice the difference in speed. 
* I learned about CSS leakage. When all imports are imported through app.jsx, every component used the CSS from every page making some pages designs intercept parts of designs of other pages. I fixed this by wrapping all of the main elements in each component with a class and sepcifying each CSS class to be under the correct main class.
* Node.js allows javascript to run on my computer instead of just the browser, vite turns my code into code that can be understood by the browser
* I also learned the basics of react. The main things to remember right now are components (reusable chunks of JSX) and state (what react components to use to rerender the component and update the UI)