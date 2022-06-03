function showUser(id) {
    try {
        if (id < 0) {
            throw new Error(`ID must not be negative: ${id}!`);
        }
        return {
            id: id,
        };
        } catch (exception) {
            console.log(exception.message);
        }
}

function showUsers(ids) {
    let arr = [];
    
    for (let i = 0; i < ids.length; i += 1) {
        if (ids[i] < 0) {
            continue;
        } else{
            arr.push(showUser(ids[i]));
        }
    }
    return arr;
}

console.log(showUsers([0, 6, 12, 17]));