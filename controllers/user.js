const Login = async (req, res) => {
    const { email, password } = req.body.data;
    try {

    } catch (error) {

    }
};

const SignUp = async (req, res) => {
    const { password, ...data } = req.body.data;
    try {

    } catch (error) {

    }
};

module.exports = {
    Login,
    SignUp
};