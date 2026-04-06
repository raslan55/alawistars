# Railway Deployment Guide (Free Tier)

## 🚀 Why Railway?
- **Free MySQL database** included
- **Automatic deployments** from GitHub
- **Node.js support** out of the box
- **Environment variables** management
- **No credit card required**

## 📋 Step-by-Step Setup

### Step 1: Create Railway Account
1. Go to https://railway.app
2. Sign up with your GitHub account
3. Verify your email

### Step 2: Create Project
1. Click "New Project"
2. Choose "Deploy from GitHub repo"
3. Connect your `alawistars` repository
4. Railway will auto-detect Node.js and MySQL

### Step 3: Configure Environment Variables
In Railway dashboard → Variables tab, add:

```
MYSQL_HOST=${{ MYSQL_HOST }}
MYSQL_PORT=${{ MYSQL_PORT }}
MYSQL_DATABASE=${{ MYSQL_DATABASE }}
MYSQL_USER=${{ MYSQL_USER }}
MYSQL_PASSWORD=${{ MYSQL_PASSWORD }}
PORT=5000
NODE_ENV=production
```

### Step 4: Update Frontend API URL
Your frontend is at `https://alawistars.com/`, so update `src/services/blogService.js`:

```javascript
const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://alawistars-backend.railway.app/api'  // Your Railway backend URL
  : 'http://localhost:5000/api';
```

### Step 5: Update CORS
Your backend `server.js` is already configured to allow requests from `alawistars.com`:

```javascript
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? ['https://alawistars.com', 'https://www.alawistars.com', 'https://alawistars-backend.railway.app']
    : 'http://localhost:3000',
  credentials: true
}));
```

### Step 6: Deploy
1. Push your code changes to GitHub
2. Railway automatically deploys
3. Get your app URL from Railway dashboard (looks like: `https://alawistars-production.up.railway.app`)

### Step 7: Test
1. Visit `https://your-app-name.railway.app/api/blogs`
2. Should return empty array `[]` or seeded data
3. Test admin blog creation from your frontend

## 🔧 Troubleshooting

### Database Connection Issues:
- Check Railway variables are set correctly
- Railway provides database credentials automatically

### Build Failures:
- Ensure `package.json` has correct scripts
- Check Railway build logs

### API Not Responding:
- Verify the Railway URL in your frontend
- Check Railway deployment status

## 📊 Railway Free Tier Limits:
- 512MB RAM
- 1GB storage
- MySQL included
- 100 hours/month (resets monthly)

## 🚀 Upgrade Path:
When you need more resources:
- Upgrade to Pro plan ($5/month)
- Keeps same URL and database

## 💡 Pro Tips:
- Railway URLs are permanent (don't change on redeploy)
- Use Railway's database dashboard to view data
- Enable auto-deploy for seamless updates

Need help with any specific step?