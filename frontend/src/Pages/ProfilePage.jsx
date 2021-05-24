import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../actions/userActions';

function ProfilePage(props) {

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        props.history.push("/login");
    }


useEffect(() => {
    return () => {

    };
  }, [])

  return (
    <div className="profile">
    <div className="profile-info">
      <div className="form">
        <form>
          <ul className="form-container">
            <li>
              <h2>User Profile</h2>
            </li>
            <li>
              <button type="button" onClick={handleLogout} className="button secondary full-width">Logout</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
    </div>
  )
}

export default ProfilePage;