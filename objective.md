# Salary_Slip_Generator

## Objective
This project provides a user-friendly interface for generating salary slips. Users input employee details (name, designation, salary components), and the application dynamically calculates and displays the gross salary, tax deduction, and net salary. The application fetches user data from an external API to display the username and email, and incorporates dark mode functionality. The core technologies used are JavaScript, HTML, and CSS, leveraging DOM manipulation for dynamic content updates and event handling for user interactions. The API data is fetched using the `fetch` API with error handling and a proxy fallback.

## Output
<iframe src="https://github.com/niat-web/Salary_Slip_Generator" height="1000" width="300" title="Salary_Slip_Generator"></iframe>

## Project Requirements
**Technologies:** JavaScript, HTML, CSS

## Features to Implement
- Dynamic calculation of salary components (Gross Salary, Tax Deduction, Net Salary) based on user input.
- Display of fetched user data (Name, Email) from a remote API.
- Implementation of a dark mode toggle for enhanced user experience.

## UI Enhancements
- Improve the responsiveness of the salary slip display for various screen sizes.
- Add input validation to the salary form to ensure data accuracy.

## Project Tasks & Expected Outcomes
| Task | Expected Outcome |
|------|------------------|
| Implement the `calculateSalary` function | Correctly calculates and returns the gross salary, tax deduction, and net salary based on input values. |
| Implement the `generateSalarySlip` function | Populates the salary slip elements with the calculated salary details and user information. |
| Implement the dark mode toggle functionality | Dynamically switches the application's theme between light and dark mode. |
| Fetch and display user data from the API | Displays the fetched username and email in the designated elements, with error handling for API failures. |
| Implement the `displayData` function | Fetches user data from the API and updates the username and email in the salary slip. |
| Implement refresh button functionality | Updates the displayed user data with information of another randomly selected user from the API by calling `displayData()` |

## JavaScript Concepts
| Concept | Implementation |
|---------|----------------|
| DOM Manipulation | Used to access and modify HTML elements to dynamically display salary information and API data. |
| Event Handling | Used to capture form submission events and trigger salary calculations and display.  Also used to handle dark mode toggle clicks. |
| `fetch` API | Used to retrieve user data from the external API. |
| Asynchronous JavaScript | Used with `async/await` to handle API requests and ensure data is loaded before being displayed. |
| Functions | Used to encapsulate and reuse the logic for calculating salary components and generating the salary slip. |

## API Details
| API | Endpoint | Description |
|-----|----------|-------------|
| freetestapi.com | `https://freetestapi.com/api/v1/users` | Retrieves a list of users, used to display employee name and email. |