import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../Redux/User/fetchUser";

function UserContainer({ userData, fetchUser }) {
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <h3>User Details</h3>
      {userData.loading ? (
        <h3>loading...</h3>
      ) : userData.error ? (
        <h3>{userData.error}</h3>
      ) : (
        <div>
          <h3>user List</h3>
          {userData &&
            userData.user &&
            userData.user.map(user => <p>{user.name}</p>)}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
