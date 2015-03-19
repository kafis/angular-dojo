module.exports = {
    "main": {
        "files": ['<%=paths.src%>/**/*.js'],
        "tasks": [
            'test',
            'package'
        ]
    },
    "test": {
        "files": ['<%=paths.test%>/**/*.js'],
        "tasks": [
            'test',
            'package'
        ]
    },
    "css": {
        "files": ['<%=paths.src%>/**/*.css'],
        "tasks": [
           'cssmin'
        ]
    },
    "partials": {
        "files": ['<%=paths.src%>/**/*.html'],
        "tasks": [
            "ngtemplates",
            'test'
        ]
    }
};