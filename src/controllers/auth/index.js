class AuthController {
  signin = (req, res) => {
    console.log('Login');
  };

  signup = (req, res) => {
    console.log('Signup');
  };
}

module.exports = new AuthController();
