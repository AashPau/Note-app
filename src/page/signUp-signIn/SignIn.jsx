import { useNavigate } from "react-router-dom";
import { CustomInput } from "../../components/customInput/CustomInput";
import { loginUser } from "../../features/users/userAxios";
import { Layout } from "../../layout/Layout";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getUserObj } from "../../features/users/userAction";

const SignIn = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    user?._id && navigate("/dashboard");
  }, [user?._id, navigate]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;

    if (!email || !password) {
      return toast.error("Both field must be filled");
    }
    // const { status, message, tokens } = await loginUser({ email, password });
    // toast[status](message);

    const pending = loginUser({ email, password });
    toast.promise(pending, {
      pending: "Please wait ...",
    });

    const { status, message, tokens } = await pending;
    toast[status](message);

    //store tokens in the sessions
    sessionStorage.setItem("accessJWT", tokens.accessJWT);
    localStorage.setItem("refreshJWT", tokens.refreshJWT);

    if (status === "success") {
      dispatch(getUserObj());
    }
  };
  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "Sam@email.com",
      inputRef: emailRef,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "*******",
      inputRef: passRef,
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
            <h1>Log-In to access your notes!</h1>
            <hr />
            {inputs.map((input, i) => (
              <CustomInput key={i} {...input} />
            ))}

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
