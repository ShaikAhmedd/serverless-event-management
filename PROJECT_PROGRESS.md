# 🚀 EventHub - Project Progress

## Project Overview

EventHub is a serverless event management application built on AWS.

Users will be able to:

- Register and login
- Browse events
- Register for events
- Upload profile pictures
- Receive confirmation emails

Administrators will be able to:

- Create events
- Update events
- Delete events
- View registrations

---

# 🏗️ Architecture

```
Browser
   │
   ▼
Amazon Cognito
   │
JWT Authentication
   │
   ▼
API Gateway
   │
   ▼
AWS Lambda
   │
   ▼
Amazon DynamoDB
   │
 ┌─┴───────────┐
 ▼             ▼
Amazon S3   Amazon SES
```

---

# ✅ Completed

## AWS Setup

- [x] AWS CLI configured
- [x] Git installed
- [x] VS Code setup
- [x] GitHub repository created

---

## Database

- [x] Users table
- [x] Events table
- [x] Registrations table

---

## Authentication

- [x] Cognito User Pool created

---

## Backend

- [x] Lambda function created
- [x] Local development setup
- [x] AWS SDK v3 installed
- [x] Lambda deployed
- [x] Lambda successfully reads from DynamoDB

---

## Sample Data

- [x] Three events inserted into DynamoDB

---

# 🚧 In Progress

- [ ] API Gateway
- [ ] Frontend
- [ ] User Registration
- [ ] Event Registration
- [ ] Profile Management
- [ ] File Uploads
- [ ] Email Notifications

---

# 📅 Next Sprint

- Create API Gateway
- Connect API Gateway to Lambda
- Test REST endpoint
- Build frontend homepage
- Display events

---

# 📝 Known Issues

- Event `evt-002` has an incorrect `date` value (`"date"` instead of `2026-08-15`).

---

# 📚 Technologies

- AWS Lambda
- Amazon DynamoDB
- Amazon Cognito
- Amazon API Gateway
- Amazon S3
- Amazon SES
- IAM
- CloudWatch
- JavaScript (Node.js)
- Git
- GitHub

---

# 📊 Progress

Overall Progress:

**50% Complete**