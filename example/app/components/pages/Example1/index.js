import React from 'react';
import Document from 'components/common/Document';
import Example1 from './Example1';

class PageExample1 extends React.Component {
  render() {
    return (
      <Document title='Example1 | React progress bar component demo'
        className='page-ex-1'>
        <Example1/>
      </Document>
    );
  }
}

export default PageExample1;

