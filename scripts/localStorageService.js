function saveToLocalStorage(key, date, data) {
    let storedItems = localStorage.getItem(key);
    let todoItems = storedItems ? JSON.parse(storedItems) : {};

    if (!todoItems[date]) {
        todoItems[date] = [];
    }

    todoItems[date].push(data);

    localStorage.setItem(key, JSON.stringify(todoItems));
}

function saveToDosToLocalStorage(key, date, data) {
    let storedItems = localStorage.getItem(key);
    let todoItems = storedItems ? JSON.parse(storedItems) : {};

    if (data.length > 0) {
        todoItems[date] = data;
    } else {
        delete todoItems[date];
    }
    
    if (Object.keys(todoItems).length === 0) {
        localStorage.removeItem(key);
    } else {
        localStorage.setItem(key, JSON.stringify(todoItems));
    }
}
function getFromLocalStorage(key, date) {
    let storedItems = localStorage.getItem(key);
    
    if (storedItems) {
        let todoItems = JSON.parse(storedItems);
        return todoItems[date] || [];
    }
    
    return [];
}