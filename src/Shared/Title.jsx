

const Title = ({heading, subHeading}) => {
    return (
        <div className="w-4/12 mx-auto" >
            <p className="text-center text-lg  font-semibold py-4 text-[#FFB703]" >{subHeading}</p>
            <h2 className="text-center uppercase border-y-2 border-[#023047] py-4 text-lg md:text-5xl font-bold" >{heading}</h2>
            
        </div>
    );
};

export default Title;