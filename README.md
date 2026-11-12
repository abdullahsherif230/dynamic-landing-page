# Dynamic Page Project

This project demonstrates a basic dynamic web page built using HTML, CSS, and JavaScript. The page dynamically creates a navigation bar, highlights sections while scrolling, and includes an interactive comment form.

## Features

### 1. Dynamic Navigation Bar
- Navigation links are generated using JavaScript.
- Each section has a `data-nav` attribute used as the link text.
- Smooth scrolling is implemented when clicking on navigation links.

### 2. Scroll-based Section Highlight
- When the user scrolls, the currently visible section is highlighted.
- The active section gets an `active` class which changes its background and adds a left border.

### 3. Comment Form
- Users can submit their name, email, and a comment.
- The form checks for empty fields before submitting.
- Submitted comments are dynamically added below the form.

## HTML Structure
- The page contains multiple content sections, each with an ID and `data-nav` attribute.
- The navigation bar is placed at the top and is fixed on scroll.
- A comment section is included at the bottom of the page.

## JavaScript Functionality
- JavaScript is used to:
  - Build the navigation bar from the available sections.
  - Enable smooth scroll behavior when navigation links are clicked.
  - Detect which section is currently in the viewport and update the `active` class.
  - Handle the comment form submission and add new comments to the page.

## CSS Styling
- Base styles use a clean layout with flexbox for section content.
- The active section has a different background color and left border.
- Navigation links are styled with hover effects.
- Comments are styled in their own fieldsets.
- Responsive design is included for phones and tablets.

## How to Use
1. Open the `index.html` file in a browser.
2. Scroll through the content and notice the active section highlighting.
3. Try clicking a nav item to smoothly scroll to that section.
4. Submit a comment at the bottom and see it added instantly.

This project provides a foundation for creating interactive and user-friendly dynamic web pages.

