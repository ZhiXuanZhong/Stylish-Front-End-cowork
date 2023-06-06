import styled from 'styled-components';
import chatbotIcon from './img/chatbot-icon.png';

const MessageWrapper = styled.div`
  margin: 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems};
`;

const ChatbotAvatar = styled.img`
  width: 30px;
`;

const ContentBoxWrapper = styled.div`
  max-width: 80%;
  background-color: ${props => props.backgroundColor};
  border-radius: 24px;
  margin-top: ${props => props.marginTop};
`;

const Content = styled.div`
  padding: 15px;
  line-height: 23px;
`;

export function Message({messages}) {
  return (
    <MessageWrapper alignItems={'flex-end'}>
      <ChatbotAvatar src={chatbotIcon} />
      {messages.map((message, idx) => {
        return (
          <ContentBoxWrapper
            key={idx}
            backgroundColor={'#ffffff'}
            marginTop={idx === 0 ? '0px' : '12px'}
            onClick={() => {
              console.log(idx);
            }}>
            <Content key={idx}>{message}</Content>
          </ContentBoxWrapper>
        );
      })}
    </MessageWrapper>
  );
}
