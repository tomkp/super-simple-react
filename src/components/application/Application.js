import React from 'react';
import './application.scss';

import Header from '../header/Header';
import Content from '../content/Content';

export default () => {
 return (
     <div className="Application">
         <Header title="Super Simple React" />
         <Content>
             some stuff
         </Content>
     </div>
 );
}