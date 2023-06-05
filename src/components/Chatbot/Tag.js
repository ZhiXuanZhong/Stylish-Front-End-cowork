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
  width: 90%;
  gap: 10px;
`;

const ChatbotTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: solid 1px #32a1ce;
  padding: 6px;
`;

const tags = [
  '連身裙推薦 👗',
  '熱門推薦 🔥',
  '牛仔褲推薦 👖',
  '優惠活動詢問 🎁',
  '最新流行服飾推薦 ✨',
];

export function Tag() {
  return (
    <Wrapper>
      <TagWrapper>
        {tags.map(tag => {
          return <ChatbotTag>{tag}</ChatbotTag>;
        })}
      </TagWrapper>
    </Wrapper>
  );
}
