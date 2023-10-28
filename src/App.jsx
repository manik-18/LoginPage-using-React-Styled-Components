import React, { useState } from "react";
import login from "./assets/image.png";
import {
  MainContainer,
  ImageContainer,
  LoginContainer,
  PasswordContainer,
  InputField,
  PasswordInput,
  TogglePasswordVisibility,
  CheckboxDiv,
  CheckboxContainer,
  Checkbox,
  SubmitButton,
  RegisterLink,
  Image,
} from "./Styles";

const App = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleAgreeToTermsChange = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <MainContainer>
      <ImageContainer>
        <Image src={login} alt="image" />
      </ImageContainer>

      <LoginContainer>
        <h2>Login</h2>
        <PasswordContainer>
          <label>Username</label>
          <InputField type="text" id="username" placeholder="Username" />
          <label>Password</label>
          <PasswordInput
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TogglePasswordVisibility onClick={togglePasswordVisibility}>
            {showPassword ? "👁️" : "🕶️"}
          </TogglePasswordVisibility>
        </PasswordContainer>
        <CheckboxDiv>
          <CheckboxContainer
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <div>
              <Checkbox
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              Remember Me
            </div>

            <a
              href="/change-password"
              style={{
                marginLeft: "10px",
                color: "orange",
                textDecoration: "none",
              }}
            >
              Change Password
            </a>
          </CheckboxContainer>
          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              checked={agreeToTerms}
              onChange={handleAgreeToTermsChange}
            />
            Agree to{" "}
            <a
              href="http://"
              style={{ color: "orange", textDecoration: "none" }}
            >
              Terms and Conditions
            </a>
          </CheckboxContainer>
        </CheckboxDiv>
        <br />
        <SubmitButton>LOGIN</SubmitButton>
        <br />
        <div>
          Don't have an account?{" "}
          <RegisterLink href="/register">Register now</RegisterLink>
        </div>
      </LoginContainer>
    </MainContainer>
  );
};

export default App;
