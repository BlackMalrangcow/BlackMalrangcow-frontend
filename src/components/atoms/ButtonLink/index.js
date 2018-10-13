import * as React from 'react';
import { withRouter } from 'react-router';

import { Button } from 'react-bootstrap';

const ButtonLink = ({ to, children, onClick = () => {}, history }) => {
  const wrappedClickCallback = e => {
    onClick(e);
    history.push(to);
  };

  return (
    <Button onClick={wrappedClickCallback}>
      { children }
    </Button>
  );
};

export default withRouter(ButtonLink);