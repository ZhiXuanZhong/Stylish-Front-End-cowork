import styled from 'styled-components';
import chatbotIcon from './img/chatbot-icon.png';
import {v4 as uuidv4} from 'uuid';

const MessageWrapper = styled.div`
  margin: 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems};
`;

const ChatbotAvatar = styled.img`
  width: 40px;
`;

const ContentBoxWrapper = styled.div`
  max-width: 80%;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  border-radius: 24px;
  margin-top: ${props => props.marginTop};
`;

const Content = styled.div`
  padding: 15px;
  line-height: 23px;
`;

export function Message({messages}) {
  return (
    <>
      {messages.texts.map((textArray, idx) => {
        return textArray.map(text => {
          return (
            <MessageWrapper
              key={uuidv4()}
              alignItems={messages.style[idx].alignItems}>
              <ChatbotAvatar src={messages.style[idx].avatar} />
              <ContentBoxWrapper
                backgroundColor={messages.style[idx].backgroundColor}
                color={messages.style[idx].color}
                marginTop={idx === 0 ? '0px' : '12px'}
                onClick={() => {
                  console.log(idx);
                }}>
                <Content>{text}</Content>
              </ContentBoxWrapper>
            </MessageWrapper>
          );
        });
      })}
    </>

    // <MessageWrapper alignItems={'flex-end'}>
    //   <ChatbotAvatar src={chatbotIcon} />
    //   {messages.texts.map((text, idx) => {
    //     return (
    //       <ContentBoxWrapper
    //         key={idx}
    //         backgroundColor={messages.style[idx].backgroundColor}
    //         marginTop={idx === 0 ? '0px' : '12px'}
    //         onClick={() => {
    //           console.log(idx);
    //         }}>
    //         <Content key={idx}>{text}</Content>
    //       </ContentBoxWrapper>
    //     );
    //   })}
    // </MessageWrapper>
  );
}
