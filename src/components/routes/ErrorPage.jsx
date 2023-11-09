import { NavLink, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
   

        const error = useRouteError();
        
    return (
    <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Opps!!! {error.statusText || error.message}</h1>
                    <p className="py-6">You Entered The Wrong URL</p>
                    <button className="btn btn-primary"><NavLink to="/">Back To Home</NavLink></button>
                </div>
            </div>
        </div>
    </div>

    );
};

export default ErrorPage;