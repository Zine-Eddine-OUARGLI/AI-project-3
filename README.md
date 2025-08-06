# AI-project-3

## Project Overview

This project demonstrates how AI can be used to analyze, refactor, and modernize a simple web page. The process included identifying layout and responsiveness issues, separating concerns (HTML, CSS, JS), and improving reusability and interactivity—all guided by user prompts and AI responses.

---

## AI-Driven Refactor Process

### Initial State
The project started with a single `index.html` file containing inline CSS and a basic pricing card layout. The design was not responsive, and the structure was not optimized for reusability or modern web standards.

---

### User Prompts and Effects

#### 1. **Prompt:**
> This web page is broken, I want you to identify the layout problems that it has and fix the unresponsiveness of its elements (buttons, card hovers), and refactor its elements for reuse. Make sure to separate each part of the webpage in different files (HTML/CSS/JS)

**Effect:**
- The AI analyzed the original HTML, identified layout and responsiveness issues, and documented them.
- A plan was created to separate HTML, CSS, and JS into different files, fix responsiveness, and refactor for reusability.

#### 2. **Prompt:**
> I would like a more modern look for the refactor

**Effect:**
- The AI refactored the project to use a modern, responsive card design with smooth hover effects and a visually appealing button.
- The code was split into `index.html`, `styles.css`, and `script.js`.
- The design became mobile-friendly and accessible, with reusable classes and semantic HTML.

#### 3. **Prompt:**
> This looks very good, you've done well! Now, I want you to create a new file called "index-old.html" and put the previous index.html file that I asked you to fix in it, so I know what the differences are between the one we're using and the old one.

**Effect:**
- The AI created `index-old.html` containing the original, unrefactored HTML for comparison purposes.

#### 4. **Prompt:**
> update the README.md file using markdown syntax to explain what we did in this project in terms of how we used AI to fix the layout problems and all of the different things I had to update. Try to include each prompt I gave you and what its effects were, including this one.

**Effect:**
- This summary was added to the README.md, documenting the entire AI-driven process and the impact of each user prompt.

---

## Resulting File Structure

```
AI-project-3/
├── index.html         # Modern, refactored HTML
├── styles.css         # Modern, responsive CSS
├── script.js          # Interactive JS for button feedback
├── index-old.html     # Original, unrefactored HTML
└── README.md          # Project documentation (this file)
```

---

## Key Improvements
- **Responsiveness:** The pricing card and button now adapt to all screen sizes.
- **Separation of Concerns:** HTML, CSS, and JS are in separate files for maintainability.
- **Modern Design:** Uses CSS variables, transitions, and a clean layout.
- **Reusability:** Classes and structure allow for easy duplication and extension.
- **Accessibility:** Improved semantic structure and interactivity.

---

## How to Use
1. Open `index.html` in your browser to view the modern pricing card.
2. Compare with `index-old.html` to see the original version.
3. Edit or extend `styles.css` and `script.js` for further customization.

---

This project is a practical example of how AI can assist in modernizing and improving web development workflows through interactive, prompt-driven collaboration.