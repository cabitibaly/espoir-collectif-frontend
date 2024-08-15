import Footer from "../components/footer";
import Navbar from "../components/navbar";
import UserInformation from "../components/userInformation";


const Profile = () => {
    return (
        <>
            <Navbar other={true} />
            <UserInformation />
            <Footer />
        </>
    );
};
export default Profile;