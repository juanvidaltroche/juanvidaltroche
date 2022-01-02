function readFile(file, cb) { // We pass a callback as parameter
    var content = "";
    var reader = new FileReader();

    reader.onload = function(e) {
        content = reader.result;
        // Content is ready, call the callback
        cb(content);
    }

    reader.readAsText(file);
    // return content; This is not needed anymore
}

var data = {};

readFile(file, function(content) {
    data.content = content;
    data.surname = surname;
    data.first = firstname;
    sendData(data, global_url + '/instance');
})

function sendData(data, url) {
    console.log("Try to send the data");
    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url,
        success: function (data) {
            console.log('success');
            console.log(JSON.stringify(data));
            if (data === 'done')
            {
                window.location.href = "/";
            } else {
                alert('Error');
            }
        },
        error: function () {
            console.log('process error');
        }
    });
}
