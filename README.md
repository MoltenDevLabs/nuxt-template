# Nuxt 3 template

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation-and-setup)
  - [Project Minimal Starter](#project-minimal-starter)
  - [Deploy on Netlify Setup](#deploy-on-netlify-setup)
  - [Supabase Integration](#supabase-integration)

## Project Overview

Welcome to the Nuxt 3 template that sets your project up for success with lightning speed. This meticulously crafted template comes equipped with essential modifications to kickstart your project efficiently.

Here's a breakdown of the key enhancements:

- **Tailwind CSS:** Elevate your project's aesthetics and user experience with the robust styling capabilities of Tailwind CSS. This also includes Tailwind Typography for seamless typography control.
- **Pinia:** Say goodbye to Vue application state management woes. Pinia is your trusty companion, featuring two preconfigured stores: one for user management and another for theme management, complete with a slick dark mode integration.
- **Google fonts:** Customize your project's typography effortlessly by simply selecting your preferred Google font and adding it to your project. Plus, enjoy seamless integration with Material Icons.
- **Supabase:** Power your project with Supabase, a top-tier backend technology that takes care of data management, security, and scalability. With Supabase, you can count on impeccable performance and dependable data handling.
- **Icons:** Easily incorporate icons into your project with preconfigured support for smooth icon usage.
- **Color mode:** Experience seamless transitions between light and dark modes, enhancing user accessibility and visual appeal.
- **Device:** Ensure your web app looks impeccable on all devices. With convenient variables like $device.isMobile, $device.isTablet, and $device.isDesktop, achieving responsive design is a breeze.

This template is your go-to solution for a swift and successful project launch. Get ready to impress your audience with outstanding design, smooth functionality, and remarkable user experiences.

## Tech Stack

The project leverages a cutting-edge tech stack to deliver a seamless and feature-rich experience. Here are the key technologies used:

- **HTML5:** The foundational markup language ensuring a modern and robust app structure.
- **Tailwind CSS:** A powerful styling tool that adds elegance and responsiveness to the app's design, enhancing user experience.
- **Vue and Nuxt 3:** Dynamic JavaScript frameworks that provide flexibility, interactivity, and speed, resulting in a seamless and engaging user interface.
- **Supabase:** As the backend technology, Supabase empowers the app with data management, security, and scalability, ensuring smooth performance and reliable data handling.
- **Netlify:** The chosen deployment platform, known for its efficiency and hassle-free delivery of the app to users.

## Installation & Setup

To get started with the Coral Mussòlidaria Reus Mobile App, follow these setup instructions.

### Project Minimal Starter

To install the necessary dependencies, run the following command:

```bash
npm install
```

## Deploy on netlify setup

Update your package.json with the following script for Netlify deployment:

"scripts": {
"predeploy": "npm run build"
}

Create a netlify.toml file and include the following code:

[build]
command = "npm run generate"
publish = "dist"

## Supabase Integration

If your project includes Supabase, make the following configurations:

Update nuxt.config.ts
Add the following code to your nuxt.config.ts file:

supabase: {
redirect: false,
url: process.env.SUPABASE_URL,
key: process.env.SUPABASE_KEY,
},
runtimeConfig: {
public: {
supabaseUrl: process.env.SUPABASE_URL,
},
private: {
supabaseKey: process.env.SUPABASE_KEY,
},
}

Create a .env file with your Supabase information:

SUPABASE_URL="https://someUrl.supabase.co"
SUPABASE_KEY="someKey"

With these steps, you'll be well-prepared to run and deploy the Coral Mussòlidaria Reus Mobile App.
