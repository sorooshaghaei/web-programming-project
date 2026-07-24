<div align="center">

# EventHub

A full-stack event discovery and registration platform.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Open_EventHub-2ea44f?style=for-the-badge)](https://sorooshaghaei.github.io/web-programming-project/)
[![Sponsor](https://img.shields.io/badge/Sponsor-GitHub_Sponsors-ea4aaa?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/sorooshaghaei)

</div>

## About

EventHub was originally developed as a **collaborative university project**. It provides event browsing, participant management, registrations, authentication, and administrative tools.

The public GitHub Pages version is a read-only demo with sample data, so it works without a backend or account.

## Features

- Event directory with search, filters, capacity, and status
- Participant and registration management
- JWT authentication and role-based access
- Responsive interface with light and dark themes
- Two backend implementations using Django and Express

## Stack

- **Frontend:** React 19, Vite
- **Backend:** Django REST Framework or Node.js/Express
- **Database:** SQLite
- **Deployment:** GitHub Pages for the public demo

## Project structure

```text
frontend/   React application
backend/    Django REST API
node/       Express REST API
report/     Project report
```

## Run locally

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Django backend

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cd backend
python manage.py migrate
python manage.py runserver
```

### Express backend

Requires Node.js 22.

```bash
cd node
npm install
npm run dev
```

## Project credit

The original application was produced collaboratively, and credit belongs to all original contributors. The current public demo, deployment configuration, and repository presentation are managed through this fork.

## Sponsorship

GitHub sponsorships from this repository are paid to [@sorooshaghaei](https://github.com/sorooshaghaei) and support their independent work on the public demo, deployment, documentation, and future maintenance. Sponsorship income is not automatically distributed among the original project collaborators.

[Open the live demo](https://sorooshaghaei.github.io/web-programming-project/) · [Sponsor on GitHub](https://github.com/sponsors/sorooshaghaei)
