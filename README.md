# 🎉 EventHub

A serverless event registration application built on AWS that allows users to securely browse events and register using Amazon Cognito authentication.

## 📌 Features

- 🔐 User Authentication using Amazon Cognito Hosted UI
- 📋 View available events
- 📝 Register for events securely
- 🚫 Prevent duplicate registrations
- 👥 Track event capacity and registrations
- 🔒 Secure APIs using API Gateway Cognito Authorizer
- ⚡ Serverless backend powered by AWS Lambda
- 💾 DynamoDB for event and registration storage

---

## 🏗️ Architecture

```
React (Vite)
      │
      ▼
Amazon Cognito
(Authentication)
      │
      ▼
Amazon API Gateway
(Cognito Authorizer)
      │
      ▼
AWS Lambda
      │
      ├── Events Table (DynamoDB)
      └── Registrations Table (DynamoDB)
```

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Axios
- AWS Amplify

### Backend
- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB
- Amazon Cognito

---

## 📂 Project Structure

```
eventhub/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── lambda/
│   ├── getEvents/
│   └── registerEvent/
│
└── README.md
```

---

## 🚀 Current Features

- Display all available events
- User login using Amazon Cognito
- Secure event registration
- JWT-based authentication
- Store registrations in DynamoDB
- Automatically update event registration count
- API protected with Cognito Authorizer

---

## 📷 Screenshots

> Screenshots will be added after the UI enhancement phase.

---

## 🚀 Getting Started

### Clone Repository

```bash
git clone https://github.com/ShaikAhmedd
/serverless-event-management.git
cd serverless-event-management
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

---

## 📈 Future Improvements

- Modern responsive UI
- Event search and filtering
- My Registrations page
- Toast notifications
- Deployment using AWS S3 + CloudFront

---

## 👨‍💻 Author

**Mohammed Shaik Ahmed**

- GitHub: https://github.com/ShaikAhmedd
- LinkedIn: https://www.linkedin.com/in/shaik-ahmed-b1a352246/

---

## 📄 License

This project is for learning and portfolio purposes.