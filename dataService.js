const jwt = require("jsonwebtoken")

const db = require("./db")

login = (uname, psw) => {

    return db.User.findOne({ uname }).then(user => {
      if (user) {
        if (psw == user.password) {
          currentUser = user["uname"]
    
  
          const token = jwt.sign({ uname }, "superkey123")
          return {
            status: true,
            message: "login success",
            statusCode: 200,
            currentUser,
            
            token
          }
        } else {
          return {
            status: false,
            message: "incorrect password",
            statusCode: 404
  
          }
        }
      } else {
        return {
          status: false,
          message: "incorrect account number",
          statusCode: 404
  
        }
      }
    })
  }