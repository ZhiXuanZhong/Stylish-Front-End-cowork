import React, {useState} from 'react';
import styled, {css, createGlobalStyle} from 'styled-components';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import {Coupon} from '../../components/Coupon/Coupon';

import api from '../../utils/api';

const DatePickerWrapperStyles = createGlobalStyle`
.react-date-picker__wrapper {
background-color: #FFF;
border-radius: 999px;
padding: 0 30px;
border: none;
}
`;

const Wrapper = styled.div`
  max-width: 960px;
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
  font-size: 60px;
  line-height: 45px;
  letter-spacing: 30px;
  color: #313538;

  text-align: center;
  margin-right: -30px;
  padding: 40px 0 50px;
`;

const FormArea = styled.div`
  /* background-color: rgba(0, 0, 255, 0.2);
  outline: 1px solid gray; */
  /* FIXME */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  /* height: 300px; */
`;

const FormBlock = styled.div`
  /* background-color: rgba(0, 0, 255, 0.2);
  outline: 1px solid gray; */
  /* FIXME */
  width: 250px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormBlockTitle = styled.div`
  /* background-color: rgba(0, 0, 255, 0.2);
  outline: 1px solid gray; */
  /* FIXME */
  margin-bottom: 10px;

  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
`;

const DropdownSelect = styled.select`
  padding: 4px 60px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  border-radius: 999px;
  font-size: 16px;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M2.38 7h12l-6 7-6-7z'/%3E%3Cpath d='M10.37 8.11h-4v-6h4z'/%3E%3C/svg%3E");
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
`;

const ColorsBlockTitle = styled.div`
  /* background-color: rgba(0, 0, 255, 0.2);
  outline: 1px solid gray; */
  /* FIXME */
  width: 100%;
  text-align: center;

  margin: 10px 0;
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
`;

const ColorsBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100px;
  margin: 0 auto;
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

const ButtonArea = styled.div`
  /* background-color: rgba(0, 0, 255, 0.2);
  outline: 1px solid gray; */
  /* FIXME */
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StrawButton = styled.button`
  /* background-color: rgba(0, 0, 255, 0.2);
  outline: 1px solid gray; */
  /* FIXME */

  cursor: pointer;
  border: none;

  background: #363636;
  box-shadow: -9px 10px 30px rgba(112, 112, 112, 0.35);
  border-radius: 85px;

  padding: 10px 50px;
  margin: 40px 0;

  color: #fff;
  font-size: 20px;
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

  color: #ed1e1e;
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

  line-height: 25px;
`;

const CouponWrapper = styled.div`
  /* background-color: rgba(0, 0, 255, 0.2);
  outline: 1px solid gray; */
  /* FIXME */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  padding: 30px 0 50px;
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
  cursor: pointer;
`;

const StrawResult = ({strawData}) => {
  return (
    <>
      <StrawsWrapper>
        <StrawsTitle>{strawData.straws_story.type}</StrawsTitle>
        <StrawsStory>{strawData.straws_story.story}</StrawsStory>
      </StrawsWrapper>
      <CouponWrapper>
        <Coupon discountPrice={150} discountType={'fixedAmout'} />
      </CouponWrapper>
      <Products>
        {strawData.products.map((item, index) => {
          return (
            <Product key={index}>
              <ProductImage src={item.main_image} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>NT.{item.price}</ProductPrice>
              {/* FIXME link */}
              <ProductLink>用券現折 →</ProductLink>
            </Product>
          );
        })}
      </Products>
    </>
  );
};

const Divination = () => {
  const [birthday, setBirthday] = useState(new Date());
  const [strawData, setStrawData] = useState();

  // useState > complex state OBJ

  async function getStraw() {
    if (strawData) {
      alert('你抽過了！好了就好了～！');
    } else {
      const {data} = await api.getStraw();
      setStrawData(data);
      console.log(data);
    }
  }

  return (
    <>
      <Wrapper>
        <CampaignTitle>抽出好運勢</CampaignTitle>
        <FormArea>
          <FormBlock>
            <FormBlockTitle>生日</FormBlockTitle>
            <DatePicker
              onChange={setBirthday}
              value={birthday}
              maxDate={new Date()}
            />
            <DatePickerWrapperStyles />
          </FormBlock>
          <FormBlock>
            <FormBlockTitle>性別</FormBlockTitle>
            <DropdownSelect onChange={() => {}}>
              {/* FIXME 這邊要綁state */}
              <option value="women">我是女生</option>
              <option value="man">我是男生</option>
            </DropdownSelect>
          </FormBlock>
          <ColorsBlockTitle>選一個最喜歡的顏色</ColorsBlockTitle>
          <ColorsBlock>
            {Array.from({length: 6}, (_, index) => {
              return (
                <ColorsSquare
                  $hex={Math.floor(Math.random() * 16777215).toString(16)}
                />
              );
            })}
          </ColorsBlock>
          <ButtonArea>
            <StrawButton onClick={() => getStraw()}>好手氣！</StrawButton>
          </ButtonArea>
        </FormArea>
        {strawData && <StrawResult strawData={strawData} />}
      </Wrapper>
    </>
  );
};

export default Divination;
