Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.jsx`. The page auto-updates as you edit the file.

## Project Structure

```text
ResQFood/
├── app/
│   ├── mockData/
│   └── stores/
│       └── [id]/
│           └── product/
│               └── [productId]/
├── components/
│   ├── AreaCodeSearch/
│   ├── AreaCodeSearchSection/
│   ├── fallback-image/
│   ├── filter/
│   ├── FrontpageBanner/
│   ├── geolocation/
│   ├── infoSteps/
│   ├── layout/
│   │   ├── footer/
│   │   └── PageHeader/
│   ├── logoAnimation/
│   ├── PriceTag/
│   ├── ProductGrid/
│   ├── product/
│   ├── storeCard/
│   ├── storeList/
│   └── ui/
│       ├── BackLink/
│       ├── Badge/
│       ├── Button/
│       ├── Card/
│       ├── Carousel/
│       ├── Icon/
│       ├── InfoList/
│       ├── Logo/
│       ├── Message/
│       ├── SearchInput/
│       ├── Skeleton/
│       ├── Spinner/
│       └── StoreAvatar/
├── hooks/
├── public/
├── services/
├── styles/
│   ├── base/
│   ├── layout/
│   └── theme/
└── utils/
```

- `app/` - Next.js App Router entry points, global layout, error states, and route files.
- `app/mockData/` - Local fallback datasets used when `USE_REAL_DATA=false`.
- `app/stores/` - Store results page shown after zip-code search or geolocation lookup.
- `app/stores/[id]/` - Dynamic store details route with store header and product list.
- `app/stores/[id]/product/[productId]/` - Dynamic product details route for a selected product inside a store.

- `components/` - Feature-level and reusable presentation components.
- `components/AreaCodeSearch/` - Zip-code search wrapper built around the shared `SearchInput`.
- `components/AreaCodeSearchSection/` - Landing-page section composition for area-code search flow.
- `components/fallback-image/` - Image fallback handling for missing or broken product/store images.
- `components/filter/` - Filter controls reused for store lists and product categories.
- `components/FrontpageBanner/` - Hero banner content on the home page.
- `components/geolocation/` - "Use my location" interaction and geolocation status feedback.
- `components/infoSteps/` - Guided "how it works" steps on the landing page.
- `components/layout/` - Global shell elements used across routes.
- `components/layout/footer/` - Footer content rendered from root layout.
- `components/layout/PageHeader/` - Top page header with logo and navigation context.
- `components/logoAnimation/` - Intro/brand animation shown on the front page.
- `components/PriceTag/` - Discount/price labeling visuals for offers.
- `components/ProductGrid/` - Grid renderer for product card collections with loading states.
- `components/product/` - Product-level components: card, detail card, search, and product section orchestration.
- `components/storeCard/` - Store summary card used on store and product detail pages.
- `components/storeList/` - Store listing, formatting helpers, and store list layout.
- `components/ui/` - Small reusable primitives used throughout the app.
- `components/ui/BackLink/` - Back navigation control for details pages.
- `components/ui/Badge/` - Status and metadata badge component.
- `components/ui/Button/` - Shared button styles and behavior.
- `components/ui/Card/` - Generic card surface used by feature components.
- `components/ui/Carousel/` - Reusable horizontal carousel interactions.
- `components/ui/Icon/` - Centralized icon rendering.
- `components/ui/InfoList/` - Home-page informational bullet list.
- `components/ui/Logo/` - Brand logo component and variants.
- `components/ui/Message/` - Inline status/error message component.
- `components/ui/SearchInput/` - Reusable search input with icon, validation, and action trigger.
- `components/ui/Skeleton/` - Loading placeholders for async content.
- `components/ui/Spinner/` - Spinner indicator for waiting states.
- `components/ui/StoreAvatar/` - Brand/store avatar representation.

- `hooks/` - Custom hooks for geolocation and store/product filtering logic.
- `public/` - Static assets served directly by Next.js.
- `services/` - API client, error handling, and food-waste data access layer.
- `styles/` - Global and modular styling entry points.
- `styles/base/` - Base design layers: reset, typography, utilities, keyframes, animations, and page styles.
- `styles/layout/` - Shared page-level layout styles.
- `styles/theme/` - Theme tokens and brand/semantic CSS variables.
- `utils/` - Pure helper utilities for formatting, filtering, search, status, and date/time calculations.




✅ Definition of Done Done
A task is only Done Done when:
The feature works locally.
The code is pushed to a feature branch.
A Pull Request into development is opened.
The PR has a clear title and description.
The feature PR has at least 1 approval.
The Trello card shows reviewer names.
All review comments are resolved.
The code is merged into development.
For release work, development is merged into main with 2 approvals.
Vercel deployment works.
The feature works on a real mobile device.
The Trello card is moved to Done Done.
🚨 Hotfix Rules
A hotfix is an urgent fix for something broken on main.
Hotfix branches use this format:
development/your-name/hotfix-issue-name

Example:
development/reza/hotfix-vercel-deployment

Hotfix rules:
Keep it very small.
Fix only the urgent issue.
Still use a Pull Request.
Get 2 reviewers if possible.
Notify the team on Slack immediately.
🔐 Git Security Rules
Never commit private environment files or API keys.
.gitignore must include:
.env
.env.local
.next
node_modules
.DS_Store

Only .env.example should be committed.
If an API key is accidentally committed:
Stop immediately.
Tell the team and mentors.
Remove the key from the repository.
Rotate the API key.
Check Git history.
Do not continue until fixed.
🗓️ Project Timeline
Date
Milestone
June 14, 2026
Project kickoff, team roles, repo setup, Trello setup
June 16, 2026
Online standup 1
June 21, 2026
Week 2 begins: core features
June 23, 2026
Online standup 2
June 28, 2026
Week 3 begins: quality and polish
June 30, 2026
Online standup 3
July 5, 2026
Code freeze: bug fixes only
July 7, 2026
Online standup 4
July 12, 2026
Project hand-in and graduation demo

👥 Team M2A2
Name
Role
Mila
Scrum Master · QA
Reza
Deployment Specialist · Dependency Manager · Git Support · QA
Matea
Git Specialist · QA Lead
Ahmad
Design Leader

All team members contribute to coding, testing, reviewing, and improving the final product.
📜 Data Partner Credit
Store, food-waste, and holiday data is provided by Salling Group through their developer API.
Salling Group operates major Danish retail brands including Bilka, Føtex, Netto, and Salling.
Developer portal:
https://developer.sallinggroup.com

🤝 Contributing
This project was built as a student capstone project for HackYourFuture Denmark. It is not currently open for external contributions, but feel free to fork it, learn from it, or reach out to the team.
📄 License
This project is open source under the MIT License.

Built with 💚 by Team M2A2 — HackYourFuture Denmark, June–July 2026.
