
window.onload = ()=>{
    let historyOpenBtn = document.getElementById('openHistory')
    let closeHistoryBtn = document.getElementById('CloseHistory')
    let history = document.getElementById('history')
    historyOpenBtn.onclick = () => {
        
        let stl = history.style.display
        if (stl == 'none') {
            history.style.display = 'block'
        }
        else {
            history.style.display = 'none'
        }
    }

    closeHistoryBtn.onclick = () => {
        history.style.display = 'none'
    }


    let historyList = document.getElementById('historyList')
    let history_json = JSON.parse(fs.readFileSync(dataFolder+'history.json', 'utf8')).history
    for (let i = 0; i < history_json.length; i++) {
        let name = history_json[i].name
        let date = history_json[i].date
        let time = history_json[i].time
        let size = history_json[i].size
        let status = history_json[i].status
        let link = history_json[i].link

        let h3Title = document.createElement('h3')
        h3Title.innerHTML = name
        let aLink = document.createElement('a')
        aLink.href = link
        aLink.innerHTML = link
        let pDate = document.createElement('p')
        pDate.innerHTML = date
        let pTime = document.createElement('p')
        pTime.innerHTML = time
        let pSize = document.createElement('p')
        pSize.innerHTML = size
        let pStatus = document.createElement('p')
        pStatus.innerHTML = status

        let divHistoryItem = document.createElement('div')
        divHistoryItem.className = 'historyItem'
        divHistoryItem.appendChild(h3Title)
        divHistoryItem.appendChild(aLink)
        divHistoryItem.appendChild(pDate)
        divHistoryItem.appendChild(pTime)
        divHistoryItem.appendChild(pSize)
        divHistoryItem.appendChild(pStatus)

        historyList.appendChild(divHistoryItem)

    }
    if (history_json.length == 0) {
        let p = document.createElement('p')
        p.innerHTML = 'No history'
        historyList.appendChild(p)
    }


}