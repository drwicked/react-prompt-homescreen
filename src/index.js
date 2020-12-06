import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};

export const isInStandaloneMode = () => 'standalone' in window.navigator && window.navigator.standalone;

const PromptWrap = styled.div`
  .add-to-home-banner {
    position: fixed;
    bottom: 0px;
    width: 100%;
    background: white;
    color: black;
    text-align: left;
    -webkit-user-select: none;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .add-to-home-content {
      display: flex;
      align-items: center;
    }

    .add-to-home-icon {
      width: 32px;
      height: 32px;
      padding: 10px;
      padding-right: 0;
    }

    .add-to-home-text {
      display: inline-block;
      font-size: 16px;
      padding-left: 10px;
    }

    .add-to-home-close-btn {
      display: inline-block;
      position: relative;
      right: 4px;
      float: right;
      font-size: 32px;
    }
  }
`;

class AddToHomescreen extends Component {
  constructor(props) {
    super(props);
    const ignoreHomeScreenPrompt = cookies.get('ignoreHomeScreenPrompt') === 'true';
    this.state = {
      bannerVisible: true,
      ignoreHomeScreenPrompt,
    };
  }

  onAddToHomescreenClick = () => {
    const { onAddToHomescreenClick } = this.props;
    onAddToHomescreenClick();
  }

  handleCloseBannerBtnClick = () => {
    cookies.set('ignoreHomeScreenPrompt', true);
    this.setState({ bannerVisible: false });
  }

  render() {
    const { title, icon } = this.props;
    const { bannerVisible, ignoreHomeScreenPrompt } = this.state;
    const shouldRender = !ignoreHomeScreenPrompt && (bannerVisible && isIos() && !isInStandaloneMode());

    return (
      <PromptWrap>
        {shouldRender ? (
          <div className="add-to-home-banner">
            <div className="add-to-home-content">
              {icon !== '' ? <img className="add-to-home-icon" alt="App Icon" src={icon} /> : null}
              <div className="add-to-home-text">
                <a onClick={this.onAddToHomescreenClick}>
                  {title || 'Add to home screen'}
                </a>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              viewBox="0 0 24 24"
              width={24}
              className="add-to-home-close-btn"
              onClick={this.handleCloseBannerBtnClick}
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </div>
        ) : null}
      </PromptWrap>
    );
  }
}

AddToHomescreen.propTypes = {
  onAddToHomescreenClick: PropTypes.func,
  title: PropTypes.string,
  icon: PropTypes.string,
}
AddToHomescreen.defaultProps = {
  onAddToHomescreenClick: () => {
    alert(`
1. Open Share menu
2. Tap on "Add to Home Screen" button`);
  },
  title: 'Add to home screen',
  icon: '',
}

export default AddToHomescreen;
