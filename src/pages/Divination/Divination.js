import React, {useState, useContext, useRef, useEffect} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {Link} from 'react-router-dom';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import {Coupon} from '../../components/Coupon/Coupon';
import {AuthContext} from '../../context/authContext';
import draw from '../Home/draw.gif';

import api from '../../utils/api';

const Divination = () => {
  const colors = [
    {
      hex: '#DDF0FF',
      selected: true,
    },
    {
      hex: '#FFFFFF',
      selected: false,
    },
    {
      hex: '#CCCCCC',
      selected: false,
    },
    {
      hex: '#DDFFBB',
      selected: false,
    },
    {
      hex: '#334455',
      selected: false,
    },
  ];


  const [birthday, setBirthday] = useState(null);
  const [gender, setGender] = useState('women');
  const [selectedColor, setSelectColor] = useState(colors);
  const [zodiac, setZodiac] = useState();
  const [strawData, setStrawData] = useState();

  const handlePickColor = index => {
    const nowIndex = selectedColor.map(e => e.selected).indexOf(true);
    const newColors = [...selectedColor];
    newColors[nowIndex].selected = false;
    newColors[index].selected = true;
    setSelectColor(newColors);
  };

  const handleDatePick = date => {
    setBirthday(date);
    getZodiacSign(date);
  };

  function convertDate(date) {
    return date.toISOString().slice(0, 10);
  }

  const handleStrawSubmit = async () => {
    if (!birthday) {
      return alert('生日生日～ 要記得填呦！');
    }

    if (strawData) {
      alert('你抽過了！好了就好了～！');
    } else {
      const answer = {
        data: {
          birthday: convertDate(birthday),
          sign: zodiac.sign,
          gender: gender,
          color: selectedColor.filter(item => item.selected === true)[0].hex,
        },
      };

      const {data} = await api.getStraw(answer);
      setStrawData(data);
      console.log(data);
    }
  };

  const getZodiacSign = dateString => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    if (!dateString) {
      setZodiac();
      return;
    }

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      setZodiac({name: '水瓶座', sign: 'Aquarius'});
      return;
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      setZodiac({name: '雙魚座', sign: 'Pisces'});
      return;
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      setZodiac({name: '牡羊座', sign: 'Aries'});
      return;
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      setZodiac({name: '金牛座', sign: 'Taurus'});
      return;
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
      setZodiac({name: '雙子座', sign: 'Gemini'});
      return;
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
      setZodiac({name: '巨蟹座', sign: 'Cancer'});
      return;
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      setZodiac({name: '獅子座', sign: 'Leo'});
      return;
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      setZodiac({name: '處女座', sign: 'Virgo'});
      return;
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      setZodiac({name: '天秤座', sign: 'Libra'});
      return;
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      setZodiac({name: '天蠍座', sign: 'Scorpio'});
      return;
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      setZodiac({name: '射手座', sign: 'Sagittarius'});
      return;
    } else {
      setZodiac({name: '摩羯座', sign: 'Capricorn'});
      return;
    }
  };

  return (
    <>
      <Wrapper>
        <CampaignTitle>抽出好運勢</CampaignTitle>
        <LuckyDraw src={draw} />
        <FormArea>
          <FormBlock>
            <FormBlockTitle>生日</FormBlockTitle>
            <DatePicker
              onChange={handleDatePick}
              value={birthday}
              maxDate={new Date()}
              format="yyyy-MM-dd"
              locale="zh-TW"
            />
            <DatePickerWrapperStyles />
          </FormBlock>
          <FormBlock>
            <FormBlockTitle>性別</FormBlockTitle>
            <DropdownSelect
              onChange={e => setGender(e.target.value)}
              value={gender}>
              <option value={'women'}>我是女生</option>
              <option value={'man'}>我是男生</option>
              <option value={'unisex'}>是個秘密</option>
            </DropdownSelect>
          </FormBlock>
          <ZodiacTitle>{zodiac && zodiac.name + '的幸運星'}</ZodiacTitle>
          <ColorsBlockTitle>選一個喜歡的顏色吧！</ColorsBlockTitle>
          <ColorsBlock>
            {selectedColor.map((color, index) => (
              <ColorsSquare
                $hex={color.hex}
                key={index}
                $isPick={color.selected}
                onClick={() => handlePickColor(index)}
              />
            ))}
          </ColorsBlock>
          <ButtonArea>
            <StrawButton onClick={handleStrawSubmit}>好手氣！</StrawButton>
          </ButtonArea>
        </FormArea>
        {strawData && <StrawResult strawData={strawData}/>}
      </Wrapper>
    </>
  );
};

export default Divination;

const StrawResult = ({strawData}) => {
  const {jwtToken, isLogin, login} = useContext(AuthContext);
  const [hasClaim, setHasClaim] = useState(false);
  const dummyRef = useRef()

useEffect(() => { 
  dummyRef.current.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
 },[])

  const claim = async () => {
    console.log('here');

    try {
      const token = isLogin ? jwtToken : await login();

      if (!token) {
        window.alert('登入會員，馬上領取');
        return;
      }

      const couponData = {
        data: {
          coupon_id: strawData.coupon_id,
        },
      };

      const result = await api.claimCoupon(couponData, token);

      switch (result.status) {
        case 403:
          alert('這週領過了拉～');
          break;
        case 200:
          alert('領取成功');
          setHasClaim(true)
          break;
        default:
          throw new Error('系統錯誤');
      }
    } catch (err) {
      alert(err);
    } finally {
      console.log('finally');
    }
  };

  return (
    <>
      <StrawsWrapper>
        <StrawsTitle>{strawData.straws_story.type}</StrawsTitle>
        <StrawsStory>{strawData.straws_story.story}</StrawsStory>
      </StrawsWrapper>
      <CouponWrapper>
        <Coupon
          discountPrice={strawData.discount}
          discountType={strawData.coupon_name}
          expiredTime={strawData.valid_date.slice(0, 10)}
          claim={claim}
          couponActivated={false}
          hasClaim={hasClaim}
        />
        <div ref={dummyRef}></div>
      </CouponWrapper>
      <Products>
        {strawData.products.map((item, index) => {
          return (
            <Product key={index}>
              <ProductImage src={item.main_image} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>NT.{item.price}</ProductPrice>
              <ProductLink to={`/products/${item.id}`}>用券現折 →</ProductLink>
            </Product>
          );
        })}
      </Products>
    </>
  );
};

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
  background-image: url("data:image/svg+xml,%3Csvg height='800px' width='800px' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cg%3E%3Cg id='arrow_x5F_down'%3E%3Cpath style='fill:%23030104;' d='M32,16.016l-5.672-5.664c0,0-3.18,3.18-6.312,6.312V0h-8.023v16.664l-6.32-6.32L0,16.016L16,32 L32,16.016z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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

const ZodiacTitle = styled.div`
  /* background-color: rgba(0, 0, 255, 0.2);
  outline: 1px solid gray; */
  /* FIXME */

  flex-basis: 100%;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
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

  background-color: ${props => props.$hex};
  border: 1px solid #ebebeb;
  ${props => (props.$isPick ? 'outline: 2px solid #888' : null)}
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

const ProductLink = styled(Link)`
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

const LuckyDraw = styled.img`
  object-fit: cover;
`;
