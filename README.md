<div align="center">

# EventHub

### A full-stack event discovery and registration platform

Browse events, manage participant records, track registrations, and maintain schedules from one responsive workspace.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Open_EventHub-2ea44f?style=for-the-badge)](https://sorooshaghaei.github.io/web-programming-project/)
[![Sponsor](https://img.shields.io/badge/Sponsor-Support_the_project-ea4aaa?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/sorooshaghaei)

[![React](https://img.shields.io/badge/React-19-20232a?logo=react)](frontend/)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=white)](frontend/)
[![Django](https://img.shields.io/badge/Django-5.2-092e20?logo=django)](backend/)
[![Express](https://img.shields.io/badge/Express-4-000000?logo=express)](node/)
[![GitHub Pages](https://img.shields.io/badge/Demo-GitHub_Pages-222222?logo=github)](https://sorooshaghaei.github.io/web-programming-project/)

</div>

---

## Try it now

The public GitHub Pages build opens directly into a **read-only demonstration workspace** with realistic sample data. It requires no account and no backend server.

### [Open the live EventHub demo →](https://sorooshaghaei.github.io/web-programming-project/)

The demo lets visitors inspect the dashboard, event directory, event details, participant records, responsive navigation, filtering, statuses, and light/dark interface. Editing is intentionally disabled because GitHub Pages hosts static files only.

## What EventHub does

- Presents upcoming events with searchable and filterable views.
- Classifies events as **Open**, **Soon**, **Today**, or **Full**.
- Maintains a reusable participant directory without duplicate profiles.
- Connects participants and events through registration records.
- Prevents duplicate registration for the same participant and event.
- Supports confirmed, pending, and cancelled registration states.
- Provides JWT authentication and role-based administration in the full-stack version.
- Offers responsive layouts and persistent light/dark themes.

## Product views

| Area | Purpose |
| --- | --- |
| Dashboard | At-a-glance event, participant, capacity, and registration metrics |
| Events | Search, filter, inspect, create, edit, and remove event schedules |
| Event details | Review capacity, schedule information, and linked registrations |
| Participants | Search and maintain participant records across multiple events |
| Authentication | Registration, login, token refresh, and protected application routes |

## Architecture

```mermaid
flowchart LR
    Browser[Browser] --> Frontend[React 19 + Vite]
    Frontend --> API[Shared REST API contract]
    API --> Django[Django REST Framework]
    API --> Express[Node.js + Express]
    Django --> DB1[(SQLite)]
    Express --> DB2[(SQLite)]

    Pages[GitHub Pages demo] --> DemoData[Local read-only sample data]
    DemoData --> Frontend
```

The repository contains two independent backend implementations exposing the same core event-management concepts. This makes the project useful both as a working application and as a comparison of backend approaches.

## Repository structure

```text
web-programming-project/
├── frontend/   React 19 and Vite user interface
├── backend/    Django REST Framework API
├── node/       Node.js and Express comparative API
├── report/     LaTeX academic report workspace
└── .github/    GitHub Pages deployment and funding configuration
```

## Run locally

### 1. Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend uses `http://localhost:8000/api` by default. To connect another API:

```bash
VITE_API_BASE_URL=http://localhost:3001/api npm run dev
```

### 2. Django API

From the repository root:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cd backend
python manage.py migrate
python manage.py runserver
```

The Django API is available at `http://localhost:8000/api/`.

Create an administrator account with:

```bash
python manage.py createsuperuser
```

### 3. Express API

The comparative Express backend requires Node.js 22.

```bash
cd node
npm install
npm run dev
```

The Express API is available at `http://localhost:3001/api/`.

## Build and deployment

Build the frontend locally:

```bash
cd frontend
npm ci
npm run build
npm run preview
```

Every relevant push to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy-pages.yml`. The workflow builds the read-only demo and publishes `frontend/dist` to GitHub Pages.

For a public **full-stack** installation, deploy the React frontend and one backend implementation separately, then set `VITE_API_BASE_URL` to the public API URL. The Django backend includes Gunicorn, WhiteNoise, CORS configuration, JWT authentication, and an optional persistent SQLite path for hosted environments.

## API domains

The full-stack application works with these primary resources:

```text
/api/auth/
/api/events/
/api/participants/
/api/registrations/
```

The frontend centralizes API access and token refresh so page components remain focused on product behavior and presentation.

## Support development

EventHub is maintained as an open development and portfolio project. Financial support can help cover hosting, testing, design work, and continued feature development.

[![Sponsor on GitHub](https://img.shields.io/badge/Sponsor_on_GitHub-ea4aaa?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/sorooshaghaei)

GitHub displays the repository-level **Sponsor** button from `.github/FUNDING.yml` after the maintainer's GitHub Sponsors profile is approved and activated.

## Contributing

Focused bug reports and pull requests are welcome. Before proposing a large feature, open an issue describing the user problem, expected behavior, and affected frontend or backend area.

## Project background

EventHub began as an integrated Web Programming 2026 project and was subsequently prepared as a public, deployable portfolio demonstration. The public demo emphasizes immediate product inspection, while the repository retains the complete React, Django, Express, database, and report workspaces.

---

<div align="center">

Maintained by [@sorooshaghaei](https://github.com/sorooshaghaei)

[Live demo](https://sorooshaghaei.github.io/web-programming-project/) · [Repository](https://github.com/sorooshaghaei/web-programming-project) · [Sponsor](https://github.com/sponsors/sorooshaghaei)

</div>
