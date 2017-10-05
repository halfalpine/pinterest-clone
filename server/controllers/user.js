import User from "../models/user";

export function newUser(req, res) {
  let newUser = new User({
    username: req.body.username,
    email: req.body.email
  });

  newUser.save(err => {
    if (err) throw err;
    res.json(newUser);
  });
}

export function getUser(req, res) {
  User.findOne({ username: req.params.username }, function(err, user) {
    if (err) throw err;
    res.json(user);
  });
}

export function getUsers(req, res) {
  User.find({}, function(err, users) {
    if (err) console.log(err);
    res.json(users);
  });
}

export function updateUser(req, res) {
  User.findOne({ username: req.params.username }, function(err, user) {
    if (err) throw err;
    user.email = req.body.email;
    user.save(function(err) {
      if (err) throw err;
      res.json(user);
    });
  });
}
