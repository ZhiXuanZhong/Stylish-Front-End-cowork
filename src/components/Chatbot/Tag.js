import styled from 'styled-components';
import userIcon from './img/user-icon.png';

const Wrapper = styled.div`
  display: flex;
  margin-top: 15px;
`;

const TagWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;

const ChatbotTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: solid 1px #add8e6;
  padding: 6px;
  color: #7092aa;
  background-color: #ffffff;
  padding: 8px;
`;

const tags = [
  {text: '連身裙推薦 👗', type: 'dress'},
  {text: '熱門推薦 🔥', type: 'hots'},
  {text: '牛仔褲推薦 👖', type: 'jeans'},
  {text: '優惠活動詢問 🎁', type: 'divination'},
  {text: '最新流行服飾推薦 ✨', type: 'new'},
];

export function Tag({setMessages}) {
  return (
    <Wrapper>
      <TagWrapper>
        {tags.map((tag, idx) => {
          return (
            <ChatbotTag
              key={idx}
              onClick={() => {
                setMessages(draft => {
                  draft.texts.push([tag.text]);
                  draft.style.push({
                    alignItems: 'flex-end',
                    avatar: userIcon,
                    backgroundColor: '#1F75FE',
                    color: '#ffffff',
                  });
                  return draft;
                });
              }}>
              {tag.text}
            </ChatbotTag>
          );
        })}
      </TagWrapper>
    </Wrapper>
  );
}
