# CSS Cheatsheet

## Font

There are many properties related to the font, such as the face, weight, style, etc. These properties allow you to change the style or complete look of your text.

- **Font-Family:** `font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;`
- **Font-Style:** `font-style: italic;`
- **Font-Variant:** `font-variant: small-caps;`
- **Font-Weight:** `font-weight: bold;`
- **Font-Size:** `font-size: larger;`
- **Font:** `font: style variant weight size family;`

## Text

Text properties allow one to manipulate alignment, spacing, decoration, indentation, etc., in the document.

- **Text-Align:** `text-align: justify;`
- **Letter-Spacing:** `letter-spacing: .15em;`
- **Text-Decoration:** `text-decoration: underline;`
- **Word-Spacing:** `word-spacing: 0.25em;`
- **Text-Transform:** `text-transform: uppercase;`
- **Text-Indent:** `text-indent: 0.5cm;`
- **Line-Height:** `line-height: normal;`

## Background

As the name suggests, these properties are related to the background, i.e., you can change the color, image, position, size, etc., of the document.

- **Background-Image:** `background-image: url("Path");`
- **Background-Position:** `background-position: right top;`
- **Background-Size:** `background-size: cover;`
- **Background-Repeat:** `background-repeat: no-repeat;`
- **Background-Attachment:** `background-attachment: scroll;`
- **Background-Color:** `background-color: fuchsia;`
- **Background:** `background: color image repeat attachment position;`

## Border

Border properties are used to change the style, radius, color, etc., of buttons or other items of the document.

- **Border-Width:** `border-width: 5px;`
- **Border-Style:** `border-style: solid;`
- **Border-Color:** `border-color: aqua;`
- **Border-Radius:** `border-radius: 15px;`
- **Border:** `border: width style color;`

## Box Model

In laymen's terms, the CSS box model is a container that wraps around every HTML element. It consists of margins, borders, padding, and the actual content. It is used to create the design and layout of web pages.

- **Float:** `float: none;`
- **Clear:** `clear: both;`
- **Display:** `display: block;`
- **Height:** `height: fit-content;`
- **Width:** `width: auto;`
- **Margin:** `margin: top right bottom left;`
- **Padding:** `padding: top right bottom left;`
- **Overflow:** `overflow: hidden;`
- **Visibility:** `visibility: visible;`

## Colors

With the help of the color property, one can give color to text, shape, or any other object.

- **Color:** `color: cornsilk;`
- **Opacity:** `opacity: 4;`

## Template Layout

Specifies the visual look of the content inside a template.

- **Box-Align:** `box-align: start;`
- **Box-Direction:** `box-direction: normal;`
- **Box-Flex:** `box-flex: normal;`
- **Box-Flex-Group:** `box-flex-group: 2;`
- **Box-Orient:** `box-orient: inline;`
- **Box-Pack:** `box-pack: justify;`
- **Box-Sizing:** `box-sizing: margin-box;`
- **Max-Width:** `max-width: 800px;`
- **Min-Width:** `min-width: 500px;`
- **Max-Height:** `max-height: 100px;`
- **Min-Height:** `min-height: 80px;`

## Table

Table properties are used to give style to the tables in the document. You can change many things like border spacing, table layout, caption, etc.

- **Border-Collapse:** `border-collapse: separate;`
- **Empty-Cells:** `empty-cells: show;`
- **Border-Spacing:** `border-spacing: 2px;`
- **Table-Layout:** `table-layout: auto;`
- **Caption-Side:** `caption-side: bottom;`

## Columns

These properties are used explicitly with columns of the tables, and they are used to give the table an incredible look.

- **Column-Count:** `column-count: 10;`
- **Column-Gap:** `column-gap: 5px;`
- **Column-Rule-Width:** `column-rule-width: medium;`
- **Column-Rule-Style:** `column-rule-style: dotted;`
- **Column-Rule-Color:** `column-rule-color: black;`
- **Column-Width:** `column-width: 10px;`
- **Column-Span:** `column-span: all;`

## List & Markers

List and marker properties are used to customize lists in the document.

- **List-Style-Type:** `list-style-type: square;`
- **List-Style-Position:** `list-style-position: 20px;`
- **List-Style-Image:** `list-style-image: url(image.gif);`
- **Marker-Offset:** `marker-offset: auto;`

## Animations

CSS animations allow one to animate transitions or other media files on the web page.

- **Animation-Name:** `animation-name: myanimation;`
- **Animation-Duration:** `animation-duration: 10s;`
- **Animation-Timing-Function:** `animation-timing-function: ease;`
- **Animation-Delay:** `animation-delay: 5ms;`
- **Animation-Iteration-Count:** `animation-iteration-count: 3;`
- **Animation-Direction:** `animation-direction: normal;`
- **Animation-Play-State:** `animation-play-state: running;`
- **Animation-Fill-Mode:** `animation-fill-mode: both;`

## Transitions

Transitions let you define the transition between two states of an element.

- **Transition-Property:** `transition-property: none;`
- **Transition-Duration:** `transition-duration: 2s;`
- **Transition-Timing-Function:** `transition-timing-function: ease-in-out;`
- **Transition-Delay:** `transition-delay: 20ms;`

## CSS Flexbox

Flexbox is a layout of CSS that lets you format HTML easily. Flexbox makes it simple to align items vertically and horizontally using rows and columns. Items will "flex" to different sizes to fill the space. And overall, it makes the responsive design more manageable.

### Parent Properties (flex container)

- **Display:** `display: flex;`
- **Flex-Direction:** `flex-direction: row | row-reverse | column | column-reverse;`
- **Flex-Wrap:** `flex-wrap: nowrap | wrap | wrap-reverse;`
-

 **Flex-Flow:** `flex-flow: column wrap;`
- **Justify-Content:** `justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;`
- **Align-Items:** `align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;`
- **Align-Content:** `align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;`

### Child Properties (flex items)

- **Order:** `order: 5; /* default is 0 */`
- **Flex-Grow:** `flex-grow: 4; /* default 0 */`
- **Flex-Shrink:** `flex-shrink: 3; /* default 1 */`
- **Flex-Basis:** `flex-basis: | auto; /* default auto */`
- **Flex Shorthand:** `flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`
- **Align-Self:** `align-self: auto | flex-start | flex-end | center | baseline | stretch;`

## CSS Grid

Grid layout is a 2-Dimensional grid system to CSS that creates complex responsive web design layouts more easily and consistently across browsers.

### Parent Properties (Grid container)

- **Display:** `display: grid | inline-grid;`
- **Grid-Template-Columns:** `grid-template-columns: 12px 12px 12px;`
- **Grid-Template-Rows:** `grid-template-rows: 8px auto 12px;`
- **Grid-Template:** `grid-template: none | <grid-template-rows> / <grid-template-columns>;`
- **Column-Gap:** `column-gap: <line-size>;`
- **Row-Gap:** `row-gap: <line-size>;`
- **Grid-Column-Gap:** `grid-column-gap: <line-size>;`
- **Grid-Row-Gap:** `grid-row-gap: <line-size>;`
- **Gap Shorthand:** `gap: <grid-row-gap> <grid-column-gap>;`
- **Grid-Gap Shorthand:** `grid-gap: <grid-row-gap> <grid-column-gap>;`
- **Justify-Items:** `justify-items: start | end | center | stretch;`
- **Align-Items:** `align-items: start | end | center | stretch;`
- **Place-Items:** `place-items: center;`
- **Justify-Content:** `justify-content: start | end | center | stretch | space-around | space-between | space-evenly;`
- **Align-Content:** `align-content: start | end | center | stretch | space-around | space-between | space-evenly;`
- **Place-Content:** `place-content: <align-content> / <justify-content>;`
- **Grid-Auto-Columns:** `grid-auto-columns: <track-size> ...;`
- **Grid-Auto-Rows:** `grid-auto-rows: <track-size> ...;`
- **Grid-Auto-Flow:** `grid-auto-flow: row | column | row dense | column dense;`

### Child Properties (Grid items)

- **Grid-Column-Start:** `grid-column-start: <number> | <name> | span <number> | span <name> | auto;`
- **Grid-Column-End:** `grid-column-end: <number> | <name> | span <number> | span <name> | auto;`
- **Grid-Row-Start:** `grid-row-start: <number> | <name> | span <number> | span <name> | auto;`
- **Grid-Row-End:** `grid-row-end: <number> | <name> | span <number> | span <name> | auto;`
- **Grid-Column Shorthand:** `grid-column: <start-line> / <end-line> | <start-line> / span <value>;`
- **Grid-Row Shorthand:** `grid-row: <start-line> / <end-line> | <start-line> / span <value>;`
- **Grid-Area:** `grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;`
- **Justify-Self:** `justify-self: start | end | center | stretch;`
- **Align-Self:** `align-self: start | end | center | stretch;`
- **Place-Self:** `place-self: center;`

---

This Markdown file provides a comprehensive CSS cheatsheet, covering various properties and their usage. Feel free to use it as a quick reference guide.