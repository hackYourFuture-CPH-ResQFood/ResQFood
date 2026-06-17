Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.jsx`. The page auto-updates as you edit the file.

## Project Structure

```text
ResQFood/
├── app/
│   └── stores/
│       └── [id]/
├── components/
│   ├── filter/
│   ├── layout/
│   ├── map/
│   ├── product/
│   ├── store/
│   └── ui/
├── hooks/
├── mock/
├── public/
├── services/
├── styles/
└── utils/
```

- `app/` - Next.js app router pages, layouts, and route-specific files.
- `app/stores/` - Store-related routes.
- `app/stores/[id]/` - Dynamic route for an individual store page.
- `components/` - Reusable UI and feature components.
- `components/filter/` - Components for filtering store or product lists.
- `components/layout/` - Shared layout components used across pages.
- `components/map/` - Components related to map views and location display.
- `components/product/` - Components for product cards, lists, and product details.
- `components/store/` - Components for store cards, lists, and store details.
- `components/ui/` - Small shared UI building blocks such as buttons and inputs.
- `hooks/` - Custom React hooks shared across the app.
- `mock/` - Mock data used for development before real API data is available.
- `public/` - Static assets served directly by Next.js.
- `services/` - API and data-fetching helpers.
- `styles/` - Shared styles and CSS module files.
- `utils/` - General helper functions used across the project.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
