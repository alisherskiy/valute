// получать элементы из html

const inp = document.querySelector('#inp')
const addBtn = document.querySelector('#btn')
const todoList = document.querySelector('#todo__list')
const deleteAllBtn = document.querySelector('#deleteAllBtn')
const modal = document.querySelector('#modal')

inp.onkeyup = () => {
    let userData = inp.value
    
    // получаем значения которые ввел пользователь

    if(userData.trim() != 0) { 
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
}

showTasks()

addBtn.onclick = () => {
    let userData = inp.value

    let getLocalStorage = localStorage.getItem('New Todo')

    if(getLocalStorage == null) {
        // если в локальном хр.пусто
        listArr = []
    } else {
        listArr = JSON.parse(getLocalStorage)
        // преобразовываем массив строки в обычной массв
    }

    listArr.push(userData)
    // добавляем в массив данные которые ввел пользователь
    localStorage.setItem('New Todo', JSON.stringify(listArr))

    modal.classList.add('active')

    setTimeout(() => {
    modal.classList.remove('active')
    }, 2000)

    showTasks()
}

function showTasks() {
    let getLocalStorage = localStorage.getItem('New Todo')

    if (getLocalStorage == null) {
        listArr = []
    }else {
        listArr = JSON.parse(getLocalStorage)
        // преобразовываем строку json в массив js
    }
    const pendingNumber = document.querySelector('#pending')
    pendingNumber.textContent = listArr.length ? `Tasks: ${listArr.length}` : 'Schedule a task'

    const footerPanding = document.querySelector('#footerPanding')
    footerPanding.textContent = listArr.length ? `You have ${listArr.length} panding tasks` : ''

    if (listArr.length) {
        deleteAllBtn.classList.add('active')
    } else {
        deleteAllBtn.classList.remove('active')
    }

    let newLiTag = ' '
    listArr.forEach((element, index) => {
        newLiTag = `<li>${element} <span onclick=deleteTasks(${i})>,i class="fas fa-trach"</i></span></li>`
    })
    todoList.innerHTML = newLiTag

    inp.value = ''
}

function deleteTask (i) {
    let getLocalStorage = localStorage.getItem('New Todo')

    listArr = JSON.parse(getLocalStorage)
    listArr.splice(i, 1)

    localStorage.setItem('New Todo'), JSON.stringify(listArr)

    showTasks()
}

deleteAllBtn.onclick = () => {
    
}


