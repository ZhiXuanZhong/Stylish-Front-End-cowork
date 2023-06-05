import styled from 'styled-components';

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
  '連身裙推薦 👗',
  '熱門推薦 🔥',
  '牛仔褲推薦 👖',
  '優惠活動詢問 🎁',
  '最新流行服飾推薦 ✨',
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
                setMessages(prev => [...prev, tag]);
              }}>
              {tag}
            </ChatbotTag>
          );
        })}
      </TagWrapper>
    </Wrapper>
  );
}
