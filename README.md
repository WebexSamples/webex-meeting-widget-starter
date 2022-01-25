# Webex React Meeting Widget Starter

The purpose of this project is to build off of the [Webex React OAuth Sample App](https://github.com/WebexSamples/webex-react-oauth-sample) and integrate the [Webex Meetings Widget](https://github.com/webex/widgets/tree/master/src/widgets/WebexMeetings).
The setup is a basic site that utilizes the implicit grant flow available for [Webex Integrations](https://developer.webex.com/docs/integrations).
Then, after authorizing the application, a meeting destination is entered and the Meeting Widget opens to that destination. Webex meeting destinations can be an email address, user ID, room ID or SIP address.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Live Demo

View the live demo here: https://webexsamples.github.io/webex-meeting-widget-starter/

## Project Setup

The project uses environment variables to configure the Webex API Integration.

### Usage with `.env`

Project configuration lives in a `.env` file. A sample `.env.sample` has been provided for ease of use. 
Rename the `.env.sample` file to `.env` and fill in your client ID provided from the [Webex Developer Portal](https://developer.webex.com/my-apps).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
