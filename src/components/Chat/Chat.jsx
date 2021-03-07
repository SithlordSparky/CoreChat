import { useChat } from 'context/ChatContext';
import { useEffect } from 'react';
import { getChats, ChatEngine } from 'react-chat-engine';
import './Chat.css';

export const Chat = () => {
  const { myChats, setMyChats, chatConfig, selectedChat } = useChat();

  useEffect(() => {
    console.log('My Chats: ', myChats);
  }, [myChats]);

  return (
    <>
      {!!chatConfig && (
        <ChatEngine
          hideUI={true}
          userName={chatConfig.userName}
          projectID={chatConfig.projectID}
          userSecret={chatConfig.userSecret}
          onConnect={() => {
            getChats(chatConfig, setMyChats);
          }}
        />
      )}

      <div className="chat-container">
        <div className="current-chat">
          {selectedChat ? (
            <></>
          ) : (
            <div className="no-chat-selected">
              {/* TODO - Make this image spin */}
              <img src="/img/core.png" className="core__logo" alt="logo" />
              Select A Chat
            </div>
          )}
        </div>
      </div>
    </>
  );
};
