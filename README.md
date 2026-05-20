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
   If MongoDB is not available locally yet, the app still runs and stores contact
   messages in `server/data/contact-messages.json` during development.

4. Run the full MERN app:

```bash
npm run dev
```

The frontend runs on `http://localhost:5173`.
The backend runs on `http://localhost:5000`.

## Database Setup

For local development, the default `.env` points to:

```env
MONGO_URI=mongodb://127.0.0.1:27017/akshay-portfolio
```

If MongoDB is not running, the server automatically falls back to local JSON
storage so you can keep working. For deployment, use MongoDB Atlas and set:

```env
REQUIRE_MONGO=true
MONGO_URI=your_mongodb_atlas_connection_string
```

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
