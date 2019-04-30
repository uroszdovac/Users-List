export default class User{

    constructor(name, email, dob, picture, gender) {
        this.name = {
            first: name.first.charAt(0).toUpperCase() + name.first.slice(1),
            last: name.last.charAt(0).toUpperCase() + name.last.slice(1)
        };
        this.email = email;
        this.dob = dob;
        this.mediumPicture = picture.medium;
        this.largePicture = picture.large;   
        this.gender = gender;
    }
}