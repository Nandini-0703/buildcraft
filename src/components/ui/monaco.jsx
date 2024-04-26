import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';

const MonacoEditor = ({ code, language }) => {
    const editorRef = useRef(null);

    useEffect(() => {
        if (editorRef.current) {
            monaco.editor.create(editorRef.current, {
                value: code,
                language: language,
            });
        }
    }, [code, language]);

    return <div ref={editorRef} style={{ height: '400px' }} />;
};

export default MonacoEditor;