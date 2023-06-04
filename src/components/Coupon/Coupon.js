import styled from 'styled-components';
import dealItem from './img/deal-items.png';
import fixedAmout from './img/fixed-amout.png';
import freeShipping from './img/free-shipping.png';

const Wrapper = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  box-shadow: 6px 6px 2px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  cursor: pointer;
  margin-left: 15px;
  outline: ${props => props.outline};

  @media screen and (max-width: 1279px) {
  }
`;

const CouponWrapper = styled.img`
  width: 60px;
  box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.1);
  border-radius: 18px;
  margin-left: 15px;
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
  font-size: 17px;
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

const CouponMappingTable = {
  dealItem: dealItem,
  fixedAmout: fixedAmout,
  freeShipping: freeShipping,
};

export function Coupon({
  couponActivated,
  discountType,
  discountPrice,
  expiredTime,
  selected,
  clickAction,
}) {
  return (
    <Wrapper
      onClick={clickAction}
      outline={selected ? '4px solid #fc9700' : 'none'}>
      <CouponWrapper src={CouponMappingTable[discountType]} />
      <Description>
        <Discount>
          {(discountType === 'fixedAmout'
            ? `現金 `
            : discountPrice === 'freeShipping'
            ? `運費 `
            : `特定品項 `) + `折${discountPrice}元`}
        </Discount>
        <ExpiredTime>有效期限 {expiredTime}</ExpiredTime>
      </Description>
      <GetButton
        onClick={() => console.log(123)}
        display={couponActivated ? 'none' : 'flex'}>
        領取
      </GetButton>
    </Wrapper>
  );
}
