## MERN Mock Guide
### Frontend

- Todo App: add todo, delete todo, highlight todo. in which clicking the checkbox of todo highlight the todo and unchecking unhighlight, deleting removes the todo, select all button selects all the todo
- Check box App: in which selecting checkbox toggles the color of corresponding lable, select all button selects all the lists
- Form
- Filter and Search Data: render data and on click of button filter it, search data
- Carousel: Image Carousel
- Tabs: 
- FAQ: Faq components
- Create a React component that displays a list of items fetched from a local JSON file. The component should have a search bar that filters the list based on the user's input. Implement conditional rendering to show or hide the list items based on their visibility property. The JSON file contains an array of objects with properties: id, name, and visible (boolean). Create a single React component that handles all the above requirements in one file. You can assume that the JSON file is named "data.json" and is located in the same directory as your React component. Implement this feature without using any external libraries or APIs.

### Backend

- You are tasked with building a simple RESTful API using Node.js and Express to manage a list of books. The API should have a single endpoint to retrieve all books. The response should be in JSON format and include the book title, author, and publication year. Assume you have a MongoDB database set up with a collection called "books" containing the required data. Write the necessary code to create this API endpoint using Node.js and Express. Please provide the exact code for the route handler function that retrieves all books from the database and returns them in the desired format.

- Create an Express.js RESTful API endpoint (`/products`) using Node.js serving JSON data representing products stored within an array consisting of objects having id, name, and price. Implement proper HTTP headers and status codes following best practices, and implement an error handling mechanism ensuring unique product id upon each new addition, adhering to standard REST architectural style concepts.



### Situational Problems (System Design)

- **Scenario:** A popular e-commerce platform is facing scalability issues during peak shopping seasons. As the newly hired MERN developer, you are tasked with optimizing the checkout process, which currently experiences an average user input timeout of 2 minutes. The goal is to handle maximum concurrent users without compromising performance.


- **Scenario:**  
A social media company, SocialConnect, is launching a new stories feature (similar to Instagram). The backend (Node.js, Express.js, MongoDB) is struggling with slow response times due to increased load. The frontend uses React.js and Redux.As a MERN developer, outline your approach to improve backend scalability, including Node.js/Express.js configuration, MongoDB optimization, and the use of caching and queuing.

