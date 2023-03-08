import { Portal, Segment, Header } from 'semantic-ui-react';
import { useState } from 'react';

function PopUpInfo(email) {
  const [showPortal, setShowPortal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowPortal(true)}>Show Portal</button>
      {showPortal && (
        <Portal>
          <Segment style={{ left: '50%', position: 'fixed', top: '50%', zIndex: 1000 }}>
            <Header>This is a portal</Header>
            <p>{email}</p>
            <button onClick={() => setShowPortal(false)}>Close Portal</button>
          </Segment>
        </Portal>
      )}
    </div>
  );
}

export default PopUpInfo;