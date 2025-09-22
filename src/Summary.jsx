

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.JSON())
.then(data => console.log(data))


const loadData = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = response.JSON();
    return data

}