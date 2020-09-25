class Auth {
  constructor() {
     this.authonticated = false;
  } 

  login(cb) {
     this.authonticated = true;
  }

  logout(cb) {
    this.authonticated = false;
  }


  isAuthonticated(cb) {
    return this.authonticated;
 }
}

export default new Auth();