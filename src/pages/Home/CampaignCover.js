import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import draw from './draw.gif';
import xmark from './x-mark.png';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  display: ${props => props.display};
  @media screen and (max-width: 1279px) {
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgb(0, 0, 0, 0.45);
  display: ${props => props.overLayDisplay};
`;

const CampaignAd = styled.div`
  width: 360px;
  height: 380px;
  top: 50%;
  left: 50%;
  border-radius: 24px;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #6a6a6a;
  position: absolute;
  z-index: 9999;
  display: ${props => props.adDisplay};
`;

const DrawLots = styled.img`
  width: 110px;
  margin-top: -50px;
`;

const CampSubTitle = styled.div`
  font-size: 28px;
  color: #ffffff;
  margin-top: 10px;
`;

const CampTitle = styled.div`
  font-size: 35px;
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
  const [ignoreAd, setIgnoreAd] = useState(false);
  const [adStatus, setAdStatus] = useState('flex');

  useEffect(() => {
    const showAd = sessionStorage.getItem('showAd');
    if (showAd === 'isActivated') {
      setIgnoreAd(true);
    } else {
      document.body.addEventListener('scroll', disableScroll);
      document.body.style.overflow = 'hidden';
      sessionStorage.setItem('showAd', 'isActivated');

      return () => {
        document.body.removeEventListener('scroll', disableScroll);
        document.body.style.overflow = 'auto';
      };
    }
  }, []);

  return (
    <Wrapper display={ignoreAd ? 'none' : 'block'}>
      <Overlay
        overLayDisplay={adStatus}
        onClick={() => {
          setAdStatus('none');
          setIgnoreAd(true);
          document.body.removeEventListener('scroll', disableScroll);
          document.body.style.overflow = 'auto';
        }}
      />
      <CampaignAd adDisplay={adStatus}>
        <CloseButtonWrapper>
          <CloseButton
            src={xmark}
            onClick={() => {
              setAdStatus('none');
              setIgnoreAd(true);
              document.body.removeEventListener('scroll', disableScroll);
              document.body.style.overflow = 'auto';
            }}
          />
        </CloseButtonWrapper>

        <DrawLots src={draw} alt="" />
        <CampSubTitle>抽出好運勢</CampSubTitle>
        <CampTitle>馬上參加好運預測</CampTitle>
        <Link to={`/divination`} style={{textDecoration: 'none'}}>
          <GoButton
            onClick={() => {
              document.body.removeEventListener('scroll', disableScroll);
              document.body.style.overflow = 'auto';
            }}>
            立即抽 {'>'}
          </GoButton>
        </Link>
      </CampaignAd>
    </Wrapper>
  );
}

export default CampaignCover;
