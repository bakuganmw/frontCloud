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
    loggedUser = new User(1, "mail", false);
  }

  return loggedUser;
}

export default getUser;