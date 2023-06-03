import Coupon from '../../components/Coupon';
import styled from 'styled-components';

//// 假資料喔
const couponActivated = true;
const discountType = 'cash';
const discountPrice = '150';

////

const Wrapper = styled.div`
  min-width: 2000px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
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
    </Wrapper>
  );
}

export default CouponSlide;
