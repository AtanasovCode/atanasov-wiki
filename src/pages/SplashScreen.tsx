import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/articles/1/my-info")
        }, 1500)
    }, [])

    return (
        <div className="w-full h-screen flex items-center justify-center bg-background text-text absolute top-0 left-0 z-10">
            <div className="font-bold text-6xl font-serif">
                AW
            </div>
        </div>
    );
}

export default SplashScreen;