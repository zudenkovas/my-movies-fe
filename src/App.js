"use strict";
exports.__esModule = true;
var react_query_1 = require("react-query");
var health_1 = require("api/health");
var LogoIcon_1 = require("./components/Icons/LogoIcon");
var App_module_css_1 = require("./App.module.css");
console.log(process.env);
function App() {
    var healthy = react_query_1.useQuery('status', health_1.fetchStatus).data;
    return (<div className={App_module_css_1["default"].app}>
      <header className={App_module_css_1["default"].appHeader}>
        <LogoIcon_1["default"] />
        <p>My Movies</p>
        <p>API Status: {healthy ? 'Is running' : 'Something is wrong!'}</p>
      </header>
    </div>);
}
exports["default"] = App;
