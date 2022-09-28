/*// Enable navigation prompt
window.onbeforeunload = function() {
    return true;
};*/

var events = 0;
function createSection(type) {
    switch (type) {
        case 'event':
            var temp, item, a;
            temp = document.getElementsByTagName("template")[0];
            item = temp.content.querySelector("div");
            a = document.importNode(item, true);
            document.getElementById('event-container').append(a);
            break;

        default:
            break;
    }
}

function importJSON(json){

}

function enableBeforeUnload() {
    window.onbeforeunload = function () {
        return true;
    };
}
function disableBeforeUnload() {
    window.onbeforeunload = null;
}