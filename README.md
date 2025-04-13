# Medium To React App

This project is a React-based web application that fetches and displays blog posts from a Medium RSS feed using the `rss2json` API. It is designed to showcase Medium blog posts in a portfolio-style layout.

Medium doesn’t offer a public API that allows you to read stories, but you can view any blog or publication through an RSS feed.

- **Example Feed**:
  Replace the username after `/feed/` with your own to see your endpoint.

  ```bash
  https://medium.com/feed/@anuradha.dilshan
  ```

- **Navigate to rss2json**:  
   Open the [rss2json](https://rss2json.com/) website in your browser.

- **Convert RSS to JSON**:
  Paste your RSS feed URL into the text field on the `rss2json` website.
  Click the `Convert to JSON` button.

- **Copy the API Endpoint**:  
   After conversion, you will see a new web address under **API call**.  
   Copy this URL — it will be your new JSON endpoint.

- **Use the JSON Endpoint in Your Project**:  
   Replace the placeholder URL in your project with the new JSON endpoint. For example:

  ```javascript
  const rss2json =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40anuradha.dilshan";
  ```

Now your application will fetch Medium blog posts in JSON format using the `rss2json` API.

## Features

- **Fetch Medium Blog Posts**: Uses the `rss2json` API to fetch blog posts from a Medium RSS feed.
- **Dynamic Blog Tiles**: Displays blog posts dynamically in a responsive grid layout.
- **Content Parsing**: Extracts and cleans blog content, including images and text, for display.
- **Responsive Design**: Styled with CSS to ensure compatibility across devices.

## File Structure

The project structure is as follows:

```bash
Medium-To-React-App/
├── .gitignore
├── package.json
├── README.md
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.js
│   ├── BlogContainer.js
│   ├── BlogTile.js
│   ├── index.css
│   └── index.js
```

## How to Run the Project

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/AnuradhaDilshan/Medium-To-React-App.git
   cd Medium-To-React-App
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Running the Project

- To start the development server, run:

  ```bash
  npm start
  ```

- Open http://localhost:3000 in your browser to view the app.

## Future Enhancements

- Add pagination for blog posts.
- Implement search functionality.
- Improve error handling for API calls.
- Add unit tests for components.

In the project directory, you can run:

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
