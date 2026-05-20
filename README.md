# MERN Portfolio | Akshay Bankar

Personal portfolio rebuilt with the MERN stack:

- MongoDB stores contact form messages.
- Express and Node.js expose the backend API.
- React powers the frontend UI.
- Vite runs the React development server.

## Project Structure

```text
client/         React frontend
server/         Express API and MongoDB models
public/         Static assets used by the frontend
```

## Local Setup

1. Install dependencies:

```bash
npm run install-all
```

2. Create a server environment file:

```bash
copy server\.env.example server\.env
```

3. Update `server/.env` with your MongoDB connection string.

4. Run the full MERN app:

```bash
npm run dev
```

The frontend runs on `http://localhost:5173`.
The backend runs on `http://localhost:5000`.

## Useful Commands

```bash
npm run client
npm run server
npm run build
npm start
```

## API Routes

```text
GET  /api/health
POST /api/contact
```

`POST /api/contact` accepts:

```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "message": "Your message"
}
```
