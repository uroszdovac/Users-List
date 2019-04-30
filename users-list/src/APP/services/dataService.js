import User from '../entities/User';
import axios from 'axios';

class DataServices {

    getUser() {

        return axios.get('https://randomuser.me/api/?results=15')
            .then(response => {
                const result = response.data.results;
                return result.map(ingredient => {
                    return new User(ingredient.name, ingredient.email, ingredient.dob, ingredient.picture, ingredient.gender)
                })
            })
    };

}
export default new DataServices();