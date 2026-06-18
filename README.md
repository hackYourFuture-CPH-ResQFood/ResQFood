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
│   │   ├── footer/
│   │   ├── header/
│   │   └── navigation/
│   ├── map/
│   ├── product/
│   ├── store/
│   └── ui/
│       └── Card/
├── hooks/
├── mock/
├── public/
├── services/
├── styles/
│   ├── base/
│   └── theme/
└── utils/
```

- `app/` - Next.js app router pages, layouts, and route-specific files.
- `app/stores/` - Store-related routes.
- `app/stores/[id]/` - Dynamic route for an individual store page.
- `components/` - Reusable UI and feature components.
- `components/filter/` - Components for filtering store or product lists.
- `components/layout/` - Shared layout components used across pages.
- `components/layout/footer/` - Footer component and related styles.
- `components/layout/header/` - Header component and related styles.
- `components/layout/navigation/` - Navigation component and related styles.
- `components/map/` - Components related to map views and location display.
- `components/product/` - Components for product cards, lists, and product details.
- `components/store/` - Components for store cards, lists, and store details.
- `components/ui/` - Small shared UI building blocks such as buttons and inputs.
- `components/ui/Card/` - Reusable card component and its scoped styles.
- `hooks/` - Custom React hooks shared across the app.
- `mock/` - Mock data used for development before real API data is available.
- `public/` - Static assets served directly by Next.js.
- `services/` - API and data-fetching helpers.
- `styles/` - Shared styles and CSS module files.
- `styles/base/` - Base CSS files such as reset, typography, animations, and keyframes.
- `styles/theme/` - Theme-level CSS variables and default design values.
- `utils/` - General helper functions used across the project.

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
