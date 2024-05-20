<<<<<<< HEAD
//A esto se concidera como un fragment y no genera mas codigo html
//<>
//</>

=======
>>>>>>> f73af4e705ccc0af52a618a38a26ba3962d3e8da
import { Outlet } from "react-router-dom";
import imagen from "../../public/img/Logo.png";
const AuthLayout = () => {
  return (
    <>
      <div
        className="flex justify-center items-center"
      >
        <img
          style={{ width: 500, height: 250 }}
          src={imagen}
          alt="imagen logo"
          className="float-left"
        />
      </div>
      <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-10 p-5 items-center">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
