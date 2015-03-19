module.exports = {
    "options": {
        "separator": ";"
    },
    "dist": {
        "src": [
            '<%=paths.tmp%>/app.js',
            '<%=paths.src%>/**/*.js'
        ],
        "dest":'<%=paths.target%>/app.js'
    }
};