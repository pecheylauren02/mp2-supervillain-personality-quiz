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

It is worth noting that whilst this is presented as a personality test, this quiz is built for entertainment purposes, and is not backed by any specific psychological research.

## Design, Layout and Structure 
The design, layout and structure remained consistent across all pages for certain elements, such as the colour palette for the headings, paragraphs and backgrounds and the design of the navigation bar. However, the layout of each page was slightly different, to allow users to differentiate between the Sign Up/Log In pages and the Quiz and Results pages. On the quiz page, some visual content, such as eye-catching images, bold colours and buttons were incorporated.

### Wireframes

I used [Balsamiq](https://balsamiq.com/) in the initial design phase, before the coding process. This enabled me to develop the website's structure, skeleton, layout and overall look and style.

<details><summary>Home Page</summary>

<img src="">

_Desktop Wireframe for Home Page_

<img src="">

_iPad Wireframe for Home Page_

<img src="">

_Phone Wireframe for Home Page_

</details>

<details><summary>Sign Up Page</summary>

<img src="">

_Desktop Wireframe for Sign Up Page_

<img src="">

_iPad Wireframe for Sign Up Page_

<img src="">

_Phone Wireframe for Sign Up Page_

</details>

<details><summary>Log In Page</summary>

<img src="">

_Desktop Wireframe for Log In Page_

<img src="">

_iPad Wireframe for Log In Page_

<img src="">

_Phone Wireframe for Log In Page_

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

### Structure

The structure of this website was informed by the scope, principles of interactive design (IXD), as well as the user goals of the quiz. Keeping these important concepts in mind ensured that the website conformed to user's expectations and needs. 

The site is made of a simple, five page structure:
- Home Page
     - Gives the users a brief summary of what the quiz is about, as well as simple instructions on how to take the quiz so the user knows what to expect before they begin the quiz.
     - Above the summary is the title of the quiz, as well as an eye-catching image of a random famous Supervillain, to get the user excited about taking the quiz. 
     - The "LOGIN" button on the top right corner of the header takes the user to the Log In Page (more information below).
     - The user can also choose to take the quiz by pressing the "TAKE QUIZ" button, with or without logging in first. 
- Log In Page
     - Gives the user the opportunity to login with their email/username and password, or alternatively they are given the option to press a link to the Sign Up if this is their first time inputting their details.
- Sign Up Page
     - Allows users who have not yet created an account to Sign Up to the website by giving details of their name, email/username and creating their own password. 
- Quiz Page
     - This page is where the user will take the quiz. One question will be displayed at a time, and the user will need to answer all 10 questions in order to get the results. 
- Quiz Results Page
    - After completing all 10 questions of the quiz, the user will be taken to the results page, where a picture of a Supervillain that matches their answers will appear, alongside a description of why that Supervillain was matched with their choices. If the user does not like the result, or simply wants to try again, they can retake the quiz by clicking the "RETAKE QUIZ" button. 

There is also a subpage:
- 404
     - more information here

This site was designed using a mobile-first approach, because after conducting some research (using sites like [Adobe](https://xd.adobe.com/ideas/process/ui-design/what-is-mobile-first-design/)), it appears that most users use their mobile devices over desktop or iPad screens, especially when partaking in quizzes. 

The site has a navigation bar, with a hamburger menu on the top left corner of each screen, the logo in the top center, and a button on the top right corner. The navbar was reduced to a hamburger menu to prevent it from taking up too much real estate on smaller screens and to give a cleaner appearance overall. The navbar allows users to access any page they need and is useful for both new and returning users.

On the Home Page, there is a "LOGIN" button, which the user can click to fill in their details. Alternatively, they can click the "TAKE QUIZ" button which will take them to the quiz page. If they decide to Log In first, once they are finished, they can click the "HOME" button to take them back to the Home Page, or the "Sign Up" link if they are putting in their information for the first time. 

The suggested route is HOME PAGE > LOGIN/SIGN UP > HOME PAGE > TAKE QUIZ BUTTON > COMPLETE QUIZ > VIEW QUIZ RESULTS > RETAKE/RETURN HOME

### Colour 

I chose to use a bright, bold design using villain-inspired colours like deep and bright shades of red for the background. To contrast this, I used shades of grey and white for the buttons and text. 

<details><summary>Colour Palette</summary>

<img src="">

_Colour Palette for entire website_
</details>

<details><summary>Colours used for Buttons</summary>

<img src="">

_Colour Palette for buttons_

</details>

### Font

My choice of font was [put here](link here) for all paragraphs and [put here](link here) for all headings. Both font choices were imported from [Google Fonts](https://fonts.google.com/) and had a backup font of Sans Serif. I chose these fonts for my website because **they both have an elegant, professional and welcoming finish** which is best suited for a website aiming to attract its users. The boldness also displayed a strong legibility as headings over images, text and videos. 

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
- **Change this** [Sirv](https://sirv.com/)
     - Sirv was used to organise images for the website, as well as optimise size and find the image source urls. 
- **Change this** [I Love Img](https://www.iloveimg.com/resize-image)
     - This was used to optimise images by size.
- [Adobe Illustrator](https://www.adobe.com/uk/products/illustrator.html) and [Adobe Color] (https://color.adobe.com/create/color-wheel)
    - These were used to create the colour pallette as well as ideas for the initial design.

## Features

### Whole Site

#### Navbar and Header

<details><summary>Screenshots</summary>

<img src="">

_Navbar on desktop_

<img src="">

_Navbar after hover_

<img src="">

_Navbar on iPad_

<img src="">

_Navbar on phone_

</details>

- more information here

#### Another feature on whole site

<details><summary>Screenshots</summary>

<img src="">

_Label_

<img src="">

_Label_

<img src="">

_Label_

<img src="">

_Label_

</details>

- more information here

#### Footer 
- more information here

<details><summary>Screenshots</summary>

<img src="">

_Footer on Desktop_

<img src="">

_Footer on Phone_

</details>

### Log In Page
 
#### Title here for Log In

<details><summary>Screenshots</summary>

<img src="">

_Label_

<img src="">

_Label_

</details>
- More info here

#### Title here for Log In

<details><summary>Screenshots</summary>

<img src="">

_Label_

</details>

- more info here

#### Title here for Log In

<details><summary>Screenshots</summary>

<img src="">

_Label_

</details>

- more info here

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