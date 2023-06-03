import Coupon from '../../components/Coupon';
import styled from 'styled-components';

//// 假資料喔
const couponActivated = true;
const discountType = 'cash';
const discountPrice = '150';

////

const Wrapper = styled.div`
  width: 1160px;
  height: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;

  position: relative;
  overflow: hidden;

  @media screen and (max-width: 1279px) {
    width: 100%;
  }
`;

// function moveSlide(index) {
//   const w = track.clientWidth;
//   track.style.transform = `translateX(-${index * w}px)`;
//   updateNavigatorButtons(index);
//   updateIndicator(index);
// }

const slideButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

function CouponSlide() {
  return (
    <Wrapper>
      <Coupon
        // couponActivated={couponActivated}
        discountType={discountType}
        discountPrice={discountPrice}
      />
      <Coupon
        couponActivated={couponActivated}
        discountType={discountType}
        discountPrice={discountPrice}
      />
      <Coupon
        couponActivated={couponActivated}
        discountType={discountType}
        discountPrice={discountPrice}
      />
      <slideButton>{'>trdfgdf'}</slideButton>
      <Coupon
        couponActivated={couponActivated}
        discountType={discountType}
        discountPrice={discountPrice}
      />
      <Coupon
        couponActivated={couponActivated}
        discountType={discountType}
        discountPrice={discountPrice}
      />
      <Coupon
        couponActivated={couponActivated}
        discountType={discountType}
        discountPrice={discountPrice}
      />
      <Coupon
        couponActivated={couponActivated}
        discountType={discountType}
        discountPrice={discountPrice}
      />
    </Wrapper>
  );
}

export default CouponSlide;
