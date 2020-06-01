import NavButton from './NavButton';
import "./NavBar.scss";
import navButtons from './NavButton';

const NavBar = props => {
    return (
        <div className="NavBar">
        {props.navButtons.map(button => (
          <NavButton
            key={button.path}
            path={button.path}
            label={button.label}
            icon={button.icon}
          />
        ))}
      </div>
    )
}

export default NavBar;