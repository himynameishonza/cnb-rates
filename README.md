# cnb-rates

Homework and showcase for Momence.com

## Install and run local dev server (localhost:8080):

`yarn`

`yarn run dev`

## Build and TypeScript check:

`yarn build`

`yarn tsc`

## Deploy to Vercel (require credentials):

`vercel --prod`

## Production environment:

[https://cnb-rates.vercel.app/](https://cnb-rates.vercel.app/)

## Tech stack

-   React
-   Next JS
-   Sass + Styled Components
-   Vercel (for deployment)

## Modules used in this project:

-   lint
-   next
-   prettier
-   react
-   react-currency-flags
-   react-currency-format
-   react-dom
-   react-query
-   sass
-   styled-components

## Comments

I've started this project using Next JS framework. Even though there is no need for it in lot of projects, I am always using it instead of clean create-react-app since it offers lot of handy tooling that can be very usefull in later stages of development.

In my previous employment we were switching from JS and Reason to Typescript so I've decided to use it here as well.

In most of the projects I am using classic Sass modules since I preffer clean separation of JS/JSX and stylesheets, so my usage of styled-components might not be by-the-books. However it was great to revisit styled-components and see there is a very good reason for using them. Designing and styling was the fastest part of this project (approx. 1-2 hours)

Since my background is more towards product design, I've spent most of the time on the SSR/CSR/CORS issues (5 hours, most of it was spent on learning and reading documentation).

Parsing of the txt file was also relatively time consuming (approx. 2 hours), I know there any many libraries that would help me with this, but I just wanted to write it myself.

Code is not covered by any tests since my knowledge of test writing is very limited.
