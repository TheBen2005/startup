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