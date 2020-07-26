import React from 'react';

import './SecondaryFooter.css';

const SecondaryFooter = props => {

  const d = new Date();
  const year = d.getFullYear() - 1;

  return (
    <div className="second-footer">
      <p> © {year} Copyright: Business Apparel </p>
    </div>
  );
};

export default SecondaryFooter;
