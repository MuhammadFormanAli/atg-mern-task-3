import { Spinner } from "react-bootstrap";

const AllUsers = ({ users, handleImageError, imageLoading }) => {
  
  return (
    <section className=" w-100  ">
      <h1 className="fs-4  m-0 p-3  bg-info text-center bg-opacity-50 rounded-top-3">
        Users List
      </h1>

      <div className="users-container ">
        {users &&
          users?.map((user) => (
            <div
              key={user?.profile?.username}
              className="img-div p-2 bg-dark bg-opacity-10 my-3 rounded d-flex gap-3 align-items-center "
            >
              {imageLoading ? (
                <div className=" mt-3 d-flex align-items-center justify-content-center">
                  <Spinner animation="border" variant="info" />
                </div>
              ) : (
                <img
                  className="img-circle mt-3"
                  src={user?.avatar}
                  onError={handleImageError}
                  alt=""
                />
              )}
              <p className="m-0 fs-5 fw-semibold">
                {user?.profile?.firstName}{" "}
                <span>{user?.profile?.lastName}</span>{" "}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default AllUsers;
