

# 🐍 CaseCobra

**CaseCobra** is a modern SaaS web application for selling custom phone cases — designed and developed using **Next.js**, **TypeScript**, **shadcn/ui**, and **Lucide React** for icons.  
This project is a personal build, entirely coded by me — no AI-generated code.

---

## 🧩 Project Overview

CaseCobra is more than just a storefront. It’s the foundation of a scalable SaaS platform built to provide users with an intuitive, visually appealing experience when exploring and purchasing phone cases.

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **UI Libraries:** shadcn/ui, Lucide React
- **Authentication:** Kinde Auth
- **Styling:** Tailwind CSS

---

## ⏰ Development Progress

### Total Time Coded: **11 hours**

Here’s what’s been accomplished so far:

### ✅ Completed
- **Navbar:** Fully designed and functional  
  - All navigation buttons working  
  - Authentication integrated using **Kinde**
- **App:**  
  - Started building the **first three sections** of landing page
  - Implemented **icon system** using **Lucide React**
  - Layout structured using **shadcn/ui** and custom wrappers
  - Built Navbar and half Footer at the landing page
  - Completed the whole landing page
  - Used **uploadthing.com** for uploading images in /app/configure/upload/page.tsx and on /app/uploadthing/core.ts (made changes in core.tsx according to my app)
  - Working on core.ts and configuring it
  - Made uploadthing.ts in /src/lib/uploadthing.ts
  - Faced a lot of errors in uploads page, took a lot of time to solve em
  - compiled all the user steps to guide the user in a component in src/components/Steps.tsx
  - completed steps.tsx
  - installed prisma, connected using neon.tech (hehe really enjoying building this) 

- **No AI assistance** — all logic, layout, and styling hand-coded by me.

---

## 🚧 Next Steps
- Moving towards building uploads page where user can add their pic and get a phone case demo
- connecting database using neon and core.ts

---

## 📁 Project Structure
```

src/
├─ app/
│   ├─ api/
│   ├─ configure/upload
│   ├─ favicon.ico
│   ├─ globals.css
│   ├─ layout.tsx
│   └─ page.tsx
├─ components/
│   ├─ ui/
│   ├─ icons.tsx
│   ├─ MaxWidthWrapper.tsx
│   ├─ Navbar.tsx
│   ├─ Phone.tsx
│   ├─ Reviews.tsx
|   └─ footer.tsx

```

---

## 🧠 Vision
CaseCobra will evolve into a full-fledged SaaS platform — with user dashboards, payment integration, and AI-powered design customization for cases in future updates.

---

## 💻 Author
**Muhammad Shayan**  
17-year-old developer & computer science student  
Currently focused on **Agentic AI** and real-world SaaS applications.

---

⭐ _“Every line of code here is a brick in the empire I’m building.”_



