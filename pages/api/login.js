import users from "../../public/static/user.json";

const loginHandler = (req, res) => {
  const { email, password } = req.body;
  const requestedUser = { email, password };
  const isValidUser = users.some(
    (user) =>
      user.email === requestedUser.email &&
      user.password === requestedUser.password
  );
  if (isValidUser) {
    res.status(200).json(requestedUser);
  }
  res.status(403).json({ message: "Forbidden" });
};

export default loginHandler;
