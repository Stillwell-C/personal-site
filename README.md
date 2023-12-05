# Portfolio Site

This repository is the front end of my portfolio website.

## View Site

https://stillwell-christopher.vercel.app/

## Description

### Overview

- Built with Typescript front/back ends.
- Reponsive, mobile-first UI
- React front end
- Tailwind CSS
- Framer Motion used for animations
- A11y-friendly smooth scroll

### Detailed Description

This is a single page application to show my portfolio.

#### UI

The UI was designed to be responsive with mobile-first design principles. Tailwind CSS was used to style all components. [Framer Motion](https://www.framer.com/motion/) was used for most animations on the site and some animations differ between the mobile and larger-screen versions of this site for optimal user experience. [Lenis Scroll](https://lenis.studiofreight.com/) was used to allow for smooth scrolling while still ensuring that the site remained accessible.

The hero animation is procedurally generated and displayed using an HTML canvas element. On browsers that allow for mouse over, there is a slight glow when you mouse over the intersection points of the lines. I like what this element adds to the site; however, on extremely large screens, it may have a negative impact on site performance.

#### API

The backend for this site is an extremely simple Express.JS REST API with a single endpoint for handling form submissions. The front end uses Axios to send a request to this endpoint, and the API uses the [Nodemailer](https://nodemailer.com/) package to send an email to my inbox with the content of the submission.

The [cors](https://www.npmjs.com/package/cors) package is used to only allow requests from specific origins. In this case, I am only allowing requests originating from the front end.

## Built with

### Frontend

- React
- Typescript
- React Router
- Axios
- Tailwind CSS
- Framer Motion
- Lenis Scroll

### Backend

- Node.js
- Express.js
- Nodemailer
