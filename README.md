Next.js E-commerce Shoe Store
====================================

This is an e-commerce website for selling shoes built using Next.js, TypeScript, Tailwind CSS, Strapi headless CMS, and Redux for state management.

Features
--------

-   Adding and removing products to/from the cart
-   Checkout process with payment using Stripe
-   Admin dashboard for managing products, orders, and users

Tech Stack
----------

-   Next.js: A React-based framework for building server-side rendered (SSR) web applications
-   TypeScript: A superset of JavaScript with static type checking
-   Tailwind CSS: A utility-first CSS framework for rapid UI development
-   Strapi: A headless CMS with RESTful API and admin dashboard
-   Stripe: A payment processing platform
-   Redux: A predictable state container for JavaScript apps

Getting Started
---------------

### Prerequisites

-   Node.js (v14 or higher)
-   Yarn or npm package manager

### Installation

1.  Clone the repository:

    `git clone https://github.com/The-Developers-Den/shoe-store.git
    cd shoe-store`

2.  Install the dependencies:

    `yarn install`

    or

    `npm install`

3.  Set up the environment variables:

    -   Create a `.env.local` file in the root directory of the project.

    -   Add the following variables and replace the placeholders with your own values:


        `NEXT_PUBLIC_STRAPI_API_TOKEN=<STRAPI_API_URL>
        STRIPE_PUBLIC_KEY=<STRIPE_PUBLIC_KEY>`

4.  Start the development server:

    `yarn dev`

    or

    `npm run dev`

5.  Open your browser and navigate to `http://localhost:3000`.
