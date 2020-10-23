import React from 'react';
import cn from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import isThisWeek from 'date-fns/isThisWeek';
import isThisYear from 'date-fns/isThisYear';
import ruLocale from 'date-fns/locale/ru';

import { IconReaded } from '../';
import './DialogItem.scss';

const getAvatar = (avatar, fullname) => {
  if (avatar) {
    return <img
      src={avatar}
      alt={fullname} 
    />
  } else {
    // make avatar
  }
};

const getMessageTime = (created_at) => {
  if (isToday(created_at)) {
    return format(created_at, 'HH:mm');
  } else if (!isToday(created_at) && isThisWeek(created_at)) {
    return format(created_at, 'EEEEEE', { locale: ruLocale });
  } else if (!isThisYear(created_at)) {
    return format(created_at, 'dd.MM.yyyy');
  }

  return format(created_at, 'dd.MM');
};

const DialogItem = ({ user, text, created_at, unread, isMe }) => (
  <div className={cn('dialogs__item', {
     'dialogs__item_online': user.isOnline
   })}>
    <div className="dialogs__item-avatar">
      {getAvatar(user.avatar, user.fullname)}
    </div>

    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullname}</b>
        <span>
          { getMessageTime(message.created_at) }
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>{ message.text }</p>
        { isMe && <IconReaded isMe={true} isReaded={true} /> }
        { unreaded > 0 && (
            <div className="dialogs__item-info-bottom-count">
              {unreaded > 9 ? '9+' : unreaded}
            </div>
        )}
      </div>
    </div>
  </div>
);

export default DialogItem;
