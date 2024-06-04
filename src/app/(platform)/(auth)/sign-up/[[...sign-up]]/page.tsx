import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return <SignUp signInForceRedirectUrl={"/"} />;
};

export default SignUpPage;
