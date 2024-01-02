# Welcome to Gallery Visualizer 👓

This project is developed using React, TypeScript, Redux Toolkit, SASS, and Material UI components. It fetches and displays data from the Imgur API, specifically from the Gallery and Images endpoints.

## Getting Started

Before running this project, please ensure you add the necessary environment variables for a proper use of the API.

1. Create an `.env` file and add the environment variables that have already been provided to you.
2. To install the required packages, run `yarn install`.
3. To start the project, execute `yarn run dev`.
4. Make sure you have an updated node version.
5. Once running, check your console where, next to the 'Network' label, you will find the URL where the project is running.

Please make sure to enter in the network URL and not the localhost URL (imgur doesn't allow requests coming from localhost).

This project is responsive and can be viewed on both desktop and mobile devices.

## Live Demo

This project is deployed and can be accessed at the following URL: [Gallery Explorer Live Demo](https://gallery-explorer.vercel.app/).

Feel free to interact with the live version of the project to get a better sense of it's features and functionalities.

## Key Features and Development Insights

**Lazy Loading**:

- For images, this project leverages the native browser functionality for lazy loading.
- For videos, I've implemented the browser's Intersection Observer API to ensure they load only when in the viewport, enhancing the user experience.

**Styling**:

- I have utilized Material UI components for their intuitiveness and compatibility with the page's aesthetics.
- For additional styling, I'm using SASS, naming classes according to the BEM methodology. This approach, combined with the power of SASS to declare variables, mixins, and other reusable styles, provides convenience and flexibility throughout the application.

**Filter Logic**:

- According to the [Imgur documentation](<https://apidocs.imgur.com/#eff60e84-5781-4c12-926a-208dc4c7cc94:~:text=viral%20%7C%20top%20%7C%20time%20%7C%20%7C%20rising%20(only%20available%20with%20user%20section).%20Defaults%20to%20viral>), the 'rising' filter should be enabled only when the 'user' section is selected. I have implemented this logic on the frontend to prevent any errors when mixing filters.

## Note on Unit Testing

Despite my best efforts to deliver a complete project, I have to report that this challenge doesn't include unit testing. The implementation of unit tests was a component of this project that I was unable to accomplish at this time.

This limitation was due to both time constraints and my current familiarity with these testing frameworks. But I am committed to continue learning.

Thanks. Looking forward to any feedback you may have!

Greetings and all the best!
