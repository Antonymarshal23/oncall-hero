# OnCall Hero

## Project Name
OnCall Hero

## Project Type
This is a Call-E based appointment booking project where an AI calling agent makes phone calls to schedule appointments automatically.

## What This Project Does
The project integrates with the Call-E API to initiate outbound calls for appointment booking. It can pass customer, provider, time, and booking details to an AI agent that handles the call flow and returns the result.

## Tech Stack
- Node.js
- TypeScript
- Express
- TypeORM
- Call-E API (`@call-e/calle`)
- Redis
- BullMQ
- Swagger
- dotenv

## Main Idea
This application is not just a normal web app. It is an appointment automation backend where a voice agent calls the customer or provider to confirm or schedule an appointment using Call-E.

## Prerequisites
- Node.js installed
- npm installed
- Redis running (if used by the app)
- Database configured for TypeORM
- Call-E API key in `.env`

## Environment Setup
Create a `.env` file with values like:

```env
PORT=3000
CALLE_API_KEY=your_call_e_api_key
APP_HOST=localhost
APP_SCHEMA=http
APP_PORT=3000
APP_ROUTE_PREFIX=/api
TYPEORM_CONNECTION=mysql
TYPEORM_HOST=localhost
TYPEORM_PORT=3306
TYPEORM_USERNAME=root
TYPEORM_PASSWORD=password
TYPEORM_DATABASE=oncallhero
JWT_SECRET=your_jwt_secret
REDIS_URL=redis://localhost:6379
```

## How to Start the Project

1. Install dependencies
```bash
npm install
```

2. Start the app
```bash
npx nps serve
```

3. Or run directly after build
```bash
npx tsc --project tsconfig.json
node dist/src/app.js
```

## Useful Commands
```bash
npx nps build
npx nps db.migrate
npx nps db.seed
```

## Summary
OnCall Hero is a Call-E powered appointment booking backend using an AI calling agent to automate scheduling and customer communication.
