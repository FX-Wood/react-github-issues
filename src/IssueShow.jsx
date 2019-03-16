import React from 'react';

export default function(props) {
    return (
        <div className="show">
        <h1>Issue Title</h1>
        <h2>Issue number</h2>
        <p>open status indicator <span><em>amount of time issue has been open</em></span></p>
        <hr/>
        <img src="http://via.placeholderimg/80" alt="user image"/>
        <div>
          <h2>Parsed markdown</h2>
          <p>asdklfjl;kasdjfl;kasdjflkasjdf asdjlfkasj dlkfj aslkdf jaslkdjf alksdjfasdj flk;asdj fals;djf l;aksdjf laksdjfhiuqeo;fjasd;klf jasf iqae jflask;jdf ;asdfj ak;sdjhfkjasdhglasdfj asdf lkasjf sak</p>
        </div>
      </div>
    )
}