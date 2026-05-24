# Yuan Sun Academic Website

A dependency-free academic website that can be hosted directly with GitHub Pages.

## Current Sections

- `index.html` - Home
- `funded-projects.html` - Funded Projects
- `publications.html` - Publications
- `courses.html` - Courses
- `contact.html` - Contact Us

## Content Sources

- `Sun,Yuan_CV_2026.docx` - CV content used to update the website.
- `Profile.png` - homepage and contact profile photo.

## Future Updates

- Add new publications, funded projects, courses, honors, or service items as the CV changes.
- Add a downloadable CV link if you want the public site to include the full CV.

## Preview Locally

Open `index.html` in a browser, or run a tiny local server:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish With GitHub Pages

1. Create a new GitHub repository.
2. Push this folder to the repository.
3. In GitHub, open the repository settings.
4. Go to **Pages**.
5. Set the source to **Deploy from a branch**.
6. Choose the `main` branch and `/root` folder.
7. Save, then wait for GitHub to show the live site URL.

## Useful Git Commands

```sh
git add .
git commit -m "Create academic website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```
