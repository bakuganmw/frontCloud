class User {
  constructor(id, email, isAdmin) {
    this.id = id;
    this.email = email;
    this.isAdmin = isAdmin;
  }
}

let loggedUser = null;

const getUser = () => {
  if (!loggedUser) {
    loggedUser = new User(2, "nikodemkirsz101@gmail.com", true);
  }

  return loggedUser;
}

export default getUser;