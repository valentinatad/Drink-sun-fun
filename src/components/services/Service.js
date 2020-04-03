import axios from 'axios';
export const getCategories = async () => {
  return await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`).then(response => {
    let { drinks } = response.data
    return drinks
  })
}


export const listOfDrinks = async (option) => {
  console.log(option)
  return await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${option}`).then(response => {
    console.log(response)
    return response
  })
}


export const listOfRecipes = async (name) => {
  console.log(name)
  return await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`).then(response => {
    console.log(response)
    return response
  })
}

export const listOfIngredients = async (ingredient) => {
  console.log(ingredient)
  return await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`).then(response => {
    console.log(response)
    return response
  })
}
const coetusUrl = `https://coetus.herokuapp.com/api/users`

export const postUser = async (username, password) => {
  console.log(username, password)
  return await axios.post(`https://coetus.herokuapp.com/api/users`, { username, password })
}

export const postRegisterComponent = async (name, surname, email, username, password) => {
  return await axios.put(`${coetusUrl}`, { name, surname, username, password, email })
}
