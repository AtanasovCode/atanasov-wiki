import MainBody from "../components/main/MainBody";
import NavigationPanel from "../components/navigation/NavigationPanel";

import { myInfo } from "../articles/MyInfo";


const Home = () => {
    return (
        <div className="w-full flex items-start justify-between">
            <MainBody />
            <NavigationPanel sections={myInfo} />
        </div>
    );
}


export default Home;