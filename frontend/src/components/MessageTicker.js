import React from 'react'

function MessageTicker({ messages }) {
    return messages ?
        (
            <p style={{ whiteSpace: "pre" }}>{messages.join('            ')}</p>
        )
        : (
            <p style={{ visibility: "hidden" }}>Placeholder</p>
        );
}

export default MessageTicker
