# Automated Teacher Evaluation Tool - Frontend
##  by Nathan Dilla

The frontend is written primarily in ReactJS.
Additional dependencies:
- html2pdf: Generates a PDF of the report
- chart.js: Generates a chart visual for the weekly metrics
- socket.io-client: Provides a WebSocket connection to the main server for processing updates
- axios: Sends HTTP requests

HTTP requests are handled in the api folder
-----
ReactJS is a component-based frontend framework. They are located in the components folder.
Components corrosponding for each screen is stored in their respective folder.
The main screen components are stored in the routes folder. They switched via ReactJS BrowserRouter.
-----
Quick Start:
Make sure that main server URL is configured.
In the main project directory:, install the node dependencies:
- `npm install`
Then,
- `npm start`

**Ensure that CORS is configured for local testing.**
