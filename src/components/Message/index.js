import React from 'react';
import ruLocale from 'date-fns/locale/ru';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';
import cn from 'classnames';
import readedSvg from 'assets/img/readed.svg';
import noReadedSvg from 'assets/img/noreaded.svg';

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
  {isMe && (
    isReaded ? (
      <img className="message__icon-readed" src={readedSvg} alt="Readed icon" />
    ) : (
      <img className="message__icon-readed message__icon-readed--no" src={noReadedSvg} alt="No readed icon" />
    ))}
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
          <span className="message__date">{formatDistanceToNow(date, { addSuffix: true, locale: ruLocale })}</span>
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
};

export default Message;
