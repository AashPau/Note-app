import { CustomInput } from "../../components/customInput/CustomInput";
import { Layout } from "../../layout/Layout";
import { useRef } from "react";
import { toast } from "react-toastify";

const SignIn = () => {
  const emailRef = useRef("");
  const passRef = useRef("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    // console.log(email, password);
    if (!email || !password) {
      return toast.error("Both field must be filled");
    }

    // // const { status, message, tokens } = await loginUser({ email, password });
    // toast[status](message);
    // //store tokens in the sessions
    // sessionStorage.setItem("accessJWT", tokens.accessJWT);
    // localStorage.setItem("refreshJWT", tokens.refreshJWT);
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
            <h1>Join the library community!</h1>
            <hr />
            {inputs.map((input, i) => (
              <CustomInput key={i} {...input} />
            ))}

            <div className="d-grid">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
