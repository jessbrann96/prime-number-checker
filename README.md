# prime-number-checker

[![Netlify Status](https://api.netlify.com/api/v1/badges/57f69f04-5ebc-4823-b950-5600b49ac985/deploy-status)](https://app.netlify.com/sites/prismatic-manatee-98d854/deploys)

## Project Overview

Prime-number-checker is a simple react app that allows the user to input a number and recieve a result as to whether the input number is prime or not. 
The project is written in javascript and CSS, using the react framework. Testing is done in either the react testing library or Jest.

## Usage

### Pre-requisites 

In order to run this app locally, you will need to install npm. This can be done using homebrew:    
`brew install npm`   

### Running the App Locally

The app can be run locally by running the below command from within the project directory   
`npm start`

Open http://localhost:3000 to view it in your browser.

Tests can be run locally using   
`npm test`


## Planning the Project

I decided to create a prime number checker app as it is a fairly simple project that contains some testable logic (the calculation to find out if a number is prime), as well as providing an opportunity for a user to input a value and click a button to get the desired result. 
My initial planning stage was done using Mural. Here I brainstormed ideas on how to approach the project and made notes on the different steps I may need to take to complete it. This was the basis of the issues I later created in GitHub Projects so was a very useful step. A screenshot of my initial planning notes can be found below in figure 1.

 <img width="1000" alt="Screenshot 2024-01-18 at 11 16 20" src="https://github.com/jessbrann96/prime-number-checker/assets/76174466/288e1aaf-bb6d-490d-a85d-7117d74bcff8">

**Figure 1** – _Initial planning notes for the project_   

I used these basic ideas to generate issues within my GitHub Project. This was very useful for managing my work and breaking it down into small and manageable issues. The Kanban board style setup meant that it was easy to see my progress and decide which ticket to work on next. I decided to keep the three standard pipelines provided as they covered my requirements (To-Do, In Progress and Done). Figure 2 shows a snapshot of the Kanban board for my project, with some tasks in each pipeline dependent on progress.

<img width="1308" alt="Screenshot 2024-01-18 at 11 21 00" src="https://github.com/jessbrann96/prime-number-checker/assets/76174466/46c4b7d3-0f67-4d2c-90fc-bc01f8e08841">

**Figure 2** – _Screenshot of the project’s Kanban board showing open and closed issues_   

In order to get the best use out of the board, I decided to use a few different processes which helped with my organisation. Firstly, each issue raised contained an acceptance criterion. This meant that I was double checking this before reviewing and merging the code changes, to ensure that each pull request had fulfilled its corresponding issue’s requirements. I also used labels on each pull request which related to the content of the change, some examples included “set-up”, “feature” and “testing”. Finally, I linked each pull request to its related issue to make it easy to locate individual changes from their issues.

To encourage good traceability, I made sure that I used a different branch for each issue. I tried to name the branches in a useful way, corresponding to the change being made. I also added a clear commit message to explain what the change was to make it easy to track each one back. If I was working in a team, I would have made use of code reviews to allow for constructive criticism and encourage improvement. 

I attempted to use agile practices throughout the development of my project. At the start of each week, I made a brief document outlining my aims for the week, with priorities and time estimations. I tried to make this process mirror a typical sprint, with a planning meeting/kick-off at the start and a retrospective at the end. Had I been working within a team, a morning scrum meeting would have been useful. An example of one of my weekly planning documents can be found in figure 3. I chose to use three columns here; backlog, sprint backlog and in progress. I began with all my issues under the backlog heading, and moved them across to spring backlog where appropriate. I organised the issues in priority order, with the higher priority tasks at the top of the column.





<img width="660" alt="Screenshot 2024-01-18 at 11 41 17" src="https://github.com/jessbrann96/prime-number-checker/assets/76174466/a337ae5a-1319-4c4e-a8fc-09776e911f83">


**Figure 3** – _Screenshot of my spring planning document_   


At the end of each week, I set aside time for a mini-retrospective. In this session I spent around 15 minutes thinking about what went well, what didn’t go well and how I could improve for the next ‘sprint’. This really helped me to improve on my working style each week.
Examples of areas for improvement that I identified included breaking down bigger issues further and ensuring I take regular breaks to keep my energy and enthusiasm up.
A screenshot of one of my retrospective sessions is attached in figure 4. 

<img width="873" alt="Screenshot 2024-01-18 at 11 52 51" src="https://github.com/jessbrann96/prime-number-checker/assets/76174466/f64c2200-5082-4449-8f41-03c638afbd4c">


**Figure 4** – _Notes from a retrospective session, identifying positives, negatives and improvements from the previous sprint._   

As well as the weekly retrospectives, I did a larger session at the end of my project to reflect on how effective my use of agile methodologies were, as well as my organisation and execution of my goals.
I was pleased with my general organisation skills and was happy with my use of the Kanban board and sprint planning/retrospective sessions. These really helped me to progress the project and plan effectively. The agile methodologies I used would definitely be more effective if used in a team environment, rather than on a solo project, but they were still beneficial for my use case. I do feel that I could have used my sprint planning sessions to make sure my tickets were all broken down into manageable chunks, but overall was happy with the outcome. 
Other positive outcomes included the successful creation of a working app, with a functional UI, the creation of two design options for the app and the effective use of the Kanban board pipelines as part of my sprint planning.
The key points that I would improve on given more time include using test driven development for the whole project rather than just the logic testing. I would also have liked to have spent more time on the UI as it is very basic in its current state. The full screenshot of my reflections can be found below in figure 5.


<img width="680" alt="Screenshot 2024-01-18 at 13 18 06" src="https://github.com/jessbrann96/prime-number-checker/assets/76174466/326e6ffc-d292-4531-a4e3-dc325b91141a">

**Figure 5** – _Screenshot of my final reflection session for the project_   



## UI Design

When designing and planning the UI side of my application, I decided to create two ideas using Figma and use a questionnaire aimed at my target audience to determine which one to use. I created a list of key features that I would need to include, considering my audience when I did so:

-	Header
-	Input box
-	Enter button
-	Sub text with instructions (“Enter a number to check if it is prime”
-	Sub text with result (“<value> is a prime number”)
-	Image to break up text
I wanted to keep the design simple and avoid using too many colours to make sure it was as readable as possible. Using the above criteria, I came up with two design options using Figma, shown below.


<img width="1235" alt="Screenshot 2024-01-17 at 16 04 20" src="https://github.com/jessbrann96/prime-number-checker/assets/76174466/1c5de5bf-4b53-4a16-9706-9e45e6c668b5">

**Figure 6** – _Design option 1 for the UI, created in Figma_

<img width="1213" alt="Screenshot 2024-01-17 at 16 06 52" src="https://github.com/jessbrann96/prime-number-checker/assets/76174466/4a9da547-e532-4a70-9d00-0f5a65b2f9d7">


**Figure 7** – _Design option 2 for the UI, created in Figma_   


I chose simple designs for both options, with a few differences. Option 1 used a different colour scheme and was aligned centrally, with a large division sign taking up the left side of the page. Option 2 was all aligned to the left of the page, with a smaller division symbol.
To help determine which option to use, I created a questionnaire using Google Forms and distributed it to six potential users to choose their preferred design. The results were very clear, with option 1 getting the majority of the votes. The questionnaire and the results can be found below.




<img width="687" alt="Screenshot 2024-01-17 at 16 11 16" src="https://github.com/jessbrann96/prime-number-checker/assets/76174466/5a7751aa-b865-4615-a500-4c7079396f72">


**Figure 8** – _Questionnaire to determine which design to use for the app_

![questionnaire results](https://github.com/jessbrann96/prime-number-checker/assets/76174466/a16d4a31-9a06-4273-b5ad-ed46ae631c0a)

**Figure 9** – _Pie chart showing the results of the questionnaire._   


## Evaluating the UI/UX

### Accessibility

When designing my webpage, I considered accessibility requirements to make sure it is as usable as possible for everyone. Overall I did achieve some points, but would need to improve the accessibility if I continued the project. The image I used was placed as a background image, so I was unable to add alt text to this. If given more time, I would move this to be a standard image so I can add the descriptive text. 

I did however manage to make the page functional and readable at a zoom of 200% and my web page is usable without a mouse (using the tab and enter keys). I also used coloured text with a high colour contrast to keep it readable. I tested my colour contrast online and passed the requirements for large texts, this is shown below.

I used the following website for the accessibility suggestions: https://www.boia.org/blog/5-quick-ways-to-self-check-the-accessibility-of-a-website

<img width="1247" alt="Screenshot 2024-01-18 at 15 20 46" src="https://github.com/jessbrann96/prime-number-checker/assets/76174466/1d237ee9-09f6-4335-89d7-fb57da410896">

**Figure 10** – _Accessibility score based on text contrast ratio using https://color.a11y.com/?bp09_   

### Usability

In order to determine usability, I asked a small group of potential users to try out the application, with no instructions given other than what was on the page. All six participants were able to easily work out how to use the page and input numbers to get a valid result.
I believe that the simplicity of the page makes it very easy to use, as the text is clearly visible and there aren’t complex instructions or distracting images.
The input box allows user input and the `check` button works when clicked.



### Aesthetics

The UI of my application appears simple and easy to read. I am happy with the colour scheme, with the title standing out clearly against the white background. I chose to keep the rest of the wording black so as not to overcomplicate the page.

The design is however, a little too simple. It would be nice to have more images or even an animation to make the page more eye catching. If I had more time on this project I would add extra features to make it more visually appealing. 


## How I Built the Project

The project required a number of set-up steps before I could start work on the code. I started by creating a react app to build on using `npm create-react-app <name>`. This provided me with the initial files I needed to build my own app. 
Once this was pushed to my repo, I set up the repository with Netlify to allow the deployment of my app. Netlify builds and deploys the app when a new pull request is merged and provides build testing on each PR (this provides the CD aspect of my project).
I also attempted to set up Codecov at this point. Unfortunately, I haven’t been able to get it running successfully despite following the instructions provided. In my investigation, I found a thread on the Codecov GitHub page full of people having the same issue and there was currently no fix available so I’ve had to leave this out of my project.
Next, I set up CI testing using GitHub Actions to run on PR. This runs the unit tests in the project and passes or fails dependent on their results. Finally, I added a ‘smoke test’ as a basic check that the testing library was working (testing that 2+2 was expected to be equal to 4).

To start the coding phase of my project, I decided to first write a test using Jest framework for the basic logic of a prime number checker. This test initially failed as I was following test driven development (TDD) practices. I then wrote the minimum amount of functional code required to make the test pass and this provided the basis for my prime number checker. As the test was failing, I added the code within the same PR but took screenshots showing my TDD process, shown below in figures 11 and 12. I chose to add this logic in its own file rather than add it to my `app.js` file. This was to make my TDD easier as I could test this logic without having to render the app, and I was able to add the required code without it relying on anything else. I tried to use clean coding principles throughout the project, giving variables descriptive names, keeping code concise and readable and adding useful comments when appropriate.

<img width="1575" alt="Screenshot 2024-01-10 at 15 35 24" src="https://github.com/jessbrann96/prime-number-checker/assets/76174466/eecbe127-2c99-43bc-af32-e927efee35e7">

**Figure 11** – _Screenshot showing the initial test and the failure on running it_

<img width="1576" alt="Screenshot 2024-01-10 at 15 36 10" src="https://github.com/jessbrann96/prime-number-checker/assets/76174466/4d95ef88-bee6-4bca-9161-a5e2b61c10b4">


**Figure 12** – _Screenshot showing the passing test and the logic that made it pass_   

My next step was to expand my testing of the logic to include tests for a non-prime number, zero and non-number entries. At this point I only had the basic logic shown above in place, and so I expected a simple return of `false` for all three of these cases, but planned to develop this later on to handle non-number values better.

Once these tests were in place and passing, I moved on to writing the rest of the code needed to make the application functional. In hindsight, I should have broken this task down into smaller steps as it ended up as a very large pull request.
When the user inputs a value, that value is first checked to see if it is a non-number input. If so, the response is `ERROR`. If the value is a number, it is passed to my `isPrime` function and tested to see if it is a prime number or not. A prime number will return a result of `YES` and a non-prime number `NO`. These responses are then passed to a switch statement to determine what text response the user will see. At this point I also created the input box, header and button using HTML.
I had to add a basic test in my `app.test.js` file to allow my project to run, so chose to use a rendering test that would check the expected sub-text was appearing on the screen.

Next I decided to add a case to account for a blank input box. This way, if the user presses the `check` button without inputting a value, the text will prompt them to type a number to check if it is prime, rather than stating that their input is not a prime number. I did this by adding a new check to my if/else block, with a blank input value returning a response of `NOENTRY` which would trigger the default case on my switch statement to determine the text shown (switch statement below, figure 13).


<img width="424" alt="Screenshot 2024-01-19 at 16 20 22" src="https://github.com/jessbrann96/prime-number-checker/assets/76174466/34db74ef-42ef-426b-b98b-6ae443a60fae">



**Figure 13** – _The switch statement used to determine the text response shown to the user_

The next stage of my project was implementing the design formatting. This was done after the process of designing two options and using a questionnaire to choose the best one. I added a proper header and improved the sub-text in my `app.js` file. I then added some styling to my ‘app.css’ file, including colouring the title, adding a background image and centering the features. I also decided to add a shadow to my ‘check’ button when the user hovers over it, as a small extra. The result of this can be seen below in figure 14.

<img width="1722" alt="Screenshot 2024-01-17 at 16 24 14" src="https://github.com/jessbrann96/prime-number-checker/assets/76174466/111c0491-657d-4488-bb07-6237fdc2644c">


**Figure 14** – _A screenshot of the finished prime number checker design_   


Once I was happy with my design, I started working on rendering tests to ensure that my design was as expected, and that the logic within my `app.js` file was being tested.
I started by adding a basic test to check that the header ‘Prime Number Checker’ was appearing on screen when the app was rendered. This went alongside the existing check for my sub-text.
I next moved on to testing that the app would return the expected text to the user when a number is inputted. In order to do this, I added some ‘data-testid’ tags to my input, button and text result in `app.js`. This was to allow me to reference these objects in my testing easily and does not affect the app itself. For my tests, I chose to mock the process of a user adding an input and clicking the button to get a result. I used the ‘user-event’ package from the react testing library for this. 
When I had my first mocking test passing, I added extra tests to cover different input cases. In total I wrote four of these tests to account for four different inputs: a prime number, a non-prime number, a non-number and an empty string. 
I have attached a screenshot of one of my tests for reference. 

<img width="682" alt="Screenshot 2024-01-19 at 16 49 15" src="https://github.com/jessbrann96/prime-number-checker/assets/76174466/7047d313-a31d-4ec0-a38f-be4cf5a6a28b">


**Figure 15** – _Screenshot of one of the mocking style tests used to check functionality of the app_   

To help tie my project together, I added a basic README. As the project is on my own public GitHub, I wanted to add some brief information on what the project is and how you can run it locally. I have included this information at the start of this report also. README files are very important for giving context on a project and ensuring that anyone who would like to run it themselves has all the tools and information required to do so.
Finally, I went back over my project and tidied up some comments that I’d used during the development stage. 

Overall, I am pleased with the outcome of my project. Given more time, there are certainly improvements to be made including a more complex design, better accessibility, and possibly better planning techniques (breaking down bigger issues more). I do however think I have managed to achieve my objective in creating a functional application using agile techniques.
