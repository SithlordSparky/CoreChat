import { useChat } from 'context/ChatContext';
import { useEffect } from 'react';
import { LeftRail, ChatToolbar } from 'components';
import { getChats, ChatEngine } from 'react-chat-engine';
// Chat.css is only for my spinning logo
import './Chat.css';

export const Chat = () => {
  const { myChats, setMyChats, chatConfig, selectedChat } = useChat();

  useEffect(() => {
    console.log('My Chats: ', myChats);
  }, [myChats]);

  return (
    <>
      <LeftRail />
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
            <div className="chat">
              <ChatToolbar />
            </div>
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
