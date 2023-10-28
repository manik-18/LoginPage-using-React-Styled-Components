import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 50px auto;
  padding: 50px;

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-right: -100px;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  margin-left: -50px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  border-radius: 20px;
  border-radius: 50px;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;

  @media (min-width: 600px) {
    width: 60%;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 900px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const CheckboxDiv = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 0;
  color: #555;
  text-align: left;
`;

export const Checkbox = styled.input`
  margin-right: 5px;
`;

export const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const PasswordInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
`;

export const TogglePasswordVisibility = styled.button`
  position: absolute;
  top: 82%;
  right: 0;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #555;
  padding: 0;
`;

export const SubmitButton = styled.button`
  padding: 0.8em 1.8em;
  width: 50%;
  border-radius: 8px;
  position: relative;
  background-color: #1575a7;
  text-align: center;
  font-size: 16px;
  color: white;
  &:hover {
    color: white;
    background-color: #005c8c;
  }
`;

export const RegisterLink = styled.a`
  color: orange;
  text-decoration: none;
  margin-top: 10px;
  font-weight: bold;
  color: orange;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
`;
