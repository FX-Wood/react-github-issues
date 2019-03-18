import React from 'react';

export default function IssueIndex({ issues }) {
    console.log('issue index', issues)
    return (
        <div className="issueIndex">
            <div className="issueIndexHeader">
                <button>Filters</button>
                <input type="text" placeholder="Search all issues"/>
                <button>Labels</button>
                <button>Milestones</button>
                <div className="flexFiller"></div>
                <button className="newIssueButton">New Issue</button>
            </div>
            <div className="issueIndexList">
                <div className="issueIndexListHeader">
                    <span>#open</span>
                    <span>#closed</span>
                    <div className="flexFiller"></div>
                    <span>Author</span>
                    <span>Projects</span>
                    <span>Labels</span>
                    <span>Milestones</span>
                    <span>Assignee</span>
                    <span>Sort</span>
                </div>
                    {issues.map(issue => {
                        return (
                            <div className="issueListItem" key={issue.id}>
                                <div className="listItemHeader">
                                    <span>{issue.state}</span> <h3>{issue.title}</h3>
                                </div>
                                <p>{issue.number} | {issue.created_at}</p>
                                <p className="comments"> <i>comments</i> {issue.comments}</p>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}