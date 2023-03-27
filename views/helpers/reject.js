module.exports = {
    reject: (context, opt) => {
        return `<button style="width: 32%;text-align: center; height: 5vh;"
        onclick="document.location='/'"
        >Отказаться</button>`
    }
}