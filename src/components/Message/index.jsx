import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Time, IconReaded } from '../';
import './Message.scss';

const Message = ({
  avatar,
  user,
  text,
  date,
  isMe,
  isReaded,
  attachments,
  isTyping,
}) => (
  <div className={cn('message', {
    'message--isme': isMe,
    'message-is-typing': isTyping,
    'message--image': attachments && attachments.length === 1,
  })}>
  <div className="message__content">
    <IconReaded isMe={isMe} isReaded={isReaded} />
    <div className="message__avatar">
      <img src={avatar} alt={`Avatar ${user.fullname}`} />
    </div>
    <div className="message__info">
        { (text || isTyping) && (
          <div className="message__bubble">
            { text && <p className="message__text">{text}</p> }
            { isTyping && (
              <div className="message__typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>
        )}
        <div className="message__attachments">
          {attachments &&
            attachments.map(({ url, filename }) => (
              <div className="message__attachments-item">
                <img src={url} alt={filename} />
              </div>
            ))}
          </div>
        { date && (
          <span className="message__date">
            <Time date={date} />
          </span>
        )}
      </div>
    </div>
  </div>
);

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.object,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
};

export default Message;