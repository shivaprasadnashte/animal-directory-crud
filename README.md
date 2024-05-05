# Animal Directory CRUD API

This is a simple CRUD (Create, Read, Update, Delete) API for managing animals in a directory.

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB (Make sure MongoDB is running locally or provide connection URI)

### Installation

1. Clone the repository:

git clone <repository_url>


2. Navigate into the project directory:

cd animal-directory-crud


3. Install dependencies:

npm install


4. Create a `.env` file in the root directory and provide the MongoDB connection URI:

MONGODB_URI=<your_mongodb_connection_uri>


### Usage

To start the server, run the following command:

npm start


The server will start running on port 3000 by default. You can access the API endpoints using the following routes:

- POST `/api/addanimal`: Create a new animal.
- GET `/api/getallanimals`: Retrieve all animals.
- PUT `/api/updateanimal/:id`: Update an animal by ID.
- DELETE `/api/deleteanimal/:id`: Delete an animal by ID.

