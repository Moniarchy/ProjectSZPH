Welcome to ProjectSZPH! Interested in contributing? Read carefully through this file first, then head over to the [issues page](https://github.com/Moniarchy/ProjectSZPH/issues) to find something interesting to work on.


Let us know you are working on it by posting a comment on the issue.
If you have a request for a new feature, or you notice a bug, please submit a new issue for it. If it is a bug, feel free to assign yourself to it. If it is a feature request, please wait for a maintainer to approve it before assigning yourself to it.
Code standards

# Git Flow
1. Create a fork of Project SZPH.
2. Clone your repo onto your computer.
3. Create a branch that addresses only the issue that you created. For example, if you were working on [setting up authorization](https://github.com/Moniarchy/ProjectSZPH/issues/10), your branch would be named 10-set-up-authorization.
4. Do your work. We encourage regular commits so that you have many checkpoints in case you need to reset.
5. Push up your branch and submit a pull request to the main repo.
6. Wait for a code review and make changes if necessary.
7. Repeat steps 4-7 until your branch is merged to the master branch.
8. Update your master branch locally with the changes from ProjectSZPH's master repo, and push up to your remote.
9. Pick up another issue!

# Set Up
You will need [Node.js](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/download-center#community). [Yarn package manager](https://yarnpkg.com/en/docs/install) is also recommended, but you can use [npm](https://www.npmjs.com/) as well. After pulling the project down to your computer, run either yarn install or npm install  


# Quality Rubric
Please follow the following guidelines--your code will not be merged to master if they are not met.

1. All functions should be small and serve one purpose.
2. Variables should be meaningfully named.
3. Add spaces between the beginning and end of the inside of your parentheses, square brackets, and curly braces.
4. Use two spaces, not tabs.
5. Write tests for your code and make sure they pass.
6. Please follow our linting guidelines.
7. 85% of tests should pass.
