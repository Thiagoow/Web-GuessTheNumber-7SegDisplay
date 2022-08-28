const API_URL =
  'https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300'

async function getRandomNumber() {
  try {
    const response = await fetch(API_URL)
    const data = await response.json()
    return data.value
  } catch (error) {
    console.log(error)
  }
}

export default getRandomNumber
