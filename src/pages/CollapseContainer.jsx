import React from 'react'
import { useDisclosure } from "@mantine/hooks";
import { Button, Group, Text, Collapse, Box } from "@mantine/core";

const CollapseContainer = ({btn_txt, content}) => {
        const [opened, { toggle }] = useDisclosure(false);
  return (
    <>
    <Box maw={400} mx="auto">
        <Group position="center" mb={5}>
          <span onClick={toggle}>{btn_txt}</span>
        </Group>

        <Collapse
          in={opened}
          transitionDuration={1000}
          transitionTimingFunction="linear"
        >
          <Text>{content}</Text>
        </Collapse>
      </Box>
    </>
  )
}

export default CollapseContainer