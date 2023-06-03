import Coupon from '../../components/Coupon';
import styled from 'styled-components';
import api from '../../utils/api';
import {useEffect, useState} from 'react';

//// 假資料喔
const couponActivated = true;
const discountTypes = [
  'fixedAmout',
  'dealItem',
  'freeShipping',
  'dealItem',
  'freeShipping',
  'fixedAmout',
  'dealItem',
  'freeShipping',
];
const discountPrices = ['150', '200', '700', '600', '100', '777', '888', '999'];

const expiredTimes = [
  '2023.08.05',
  '2023.06.18',
  '2023.07.24',
  '2023.04.09',
  '2023.01.19',
  '2023.04.10',
  '2023.07.28',
  '2023.08.01',
];

////

const Wrapper = styled.div`
  width: 1160px;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 1279px) {
    width: 100%;
  }
`;

const HiddenWrapper = styled.div`
  width: 1000px;
  display: flex;
  align-items: center;
  overflow: hidden;
  @media screen and (max-width: 1279px) {
    width: 100%;
  }
`;

const CouponWrapper = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;

  transform: ${props => props.transform};
  transition: transform 800ms cubic-bezier(0.5, 0, 0.5, 1);
  /* overflow: hidden; */
  @media screen and (max-width: 1279px) {
    width: 100%;
  }
`;

const PrevBtn = styled.div`
  top: 50%;
  left: 0;
  cursor: pointer;

  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 6px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  visibility: ${props => props.visibility};
`;

const NextBtn = styled.div`
  top: 50%;
  right: 0;
  cursor: pointer;

  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 6px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  visibility: ${props => props.visibility};
`;

function CouponSlide() {
  const [coupons, setCoupons] = useState([]);
  const [slideIdx, setSlideIdx] = useState(0);

  async function getCoupon() {
    const {data} = await api.getCoupon();
    setCoupons(data.coupon);
  }

  useEffect(() => {
    const data = getCoupon();
  }, []);

  return (
    <Wrapper>
      <PrevBtn
        onClick={() => {
          setSlideIdx(prev => prev - 1);
        }}
        visibility={slideIdx === 0 ? 'hidden' : 'visible'}></PrevBtn>
      <HiddenWrapper>
        <CouponWrapper transform={`translateX(${-500 * slideIdx}px);`}>
          {coupons.map((_, idx) => {
            return (
              <Coupon
                key={idx}
                couponActivated={couponActivated}
                discountType={discountTypes[idx]}
                discountPrice={discountPrices[idx]}
                expiredTime={expiredTimes[idx]}
              />
            );
          })}
        </CouponWrapper>
      </HiddenWrapper>
      <NextBtn
        onClick={() => {
          setSlideIdx(prev => prev + 1);
        }}
        visibility={
          discountTypes.length * 245 - slideIdx * 500 <= 1000
            ? 'hidden'
            : 'visible'
        }></NextBtn>
    </Wrapper>
  );
}

export default CouponSlide;
