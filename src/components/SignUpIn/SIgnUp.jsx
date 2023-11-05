import { Link } from "react-router-dom";


const SIgnUp = () => {


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)


        // createUser(email, password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log('created user', user)
        //     })
        //     .catch(error => console.log(error))

    }


    return (
        <div className=" text-my-blue bg-neutral-50 mx-auto md:w-1/2 shadow-xl py-5">
            <h2 className="text-3xl my-10 text-center">Please Sign Up</h2>
            <form onSubmit={handleSignUp} className=" md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name..." className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-my-pink hover:bg-my-red">Register</button>
                </div>
            </form>
            <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login Here</Link></p>
            <div className="border border-x-1 opacity-20"></div>
            {/* <p className="mt-4 text-center"><button onClick={handleGoogleSignIn} className="btn btn-ghost">Sign in with Google</button></p> */}
        </div>
    );
};

export default SIgnUp;