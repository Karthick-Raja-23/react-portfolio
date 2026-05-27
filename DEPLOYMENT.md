# Deployment

## Static portfolio

Use Vercel or Netlify for the React portfolio.

### Vercel

1. Push `react-portfolio` to GitHub.
2. In Vercel, choose **Add New Project** and import the repo.
3. Keep the defaults:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

### Netlify

1. Push `react-portfolio` to GitHub.
2. In Netlify, choose **Add new site > Import an existing project**.
3. Use:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy.

## Contact form API

The frontend reads the backend URL from `VITE_API_BASE_URL`.

For local development, copy `.env.example` to `.env` and keep:

```env
VITE_API_BASE_URL=http://localhost:5000
VITE_MESSAGES_PASSWORD=change-this-password
```

For production, host the backend separately and set:

```env
VITE_API_BASE_URL=https://your-backend-url.example.com
VITE_MESSAGES_PASSWORD=your-production-password
```

Without `VITE_API_BASE_URL`, the static portfolio still deploys, but the contact form will show a setup message instead of trying to call `localhost`.

The backend reads database settings from environment variables. Use `backend/.env.example` as the list of variables to set on your backend host.
