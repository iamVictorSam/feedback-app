import { Navigate, useNavigate, Routes, Route } from "react-router";

const Redirect = () => {
  const status = 200;
  const navigate = useNavigate();

  const onClick = () => {
    alert("pls continue");
    navigate("/about");
  };

  if (status === 404) return <Navigate to="notfound" />;

  return (
    <div>
      <h1>Redirect</h1>
      <button className="btn" onClick={onClick}>
        Click Me
      </button>

      <Routes>
        <Route path="/show" element={<h1>Hello world</h1>} />
      </Routes>
    </div>
  );
};

export default Redirect;
