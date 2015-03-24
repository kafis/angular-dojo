module.exports = {
    "dev": {
        "src": [
            '<%=paths.src%>/**/*.js'],
        "options": {
            "specs": "<%=paths.test%>/**/*.spec.js",
            "vendor": [
                '<%=paths.libs%>/angular/angular.js',
                '<%=paths.libs%>/angular-mocks/angular-mocks.js'
            ]
        }
    }
};