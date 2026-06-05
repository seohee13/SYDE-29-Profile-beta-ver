# SYDE-29-Profile-beta-ver
Beta version of the SYDE 29 Class Profile

## Page Flow
```
index.html (Landing) 
  → pages/login.html (Login)
    → pages/signup.html (Create Account)
    → pages/choose.html (Character Selection)
      → pages/adventure.html, coop.html, demographics.html, etc.
```

## Authentication
- **Login**: Email/password with UW email validation (`@uwaterloo.ca`)
- **Sign Up**: Account creation with program selection
- **UW Login**: Placeholder for Waterloo OAuth integration
- **Demo Mode**: Uses localStorage for session (replace with backend in production)

## Pages
| Page | Description |
|------|-------------|
| `index.html` | Landing page with animated star background |
| `pages/login.html` | Login with email/password or UW |
| `pages/signup.html` | Account creation form |
| `pages/choose.html` | Genshin-style character selection |
| `pages/adventure.html` | SYDE adventure content |
| `pages/coop.html` | Co-op information |
| `pages/demographics.html` | Class demographics |
| `pages/firstyear.html` | First year experience |
| `pages/highschool.html` | High school to university transition |
