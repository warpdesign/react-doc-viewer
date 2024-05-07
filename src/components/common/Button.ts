import styled, { WebTarget, css } from "styled-components";
import { IStyledProps } from "../..";

interface ButtonProps extends IStyledProps {
  disabled?: boolean;
}

export const ButtonPrimaryStyle = css`
  color: ${(props: IStyledProps) => props.theme.textPrimary};
`;

export const ButtonSecondaryStyle = css`
  color: ${(props: IStyledProps) => props.theme.textSecondary};
`;

export const Button:WebTarget = styled.button<ButtonProps>`
  ${ButtonPrimaryStyle}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  padding: 0;
  margin: 0 0 0 5px;
  text-align: center;
  font-size: 18px;
  border: 0;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 35px;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "all")};
  background-color: transparent;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 15px;
  }
`;

export const LinkButton:WebTarget = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${(props: IStyledProps) => props.theme.textPrimary};

  width: 35px;
  height: 35px;
  font-size: 18px;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 15px;
  }
`;

export const ButtonPrimary:WebTarget = styled(Button)``;
export const ButtonSecondary:WebTarget = styled(Button)`
  ${ButtonSecondaryStyle}
`;
