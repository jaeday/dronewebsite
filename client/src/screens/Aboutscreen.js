import React, { useState, useEffect } from 'react';

import Markdown from 'markdown-to-jsx';


export default function Aboutscreen() {
    const file_name = 'EECS485.md';
    const [post, setPost] = useState('');
    useEffect(() => {
        import(`../components/${file_name}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });
    return (
        <div className="container">
            <Markdown>
                {post}
            </Markdown>
        </div>
    );
}

