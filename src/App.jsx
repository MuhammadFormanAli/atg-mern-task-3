import { useQuery } from "react-query";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import imagePlaceholder from "/public/profile-placeholder.jpg";
import AllUsers from "./components/AllUsers";
import { Spinner } from "react-bootstrap";

function App() {
  const {
    data: users = [],
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );
      return res.data;
    },
  });

  if (loading) {
    return (
      <div className="w-100 py-5 h-100 d-flex align-items-center justify-content-center">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }

  if (error) {
    return <>Error: {error.message}</>;
  }

  const handleImageError = (event) => {
    event.target.src = imagePlaceholder;
  };

  return (
    <div className="d-flex justify-content-between p-5 gap-5 h-100 ">
      {/* section to show all the users */}
      <AllUsers users={users} handleImageError={handleImageError} />

      {/* section to show user information */}
      <div>User Details</div>
    </div>
  );
}

export default App;
