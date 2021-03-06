import React, { useState } from "react";
import Resources from "../../resources";
import { configuration } from "../../utils/data";
import styled from "styled-components";
import Modal from "../modal";
import ThankYouModal from "../modal/thankYou";
const StyledWrapper = styled.div`
  padding: 64px 130px;
  img {
    height: 24px;
    width: 24px;
    margin-right: 16px;
  }
  .config__heading {
    font-size: 32px;
    margin-bottom: 32px;
  }
  .buttons {
    margin-left: 40px;
  }
  .btn {
    height: 40px;
    border-radius: 4px;
    border: 1px solid #fc732f;
    display: flex;
    align-items: center;
    margin-right: 40px;
    img {
      height: 18px;
      width: 18px;
    }
  }
  .btn-primary {
    background: ${props=>props.theme.orange};
    color: #fff;
  }
  .btn-secondary {
    color: ${props=>props.theme.orange};
  }
  @media only screen and (max-width: 1024px) {
    padding: 32px;

  }
`;

const StyledBox = styled.div`
  border: ${(props) => (props.selected ? `1px solid ${props.theme.gray2}` : ``)};
  background: ${(props) => (props.selected ? `${props.theme.gray2}` : "#fff")};
  width: 100%;
  .config__section__section {
    border-bottom: 1px solid #d5d5d5;
  }
  .config__section__padding {
    padding: 32px;
  }
  .config__section__gap {
    margin-bottom: 6px;
  }
  .subText {
    font-size: 0.8rem;
    font-weight: 400;
  }
  .title {
    font-size: 1rem;
    font-weight: 400;
  }
  .bold {
    font-weight: 700;
  }
`;

const Configuration = ({}) => {
  const [selectedConfig, setConfig] = useState(1);
  const [modalOpen, setModal] = useState(false);

  return (
    <React.Fragment>
      <StyledWrapper className="config">
        <div className="config__heading ">Select Configuration</div>
        {configuration.map((item) => {
          const selected = selectedConfig === item.id;
          return (
            <div key={item.id} className="flex row align-center">
              <img
                className="pointer"
                onClick={() => setConfig(item.id)}
                src={Resources.assets[selected ? "tick" : "circle"]}
                alt="tick"
              />
              <StyledBox selected={selected} className="config__section">
                <div className="config__section__section config__section__padding">
                  <div className="config__section__gap title bold">
                    {item.title}
                  </div>
                  <div className="subText">{item.subTitle}</div>
                </div>
                {selectedConfig === item.id && (
                  <div className="config__section__padding">
                    <div className="config__section__gap title">
                      {item.descriptionTitle}
                    </div>
                    <div className="subText">{item.description}</div>
                  </div>
                )}
              </StyledBox>
            </div>
          );
        })}
        <div className="buttons flex row form-item">
          <button
            onClick={() => setModal(!modalOpen)}
            type="button"
            className="btn btn-primary pointer"
          >
            <img src={Resources.assets.btn} alt="btn" />
            Update Configutation
          </button>
          <button type="button" className="btn btn-secondary pointer">
            <img src={Resources.assets.colorCross} alt="btn" />
            Cancel
          </button>
        </div>
      </StyledWrapper>
      <Modal isOpen={modalOpen}>
        <ThankYouModal />
      </Modal>
    </React.Fragment>
  );
};

export default Configuration;
