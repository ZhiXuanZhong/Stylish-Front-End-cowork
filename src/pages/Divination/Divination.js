import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 960px;
  min-height: 600px;
  margin: 20px auto;
  /* padding: 65px 0 49px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  background-color: #bebebe;
  border-radius: 20px;

  @media screen and (max-width: 1279px) {
    padding: 0 0 32px;
  }
`;

const CampaignTitle = styled.div`
  padding: 25px 0;
  font-weight: 700;
  font-size: 40px;
  line-height: 45px;
  letter-spacing: 30px;
  color: #313538;

  text-align: center;
`;

const FormArea = styled.div`
  /* background-color: rgba(0, 0, 255, 0.2);
  outline: 1px solid gray; */
  /* FIXME */
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  /* height: 300px; */
`;

const FormBlock = styled.div`
  background-color: rgba(0, 0, 255, 0.2);
  outline: 1px solid gray;
  /* FIXME */
  width: 50%;
  height: 120px;
`;

const ColorsBlockTitle = styled.div`
  /* background-color: rgba(0, 0, 255, 0.2);
  outline: 1px solid gray; */
  /* FIXME */
  width: 100%;
  text-align: center;

  margin: 10px 0;
  color: #FFFFFF;
  font-size: 30px;
  font-weight: 500;
`;

const ColorsBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100px;
  margin: 0 auto 15px;
  padding: 0 10px;

  background-color: #fafafa;
  border-radius: 7px;
`;

const ColorsSquare = styled.div`
  /* background-color: rgba(0, 0, 255, 0.2);
  outline: 1px solid gray; */
  /* FIXME */
  width: 50px;
  height: 50px;

  margin: 0 5px;

  background-color: #${props => props.$hex};
  border: 1px solid #fafafa;
`;

const SendButton = styled.div`
  background-color: rgba(0, 0, 255, 0.2);
  outline: 1px solid gray;
  /* FIXME */
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StrawsWrapper = styled.div`
  /* background-color: rgba(0, 0, 255, 0.2);
  outline: 1px solid gray;
  FIXME */
  width: 100%;
  max-width: 800px;
  /* height: 220px; */

  padding: 0 30px 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fafafa;
  border-radius: 20px;
`;

const StrawsTitle = styled.div`
  /* background-color: rgba(0, 0, 255, 0.2);
  outline: 1px solid gray; */
  /* FIXME */
  width: 100%;
  max-width: 800px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #ED1E1E;
  font-size: 25px;
`;

const StrawsStory = styled.div`
  /* background-color: rgba(0, 0, 255, 0.2);
  outline: 1px solid gray; */
  /* FIXME */
  width: 100%;
  max-width: 800px;
  /* min-height: 80px; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Coupon = styled.div`
  background-color: rgba(0, 0, 255, 0.2);
  outline: 1px solid gray;
  /* FIXME */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  height: 110px;
`;
const Products = styled.div`
  /* background-color: rgba(0, 0, 255, 0.2);
  outline: 1px solid gray; */
  /* FIXME */
  width: 100%;
  max-width: 800px;
  min-height: 400px;

  padding: 0 10px;
  margin-bottom: 50px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 40px;
`;

const Product = styled.div`
  /* background-color: rgba(0, 0, 255, 0.2);
  outline: 1px solid gray; */
  /* FIXME */
  width: 230px;
  height: 320px;
  padding: 15px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fafafa;
  border-radius: 10px;
`;

const ProductImage = styled.img`
  /* background-color: rgba(0, 0, 255, 0.2);
  outline: 1px solid gray; */
  /* FIXME */

  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductTitle = styled.div`
  /* background-color: rgba(0, 0, 255, 0.2);
  outline: 1px solid gray; */
  /* FIXME */
  width: 100%;
  padding: 5px;
`;

const ProductPrice = styled.div`
  /* background-color: rgba(0, 0, 255, 0.2);
  outline: 1px solid gray; */
  /* FIXME */
  width: 100%;
  padding-left: 5px;
  margin-bottom: 10px;
  /* padding: 3px; */
`;

const ProductLink = styled.div`
  /* background-color: rgba(0, 0, 255, 0.2);
  outline: 1px solid gray; */
  /* FIXME */
  /* width: 40%; */
  min-height: 30px;
  padding: 10px 30px;

  background-color: #363636;
  color: #fff;

  text-align: center;
  border-radius: 999px;
`;

const Divination = () => {
  return (
    <>
      <Wrapper>
        <CampaignTitle>抽出好運勢</CampaignTitle>
        <FormArea>
          <FormBlock>
            <div>生日</div>
            <input />
          </FormBlock>
          <FormBlock>
            <div>性別</div>
            <input />
          </FormBlock>
            <ColorsBlockTitle>挑選一個最喜歡的顏色</ColorsBlockTitle>
          <ColorsBlock>
            {Array.from({ length: 6 }, (_, index) => {
              return <ColorsSquare $hex={Math.floor(Math.random()*16777215).toString(16)}/>;
            })}
          </ColorsBlock>
          <SendButton>
            <button>好手氣！</button>
          </SendButton>
        </FormArea>
        <StrawsWrapper>
          <StrawsTitle>大吉籤</StrawsTitle>
          <StrawsStory>風恬浪靜可行舟 恰是中秋月一輪,凡事不須多憂慮 福祿自有慶家門風恬浪靜可行舟 恰是中秋月一輪,凡事不須多憂慮 福祿自有慶家門風恬浪靜可行舟 恰是中秋月一輪,凡事不須多憂慮 福祿自有慶家門風恬浪靜可行舟 恰是中秋月一輪,凡事不須多憂慮 福祿自有慶家門風恬浪靜可行舟 恰是中秋月一輪,凡事不須多憂慮 福祿自有慶家門風恬浪靜可行舟 恰是中秋月一輪,凡事不須多憂慮 福祿自有慶家門</StrawsStory>
        </StrawsWrapper>
        <Coupon>
            <div>折 $150 元 </div>
            <div>有效期限: 2023.06.18</div>
            <div>領取</div>
        </Coupon>
        <Products>
          {Array.from({ length: 6 }, (_, index) => {
            return (
              <Product>
                <ProductImage src='https://stickershop.line-scdn.net/stickershop/v1/product/4329/LINEStorePC/main.png?v=1' />
                <ProductTitle>休閒西裝</ProductTitle>
                <ProductPrice>NT.1999</ProductPrice>
                <ProductLink>用券現折 →</ProductLink>
              </Product>
            );
          })}
        </Products>
      </Wrapper>
    </>
  );
};

export default Divination;
