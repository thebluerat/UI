module.exports = {
    server_port: 80,
    server_session: {
        secret:"keyboard cat",
        resave:false,
        saveUninitialized:true
    },
    server_error: {
      static: {
        "404":"./error/404.html"
      }
    },
    jdbc : {
      connectionLimit:1,
      host:"192.168.3.16",
      user:"root",
      password:"1234",
      database:"test",
      debug:false
    }
};
