# Supervillain Quiz 

<img src=""> *Add image of final design on four screens*

#### By Lauren Pechey
[Click here to view the live web application](https://pecheylauren02.github.io/supervillain-quiz/)

#### HELLO EVERYONE!

This is the documentation for a fun web application: The Ultimate Supervillain Personality Quiz! It has been built using HTML5, CSS3 and JavaScript as an educational Project offered as part of Code Institute’s Diploma in Full Stack Software Development. Disclaimer: This quiz is not backed up by psychological research, and thus the results are designed for entertainment purposes only. Please use the table of contents below to navigate through all of the planning, features, deployment, testing and more!

## Table of Contents

1. [Project Development and Planning](#project-development--planning)
    - [Project Goals](#project-goals)
        - [Project Purpose](#project-purpose)
        - [Target Audience](#target-audience)
    - [Research](#research)
        - [Market Review](#market-review)
        - [Key Takeaways](#key-takeaways-from-market-review)
    - [User Stories](#user-stories)
    - [Content](#content)
    - [Design, Layout and Structure](#design-layout-and-structure)
        - [Wireframes](#wireframes)
        - [Structure](#structure)
        - [Colour](#colour)
        - [Font](#font)
2. [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Tools](#tools)
3. [Features](#features)
    - [Whole Site](#whole-site)
        - [Nav Bar and Header](#whole-site)
        - [Add more here](#add-more-here)
        - [Footer](#footer)
        - [Favicon](#favicon)
    - [Home page](#home-page)
        - [Add more here](#add-more-here)
        - [Add more here](#add-more-here)
        - [Add more here](#add-more-here)
    - [Login page](#login-page)
        - [Add more here](#add-more-here)
        - [Add more here](#add-more-here)
        - [Add more here](#add-more-here)
    - [Sign Up page](#sign-up)
        - [Add more here](#add-more-here)
        - [Add more here](#add-more-here)
    - [Quiz page](#quiz-page)
        - [Add more here](#add-more-here)
        - [Add more here](#add-more-here)
        - [Add more here](#add-more-here)
    - [Quiz Results Pages](#quiz-results-page)
        - [Add more here](#add-more-here)
    - [Other Pages](#other-pages)
        - [Add more here](#add-more-here)
        - [Add more here](#add-more-here)
    - [Future Features](#future-features)
4. [Testing and bugs](#testing--bugs)
    - [HTML Validator Testing](#html-validator-testing)
    - [CSS Validator Testing](#css-validator-testing)
    - [JS Validator Testing](#js-validator-testing)
    - [Accessibility](#accessibility)
    - [Performance](#performance)
    - [Responsiveness / Device Testing](#responsiveness--device-testing)
    - [Browser Compatibility](#browser-compatibility)
    - [Bugs & Fixes](#bugs--fixes)
    - [Testing User Stories](#testing-user-stories)
5. [Deployment](#deployment)
6. [Credits](#credits)

## Project Development and Planning 

### Project Goals 

#### Project Purpose


This web-based quiz was planned and developed using principles of User Experience (UX) design, which include the five planes of Strategy, Scope, Structure, Skeleton, and Surface. Using these principles, the aim was to create a fun, easy-to-use, responsive, and engaging quiz that entertains users who are interested in learning more about their personalities. 

#### Client Goals

The Ultimate Supervillain Personality Quiz website was built as a milestone project for my Diploma in Fullstack Software Development with [Code Institute](https://codeinstitute.net/global/full-stack-software-development-diploma/). It is an interactive quiz designed to entertain users of all ages and backgrounds who want to learn more about the different sides of their personalities, particularly those interested in superheroes and supervillains. Despite this being built for educational reasons, it was treated as a real-world application for clients interested in both learning about their personalities in a fun, engaging way. Thus, this client's goals would be:

- Engaging the users with interactive, fun questions and life choices
- Helping users learn more about their personalities
- Entertaining users by linking their personalities to fictional, quirky supervillain characters
- Ensuring the questions and options are clear, and the quiz is simple to navigate

#### Target Audience

- This quiz is designed for users of any background or age, but will most likely gain more interest from fans of Disney, Marvel, or DC superheroes and supervillains.
- It is also likely to draw in users who are inquisitive about their personality and how they would deal with certain scenarios in life. 
- The simplicity of the website makes it easy for adults, teenagers and even children to take and retake the quiz as many times as they want, and access the results each time. 

#### User Goals 

The quiz aims to ensure that users can:

- Learn more about their personalities and how they would handle certain life scenarios
- Be entertained and engaged while taking a short quiz
- Navigate easily through the questions without interruptions
- See eye-catching results after answering all of the questions
- Retake the quiz as many times as they want to, to explore different results

## Research 

### Market Review 

Before designing the website, I reviewed other personality quiz websites (see below), in order to get a feel of how they presented themselves, which content and features they offered, and the design choices they made in terms of colour palette. I also reviewed what appeared to work well for the user and what needed improvements. 

[BuzzFeed](https://www.buzzfeed.com/gustorchi/we-can-legit-tell-which-super-villain-you-would-be-9iuf1y91vp) | [16 Personalities](https://www.16personalities.com/) | [Playbuzz](https://www.playbuzz.com/quizzes/personality) | [The Superhero Quiz](https://www.thesuperheroquiz.com/villain/) | [Truity Big Five Personality Test](https://www.truity.com/test/big-five-personality-test)

### Key Takeaways from Market Review 

- The website should be eye-catching, to make users excited about taking the quiz
- The Website should be clean, simple and easy to navigate
- 10 questions is the ideal number to keep the user engaged and interested
- Many quizzes did not offer a back button to allow the user to change their responses
- Clear, enticing images are displayed in the results section
- Most quizzes had a retake quiz button to allow the user to take the quiz again

## User Stories

In a real-world application, this kind of quiz will mostly likely be used by a visitor once, rather than repeatedly, as it would likely form part of a bigger website e.g. a website about personality types, so all user stories relate to a first-time user.

- find out what the quiz is about and what to expect before starting the quiz
- navigate easily through the quiz questions 
- have the option of retaking the quiz if I don't like the result
- learn more about why I was matched with a specific SuperVillain at the end of the quiz
- sign up with my name quickly and easily
- access the quiz on any device

These user stories gave me a clear scope for the website and enabled me to stay on track with the project, preventing issues like scope creep at a later stage after the coding process. 

## Content 

This quiz is made up of 10 questions with 4 answer options to choose from, and is set up as follows:
- It provides the user with thought-provoking questions and scenarios, and the user can only select 1 of the 4 options.
- Each answer option is assigned a value of 1 to 4, and each time the user answers a question, a score will be added until all 10 questions are answered.
- After completing all ten questions, the user will be matched with a supervillain based on their total score.  
- Before starting the quiz, users must sign up with their names. 

Each time the user selects an answer it builds up a picture of what kind of personality they have. These results are then processed to calculate the best supervillain match for them, and I included 8 possible matches (a mix of Disney, Marvel, Stranger Things, and DC supervillains):
- Lord Voldemort
- Cruella de Vil
- Magneto
- Vecna
- Maleficent
- The Joker
- Thanos
- The Green Goblin

It is worth noting that while this is presented as a personality test, this quiz is built for entertainment purposes, and is not backed by any specific psychological research.

## Design, Layout and Structure 

### Wireframes

I used [Balsamiq](https://balsamiq.com/) in the initial design phase, before the coding process. This enabled me to develop the website's structure, skeleton, layout and overall look and style. I created designs for desktop, tablet and mobile to make sure that responsiveness was at the forefront of the application from the beginning.

<details><summary>Home Page</summary>

<img src="">

_Desktop Wireframe for Home Page_

<img src="">

_iPad Wireframe for Home Page_

<img src="">

_Phone Wireframe for Home Page_

</details>

<details><summary>Quiz Page</summary>

<img src="">

_Desktop Wireframe for Quiz Page_

<img src="">

_iPad Wireframe for Quiz Page_

<img src="">

_Phone Wireframe for Quiz Page_

</details>

<details><summary>Quiz Results Page</summary>

<img src="">

_Desktop Wireframe for Quiz Results Page_

<img src="">

_iPad Wireframe for Quiz Results Page_

<img src="">

_Phone Wireframe for Quiz Results Page_

</details>

### Structure & Layout

The structure of this website was informed by the scope, principles of interactive design (IXD), as well as the user goals of the quiz. Keeping these important concepts in mind ensured that the website conformed to user's expectations and needs. 

The main site is a simple, single-page website with content displayed and hidden at different points in the game using JavaScript code. There are three main sections within the page which appear and disappear depending on where you are in the game, these are:

- Welcome and Instructions Area: A brief introduction with a name capture input to personalise the user's results, as well as "take quiz" button
- Quiz Area: The main quiz area, with a progress bar, question, question container, and four answer options to choose from 
- Results Area: The results of the quiz, showing the user's personality results breakdown in the form of a supervillain image and information about their personality match. This section also contains a "Retake Quiz" button to take the user back to the start if they want to begin the quiz again.
- Footer Area: Displays my name and details

There is also a 404 page for when a user lands on a non-existent page with a button to link back to index.html to start the quiz again.

### Design & Colour

This site was designed using a mobile-first approach, because after conducting some research (using sites like [Adobe](https://xd.adobe.com/ideas/process/ui-design/what-is-mobile-first-design/)), it appears that most users use their mobile devices over desktop or iPad screens, especially when partaking in quizzes. 

- The design was influenced by villain-inspired colours like deep and bright shades of red, black, gold and green which contrast well and allow for good legibility. 
- The welcome page has images of supervillains looking at the user through semi-circles, to add to villainous theme. 
- I used the same border-radius for all buttons and options to give maintain consistency throughout the site. 

<details><summary>Colour Palette</summary>

<img src="">

_Colour Palette for entire website_
</details>

<details><summary>Colours used for Buttons</summary>

<img src="">

_Colour Palette for buttons_

</details>

### Font

My choice of font was [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond?query=cor) for all paragraphs and headings. This font choice was imported from [Google Fonts](https://fonts.google.com/) and had a backup font of Serif. I chose this font for my website because the cursive style contributed to the supervillain theme, whilst also providing a professional, legible finish.

## Technologies Used 

This website used a combination of three different Front-End development languages, as well as some web tools for the initial planning. A list of those included in the project can be seen as follows: 

### Languages 
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Tools 
- [Git](https://git-scm.com/)
    - Git was used for version control via GitPod, by using the terminal to Git and Push to GitHub.
- [GitHub](https://github.com/)
    - GitHub was used to store the project code after being created in GitPod/Git.
- [Gitpod](https://www.gitpod.io/)
    - Gitpod was used to create, edit and preview the project's code.
- [Balsamiq](https://balsamiq.com/)
     - Balsamiq was used to create wireframes during the initial design process.
- [Google Fonts](https://fonts.google.com/)
    - Google Fonts was used to select and import the fonts to the project (Libre Baskerville and Libre Baskerville Bold).
- [Font Awesome](https://fontawesome.com/)
    - Font Awesome was used to add icons to the site to help with UX and to add more character to the project visually.
- [Tiny PNG](https://tinypng.com/)
    - Used to further optimise the images for the site and reduce file size
- [Bulk Image Crop](https://bulkimagecrop.com/)
    - Used to bulk crop bulk
- [Adobe Illustrator](https://www.adobe.com/uk/products/illustrator.html) and [Adobe Color] (https://color.adobe.com/create/color-wheel)
    - These were used to create the colour pallette as well as ideas for the initial design.
- [Favicon.io](https://favicon.io/favicon-converter/)
    - Used to create and add the favicon to the browser tab

## Features

### Whole Site

#### Favicon

I included a Favicon for the site using the female supervillain graphic which had the same colours as the site's design. This helped to build the brand and continue the site design in the user's browser tab.

<details><summary>Screenshots</summary>

<img src="">

_Favicon_
</details>

#### Footer 

- The footer contains the text "Made By Lauren Pechey" and links to my relevant social media sites so that it can be used as a portfolio project
- The footer social icons have aria labels to improve accessibility
- The footer social icons have a hover effect with a smooth colour transition 
- The footer is responsive on all screen sizes

<details><summary>Screenshots</summary>

<img src="">

_Footer on Desktop_

<img src="">

_Footer on iPad_

<img src="">

_Footer on Phone_

<img src="">

_Hover effect on social links_

</details>

### Welcome Section

This section contains the following features:

- A brief introduction and information about the quiz, how it works and some persuasion for the user to take it
- The layout is responsive on all devices, with margins widening on larger devices
- The semi-circles with the supervillain images in this section expand to full circles on larger screens
- Name input section:
    - User must enter a name to start game - CHANGE THIS alert with appears if no name entered CHANGE THIS
    - The name is used in the results section to personalise the results
    - The name limits the number of characters to a minimum of 2 and a maximum of 15 to make the text in the results section work visually
- Take Quiz button - launches the quiz
    - Has a hover effect on non-touchscreen devices with a smooth colour transition 

<details><summary>Screenshots</summary>

<img src="">
<img src="">

_Welcome section for Desktops, iPad and Phone view_

<img src="">

_Name Input and Take Quiz button_

<img src="">

_Hover effect on Take Quiz button_

</details>

### Quiz Section

The quiz section is fully responsive with the answers increasing in font size and expanding in width on larger devices. I used [Adobe Illustrator](https://www.adobe.com/products/illustrator.html) to choose the shade of green for the option buttons. This colour was selected because it was matched as complimentary to the shade of red chosen in the background. 

<details><summary>Screenshots</summary>

<img src="">

_Quiz section on Desktop_

<img src="">

_Quiz section on Desktop_

<img src="">

_Quiz section on Phone_

#### Progress Bar

- Gives the user an indication of where they are in the quiz and how many questions are left
- Contains both a visual reference in the colour bar and a number reference in the question number
- Updates when a user selects an answer and the question is repopulated

<details><summary>Screenshots</summary>

<img src="">

_Progress Bar updates with each question answered_

</details>

#### Questions & Options

- Displays the question and four options, and updates with the next question and a set of options each time the user makes a selection
- Has a different colour hover effect on the answers on non touchscreen devices with a smooth transition
- Once the user has selected an answer it turns ADD COLOUR HERE
- CHANGE THIS FIRST IN CODE There is a brief timeout to allow the orange to appear before the question & answers update, this gives the user a sense that the answer has definitely been selected and submitted and gives them time to see the question update happenning - all part of creating an intuitive and positive user experience.
- A separate 'next question' button was excluded from the options, as it adds an extra click for the user which they may find annoying
- CHANGE THIS FIRST IN CODE During the time out the user cannot select another answer - this avoids accidental selections or duplicate results

<details><summary>Screenshots</summary>

<img src="">

_Option selection and question/option update_

<img src="">

_Answer hover effect_

</details>

### Results Section

#### Supervillian Personality Reveal

- This section gives detailed information about the user's supervillain personality results
- The title result is personalised to the user with the name that the user input at the start of the quiz
- The total score calculated once the user has answered all 10 questions is calculated and matched with one of eight possible supervillains (see the list above)
- The result includes a picture of the supervillain chosen, as well as information about the personality type associated with that supervillain match
- The supervillain personality results are fully responsive, expanding in size on larger screens

<details><summary>Screenshots</summary>

<img src="">

_Results section on Desktop_

<img src="">

_Results section on iPad_

<img src="">

_Results section on Phone_

</details>

#### Retake Quiz Button

- This button is displayed below the results section and allows the user to restart the quiz
- It has the same design, colour and hover effect as the Take Quiz button, to maintain consistency throughout the quiz
- It is only displayed in the results section once the user has finished taking the quiz, to prevent the user from accidentally restarting the quiz when they have not completed all of the questions

<details><summary>Screenshots</summary>

<img src="">

_Retake Quiz Button_

</details>

### Sign Up Page
 
#### Title here for Sign Up

<details><summary>Screenshots</summary>

<img src="">

_Label_

<img src="">

_Label_

</details>
- More info here

#### Title here for Sign Up 

<details><summary>Screenshots</summary>

<img src="">

_Label_

</details>

- more info here

#### Title here for Sign Up

<details><summary>Screenshots</summary>

<img src="">

_Label_

</details>

- more info here

### Quiz Page
 
#### Title here for Quiz 

<details><summary>Screenshots</summary>

<img src="">

_Label_

<img src="">

_Label_

</details>
- More info here

#### Title here for Quiz

<details><summary>Screenshots</summary>

<img src="">

_Label_

</details>

- more info here

#### Title here for Quiz

<details><summary>Screenshots</summary>

<img src="">

_Label_

</details>

- more info here

### Quiz Results Page
 
#### Title here for Quiz Results Page

<details><summary>Screenshots</summary>

<img src="">

_Label_

<img src="">

_Label_

</details>
- More info here

#### Title here for Quiz Results Page

<details><summary>Screenshots</summary>

<img src="">

_Label_

</details>

- more info here

#### Title here for Quiz Results Page

<details><summary>Screenshots</summary>

<img src="">

_Label_

</details>

- more info here

## Future Features 

I would like to add an additional feature to the website. This unfortunately fell out of the scope of this project, but would be useful to users in future. 

#### New Feature here 

I would like to add **Add text here**

## Testing and Bugs

### HTML Validator Testing 

I ran my HTML code for each page through the [W3C HTML Validator](https://validator.w3.org/). Thankfully, no errors were displayed. **Add info here**
<details><summary>Screenshots</summary>

<img src="">

_HTML Validator Result Home Page_

<img src="">

_HTML Validator Log In Page_

<img src="">

_HTML Validator Result Sign Up Page_

<img src="">

_HTML Validator Quiz Page_

<img src="">

_HTML Validator Quiz Results_

</details>

### CSS Validator Testing

I ran my CSS code through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) as well as [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-maths%252F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en). No errors were displayed. 

<details><summary>Screenshots</summary>

<img src="">

_CSS Validator Result_

</details>

### JavaScript Validator Testing

I ran my JavaScript code through [Jshint validator](https://jshint.com/) and no errors were found. The following metrics were returned: 
**ADJUST INFO BELOW**:
- There are 11 functions in this file.
- Function with the largest signature takes 2 arguments, while the median is 0.
- Largest function has 10 statements in it, while the median is 3.
- The most complex function has a cyclomatic complexity value of 4 while the median is 2.

### Accessibility

I tested accessibility of the website using Google Chrome Dev Tools Lighthouse, and the scores came out clean.

<details><summary>Home Page</summary>

<img src=>

_Accessibility result on Home Page_

</details>

<details><summary>Log In Page</summary>

<img src="">

_Accessibility result on Log In Page_

</details>

<details><summary>Sign Up Page</summary>

<img src="">

_Accessibility result on Sign Up Page_

</details>

<details><summary>Quiz Page</summary>

<img src="">

_Accessibility result on Quiz Page_

</details>

<details><summary>Quiz Results Page</summary>

<img src="">

_Accessibility result on Quiz Results Page_

</details>

### Performance

I tested the site's performance through Google Chrome Dev Tools Lighthouse. The scores showed high on all pages, but needed improvement for **ADD INFO HERE**.

<details><summary>Home Page</summary>

<img src="">

_Label_

</details>

<details><summary>Log In Page</summary>

<img src="">

_Label_

</details>

<details><summary>Sign Up Page</summary>

<img src="">

_Label_

</details>

<details><summary>Quiz Page</summary>

<img src="">

_Label_

</details>

<details><summary>Quiz Results</summary>

<img src="">

_Label_

</details>

### Browser Compatibility

The site was tested on the following browsers:

- Google Chrome
- Mozilla Firefox
- Apple Safari

**ADD INFO HERE**.

### Responsiveness/Device Testing

The website was tested on the following devices:
- HP Display 27-inch External Monitor
- Apple Macbook Pro 13-inch
- Samsung Galaxy S10
- Apple iPhone SE
- Apple iPad mini
- Galaxy Tablet
- Google Chrome Developer Tools - using responsive testing for all screen sizes

The website functioned as expected on all devices.

### Solved Bugs

#### Bug 1

**HOW I FIXED IT**.

<details><summary>Screenshots</summary>

<img src="">

_Label_

<img src="">

_Label_

<img src="">

_Label_

</details>

#### Bug 2

**INFO ON BUG HERE**.

<details><summary>Screenshots</summary>

<img src="">

_Label_

<img src="">

_Label_

<img src="">

_Label_

</details>

### Testing User Stories

I ran manual tests on the website, based on the user stories mentioned above.

#### 1. Add user story here

<details><summary>Screenshots</summary>

<img src="">

_Label_

<img src="">

_Label_

</details>

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Welcome Introduction • Welcome video • "Why Stay With Us" Text | Scroll down on About Us page, read Welcome Introduction, watch video relating to intro, read more detail about reasons to stay on About Us page | Find information about Sable Safari | Works as expected |
| Nav Bar - About Us Link • About Us Text | Click on "About Us" on navbar, read more detail on About Us page | Find information about Sable Safari | Works as expected |

#### 2. Add user story here

<details><summary>Screenshots</summary>

<img src="">

_Label_

<img src="">

_Label_

</details>

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Welcome Introduction • Welcome video • "Why Stay With Us" Text | Scroll down on About Us page, read Welcome Introduction, watch video relating to intro, read more detail about reasons to stay on About Us page | Find information about Sable Safari | Works as expected |
| Nav Bar - About Us Link • About Us Text | Click on "About Us" on navbar, read more detail on About Us page | Find information about Sable Safari | Works as expected |


#### 3. Add user story here

<details><summary>Screenshots</summary>

<img src="">

_Label_

<img src="">

_Label_

</details>

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Welcome Introduction • Welcome video • "Why Stay With Us" Text | Scroll down on About Us page, read Welcome Introduction, watch video relating to intro, read more detail about reasons to stay on About Us page | Find information about Sable Safari | Works as expected |
| Nav Bar - About Us Link • About Us Text | Click on "About Us" on navbar, read more detail on About Us page | Find information about Sable Safari | Works as expected |

#### 4. Add user story here

<details><summary>Screenshots</summary>

<img src="">

_Label_

<img src="">

_Label_

</details>

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Welcome Introduction • Welcome video • "Why Stay With Us" Text | Scroll down on About Us page, read Welcome Introduction, watch video relating to intro, read more detail about reasons to stay on About Us page | Find information about Sable Safari | Works as expected |
| Nav Bar - About Us Link • About Us Text | Click on "About Us" on navbar, read more detail on About Us page | Find information about Sable Safari | Works as expected |

#### 5. Add user story here

<details><summary>Screenshots</summary>

<img src="">

_Label_

<img src="">

_Label_

</details>

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Welcome Introduction • Welcome video • "Why Stay With Us" Text | Scroll down on About Us page, read Welcome Introduction, watch video relating to intro, read more detail about reasons to stay on About Us page | Find information about Sable Safari | Works as expected |
| Nav Bar - About Us Link • About Us Text | Click on "About Us" on navbar, read more detail on About Us page | Find information about Sable Safari | Works as expected |



## Credits

### Design and Planning

- [Adobe Color] (https://color.adobe.com/create/color-wheel) helped in developing the colour palette for the initial design phase of the website
- 

### Images

- https://www.seekpng.com/idown/u2r5r5q8q8t4o0i1_cruella-de-vil-png-cruella-de-vil-disney/ Cruella 
- https://www.seekpng.com/ipng/u2a9o0i1u2q8e6i1_heath-ledger-joker-png-dark-knight-joker-png/ Joker
- https://www.seekpng.com/idown/u2w7q8y3u2q8y3o0_ursula-with-her-legs-ursula-png/ Ursula
- https://www.seekpng.com/ipng/u2e6w7q8a9q8q8w7_jafar-jafar-disney/ Jafar
- https://www.seekpng.com/ipng/u2w7a9e6r5w7u2q8_graphic-black-and-white-voldemort-quick-art-by/ Voldemort
- https://www.seekpng.com/ipng/u2q8o0r5y3i1o0e6_captain-hook-captain-hook-transparent/ Captain Hook
- https://www.seekpng.com/ipng/u2q8e6r5e6o0q8i1_scar-scar-scar-scar-scar-scar-png-lion/ Scar
- https://www.seekpng.com/ipng/u2w7q8e6a9w7w7q8_thanos-freetoedit-thanos-png/ Thanos
- https://www.seekpng.com/idown/u2e6q8y3y3t4i1o0_the-mouth-of-sauron-action-figure-asmus-toys/ Sauron
- https://www.seekpng.com/ipng/u2w7q8e6y3a9q8t4_green-goblin-ios-avengers-alliance-green-goblin/ Green Goblin
- https://www.seekpng.com/idown/u2w7w7q8t4q8r5r5_disneys-hades-as-kilgrave-marvel-hades/ Hades from Hercules
- https://www.seekpng.com/idown/u2q8y3a9r5e6a9e6_maleficent-disney-villains/ Maleficent

NEW RESULTS:

- https://www.wallpaperbetter.com/en/hd-wallpaper-weflb/download/1920x1080 Voldemort
- https://learn.codeinstitute.net/dashboard Magneto
- https://www.wallpaperbetter.com/en/hd-wallpaper-shryv/download/1366x768 Joker
- https://www.wallpaperbetter.com/en/hd-wallpaper-peptw/download/1366x768 The green goblin
- https://www.wallpaperbetter.com/en/hd-wallpaper-sormx thanos
- https://www.nawpic.com/vecna-10/ Vecna
- https://www.wallpaperbetter.com/en/hd-wallpaper-swlee/download/1366x768 Maleficent
- https://www.wallpaperbetter.com/en/hd-wallpaper-wfnbu/download/1366x768 Cruella