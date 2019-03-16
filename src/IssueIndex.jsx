import React from 'react';

export default function IssueIndex(props) {
    return (
        <div className="index">
        <h2>Number of issues</h2>
        <ul>
          <li className="index-issue">
            <h3>Issue title</h3>
            <i> number of likes icon</i>
            <p>open or closed indicator <span><em>amount of time the issue has been open</em></span></p>
          </li>
        </ul>
      </div>
    )
}