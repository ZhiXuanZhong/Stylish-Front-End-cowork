import {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import crystalBall from './crystal-ball.png';
import Xmark from './x-mark.png';

import api from '../../utils/api';

//// 假資料喔
const campaign_id = 12345667;
const campaign = 'campaign';
/////

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  @media screen and (max-width: 1279px) {
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgb(0, 0, 0, 0.45);
  /* opacity: 50%; */
  display: ${props => props.overLayDisplay};
`;

const CampaignAd = styled.div`
  width: 360px;
  height: 380px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* display: flex; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #6a6a6a;
  position: absolute;
  z-index: 9999;
  display: ${props => props.adDisplay};
`;

const CrystalBall = styled.img`
  width: 150px;
  margin-top: -20px;
`;

const CampSubTitle = styled.div`
  font-size: 30px;
  color: #ffffff;
  margin-top: -10px;
`;

const CampTitle = styled.div`
  font-size: 40px;
  margin-top: 20px;
  color: #ffffff;
`;

const GoButton = styled.div`
  width: 180px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background-color: #d32701;
  margin-top: 30px;
  margin-bottom: 20px;
  color: #ffffff;
  font-size: 32px;
  cursor: pointer;
`;

const CloseButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.img`
  width: 45px;
  padding: 15px;
  cursor: pointer;
`;

function disableScroll(event) {
  event.preventDefault();
  event.stopPropagation();
}

function CampaignCover() {
  const [adStatus, setAdStatus] = useState('block');

  useEffect(() => {
    document.body.addEventListener('scroll', disableScroll);
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <Wrapper>
      <Overlay
        overLayDisplay={adStatus}
        onClick={event => {
          event.target.style.display = 'none';
          setAdStatus('none');
        }}
      />
      <CampaignAd adDisplay={adStatus == 'none' ? 'none' : 'flex'}>
        <CloseButtonWrapper>
          <CloseButton
            src={Xmark}
            onClick={() => {
              setAdStatus('none');
              document.body.removeEventListener('scroll', disableScroll);
              document.body.style.overflow = 'auto';
            }}
          />
        </CloseButtonWrapper>

        <CrystalBall src={crystalBall} alt="" />
        <CampSubTitle>抽出好運勢</CampSubTitle>
        <CampTitle>馬上參加好運預測</CampTitle>
        <Link
          to={`/${campaign}/${campaign_id}`}
          style={{textDecoration: 'none'}}>
          <GoButton onClick={() => console(1)}>立即抽 {'>'}</GoButton>
        </Link>
      </CampaignAd>
    </Wrapper>
  );
}

export default CampaignCover;
