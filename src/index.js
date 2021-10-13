"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var react_query_1 = require("react-query");
var dotenv_1 = require("dotenv");
require("./index.css");
var App_1 = require("./App");
dotenv_1["default"].config();
var queryClient = new react_query_1.QueryClient();
react_dom_1["default"].render(<react_1["default"].StrictMode>
    <react_query_1.QueryClientProvider client={queryClient}>
      <App_1["default"] />
    </react_query_1.QueryClientProvider>
  </react_1["default"].StrictMode>, document.getElementById('root'));
