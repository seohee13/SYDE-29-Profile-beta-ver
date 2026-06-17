# SYDE-29-Profile-beta-ver
Beta version of the SYDE 29 Class Profile

## Page Flow
```
index.html (Landing)
  → pages/login.html (Login)
    → pages/signup.html (Create Account)
      → pages/createcharacter.html (Build avatar)
        → pages/createpersonality.html (Personality)
  → pages/choose.html (Character Selection)
      → pages/adventure.html, coop.html, demographics.html, etc.
```

## Authentication
Auth is handled by **Firebase Authentication** (email/password) with profile
data stored in **Cloud Firestore**. Config lives in `pages/firebase-config.js`.

- **Sign Up**: Creates a real Firebase account, restricted to `@uwaterloo.ca`
  emails. Saves the user's profile (name, email, program) to the Firestore
  `users` collection and sends a verification email. Redirects to
  `createcharacter.html`.
- **Login**: Signs in via Firebase. Redirects to `choose.html`.
- **Forgot Password**: Sends a real password-reset email via Firebase.

### Setup notes
- Firebase project: `syde29-profile` (Firestore region: Toronto).
- The web `apiKey` in `firebase-config.js` is safe to expose publicly;
  Firestore security rules are what protect the data.
- Pages using Firebase load as ES modules, so the site must be served over
  `http://` (e.g. `python3 -m http.server 8000`), not opened as a `file://`.
- Anyone with a valid `@uwaterloo.ca` email can sign up. New signups appear in
  the Firebase Console under **Authentication → Users**.

### Local development
```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Pages
| Page | Description |
|------|-------------|
| `index.html` | Landing page with animated star background |
| `pages/login.html` | Login with email/password (Firebase) + password reset |
| `pages/signup.html` | Account creation form (Firebase, `@uwaterloo.ca` only) |
| `pages/createcharacter.html` | Build your pixel avatar |
| `pages/createpersonality.html` | Personality setup |
| `pages/choose.html` | Genshin-style character selection |
| `pages/adventure.html` | SYDE adventure content |
| `pages/coop.html` | Co-op information |
| `pages/demographics.html` | Class demographics |
| `pages/firstyear.html` | First year experience |
| `pages/highschool.html` | High school to university transition |
| `pages/firebase-config.js` | Shared Firebase init (auth + Firestore) |
