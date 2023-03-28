import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 개체의 너비,높이에 대해 각각 -50% 만큼 이동함 */
  text-align: center;
`;

export const Sign = styled.form`
  width: 80%;
  max-width: 30rem;
  margin: 2rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
`;

export const Signinput = styled.input`
  width: 100%;
  font-size: 1.6rem;
  border: none;
  line-height: 2;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Loginbutton = styled.button`
  width: 106%;
  background-color: #94af9f;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 1.5rem 2rem;
  font-size: 1.5rem;
  &:hover {
    color: yellow;
  }
`;

export const P = styled.p`
  display: inline-block;
  width: 240px;
`;

export const button = styled.button`
  display: inline-block;
  background-color: white;
  font-size: 1rem;
  border: none;
  margin-top: 2rem;
  cursor: pointer;
  &:hover {
    background-color: ;
  }
`;

export const Line = styled.hr`
  margin-top: 0;
  width: 100%;
`;

export const Googlesign = styled.button`
  display: center;
  width: 40%;
  border-radius: 10px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  color: black;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #f7c04a;
  }
`;

export const Logo = styled.img`
  float: left;
  margin-top: 0.5rem;
  width: 30px;
  hight: 30px;
`;
