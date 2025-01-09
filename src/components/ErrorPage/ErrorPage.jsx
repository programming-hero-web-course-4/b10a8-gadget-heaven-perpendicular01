import error from '../../assets/error.png'

const ErrorPage = () => {
    return (
        <div>

            <h2 className='text-4xl font-bold text-center mt-24' > Error !! </h2>

            <img className="w-[300px] h-[250px] md:w-[400px] md:h-[350px] mx-auto mt-10" src={error} alt="" />
            
        </div>
    );
};

export default ErrorPage;