import { Icons } from "../../assets/icons";
import { Images } from "../../assets/images";

const AppBarProfile = () => {
  return (
    <div className="appbar-profile profile-dropdown">
      <div className="drop-info">
        <div className="drop-info-img">
          <img src={Images.ProfileImage} alt="ProfileImage"/>
        </div>
        <div className="drop-info-text">
          <div className="info-text-group">
            <span>Gregory</span>
            <span>Admin</span>
          </div>
          <img src={Icons.ChevronDownDark} className="drop-icon" alt="ChevronDownDark"/>
        </div>
      </div>
    </div>
  );
};

export default AppBarProfile;
