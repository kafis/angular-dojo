module.exports = {
    dev: {
        files: {
            src:['<%=paths.src%>/**/*.js', '<%=paths.test%>/**/*.js']
        },
        options: {
            "loopfunc": true,
            globals: {
                angular: true
            }
        }
    }
};