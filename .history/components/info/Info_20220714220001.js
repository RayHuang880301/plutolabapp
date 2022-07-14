import React from 'react'
import plutoLabLogo from '../../assets/plutoLabLogo.png'
import downArrow from '../../assets/downArrow.svg'
import styles from '../info/Info.module.css'
import Image from 'next/image'
import DraggableBox from '../DraggableBox'
import Window from '../window/Window'
import WindowLag from '../windowLag/WindowLag'
import ReactDOM from 'react-dom';
import { useDrag } from 'react-dnd'
import { DndProvider, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { memo, useCallback, useState, useEffect } from 'react'
import update from 'immutability-helper'
import dynamic from 'next/dynamic'
import Header from '../header/Header'
// import FrontCover from '../frontCover/FrontCover'


const contStyles = {
  width: 800,
  height: 800,
  border: '1px solid black',
  position: 'relative',
}


const Info = (props) => {
  // const { isAosOn } = props;
  const isAosOn = true;
  const [boxes, setBoxes] = useState({
    // a: { zIndex: 1, top: 20, left: 20, title: 'Welcome to Pluto Mateverse', animationDelay: 800 },
    // b: { zIndex: 1, top: 60, left: 40, title: 'Welcome to Pluto Mateverse', animationDelay: 1000 },
    c: { zIndex: 1, top: 40, left: 60, title: 'Welcome to Pluto Mateverse', animationDelay: 1200 },
    // d: { zIndex: 1, top: 140, left: 80, title: 'Welcome to Pluto Mateverse', animationDelay: 1400 },
    // e: { zIndex: 1, top: 180, left: 100, title: 'Welcome to Pluto Mateverse', animationDelay: 1600 },
  })
  const [dragZIndex, setDragZIndex] = useState(1);

  const moveBox = useCallback(
    (id, left, top) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        }),
      )
    },
    [boxes],
  )
  const snapToGrid = true;
  const [, dragRef] = useDrop(
    () => ({
      accept: 'box',
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();

        let left = Math.round(item.left + delta.x)
        let top = Math.round(item.top + delta.y)
        if (snapToGrid) {
          ;[left, top] = doSnapToGrid(left, top)
        }
        moveBox(item.id, left, top)
        return undefined
      },
    }),
    [moveBox],
  )

const onClickDrag = (key) => {
  setDragZIndex(dragZIndex+1);
  console.log(key);
  setBoxes(
    update(boxes, {
      [key]: {
        $merge: { zIndex: dragZIndex },
      },
    }),
  )
}
  // const [
  //   canDropDelayed,
  //   setCanDropDelayed,
  // ] = useState(false);
  // useEffect(() => {
  //   setImmediate(() => setCanDropDelayed(canDrop));
  // }, [canDrop]);

  return (
    <>
    {/* <DynamicComponentWithNoSSR /> */}
    {/* <Header /> */}
    <div styles={contStyles} className={styles.section} ref={dragRef}>
       <div className="draggable-container">
          {Object.keys(boxes).map((key) => (
          <DraggableBox
            isAosOn={isAosOn}
            key={key}
            id={key}
            onClick={() => onClickDrag(key)}
            {...(boxes[key])}
          />
          
        ))}
      </div>
      <div className={styles.container}>
        <div className={`${styles.logo} ${isAosOn ? 'aos-animate' : ''}`} data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
          <Image src={plutoLabLogo} width={400} height={270} alt=''/>
        </div>
        <div className={`${styles.bottomCard} ${isAosOn ? 'aos-animate' : ''}`} data-aos="fade-down" data-aos-easing="linear" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
          <h2>Previous Work</h2>
          <div className={styles.arrow}><Image src={downArrow} width={30} height={30} alt=''/></div>
        </div>
      </div>
    </div>
    </>
  )
}

function doSnapToGrid(x, y) {
  const snappedX = Math.round(x / 32) * 32
  const snappedY = Math.round(y / 32) * 32
  return [snappedX, snappedY]
}


export default Info