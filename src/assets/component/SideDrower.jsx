import React from "react";
import { Button, CloseButton, Drawer, Portal, Icon } from "@chakra-ui/react";

const SideDrower = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer.Root isOpen={isOpen} placement="left" onClose={onClose}>
        <Drawer.Trigger
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
        ></Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Drawer Title</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Drawer.Body>
              <Drawer.Footer>
                <Button variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button>Save</Button>
              </Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  );
};

export default SideDrower;
