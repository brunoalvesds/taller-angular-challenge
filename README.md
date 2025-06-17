# Angular 20 User List App

A simple and modern Angular 20 standalone application that displays a list of users fetched from the JSONPlaceholder API. This project demonstrates Angular’s latest features, including standalone components, functional routing, and the modern `inject()` API for dependency injection.

## Features

- Fetches users from the JSONPlaceholder API
- Responsive UI with pure CSS (no frameworks)
- Real-time search filtering by user name
- Built entirely with standalone components (no NgModules)
- Fully reactive using RxJS
- Functional routing with Angular's latest router
- Clean architecture with services, models, components, and configuration separation

## Tech Stack

- Angular 20 (standalone architecture)
- RxJS
- TypeScript
- HTML and SCSS (fully custom, no CSS frameworks)

## Getting Started

### Install dependencies

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
```

### Run the development server

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any source files.

## Project Structure

```
/src/app
 ┣ /pages
 ┃ ┗ home  
 ┣ /components
 ┃ ┗ user-list
 ┣ /models
 ┃ ┗ user.model.ts
 ┣ /services
 ┃ ┗ user.service.ts
 ┣ app.routes.ts
 ┣ app.config.ts
 ┗ main.ts
```

## API Reference

- JSONPlaceholder API: https://jsonplaceholder.typicode.com/users

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Author

Developed by Bruno Alves - https://github.com/your-username