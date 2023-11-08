import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {

    const {signIn , signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
    }



    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
            })
    }



    return (
        <div className=" text-my-blue bg-neutral-50 mx-auto md:w-1/2 shadow-xl py-5">
        <h2 className="text-3xl font my-10 text-center">Please Login</h2>
        <form onSubmit={handleLogin}  className=" w-full md:w-3/4 lg:w-1/2 mx-auto">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" required name="email" placeholder="email@gmail.com" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" required name="password" placeholder="password..." className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
                <button className="btn bg-my-pink hover:bg-my-red">Login</button>
            </div>
        </form>
        <p className="text-center my-4">Do not have an account <Link className="text-blue-600 font-bold" to="/signup">Register</Link></p>
        <div className="border border-x-1 opacity-20"></div>
        <p className="mt-4 text-center"><button onClick={handleGoogleSignIn} className="btn btn-ghost">Sign in with Google</button></p>
    </div>
    );
};

export default Login;