import styled from 'styled-components';
import chatbotIcon from './img/chatbot-icon.png';

const MessageWrapper = styled.div`
  margin-left: 20px;
  margin-top: 15px;
`;

const ChatbotAvatar = styled.img`
  width: 30px;
`;

const ContentBoxWrapper = styled.div`
  max-width: 80%;
  /* height: 60px; */
  background-color: #ffffff;
  background-color: ${props => props.backgroundColor};
  border-radius: 24px;
`;

const Content = styled.div`
  padding: 15px;
  line-height: 23px;
  margin-top: ${props => props.marginTop};
`;

export function Message({messages}) {
  return (
    <MessageWrapper>
      <ChatbotAvatar src={chatbotIcon} />

      {messages.map((message, idx) => {
        return (
          <ContentBoxWrapper key={idx}>
            <Content key={idx} marginTop={idx === 0 ? '0px' : '12px'}>
              {message}
            </Content>
          </ContentBoxWrapper>
        );
      })}
    </MessageWrapper>
  );
}
