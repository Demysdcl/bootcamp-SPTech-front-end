import ky from 'ky'

const URL = 'https://coronavirus-19-api.herokuapp.com/countries'

export default {
  getCountry: (country: string) => ky.get(`${URL}/${country}`).json(),
}
