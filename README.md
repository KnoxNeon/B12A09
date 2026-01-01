# GameHub – Free PC Games Download Platform

**GameHub** is a modern, responsive web application that lets users discover, explore, and download the most popular free-to-play and premium PC games in one beautiful place.

Live URL: https://gamehub-knox.surge.sh  


## Key Features

- Clean game detail pages with hero banners  
- Fully responsive design – looks perfect on mobile, tablet, and desktop  
- Google Sign-In authentication (powered by Firebase)   
- Latest game updates & patch news section  
- "Download Now" buttons that open official game pages (Steam, Epic, etc.)  
- Secure protected routes with loading states (no login flash on reload)  
- Beautiful dark gaming UI with glassmorphism and gradients  

## Tech Stack & npm Packages Used

 1. `react` + `react-dom` Core framework                           
 2. `react-router-dom` Client-side routing & protected routes    
 3. `tailwindcss` + `daisyui` + `react-toastify` + `motion` + `swiper` Design and styling                     
 4. `lucide-react` + `react-icons` Beautiful icons  
 5. `firebase` Google authentication & Firestore         
 6. `surge` deployment

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/KnoxNeon/GameHub.git
   cd GameHub

2. Install dependencies(Bash):
    npm install
3. Create a .env file in the root directory and add your Firebase config:
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
4. Start the development server:
    npm run dev
5. Open http://localhost:5173 (or the port shown) in your browser.
