# Twitch.tv Clone

A full-stack web application inspired by Twitch.tv, built with React.js and Node.js. This project features user authentication, real-time communication capabilities, and a modern responsive interface.

## 🚀 Features

- **User Authentication**: Secure login and registration system
- **JWT Authentication**: Token-based authentication with 8-hour expiration
- **Password Encryption**: Secure password hashing with bcrypt
- **Input Validation**: Client-side and server-side validation using Joi
- **Real-time Communication**: Socket.io integration for live features
- **Responsive Design**: Mobile-friendly interface
- **Toast Notifications**: User feedback with react-hot-toast
- **Modern Routing**: React Router DOM for seamless navigation

## 🛠️ Tech Stack

### Frontend
- **React.js** (v18.3.1) - UI Framework
- **React Router DOM** (v6.26.0) - Navigation
- **Axios** (v1.7.7) - HTTP Client
- **React Hot Toast** (v2.4.1) - Notifications
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime Environment
- **Express.js** (v4.19.2) - Web Framework
- **MongoDB** with **Mongoose** (v8.5.2) - Database
- **Socket.io** (v4.7.5) - Real-time Communication
- **JWT** (v9.0.2) - Authentication
- **bcrypt.js** (v2.4.3) - Password Hashing
- **Joi** (v17.13.3) - Input Validation
- **CORS** (v2.8.5) - Cross-Origin Resource Sharing

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/NishalDev/twitch.tv.git
cd twitch.tv
```

### 2. Environment Configuration

Create a `.env` file in the `server` directory with the following variables:

```env
# Server Configuration
PORT=5002
API_PORT=5002

# Database
MONGO_URI=mongodb://localhost:27017/twitchtv
# Or use MongoDB Atlas: mongodb+srv://<username>:<password>@cluster.mongodb.net/twitchtv

# JWT Configuration
TOKEN_KEY=your_super_secret_jwt_key_here
```

### 3. Install Dependencies

#### Backend Setup
```bash
cd twitch.tv/server
npm install
```

#### Frontend Setup
```bash
cd ../client
npm install
```

## 🚀 Running the Application

### Development Mode

#### Start the Backend Server
```bash
cd server
npm start
```
The server will run on `http://localhost:5002`

#### Start the Frontend Application
```bash
cd client
npm start
```
The application will open at `http://localhost:3000`

### Production Build

#### Build the Frontend
```bash
cd client
npm run build
```

## 📁 Project Structure

```
twitch.tv/
├── client/                 # React frontend application
│   ├── public/            # Public assets
│   ├── src/
│   │   ├── API/           # API configuration and calls
│   │   ├── AuthPage/      # Authentication components
│   │   ├── DashboardPage/ # Main dashboard
│   │   ├── shared/        # Shared utilities
│   │   │   ├── hooks/     # Custom React hooks
│   │   │   └── validators/ # Input validation functions
│   │   └── resources/     # Images and assets
│   └── package.json
├── server/                # Node.js backend application
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   │   └── auth/      # Authentication controllers
│   │   ├── models/        # MongoDB models
│   │   └── routes/        # API routes
│   ├── index.js          # Server entry point
│   └── package.json
└── README.md
```

## 🔐 API Endpoints

### Authentication Routes

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "string (3-12 characters)",
  "email": "valid-email@example.com",
  "password": "string (6-12 characters)"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "userpassword"
}
```

**Response:**
```json
{
  "userDetails": {
    "email": "user@example.com",
    "username": "username",
    "token": "jwt_token_here"
  }
}
```

## 🗄️ Database Schema

### User Model
```javascript
{
  email: String (unique),
  username: String,
  password: String (hashed)
}
```

## 🔒 Security Features

- **Password Hashing**: All passwords are encrypted using bcrypt
- **JWT Tokens**: Secure authentication with 8-hour expiration
- **Input Validation**: Both client and server-side validation
- **CORS Protection**: Configured for secure cross-origin requests
- **Email Validation**: Regex-based email format validation

## 🧪 Testing

```bash
# Run frontend tests
cd client
npm test

# Run backend tests (when implemented)
cd server
npm test
```

## 🚀 Deployment

### Frontend Deployment
The React application can be deployed to platforms like:
- **Vercel**
- **Netlify** 
- **GitHub Pages**
- **AWS S3 + CloudFront**

### Backend Deployment
The Node.js server can be deployed to:
- **Heroku**
- **Railway**
- **AWS EC2**
- **DigitalOcean**
- **Vercel**

### Database Deployment
- **MongoDB Atlas** (Recommended for production)
- **AWS DocumentDB**
- **Self-hosted MongoDB**

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Development Notes

### Current Implementation Status
- ✅ User Registration & Login
- ✅ JWT Authentication
- ✅ Input Validation
- ✅ Basic Dashboard Structure
- 🔄 Dashboard functionality (In Progress)
- 🔄 Real-time features (Socket.io integrated but not implemented)
- 🔄 Video streaming capabilities
- 🔄 Chat system

### Known Issues
- Fix typo in `postLogin.js`: `toLowercase()` should be `toLowerCase()`
- API base URL uses HTTPS but server runs on HTTP in development
- Dashboard page needs implementation

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**NishalDev**
- GitHub: [@NishalDev](https://github.com/NishalDev)

## 🙏 Acknowledgments

- Inspired by Twitch.tv
- Built with Create React App
- Uses modern web development practices and technologies

---

### 📞 Support

If you have any questions or need help getting started, please open an issue in this repository.
