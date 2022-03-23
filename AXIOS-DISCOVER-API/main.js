const url = 'http://localhost:5500/api'

function getUsers(){
  axios.get(url)
  .then(response => {
    apiResult.textContent = JSON.stringify(response.data)
  })
  .catch(error => console.error(error))
}

function addNewUser(newUser){
  axios.post(url, newUser)
  .then(response => {
    console.log(response)
  })
  .catch(error => console.error(error))
}

function getUser(id) {
  axios.get(`${url}/${id}`)
    .then (response => {
      const data = response.data
      userName.textContent = data.name
      userCity.textContent = data.city
      userID.textContent = data.id
      userAvatar.src = data.avatar
     })
    .catch (error => console.error(error))
}

function updateUser(id, userUpdated){
  axios.put(`${url}/${id}`, userUpdated)
  .then(response => console.log(response.data))
  .catch (error => console.error(error))
}

function deleteUser(id){
  axios.delete(`${url}/${id}`)
  .then(response => console.log(response.data))
  .catch (error => console.error(error))
}

const userUpdated ={
  name: 'Delbia Furquim',
  avatar: 'https://picsum.photos/200/300',
  city: 'Diamante do Sul'
}

const newUser =  {
  name: 'Henrique Kramer',
  avatar: 'https://picsum.photos/200/300',
  city: 'Curitiba'
}

deleteUser(2)
updateUser(3, userUpdated)
getUser(3)
addNewUser(newUser)
getUsers()