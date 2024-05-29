import { useState } from "react";
import { Layout } from "../../layout/Layout";

import { CustomInput } from "../../components/customInput/CustomInput";

import { toast } from "react-toastify";
import { postNewUser } from "../../features/users/userAxios";
import { useNavigate } from "react-router-dom";
// import { postNewUser } from "../../features/users/userAxios";

const SignUp = () => {
  const [form, setform] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setform({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;
    console.log(rest);
    if (confirmPassword !== rest.password) {
      return alert("password do not match");
    }

    const responsePending = postNewUser(rest);
    toast.promise(responsePending, {
      pending: "Please wait....",
    });

    const { status, message } = await responsePending;

    toast[status](message);
    if (status === "success") {
      navigate("/signIn");
    }
  };

  const inputs = [
    {
      label: "Name",
      name: "name",
      type: "text",
      required: true,
      placeholder: "Rogan",
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
      required: false,
      placeholder: "041345678",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "Sam@email.com",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "*******",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      required: true,
      placeholder: "*******",
    },
  ];

  return (
    <Layout>
      <div className="row">
        <div className="col">
          <form
            onSubmit={handleOnSubmit}
            className="shadow-lg border p-5 rounded  m-auto mt-4"
            style={{ width: "450px" }}
          >
            <h1>Join the community!</h1>
            <hr />
            {inputs.map((input, i) => (
              <CustomInput key={i} {...input} onChange={handleOnChange} />
            ))}
            {error && (
              <div className="my-3">
                <ul>
                  <li className="text-danger fw-bolder">{error}</li>
                </ul>
              </div>
            )}
            <div className="d-grid">
              <button disabled={error} type="submit" className="rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
