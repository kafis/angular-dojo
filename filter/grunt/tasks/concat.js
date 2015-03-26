module.exports = {
    "options": {
        "separator": ";"
    },
    "dist": {
        "src": [
            '<%=paths.src%>/**/*.js'
        ],
        "dest":'<%=paths.target%>/app.js'
    }
};