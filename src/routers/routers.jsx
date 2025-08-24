import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages/home/Home";
import TableMaterials from "../pages/materials/tableMaterials";
import { InputSearch,FilterButtons } from "../pages/materials/materials";
const Routers = () => {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />}></Route>
        <Route
          path="/nguyenvatlieu"
          element={
            <div>
              <div>
                <div
                  style={{
                    marginBottom: "10px",
                    display: "flex",
                  }}
                >
                  <InputSearch style={{}}></InputSearch>
                  <FilterButtons style={{ marginLeft: "10px" }} />
                </div>
                <div></div>
              </div>

              <div>
                <TableMaterials></TableMaterials>
              </div>
            </div>
          }
        ></Route>
      </Routes>

  );
};
export default Routers;
