import React, { useState, useEffect } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default function Faq(props) {
  // state = { activeIndex: 0 }
  const [expanded, setExpanded] = useState(props.expanded);
  useEffect(() => {
    setExpanded(props.expanded);
  }, [props.expanded]);

  // const [activeIndex, setActiveIndex] = useState([]);
  // const handleClick = (e) => {
  //   // const { index } = titleProps;
  //   // const { activeIndex } = this.state
  //   const newIndex = activeIndex;
  //   const currentIndexPosition = activeIndex.indexOf(e);
  //   if (currentIndexPosition > -1) {
  //     newIndex.splice(currentIndexPosition, 1);
  //   } else {
  //     newIndex.push(e);
  //   };
  //   setActiveIndex(newIndex);
  // };
  // const handleExpand = () => {
  //   setExpanded(!expanded);
  // }
  // const [a, setA] = useState('c');
  // const handleAdd = (e) => {
  //   const newIndex = activeIndex;
  //   const currentIndexPosition = activeIndex.indexOf(e);
  //   if (currentIndexPosition > -1) {
  //     newIndex.splice(currentIndexPosition, 1);
  //   } else {
  //     newIndex.push(e);
  //   };
  //   setActiveIndex(newIndex);
  //   // setA(e)
  // };

  return (
    <>
      <Accordion.Title
        active={expanded}
        index={0}
        onClick={() => {
          setExpanded(!expanded);
        }}
        // style={{color:'black'}}
      >
        <Icon name='dropdown' />
        {props.question}
      </Accordion.Title>
      <Accordion.Content active={expanded}>
        <p>
          {props.answer}
        </p>
      </Accordion.Content>
    </>
  );
}