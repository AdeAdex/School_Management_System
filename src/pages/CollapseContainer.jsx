import React, { useRef, useState } from 'react'
import { useDisclosure } from "@mantine/hooks";
import { Button, Group, Text, Collapse, Box } from "@mantine/core";

const CollapseContainer = ({btn_txt, content}) => {
        const [opened, { toggle }] = useDisclosure(false);
 

  return (
    <>
    {/* <Box maw={400} mx="auto" style={{display: 'inline-flex'}}>
        <Group position="center" mb={0}>
          <span className='text-primary' style={{cursor: 'pointer'}} onClick={toggle}>{btn_txt}</span>
        </Group>

        <Collapse
          in={opened}
          transitionDuration={1000}
          transitionTimingFunction="linear"
          style={{display: 'inline-flex'}}
          
        >
          <Text>{content}</Text>
        </Collapse>
      </Box> */}
      <Box maw={400} mx="auto" style={{ display: 'inline-flex' }}>
        {opened ? (
          <div>
          <Collapse
            in={opened}
            transitionDuration={1000}
            transitionTimingFunction="linear"
            style={{ display: 'inline-flex' }}
          >
            <Text>{content}</Text>
          </Collapse>
          
          <Group position="center" mb={0}>
            <span className='text-primary' style={{ cursor: 'pointer' }} onClick={toggle}>{btn_txt}</span>
          </Group>
          </div>
         
        ) : (
          <div>
          <Group position="center" mb={0}>
            <span className='text-primary' style={{ cursor: 'pointer' }} onClick={toggle}>{btn_txt}</span>
          </Group>
          <Collapse
            in={opened}
            transitionDuration={1000}
            transitionTimingFunction="linear"
            style={{ display: 'inline-flex' }}
          >
            <Text>{content}</Text>
          </Collapse>
          </div>
        )}
      </Box>

     

    </>
  )
}

export default CollapseContainer