import React from 'react';
import styled from "styled-components";

const ToggleButton = ({ toggleState, toggleSwitch }: ToggleProps) => (
  <ToggleSwitch>
    <div onClick={() => toggleSwitch()} className={`wrg-toggle ${toggleState ? 'wrg-toggle--checked' : ''}`}>
      <div className="wrg-toggle-container">
        <div className="wrg-toggle-check">
          <span></span>
        </div>
        <div className="wrg-toggle-uncheck">
          <span></span>
        </div>
      </div>
      <div className="wrg-toggle-circle"></div>
      <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
    </div>
  </ToggleSwitch>
)


type ToggleProps = {
  toggleState: boolean;
  toggleSwitch: Function;
};

const ToggleSwitch = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;

.wrg-toggle-input {
  border: 0;
  clip: rect(0 0 0 0);
  height: 25px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 50px;
}

.wrg-toggle-check, .wrg-toggle-uncheck {
  position: absolute;
  width: 10px;
  height: 10px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  opacity: 0;
  transition: opacity .25s ease;
}
.wrg-toggle-check {
  left: 8px;
}
.wrg-toggle-uncheck {
  opacity: 1;
  right: 10px;
}

.wrg-toggle-uncheck span, 
.wrg-toggle-check span {
  align-items: center;
  display: flex;
  height: 10px;
  justify-content: center;
  position: relative;
  width: 10px;
}

.wrg-toggle-container{
  width: 50px;
  height: 24px;
  padding: 0;
  border-radius: 30px;
  background-color: #4d4d4d;
  transition: all .2s ease;
}

.wrg-toggle-circle{
  transition: all .5s cubic-bezier(.23,1,.32,1) 0ms;
  position: absolute;
  top: 1px;
  left: 1px;
  width: 22px;
  height: 22px;
  border: 1px solid #4d4d4d;
  border-radius: 50%;
  background-color: #fafafa;
  box-sizing: border-box;
  transition: all .25s ease;
}

.wrg-toggle--checked .wrg-toggle-check{
  opacity: 1;
}
.wrg-toggle--checked .wrg-toggle-uncheck {
  opacity: 0;
}
.wrg-toggle--checked .wrg-toggle-circle {
  left: 27px;
}
`;

export default ToggleButton;

