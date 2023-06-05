import Coupon from '../../components/Coupon';
import styled from 'styled-components';
import {useState, useEffect} from 'react';

const couponActivated = true;

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
  width: 1050px;
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

function CouponSlide({setDiscount, setCouponId, coupons}) {
  const [slideIdx, setSlideIdx] = useState(0);
  const [couponSelected, setCouponSelected] = useState();

  const moveSlideToStart = () => {
    setSlideIdx(0);
  };

  useEffect(() => {
    window.addEventListener('resize', moveSlideToStart);

    return () => {
      window.addEventListener('resize', moveSlideToStart);
    };
  }, []);

  return (
    <Wrapper>
      <PrevBtn
        onClick={() => {
          setSlideIdx(prev => prev - 1);
        }}
        visibility={slideIdx === 0 ? 'hidden' : 'visible'}></PrevBtn>
      <HiddenWrapper>
        <CouponWrapper
          transform={
            window.innerWidth >= 1280
              ? `translateX(${-1050 * slideIdx}px);`
              : `translateX(${-(window.innerWidth - 245) * slideIdx}px);`
          }>
          {coupons.map(coupon => {
            return (
              <Coupon
                key={coupon.id}
                couponActivated={couponActivated}
                discountType={coupon.type}
                discountPrice={coupon.discount}
                expiredTime={coupon.expire_time}
                selected={couponSelected === coupon.id}
                clickAction={() => {
                  if (couponSelected === coupon.id) {
                    setCouponSelected(undefined);
                    setDiscount(0);
                    setCouponId(undefined);
                  } else {
                    setCouponSelected(coupon.id);
                    setDiscount(coupon.discount);
                    setCouponId(coupon.id);
                  }
                }}
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
          (window.innerWidth >= 1280 &&
            coupons.length * 245 - slideIdx * 1050 <= 1050) ||
          (window.innerWidth < 1280 &&
            coupons.length * 245 - slideIdx * (window.innerWidth - 245) <=
              window.innerWidth - 245)
            ? 'hidden'
            : 'visible'
        }></NextBtn>
    </Wrapper>
  );
}

export default CouponSlide;
