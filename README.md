# Bocchi The Rock! Frontend

<img width="40%" src="https://github.com/user-attachments/assets/1897db0b-4cad-4ab3-a5e5-b9844ae9a82a" />

A web application dedicated to the anime "Bocchi The Rock!" built with a custom HTTP engine written in pure Node.js without any external dependencies.

## Overview

This project serves as a frontend for displaying information about the anime Bocchi The Rock!, including details about seasons, special episodes, and the movie. It consumes data from a dedicated REST API and renders it using a simple template engine with variable interpolation.

## Architecture

The application follows a layered architecture pattern:

```
bocchi-front/
├── app/
│   ├── resources/          # Static files (HTML, CSS)
│   │   ├── index.html      # Main landing page
│   │   ├── info.html       # Template for anime info pages
│   │   └── styles.css      # Application styles
│   └── src/
│       ├── application.js      # Entry point
│       ├── bocchi_controller.js # Route handlers
│       └── bocchi_service.js    # API consumption layer
└── core/                   # HTTP Mini Engine
    ├── server.js           # TCP server implementation
    ├── http.js             # HTTP protocol handling
    ├── controller.js       # Route registration
    └── file_reader.js      # File loading and template processing
```

### Layers

- **Controller Layer**: Handles incoming HTTP requests and defines routes for each page.
- **Service Layer**: Consumes the external Bocchi API and returns parsed data.
- **Core (HTTP Mini Engine)**: A custom HTTP server built on top of Node.js `net` module.

## HTTP Mini Engine

This project uses a custom HTTP engine built from scratch using only Node.js native modules. The engine handles:

- TCP connections via `node:net`
- HTTP request parsing (method, route, version)
- HTTP response building with proper headers
- Static file serving (CSS)
- Template variable interpolation using `${variable}` syntax

For more details about the HTTP engine, visit the repository: [http-mini-engine](https://github.com/UlisesChoco/http-mini-engine)

## Bocchi API

The frontend consumes data from a NestJS REST API that provides information about Bocchi The Rock! anime. The API serves endpoints for:

- `/bocchi/season-one` - First season information
- `/bocchi/season-two` - Second season information
- `/bocchi/special-episode` - Special episode details
- `/bocchi/movie` - Movie information

API Repository: [bocchi-api](https://github.com/UlisesChoco/bocchi-api)

## Available Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page with navigation |
| `/season-one` | Season 1 details |
| `/season-two` | Season 2 details |
| `/special-episode` | Special episode details |
| `/movie` | Movie details |

## Template System

The application includes a simple template engine that supports variable interpolation. Variables in HTML templates are defined using the `${key.property}` syntax:

```html
<h1>${data.title_english}</h1>
<p>${data.synopsis}</p>
```

Variables are passed from the controller to the template through the `load_html` function:

```javascript
load_html(response, 'info.html', [
    { key: "data", value: JSON.stringify(apiData) }
]);
```

## Requirements

- Node.js (v18 or higher recommended)
- [bocchi-api](https://github.com/UlisesChoco/bocchi-api) running on `localhost:3000`

## Running the Application

1. Clone this repository
2. Ensure the Bocchi API is running on port 3000
3. Navigate to the `app/src` directory
4. Run the application:

```bash
node application.js
```

5. Open your browser and navigate to `http://localhost:8080`

## Technical Details

- **Port**: 8080
- **Supported HTTP Methods**: GET
- **Content Types**: text/html, text/css
- **No external dependencies**: Built entirely with Node.js native modules

## Related Projects

- [bocchi-api](https://github.com/UlisesChoco/bocchi-api) - NestJS REST API providing Bocchi The Rock! anime data
- [http-mini-engine](https://github.com/UlisesChoco/http-mini-engine) - Custom HTTP engine built with pure Node.js
