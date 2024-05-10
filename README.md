# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Instructions to Run the Project:

-Clone the repository from GitHub or download the project files from the provided Google Drive directory.
-Navigate to the project directory in your terminal/command prompt.
-Install dependencies by running npm install or yarn install.
-Start the development server by running npm run dev or yarn run dev
-Open your web browser and go to http://localhost:3000 to view the project.

## Assumptions and Tradeoffs

### Assumptions:

- Assumed the flight data provided in the JSON response is accurate and complete according to the assignment requirements.
- Designed the user interface elements based on the instructions provided in the assignment and accompanying images.
  -Ensured that all the required functionality mentioned in the assignment was implemented in the code.
- Used external libraries and frameworks to speed up development and meet project deadlines.
- Included airline logos from external sources because they weren't provided in the API data.

### Tradeoffs:

-Choose to use Tailwind CSS for styling to make styling easier, evethough it might limit some styling options compared to traditional CSS.

-I implemented basic error handling to keep things simple, knowing that more robust error handling could improve the user experience.

-For sorting and filtering functionality, I used simple JavaScript methods instead of more advanced algorithms or libraries, which might have better performance with larger datasets.

-I didn't use Redux for state management to avoid adding unnecessary complexity to the project, even though it might offer a more structured approach to state management.
