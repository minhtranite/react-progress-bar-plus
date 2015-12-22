import React from 'react';
import Document from 'components/common/Document';
import Example from './Example';

class PageHome extends React.Component {
  render() {
    return (
      <Document title='Home | React progress bar component demo'
        className='page-home'>
        <Example/>
      </Document>
    );
  }
}

export default PageHome;
