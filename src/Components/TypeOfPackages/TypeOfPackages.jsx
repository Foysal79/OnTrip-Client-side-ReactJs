import { useParams } from "react-router-dom";


const TypeOfPackages = () => {
    const type = useParams();
    console(type);
    return (
        <div>
            <h1>hi</h1>
        </div>
    );
};

export default TypeOfPackages;