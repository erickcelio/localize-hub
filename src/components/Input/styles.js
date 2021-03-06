import styled, { css } from '@xstyled/styled-components'

export const Container = styled.div``

export const InputContainer = styled.div`
  width: 280px;
  height: 40px;
  padding: 0 5;
  margin: 2 0 7 0;
  border-radius: 1;
  border: 1px solid;
  position: relative;

  ${(props) =>
    props.valid
      ? css`
          border-color: primary;
        `
      : css`
          border-color: red;
        `};
`

export const StyledLabel = styled.label`
  padding-left: 2;
`

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  color: white;
  font-size: 2;
  border: none;
  outline: none;
  background-color: transparent;
`

export const InvalidMessage = styled.span`
  left: 8px;
  opacity: 0;
  color: red;
  font-size: 1;
  margin-top: 1;
  bottom: -22px;
  position: absolute;
  transition: all 0.6s;

  ${(props) =>
    props.show &&
    css`
      opacity: 1;
    `}
`
