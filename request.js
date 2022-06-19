function request(method, url, body) {
    var request = new XMLHttpRequest()
    request.open(method, url, true)
    request.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

      }
    if (body) {
        request.send(body)
    }
    else {
        request.send()
    }
    return request.responseText
}
