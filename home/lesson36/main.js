function setName(){
    let name = prompt('Input your name')
    localStorage.setItem('my name',name)
}

let getName = function() {
    let name = localStorage.getItem('my name')
    alert(name)
}

let getStorage = () => {
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        alert(`${key}: ${localStorage.getItem(key)}`);
    }
}