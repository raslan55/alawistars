# Bluehost Backend Deployment Guide

## Prerequisites
1. Bluehost account with Node.js support
2. MySQL database created in Bluehost cPanel
3. Domain/subdomain configured

## Step 1: Set up MySQL Database on Bluehost
1. Log into your Bluehost cPanel
2. Go to "Databases" → "MySQL Databases"
3. Create a new database (e.g., `yourusername_alawistars`)
4. Create a database user and assign it to the database
5. Note down:
   - Database name
   - Database username
   - Database password
   - Database host (usually `localhost`)

## Step 2: Update Environment Variables
Edit `backend/.env` with your Bluehost MySQL credentials:

```env
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DATABASE=your_bluehost_db_name
MYSQL_USER=your_bluehost_db_user
MYSQL_PASSWORD=your_bluehost_db_password
PORT=5000
NODE_ENV=production
```

## Step 3: Update Frontend API URL
In `src/services/blogService.js`, replace `yourdomain.com` with your actual domain:

```javascript
const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://your-actual-domain.com/api'
  : 'http://localhost:5000/api';
```

## Step 4: Deploy Backend to Bluehost
1. Upload the `backend/` folder to your Bluehost hosting directory
2. Use Bluehost's Node.js manager or SSH to install dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Run the database seeder (optional, for initial data):
   ```bash
   npm run seed
   ```
4. Start the server:
   ```bash
   npm start
   ```

## Step 5: Configure Domain/Subdomain
- If using a subdomain (e.g., `api.yourdomain.com`), configure it in cPanel
- Point the subdomain to your backend application
- Update CORS settings in `server.js` if needed for your domain

## Step 6: Test the Deployment
1. Test the API endpoints:
   - `GET https://yourdomain.com/api/blogs`
   - `POST https://yourdomain.com/api/blogs` (with blog data)
2. Test the admin panel in your frontend application
3. Verify blog posts are saved to the MySQL database

## Troubleshooting
- Check Bluehost error logs in cPanel
- Verify MySQL connection credentials
- Ensure Node.js version compatibility
- Check file permissions for the backend directory

## Security Notes
- Never commit `.env` file to version control
- Use strong database passwords
- Consider enabling SSL/HTTPS
- Regularly update dependencies