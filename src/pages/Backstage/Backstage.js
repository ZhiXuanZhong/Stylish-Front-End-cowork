import styled from 'styled-components';
import {useState} from 'react';
import {useImmer} from 'use-immer';
import Message from './Message';
import {io} from 'socket.io-client';
const socket = io('https://54.253.197.166/');

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const UserWrapper = styled.ul`
  width: 30%;
  height: 600px;
  display: flex;
  flex-direction: column;
  border: 1px solid #d3d3d3;
`;

const User = styled.li`
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d3d3d3;
`;

const ChatRoom = styled.div`
  width: 70%;
  height: 600px;
  border: 1px solid #d3d3d3;
`;

const Form = styled.div`
  background: rgba(0, 0, 0, 0.15);
  padding: 0.25rem;
  position: fixed;
  bottom: 220px;
  left: 0;
  right: 0;
  display: flex;
  height: 3rem;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
`;

const Input = styled.input`
  border: none;
  padding: 0 1rem;
  flex-grow: 1;
  border-radius: 2rem;
  margin: 0.25rem;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  background: #333;
  border: none;
  padding: 0 1rem;
  margin: 0.25rem;
  border-radius: 3px;
  outline: none;
  color: #fff;
`;

const data = [
  {
    from: 'AAA', // or user AAA
    to: 'admin', //
    message: 'Welcom1',
  },
  {
    from: 'admin',
    to: 'AAA', // user's id AAA
    message: 'Welcom2',
  },
  {
    from: 'admin', // or user
    to: 'AAA', //
    message: 'Welcom3',
  },
  {
    from: 'AAA', // or user
    to: 'admin', //
    message: 'Welcom4',
  },
  {
    from: 'BBB', // or user
    to: 'admin', //
    message: 'Welcom5',
  },
];

function Backstage() {
  const [socketData, setSocketData] = useImmer([]);
  const [currUser, setCurrUser] = useState();

  const getUniqueUser = () => {
    return [
      ...new Set(
        socketData
          .filter(obj => (obj.from === 'admin' ? false : true))
          .map(obj => obj.from),
      ),
    ];
  };

  // useEffect(() => {
  //   socket.on('message', response => {
  //     setSocketData(draft => draft.concat(response.data));
  //   });
  // }, []);

  return (
    <Wrapper>
      <MessageWrapper>
        <UserWrapper>
          {getUniqueUser().map(user => {
            return (
              <User
                key={user}
                onClick={() => {
                  setCurrUser(user);
                }}>
                {user}
              </User>
            );
          })}
        </UserWrapper>
        <ChatRoom>
          <Message socketData={socketData} currUser={currUser} />
        </ChatRoom>
      </MessageWrapper>
      <Form>
        <Input id="input" placeholder="請輸入訊息" autocomplete="off" />
        <Button>Send</Button>
      </Form>
    </Wrapper>
  );
}

export default Backstage;
