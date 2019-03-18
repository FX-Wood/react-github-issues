import React from 'react';
import ReactMarkdown, { renderers } from 'react-markdown';

export default function IssueShow({ issues, match }) {
  let issue = issues.find(issue => {
    console.log(issue.id, match.params.id)
    return issue.id === parseInt(match.params.id)
  })
  // function getNextBlock(input) {
  //   let s = issue.body.slice
  //   let start = s.splice(0,input.search('\`\`\`'))
  //   if (s) {
  //   }
  //   let end = input.
  // // }
  // let bodyParts = issue.body.splice(issue.body.search('\`\`\`')
  // console.log(bodyParts)
  // const PR = window.PR
  return (
        <div className="show">
        <h1>Issue Title</h1>
        <h2>Issue number</h2>
        <p>open status indicator <span><em>amount of time issue has been open</em></span></p>
        <hr/>
        <img src="http://via.placeholderimg/80" alt="user image"/>
        <div 
            onClick={() => {
                console.log('onLoad')
                PR.prettyPrint()
              }} >
          <h2>Parsed markdown</h2>
            
            {'<?Prettify?>'}<ReactMarkdown source={issue.body} />
        </div>
      </div>
    )
}