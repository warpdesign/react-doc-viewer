import React, { ReactNode } from "react";
import styled from "styled-components";
import { DocRenderer } from "../..";
import { textFileLoader } from "../../utils/fileLoaders";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord, xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const mimeToLanguage = {
    'text/x-python-script': 'python',
    'text/x-perl-script': 'perl',
    'text/php': 'php',
    'text/javascript': 'javascript',
    'text/css': 'css',
    'text/x-sh': 'shell',
    'text/xml': 'xml',
    'cpp': 'cpp',
    'cs': 'cs',
    'go': 'go',
    'h': 'cpp',
    'handlebars': 'handlebars',
    'hsp': 'hsp',
    'java': 'java',
    'ini': 'ini',
    'rs': 'rust',
    'sass': 'sas',
    'sc': 'scala',
    'sql': 'sql',
    'swift': 'swift',
    'ts': 'typescript',
    'tsx': 'typescript',
    'jsx': 'javascript',
} as {
    [index: string]: string
}

const TXTRenderer: DocRenderer = ({ mainState: { currentDocument, config } }) => {
  // Lots of code files have the mimeType 'text/plain' so here we first attempt to sniff the type
  // using the fileType (if different than 'text/plain') or we fallback to the file extension.
  // This allows to properly detect languages like java.
  const code = currentDocument?.fileData as string
  const fileType = currentDocument?.fileType || ''
  const matches = currentDocument?.uri.match(/[^\\]*\.(\w+)$/)
  const extension = matches && matches[1] || ''
  const language = mimeToLanguage[fileType] || mimeToLanguage[extension] || 'text'
  const style = config?.txtCodeTheme === 'nord' ? nord : xcode

  return (
    <Container id="code-renderer">
        {code.length ? (<SyntaxHighlighter wrapLongLines={true} language={language} style={style}>
            {code}
        </SyntaxHighlighter>) : null}
    </Container>
  );
};

export default TXTRenderer

TXTRenderer.fileTypes = Object.keys(mimeToLanguage)
TXTRenderer.fileTypes.push('text/plain')
TXTRenderer.weight = 0
TXTRenderer.fileLoader = textFileLoader

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px;
`
