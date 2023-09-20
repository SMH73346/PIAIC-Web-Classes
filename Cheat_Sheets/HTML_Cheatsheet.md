# Ultimate HTML Cheatsheet: Copy & Interact Now!

## Boilerplate

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <!-- Body -->
</body>
</html>
```

## Headings

There are six headings available in HTML, `<h1>` is the largest among all, and `<h6>` is the smallest.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

## Container

Container tags are the tags that contain some data such as text, image, etc. There are several container tags in HTML.

- **div tag**: The div tag or division tag is used to make blocks or divisions in the document.

  ```html
  <div> This is div block </div>
  ```

- **span tag**: The span is a container for inline content

  ```html
  <span> This is span block </span>
  ```

- **p tag**: The p tag is used to create a paragraph in HTML

  ```html
  <p> This is a paragraph </p>
  ```

- **pre tag**: The pre tag represents pre-formatted text

  ```html
  <pre> Hello World </pre>
  ```

- **code tag**: The code tag is used to represent source codes in HTML

  ```html
  <code>
  import python
  </code>
  ```

## Text Formatting

Text formatting tags are used to format text or data in HTML documents. You can do certain things like creating italic, bold, and strong text to make your document look more attractive and understandable.

- `<b>` tag: I'm bold text
  ```html
  <b>I'm bold text</b>
  ```

- `<strong>` tag: I'm important text
  ```html
  <strong>I'm important text</strong>
  ```

- `<i>` tag: I'm italic text
  ```html
  <i>I'm italic text</i>
  ```

- `<em>` tag: Emphasized text
  ```html
  <em>Emphasized text</em>
  ```

- `<sub>` tag: Subscript
  ```html
  <sub>Subscript</sub>
  ```

- `<sup>` tag: Superscript
  ```html
  <sup>Superscript</sup>
  ```

## Lists

Lists can be either numerical, alphabetic, bullet, or other symbols. You can specify list type and list items in HTML for a clean document.

- **ol tag**: The ordered list starts with `<ol>` tag and each list item starts with an `<li>` tag

  ```html
  <ol>
      <li>Data 1</li>
      <li>Data 2</li>
      <li>Data 3</li>
  </ol>
  ```

- **ul tag**:

  ```html
  <ul>
      <li>Your Data</li>
      <li>Your Data</li>
  </ul>
  ```

## Media

Media is anything that is present in digital form such as image, video, audio, etc.

- **audio tag**: It is used to embed sound content in the document.

  ```html
  <audio controls>
      <source src="demo.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
  </audio>
  ```

- **img tag**: It is used to embed or import images in a webpage.

  ```html
  <img src="Source_of_image" alt="Alternate text">
  ```

- **video tag**: It is used to embed videos on a webpage.

  ```html
  <video width="480" height="320" controls>
      <source src="demo_move.mp4" type="video/mp4">
      Your browser does not support the video tag.
  </video>
  ```

## Table

A table is a collection of rows and columns. It is used to represent data in tabular form.

- **Table Structure**:

  ```html
  <table>
      <caption>Demo Table</caption>
      <thead>
          <tr>
              <th>Column1</th>
              <th colspan="2">Column2</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Data1</td>
              <td>Data2</td>
              <td>Data2</td>
          </tr>
          <tr>
              <td>Data1</td>
              <td>Data2</td>
              <td>Data2</td>
          </tr>
      </tbody>
      <tfoot>
          <tr>
              <td>&nbsp;</td>
              <td>Data</td>
              <td>Data</td>
          </tr>
      </tfoot>
  </table>
  ```

## Links

Links are clickable text that can redirect you to some other page.

- **a tag**: `<a>` or anchor tag defines a hyperlink. When clicked, it takes you to some other page

  ```html
  <a href="https://www.codewithharry.com/">Visit CodeWithHarry.com!</a>
  ```

## Form

The form is used to collect the user's input, generally, the user's data is sent to the server for further processing.

```html
<form action="/action.php" method="post"> 
    <textarea cols="20" name="comments" rows="5">Comment</textarea><br />
    <label><input name="terms" type="checkbox" value="tandc" />Accept terms</label> <br />
    <input type="submit" value="Submit" />
</form>
```

## Form Elements

We use various input types and buttons inside a form as form elements

- **Text Input**

  ```html
  <input type="text" name="username" placeholder="Enter Username">
  ```

- **Password Input**

  ```html
  <input type="password" name="password" placeholder="Enter Password">
  ```

- **Checkbox**

  ```html
  <input type="checkbox" name="agree" value="yes"> I agree
  ```

- **Radio Button**

  ```html
  <input type="radio" name="gender" value="male"> Male<br><input type="radio" name="gender" value="female"> Female
  ```

- **Submit Button**

  ```html
  <input type="submit" value="Submit">
  ```

- **Button**

  ```html
  <button type="button">Click Me</button>
  ```

- **Select (Dropdown) List**

  ```html
  <select name="country">
      <option value="usa">United States</option>
      <option value="canada">Canada</option>
  </select>
  ```

- **Textarea**

 

 ```html
  <textarea name="comments" rows="4" cols="50">Enter comments here</textarea>
  ```

- **File Input**

  ```html
  <input type="file" name="fileupload">
  ```

- **Range Input**

  ```html
  <input type="range" name="volume" min="0" max="100">
  ```

- **Number Input**

  ```html
  <input type="number" name="quantity" min="1" max="10">
  ```

- **Email Input**

  ```html
  <input type="email" name="email" placeholder="Enter Email">
  ```

- **Search Input**

  ```html
  <input type="search" name="query" placeholder="Search">
  ```

- **URL Input**

  ```html
  <input type="url" name="website" placeholder="Enter URL">
  ```

- **Date Input**

  ```html
  <input type="date" name="birthdate">
  ```

## Characters & Symbols

Some symbols are not directly present on the keyboard, but there are some ways to use them in HTML documents. We can display them either by entity name, decimal, or hexadecimal value.

- Copyright Symbol (©): `&copy;`
- Less than (<): `&lt;`
- Greater than (>): `&gt;`
- Ampersand (&): `&amp;`
- Dollar ($): `&dollar;`

## Random Text

Elon Musk
Elon Reeve Musk FRS is an entrepreneur and business magnate. He is the founder, CEO, and Chief Engineer at SpaceX; early stage investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI. A centibillionaire, Musk is one of the richest people in the world.

## Semantic Elements

Semantic elements are those that convey their meaning and purpose clearly through their name alone.

- **section tag**: It defines a section in the document

  ```html
  <section>This is a section</section>
  ```

- **article tag**: It represents self-contained content

  ```html
  <article> Enter your data here </article>
  ```

- **aside tag**: It is used to place content in the sidebar

  ```html
  <aside> Your data </aside>
  ```

## Meta Tags

Meta tags define metadata about the document, such as author, description, and keywords.

```html
<meta name="description" content="This is a description of the page">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="author" content="Author Name">
```

## CSS Integration

CSS integration can be done to style our HTML document using internal or external CSS.

```html
<style>
  body { background-color: lightblue; }
</style>

<link rel="stylesheet" type="text/css" href="styles.css">
```

## Accessibility

Make your webpage accessible to all users with these best practices.

- Image Accessibility:

  ```html
  <img src="image.jpg" alt="Description of Image">
  ```

- Labeling:

  ```html
  <label for="name">Name:</label> <input type="text" id="name" name="name">
  ```

## Responsive Design

Design your webpage to adapt to different screen sizes using CSS media queries.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>
  @media (max-width: 600px) {
    body { font-size: 18px; }
  }
</style>
```

## JavaScript Integration

Embed JavaScript directly or link to an external file for added functionality.

```html
<script>
  alert('Hello, World!');
</script>

<script src="script.js"></script>
```

## Comments

Comments allow you to leave notes in your code, which are ignored by browsers.

```html
<!-- This is a comment -->
```

## Other Tips for HTML Beginners

1. **Use a Modern Text Editor**: Tools like Visual Studio Code (VS Code) provide syntax highlighting, autocompletion, and other helpful features. VS Code also supports Emmet for faster HTML and CSS coding.

2. **Utilize Emmet**: Emmet is a plugin available in many text editors that allows you to write HTML and CSS more quickly. For example, typing `ul>li*5` and then pressing 'Tab' will create a `<ul>` element with five `<li>` children.

3. **Indent Your Code**: Properly indenting your code makes it more readable. Most modern text editors offer automatic indentation.

4. **Always Close Tags**: Make sure to close all of your HTML tags. This helps to avoid unexpected rendering issues.

5. **Learn CSS and JavaScript**: Understanding CSS and JavaScript can help you create more dynamic and visually appealing websites. Consider studying them alongside HTML.

6. **Use Comments Wisely**: Comments can be helpful for leaving notes and reminders in your code, or for temporarily disabling a section of HTML.

7. **Practice Regularly**: Like any skill, practice makes perfect. Try building different types of web pages to improve your understanding and proficiency in HTML.

8. **Learn about Responsive Design**: Responsive design ensures that your website looks good on all devices. Learning about media queries and flexible grid layouts is essential for modern web development.


**This markdown file can be used as a README.md for showcasing the HTML cheatsheet. Feel free to adjust the formatting or content as needed.**