# Running Partner Project Setup Guide

This guide will help you set up and run the Running Partner project with both backend and frontend components.

## 🚀 Quick Start

### Prerequisites
- PHP 8.1+ with Composer
- Node.js 18+ with npm
- MySQL 8.0+ or MariaDB 10.5+
- Git

### 1. Clone and Setup Backend

```bash
# Navigate to backend directory
cd backend

# Install PHP dependencies
composer install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Configure database in .env file
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=running_partner
DB_USERNAME=your_username
DB_PASSWORD=your_password

# Run database migrations
php artisan migrate

# Seed the database (optional)
php artisan db:seed

# Start the backend server
php artisan serve
```

The backend will be available at `http://localhost:8000`

### 2. Setup Frontend

```bash
# Navigate to frontend directory
cd frontend/react-frontend

# Install Node.js dependencies
npm install

# Start the development server
npm run dev
```

The frontend will be available at `http://localhost:5173`

## 🔧 Configuration

### Backend Configuration

1. **Database**: Update `.env` file with your database credentials
2. **CORS**: Backend is configured to accept requests from:
   - `http://localhost:3000`
   - `http://localhost:5173` (Vite default)
   - `http://localhost:4173` (Vite preview)

### Frontend Configuration

1. **API Base URL**: Frontend is configured to connect to `http://localhost:8000/api`
2. **Proxy**: Vite is configured with a proxy for `/api` requests to the backend

## 🎨 New Design Features

### Color Scheme
- **Primary**: Green (#10b981) - Modern, energetic
- **Secondary**: Blue (#3b82f6) - Trust, reliability
- **Accent**: Orange (#f59e0b) - Warm, friendly
- **Background**: Light grays with gradients

### Styling Improvements
- Modern gradient backgrounds
- Smooth hover animations
- Better typography with Inter font
- Improved button designs with hover effects
- Enhanced card layouts
- Responsive design improvements
- Custom scrollbars
- Better accessibility features

## 🚦 API Endpoints

### Authentication
- `POST /api/register` - User registration
- `POST /api/login` - User login
- `POST /api/logout` - User logout

### Trkaci (Runners)
- `GET /api/trkaci` - Get all runners
- `GET /api/trkaci/{id}` - Get specific runner
- `POST /api/trkaci` - Create runner (trkac role only)
- `PUT /api/trkaci/{id}` - Update runner (trkac role only)

### Running Plans
- `GET /api/planovi-trka` - Get all running plans
- `POST /api/planovi-trka` - Create running plan (trkac role only)

### Statistics
- `GET /api/statistike-trke` - Get all statistics (user role only)
- `POST /api/statistike-trke` - Create statistics (trkac role only)
- `GET /api/statistike-trke/{trkac_id}` - Get runner statistics

### Comments
- `GET /api/komentari/{planTrkeId}` - Get comments for a plan
- `POST /api/komentari` - Add comment (trkac role only)
- `DELETE /api/komentari/{id}` - Delete comment (user role only)

## 🧪 Testing

### Backend Tests
```bash
cd backend
php artisan test
```

### Frontend Tests
```bash
cd frontend/react-frontend
npm test
```

## 📱 Features

- **User Authentication**: Login/Register with role-based access
- **Runner Profiles**: Create and manage runner profiles
- **Running Plans**: Create and share running plans
- **Statistics Tracking**: Track running performance
- **Social Features**: Add friends, comment on plans
- **Responsive Design**: Works on all device sizes
- **Modern UI**: Clean, professional interface

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure backend CORS configuration includes frontend URL
2. **Database Connection**: Verify database credentials in `.env`
3. **Port Conflicts**: Check if ports 8000 (backend) and 5173 (frontend) are available
4. **Dependencies**: Run `composer install` and `npm install` in respective directories

### Logs
- Backend logs: `backend/storage/logs/laravel.log`
- Frontend logs: Check browser console

## 📚 Additional Resources

- [Laravel Documentation](https://laravel.com/docs)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
