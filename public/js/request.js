class Util{
    xhr = new XMLHttpRequest
    async sendRequest(method,url){
        await this.xhr.open(method,url,true)
        await this.xhr.send()

        return this.xhr.responseText
    }
}