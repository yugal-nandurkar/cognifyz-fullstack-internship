
```markdown
<!-- docs/DEPLOYMENT.md -->
# Deployment Guide

1. Clone repository
2. Install dependencies: `npm install`
3. Set environment variables in `.env`
4. Start services: `docker-compose up -d`
5. Run migrations: `npm run seed`
6. Start server: `npm start`

Required Environment Variables:
- MONGODB_URI
- JWT_SECRET
- STRIPE_KEY
- REDIS_URL