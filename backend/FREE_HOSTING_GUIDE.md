# Free Hosting Options for Node.js Backend

## 🚀 Railway (Recommended)
**Free Tier**: 512MB RAM, 1GB storage, MySQL included
**URL**: https://railway.app

### Setup Steps:
1. Sign up with GitHub
2. Connect your repository
3. Railway auto-detects Node.js and MySQL
4. Set environment variables in Railway dashboard
5. Deploy automatically

### Environment Variables for Railway:
```
MYSQL_HOST=containers-us-west-xxx.railway.app
MYSQL_PORT=xxxx
MYSQL_DATABASE=railway
MYSQL_USER=root
MYSQL_PASSWORD=your_password
PORT=5000
NODE_ENV=production
```

## 🌐 Render
**Free Tier**: 750 hours/month, static sites + web services
**URL**: https://render.com

### Setup Steps:
1. Connect GitHub repository
2. Choose "Web Service"
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables
6. Deploy

## ✈️ Fly.io
**Free Tier**: 3 shared CPUs, 256MB RAM, 1GB storage
**URL**: https://fly.io

### Setup Steps:
1. Install Fly CLI
2. Run `fly launch` in your backend directory
3. Configure for Node.js
4. Add MySQL database with `fly postgres create`
5. Deploy

## 🛠️ Alternative Free Options:

### PlanetScale + Vercel
- **PlanetScale**: Free MySQL database
- **Vercel**: Free serverless functions
- Convert your Express API to serverless functions

### Supabase
- **Free PostgreSQL** (not MySQL)
- **Edge Functions** for serverless
- Would need to modify code for PostgreSQL

### Glitch
- **Free Node.js hosting**
- **Built-in editor**
- Limited MySQL support

## 📋 Quick Migration Guide (Railway Recommended)

### 1. Update Environment Variables
Replace your `.env` with Railway credentials:
```env
MYSQL_HOST=containers-us-west-xxx.railway.app
MYSQL_PORT=xxxx
MYSQL_DATABASE=railway
MYSQL_USER=root
MYSQL_PASSWORD=your_generated_password
PORT=5000
NODE_ENV=production
```

### 2. Update Frontend API URL
In `src/services/blogService.js`:
```javascript
const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://your-railway-app.railway.app/api'
  : 'http://localhost:5000/api';
```

### 3. Update CORS
In `backend/server.js`:
```javascript
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? ['https://your-frontend-domain.com', 'https://your-railway-app.railway.app']
    : 'http://localhost:3000',
  credentials: true
}));
```

### 4. Deploy Steps:
1. Push code to GitHub
2. Connect Railway to your repo
3. Railway auto-deploys
4. Get your app URL from Railway dashboard
5. Update frontend with the new API URL

## ⚡ Railway Advantages:
- ✅ MySQL included (no separate database setup)
- ✅ Automatic deployments from Git
- ✅ Environment variable management
- ✅ Easy scaling later
- ✅ Good free tier limits

Would you like me to help you set up Railway deployment?