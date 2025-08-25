# CommonTea

A social networking platform with automated content moderation and context-based authentication system.
## Landing Page
![UI-community](/info/landing.png)
## Login Page
![LoginPage](/info/login.png)

## Profile Page
![Profile](/info/Profile.png)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Usage](#usage)

## Project Overview

The commontea project aspires to build a secure, engaging, and user-centric social networking platform designed to foster meaningful connections and thoughtful interactions among users. In today’s fast-paced digital era, where social media has become an essential tool for communication,information sharing, and community engagement, the need for a safe and reliable platform is more pressing than ever. CommonTea addresses this by prioritizing user safety, data privacy, and content quality at every level of the user experience.

### Objective of Project

The primary objective of the CommonTea project is to design and develop a modern, secure,
and user-oriented social networking platform that champions genuine digital interaction,
inclusivity, and well-regulated content sharing. In an age where digital communication forms a
cornerstone of personal expression, community building, and information dissemination, it is
increasingly critical to offer an online space that values authenticity, privacy, and responsibility.
Many existing platforms struggle with challenges such as algorithm-driven misinformation,
cyberbullying, privacy violations, and intrusive advertising. CommonTea aims to address these
challenges head-on by offering a fresh, ethical alternative focused on transparency, trust, and
community-driven engagement.

### User Roles

There are three distinct user roles within the system:

1. Admin: The admin role manages the overall system, including moderator management, community management, content moderation, monitoring user activity, and more.
2. General Users: General users have the ability to make posts, like comments, and perform other actions within the platform.

## Features

- [x] User authentication and authorization (JWT)
- [x] User profile creation and management
- [x] Post creation and management
- [x] Commenting on posts
- [x] Liking posts and comments
- [x] Following/unfollowing users
- [x] Reporting posts
- [x] Admin dashboard
- [x] Email notifications

## Technologies

- React.js
- Redux
- Node.js
- Express.js
- MongoDB
- Tailwind CSS
- JWT Authentication
- Passport.js
- Nodemailer
- Crypto-js

## Getting Started

### Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- MongoDB or MongoDB Atlas account

### Installation

1. Clone the repository

```bash
git clone https://github.com/Sahil0420/commontea.git
```

2. Go to the project directory and install dependencies for both the client and server

```bash
cd client
npm install
```

```bash
cd server
npm install
```

3. Create a `.env` file in both the `client` and `server` directories and add the environment variables as shown in the `.env.example` files.
4. Start the server

```bash
cd server
npm start
```

5. Start the client

```bash
cd client
npm start
```

### Configuration

Run the `admin_tool.sh` script from the server directory with permissions for executing the script. This script is used for configuring the admin account, creating the initial communities, and other settings.

```bash
./admin_tool.sh
```

#### `.env` Variables

For email service of context-based authentication, the following variables are required:

```bash
EMAIL=
PASSWORD=
EMAIL_SERVICE=
```


## Usage

### Admin

The admin dashboard can be accessed at the `/admin` route. Use the `admin_tool.sh` script to configure the admin account. The admin account can be used to manage moderators, communities, and perform other admin-related tasks. You can also enable/disable or switch API services using the admin dashboard.