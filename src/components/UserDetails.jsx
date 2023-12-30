import { Spinner } from "react-bootstrap";

const UserDetails = (props) => {
  const { user, handleImageError, handleImageLoad, imageLoading } = props.a;

  console.log(user);
  return (
    <section className=" w-75 px-5 ">
      <h1 className="fs-4  m-0 p-3 bg-black text-center bg-opacity-10  ">
        User Details
      </h1>

      <div className="d-flex flex-column align-items-center">
        {imageLoading ? (
          <div className="img-circle2 mt-3 d-flex align-items-center justify-content-center">
            <Spinner animation="border" variant="info" />
          </div>
        ) : (
          <img
            className="img-circle2 mt-2"
            src={user?.avatar}
            onError={handleImageError}
            onLoad={handleImageLoad}
            alt=""
          />
        )}

        <p className="m-0 fs-6 pb-3 ">@{user?.profile?.username}</p>
        <p className="m-0 p-2 border  border-dark-subtle  w-100">
          {user?.Bio}
        </p>

        <div className="w-100 mt-4">
          <p className="text-start m-0 ">Full Name</p>
          <p className="text-start m-0 p-2 border border-dark-subtle  bg-black bg-opacity-10 ">
            <span>{user?.profile?.firstName}</span> {user?.profile?.lastName}
          </p>
        </div>

        <div className="w-100 mt-3">
          <p className="text-start m-0 ">Job Title</p>
          <p className="text-start m-0 p-2 border border-dark-subtle  bg-black bg-opacity-10 ">
            {" "}
            {user?.jobTitle}
          </p>
        </div>

        <div className="w-100 mt-3">
          <p className="text-start m-0 ">Email</p>
          <p className="text-start m-0 text-lowercase p-2 border border-dark-subtle bg-black bg-opacity-10 ">
            {" "}
            {user?.profile?.email}
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserDetails;
