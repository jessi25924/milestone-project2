# Milestone Project 2 (FLAGTASTIC MISSION)

Flagtastic Mission is a fun and interactive flag quiz game designed to test and enhance players' knowledge of world flags. The game consists of two levels:

- **Level 1**: Players answer five multiple-choice questions, identifying the correct flag from three options. Each question allows **two attempts** before the game ends.
- **Level 2**: Adds a **timer challenge**, where players must answer each question within **60 seconds** to progress.

With engaging gameplay and a simple yet dynamic interface, this game is perfect for casual gamers, geography enthusiasts, and young children. This game aims to provide an enjoyable learning experience while challenging to improve their geography skills.

# UX

---

![](assets/documentation/reponsiveness.png)

---

## Table of Contents

- [Project Goals](#project-goals)
- [User Stories](#user-stories)
- [Features](#features)
- [Design Choices](#design-choices)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)

## Project Goals

### Player Goals

- Test and improve knowledge of world flags.
- Successfully complete Level 1.
- Conquer Level 2 by answering question within a minute.
- Aim for the highest possible score.
- Enjoy a smooth and interactive gameplay experience with instant feedback and progression tracking.

### Developer Goals

- Build a fully functional and responsive quiz game using HTML, CSS and JavaScript.
- Implement a two-level game structure, with a timed challenge in Level 2.
- Provide clear user feedback through visual cues and messages.
- Ensure an intuitive UI/UX, keeping gameplay engaging and accessible on different devices.

## User Stories

As a **Player**, I want to:

1. Start the game easily from a landing page.
2. Choose the correct flag from three options.
3. Receive instant feedback on my answer selection.
4. Have a chance/s to correct mistakes.
5. See a countdown timer in Level 2 for an added challenge.
6. View my score at the end of the game.
7. Restart the game easily if I lose or complete it.

As a **Developer**, I want to:

1. Ensure the game mechanics work smoothly for an enjoyable experience.
2. Structure the code with clear function and event listener for easy debugging.
3. Design a responsive interface that works on desktop, tablet, and mobile.
4. Implement a modal-based feedback system to notify players of game status.
5. Use CSS effects to enhance the visual appeal.

## Features

Flagtastic Mission offers an engaging and interactive quiz experience with a futuristic and space-themed. Below are the core features that enhance gameplay and user experience:

### Landing Page

- A sleek, retro-futuristic interface inspired by **Guardians of the Galaxy** movie.
- A prominent **Start** button to begin the game.
- Themed font (Orbitron) and a cosmic-inspired background image.

### Game Levels

1. Level 1 (Standard Quiz Mode)

- Player answer five multiple-choice questions.
- Each question has three answer choices.
- Two attempts per question before the game ends.

2. Level 2 (Timed Challenge)

- Player must answer five more questions.
- Each question has a 60-second countdown timer.
- If time runs out, the game ends.

### Game Mechanics

- Visual Feedback:
  - Correct answer allow progression.
  - Incorrect answer trigger an alert and reduce attempts.
- Game Over and Win Conditions:
  - Losing all attempts results in a Game Over modal.
  - Completing Level 2 successfully displays a confratulations popup.
- Score Display:
  - At the end of the game, a modal shows the final score and the number of correct answers.

### UI/UX Enhancements

- Sci-fi Theme:
  - A glowing border around the flag container for a futurictic feel.
  - High-contrast answer buttons for better visibility.
- Modal-based Message:
  - Game Over, Level Completion, and Score display popups.
- Responsive Design:
  - Works seamlessly across desktop, tablet, and mobile devices.

### 404 Error Page

- A custom 404 Page designed to match the game's theme.
- Displays a clear error message with a helpful navigation button to guide users back to the landing page.
- Consistent Design: The page maintains the same futuristic style, so users feel like they are still within the same intergalactic mission experience.

### Upcoming Features

- **Shuffling Question**- questions will appear in a random order to enhance replayability and challenge player with different flags each time they play.
- **API Integration**- instead of using static data, the game may fetch flag images and country names dynamically from an API, allowing for a broader and more diverse set of questions.

## Design Choices

The overall design of the game is inspired by the **Guardians of the Galaxy** movie, incorporating a futuristic and space-themed aesthetic. Despite its cosmic feel, the game remains firmly focused on the geographical context, challenging players to test their knowledge of world flags in an engaging and immersive way.

### Wireframe

These wireframes screenshots illustrate the responsive design, showcasing the desktop, tablet, and mobile layouts.

| Devices     | Screenshot                                             |
| ----------- | ------------------------------------------------------ |
| **Desktop** | ![desktop](assets/documentation/desktop-wireframe.jpg) |
| **Tablet**  | ![tablet](assets/documentation/tablet-wireframe.jpg)   |
| **Mobile**  | ![mobile](assets/documentation/mobile-wireframe.jpg)   |

### Font

[Google Font](https://fonts.google.com/) library was used for this site. The ["Orbitron"](https://fonts.google.com/specimen/Orbitron) font style was chosen for its futuristic and bold appearance, which enhances the game's theme and makes text stand out clearly. Its modern design complements the engaging and interactive nature of the flag quiz, making the game more visually appealing.

### Colour Scheme

The colour palette for this game was generated using [Adobe Color](https://color.adobe.com/create/image) to ensure a visually appealing and cohesive design. Each colour was carefully chosen to enhance readability, engagement, and the overall gaming experience.

![](assets/documentation/colour-palette.png)
![](assets/documentation/colour-palette2.png)

- #CD7F32 (Bronze Gold - Used for Text and Headings)
- #4D5159 (Dark Gray - Used for Buttons and UI Elements)
- #FFFFFF (White - Used for Text on Dark Backgrounds)
- Background Image - The game background features an image that blends well with the chosen colours, enhancing the immersive experience while keeping the focud on the main game elements.

This colour scheme was selected to provide a modern, engaging, and visually comfortable experience for players while maintaining a balance between contrast and aesthetics.

## Technologies Used

- [HTML](https://en.wikipedia.org/wiki/HTML): Utilised for structuring the main site content.

- [CSS](https://en.wikipedia.org/wiki/CSS): Applied for styling the website.

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript): The core programming language of the game, handling logic, user interactions and gameplay mechanics.

- [VS Code](https://code.visualstudio.com/): The main editor used for development and providing extensions for an efficient workflow.

- [GitHub](https://github.com/): Used for secure online code storage and pages deployment of the website.

- [Markdown](https://en.wikipedia.org/wiki/Markdown): Used to write and format documentation efficiently with a clean and structured layout.

## Testing

To ensure the quality of the Flagtastic Mission Flag Quiz, testing was performed manually. However, automated testing principles are also understood and could be applied in future updates.

### **Manual vs. Automated Testing**

| Feature                 | Manual Testing                                                                            | Automated Testing                                       |
| ----------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Performed by            | A human tester interacting with the app                                                   | A script or testing framework such as **Jest**          |
| Best for                | UI/UX, responsiveness, compatibility, quick checks                                        | Repetitive logic checks, large-scale test               |
| Example in this project | Code validation, Lighthouse performance, responsiveness and browser compatibility testing | (Not performed, but could test answer validation logic) |
| Speed                   | Time-consuming                                                                            | Fast once set up                                        |
| Accuracy                | Prone to human error                                                                      | More precise                                            |

Testing conducted for this project has been documented in separate file [TESTING.md](TESTING.md). All tests performed were **Manual Tests**, including:

- Validation: code checked for [HTML W3C validator](https://validator.w3.org/), [CSS Jigsaw](https://jigsaw.w3.org/css-validator/) and [JavaScript JSHint](https://jshint.com/) were used.

- Lighthouse Testing: google lighthouse was used to test the site's Performance, Accessibility, and Best Practices.

- Responsiveness: ensuring the site function seamlessly across various devices using tools such as Chrome DevTools.

- Browser Compatibility: Validating compatibility on popular browsers, cluding Chrome, Firefox, Opera and Edge.

While not implemented in this project, **Automated Testing** could used for:

- **Validating Game Logic:** Checking if the answer verification function correctly identifies right and wrong answers.
- **Regression Testing:** Running tests after updates to ensure existing features still work.

## Deployment

This concise guide covers the essential steps for deployment.

Steps to deploy a project on Github pages:

1. Navigate to your Github repository.
2. Click on the **Settings** tab at the top of the reposiroty page.
3. In the left-hand menu, select **Pages** under the Code and Automation.
4. Under the Source section, choose the branch you want to deploy which is **main**, and select the folder **/root** for deployment.
5. Click **Save**.
6. After a few moments, **Github Pages** will provide a live URL where your site is hosted.

Steps to Create a Github Account

1. Go to GitHub: visit [github.com](https://github.com/) and click Sign up in the top right corner.
2. Enter Details: provide email and password.
3. Verify Account: complete the captcha to verify you're human.
4. Choose a plan: select the free plan.
5. Verify Email: check your email and click the verification link.
6. Set up Profile: this is optional. Add you name, photo, etc.
7. Start using Github

Steps to Run the Project in VS Code

1. Launch **Visual Studio Code** on your computer.
2. Open the Project Folder by clicking on **File** > **Open Folder** and select the folder containing the game files.
3. Option **1**: Run the Project using Python HTTP Server: Open the **Terminal** in VS Code, type "python3 -m http.server" or "python -m http.server --bind 127.0.0.1" > holding the CTRL key + click the URL (http://127.0.0.1:8000/) in the terminal.
4. Option **2**: If you haven't installed **Live Server**, go to the **Extensions** panel, search for **Live Server** and install it. Open **index.html**, right-click anywhere in the file and select **Open with Live Server** to preview the game.

## Credits

### Media and Tools

- [Google Font](https://fonts.google.com/) used for typography and text styling on the site.
- [freepik.com](https://www.freepik.com/) sourced high-quality image used for background image of the site.
- [wikipedia](https://en.wikipedia.org/wiki/Flag_of_the_United_Kingdom) sourced all flag images used in this game.
- [squoosh.app](https://squoosh.app/) utilised for compressing and optimising image for better performance.
- MS Snipping tool was used to capture and save screenshots or print screen images for documentation purposes.
- [Adobe Color](https://color.adobe.com/create/image) used in generating the colour palette for the site's design.
- [Favicon](https://www.favicon-generator.org/) used to create the favicon displayed on the browser tab.
- [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#images) by Adam Pritchard: A reference for writing README.md and TESTING.md files, supplemented by guidance from Code Intitute.
- [Grammarly](https://www.grammarly.com/) this documentation has been grammar-proofed using Grammarly to ensure clarity and professionalism.
- [ui.dev](https://ui.dev/amiresponsive) used to show website appearance on desktop, laptop, tablet, and phone.

### Content

- The game's theme and design are inspired by the Guardians of the Galaxy movie, incorporating a futuristic, space-themed aesthetic while still focusing on a **geographical challenge**.
- The quiz questions are based on **world flags**, designed to test and improved players' knowledge in a fun and engaging way.
- All content, including the questions, IU layout, and game logic, was custom-created, with future plans to introduce **shuffled questions and possibly use an API for more variety**.

### Code

- The game was developed using [HTML](https://en.wikipedia.org/wiki/HTML), [CSS](https://en.wikipedia.org/wiki/CSS), and [JavaScript](https://en.wikipedia.org/wiki/JavaScript), with a focus on interactive and dynamic gameplay.
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) is used for handling game logic, user interactions, answer validation, and the timer feature in Level 2.
- [Code Institute](https://learn.codeinstitute.net/dashboard) Lessons: Provided foundation knowledge and concepts, including best practices for structuring HTML, CSS and JavaScript in this project.
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#images) provided by Adam Pritchard, Code Institute.
- Some concepts and techniques were learned from **YouTube tutorials** by [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k) and **Facebook page** by [Unique Web Contents](https://www.facebook.com/reel/1331890791130433), which helped structuring the game logic and design.
- Development and testing were done in VS Code, using the Live Server and Python's built in HTTP server for local previews.
- [Stack Overflow](https://stackoverflow.com/questions/30658663/bad-value-for-attribute-src-on-element-img-must-be-non-empty-for-dynamically)was used to troubleshoot an HTML warning related to an empty src="" attribute, ensuring the code follows best pratice.

### Acknowledgement

I would like to express my heartfelt gratitude to my mentor Rory for his invaluable guidance, support and encouragement throughtout the development of this project. The insightful suggestions, best practices, and tips on JavaScript have greatly contributed to improving the structure, functionality, and overall quality of the quiz game.
