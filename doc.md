# Documentation for the Chronologue API
This doc's content is written in Markdown. Markdown can be parsed and displayed by many tools: 
- Docusaurus
- Jekyll
- Mkdocs
- Sphinx
- etc.

## API Routes

### GET `/` 
Sending a GET request to this route will show all available API routes that can requested. 

### GET `/all-locations-id`
Available location ids to be inputed as request parameter: 
- australia
- europe
- north-america

### GET `/all-years-id`
Available year ids to be inputed as request parameter: 
- 1781
- 1957
- 1961
- 1968
- 2012
- 2016
- 2021
- 2024
- 3000

### GET `/year/{year-id}`
input a year from the list in route `/all-years-id`

### GET `/location/{location-id}`
input a location from the list in route `/all-locations-id`

### GET `year/{year-id}/location/{location-id}`
input both year and location from the list in routes `/all-years-id` and `/all-locations-id` 

## Supported HTTP Request Methods
Currently, the API only supports GET requests, other request methods will be supported in future versions. 

## Usage
Start the node.js server by typing `npm start` in your terminal at the folder path. Make a GET request to the paths above to explore the data. You can use Postman for this as well. 

**Note**: the event timestamp is in UTC timezone. You will need to convert it to your local timezone using your programming language's time/date module. 