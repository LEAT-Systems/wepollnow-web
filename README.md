



# How to Fork and Run WePollNow Project Locally from GitHub


## Prerequisites

- A GitHub account
- Git installed on your local machine
- A code editor, such as Visual Studio Code
- Node.js and npm (Node Package Manager) installed on your local machine


### Step 1: Fork the Repository
- Go to the GitHub repository for the React project you want to run locally.
- Click the "Fork" button in the top right corner of the page.
- Select your own account as the destination for the fork.

### Step 2: Clone the Repository to Your Local Machine
- On the page for your fork of the repository, click the green "Clone or download" button.
- Copy the URL for the repository.
- Open a terminal window on your local machine.
- Navigate to the directory where you want to clone the repository.
- Run the command ```git clone <repository URL>```, replacing `<repository URL>` with the URL you copied in the previous step.

### Step 3: Install Dependencies
- Navigate to the root directory of the cloned repository.
- Run the command ```npm install``` to install all the necessary dependencies for the project.


### Step 4: Start the Development Server
- Run the command ```npm start``` to start the development server.
- The development server will not automatically open a new browser window with the React app running locally, so copy and paste this on your browser ```http://127.0.0.1:5173/```.
- To Launch the test runner in the interactive watch mode, run `npm test`
- To build this app for production mode. Run `npm run build`

### Step 5: Make Changes and Commit Them to Your Fork
- Make any desired changes to the code in your code editor.
- Save the changes.
- Open the terminal and navigate to the root directory of the cloned repository.
- Run the command ```git add .``` to stage all changed files.
- Run the command ```git commit -m <commit message>```, replacing `<commit message>` with a brief description of the changes you made.
- Run the command ```git push``` to push your changes to your fork of the repository on GitHub.

### Step 6: Create a Pull Request (Optional)
- If you want to submit your changes to the original repository, you can create a pull request.
- Go to the page for your fork of the repository on GitHub.
- Click the "New pull request" button.
- Follow the prompts to submit your changes for review.
- When you are done working on the project, you can stop the development server by pressing ```CTRL + C``` in the terminal.

*That's it! You have successfully forked and run a React project from GitHub on your local machine.*




