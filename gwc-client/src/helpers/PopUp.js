import React, { Component } from 'react'
import { Button, Grid, Header, Segment, Portal } from 'semantic-ui-react'

export default class OfficerPortal extends Component {
  state = { open: false }

  handleClose = () => this.setState({ open: false })
  handleOpen = () => this.setState({ open: true })

  render() {
    const { open } = this.state

    return (
      <Grid columns={1} >
        <Grid.Column>
          <Button
            color='teal'
            content='Contact Me'
            disabled={open}
            onClick={this.handleOpen}
          />

          <Portal onClose={this.handleClose} open={open}>
            <Segment
              style={{
                left: '40%',
                position: 'fixed',
                top: '50%',
                zIndex: 1000,
              }}
            >
              <Header>Contact Information</Header>
              <p>Portals have tons of great callback functions to hook into.</p>
              <p>To close, simply click the close button or click away</p>

              <Button
                color='teal'
                content='Close'
                onClick={this.handleClose}
              />
            </Segment>
          </Portal>
        </Grid.Column>
      </Grid>
    )
  }
}