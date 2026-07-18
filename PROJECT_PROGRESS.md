# EventHub – Project Progress

## Project Overview

EventHub is a serverless event management application built using AWS services. The project follows a serverless architecture where API Gateway routes requests to AWS Lambda functions, which interact with DynamoDB for data storage. Authentication is handled through Amazon Cognito.

---

# Technology Stack

- AWS Lambda
- Amazon API Gateway (REST API)
- Amazon DynamoDB
- Amazon Cognito
- IAM Roles & Policies
- Node.js 22.x
- AWS SDK v3
- Git & GitHub
- Postman

---

# Current Architecture

```
Client (Browser/Postman)
        │
        ▼
 Amazon API Gateway
        │
 ┌──────┼──────────────┐
 │      │              │
 ▼      ▼              ▼
GET    POST        POST
/events /events   /events/{eventId}/register
 │      │              │
 ▼      ▼              ▼
getEvents      createEvent      registerEvent
        │
        ▼
 Amazon DynamoDB
 ┌─────────────────────┐
 │ Events              │
 │ Registrations       │
 └─────────────────────┘
```

---

# Completed Features

## Project Setup

- [x] Created GitHub repository
- [x] Initialized Git repository
- [x] Configured AWS CLI
- [x] Created project structure

---

## Database

### Events Table

Completed

Fields:

- eventId (Partition Key)
- title
- description
- date
- location
- capacity
- createdBy
- registeredCount

### Registrations Table

Completed

Fields:

- registrationId (Partition Key)
- eventId
- userId
- registeredAt

---

## Authentication

Completed

- Created Amazon Cognito User Pool
- Configured email sign-in
- Enabled self-registration

---

## Lambda Functions

### getEvents

Status: ✅ Completed

Features:

- Reads all events
- Returns JSON response
- Connected to API Gateway

---

### createEvent

Status: ✅ Completed

Features:

- Creates a new event
- Stores event in DynamoDB
- Returns success response
- Connected to API Gateway

---

### registerEvent

Status: ✅ Completed

Features:

- Reads eventId from URL path parameter
- Reads userId from request body
- Validates request input
- Checks whether the event exists
- Prevents registration when the event is full
- Creates a registration record
- Updates registeredCount in Events table
- Returns success response

---

# API Gateway

REST API: EventHubAPI

Implemented Endpoints

| Method | Endpoint | Status |
|--------|----------|--------|
| GET | /events | ✅ |
| POST | /events | ✅ |
| POST | /events/{eventId}/register | ✅ |

---

# Testing

Completed

### AWS Lambda Console

- Successfully tested getEvents
- Successfully tested createEvent
- Successfully tested registerEvent

### Postman

Successfully tested:

GET /events

POST /events

POST /events/{eventId}/register

Verified:

- Registration record created
- registeredCount updated
- Successful API responses

---

# GitHub

Completed

Repository contains:

- Lambda source code
- Project documentation
- Backend implementation
- Progress tracking

---

# Skills Learned

- AWS CLI
- IAM Roles & Policies
- Amazon Cognito
- Amazon DynamoDB
- AWS Lambda
- Amazon API Gateway
- REST APIs
- Path Parameters
- HTTP Methods
- CRUD Operations
- AWS SDK v3
- Git & GitHub
- Postman Testing
- Serverless Architecture

---

# Remaining Features

## Authentication Integration

- Protect APIs using Cognito Authorizer
- JWT Authentication
- Secure endpoints

Status:
⬜ Pending

---

## Event Management

- Update Event
- Delete Event

Status:
⬜ Pending

---

## File Uploads

- Upload event images
- Store files in Amazon S3

Status:
⬜ Pending

---

## Email Notifications

- Send confirmation emails using Amazon SES

Status:
⬜ Pending

---

## Frontend

- React Application
- API Integration
- Authentication
- Event Dashboard

Status:
⬜ Pending

---

## Deployment

- Deploy frontend
- Connect frontend with backend
- Production testing

Status:
⬜ Pending

---

# Overall Progress

| Module | Status |
|---------|--------|
| Project Setup | ✅ Complete |
| Database | ✅ Complete |
| Cognito Setup | ✅ Complete |
| Lambda Development | ✅ Complete |
| API Gateway | ✅ Complete |
| Event APIs | ✅ Complete |
| Registration API | ✅ Complete |
| Backend Testing | ✅ Complete |
| Authentication Integration | ⬜ Pending |
| Frontend | ⬜ Pending |
| Deployment | ⬜ Pending |

---

# Project Completion

**Overall Progress: 75%**

Last Updated: July 2026