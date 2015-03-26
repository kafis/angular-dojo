module.exports = {
    templates:{
        cwd: '<%=paths.src%>',
        src:      '**/*.html',
        dest:     '<%=paths.tmp%>/epost.modal.templates.js',
        options: {
            url: function(url) {
                var filename = url.substring(url.lastIndexOf("/")+1);
                return 'template/modal/'+filename;
            },
            bootstrap:  function(module, script) {
                return "(function(angular) {" +
                       "    angular.module('epost.modal.templates',[]).run(['$templateCache', function($templateCache){"+script+"}])" +
                       "}(angular));";
            }
        }
    }
};