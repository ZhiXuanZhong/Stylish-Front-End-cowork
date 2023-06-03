import styled from 'styled-components';
import ReactLoading from 'react-loading';
import CouponIcon from './coupon-icon.png';

const Wrapper = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  box-shadow: 6px 6px 2px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 1279px) {
  }
`;

const CouponWrapper = styled.img`
  width: 60px;
  margin-left: 20px;
`;

const Description = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

const Discount = styled.div`
  width: 100%;
  font-size: 20px;
`;

const ExpiredTime = styled.div`
  width: 100%;
  font-size: 12px;
  margin-top: 8px;
`;

const GetButton = styled.div`
  width: 100px;
  height: 45px;
  display: ${props => props.display};
  justify-content: center;
  align-items: center;
  font-size: 28px;
  background-color: #e55050;
  color: #ffffff;
  border-radius: 12px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

export function Coupon({couponActivated, discountType, discountPrice}) {
  return (
    <Wrapper>
      <CouponWrapper src={CouponIcon} />
      <Description>
        <Discount>
          {discountType === 'cash'
            ? `現金折${discountPrice}元`
            : `運費折${discountPrice}元`}
        </Discount>
        <ExpiredTime>有效期限 2023.06.18</ExpiredTime>
      </Description>
      <GetButton
        onClick={() => console.log(123)}
        display={couponActivated ? 'none' : 'flex'}>
        領取
      </GetButton>
    </Wrapper>
  );
}
