import React from 'react';

export default function IssueIndex({ issues }) {
    console.log('issue index', issues)
    return (
        <div className="index">
            <h2>Number of issues</h2>
            <ul>
            <li className="index-issue">
                <h3>Issue title</h3>
                <i> number of likes icon</i>
                <p>open or closed indicator <span><em>amount of time the issue has been open</em></span></p>
            </li>
                {issues.map(issue => {
                    return (
                        <li key={issue.id}>
                            <h3>{issue.title}</h3>
                            <p>{issue.id}</p>
                            <p>{issue.state} | {issue.created_at}</p>
                            <p>{issue.body}</p>
                        </li>
                    )
                })}
            </ul>

      </div>
    )
}