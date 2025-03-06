class AuthController {
  signin = async (req, res, next) => {
    console.log('Login');
  };

  signup = (req, res, next) => {
    try {
      console.log(`[P]::SignUp::`, req.body);
      return res.status(200).json({
        code: '20001',
        metadata: {
          userName: 'HHQ',
        },
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new AuthController();
