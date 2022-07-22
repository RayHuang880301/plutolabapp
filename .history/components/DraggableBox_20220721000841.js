import { memo, useEffect } from 'react'
import { useDrag } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import WindowLag from './windowLag/WindowLag'

const ItemTypes = {
    BOX: 'box',
}
const boxStyles = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    cursor: 'move',
  }
function getStyles(
  left,
  top,
  isDragging,
  zIndex
) {
  // const transform = `translate3d(${left}px, ${top}px, 0)`
  return {
    position: 'absolute',
    // transform,
    top,
    left,
    opacity: isDragging ? 0.6 : 1,
    // height: isDragging ? 0.6 : '',
    zIndex,
  }
}

const DraggableBox = memo(function DraggableBox(
  props,
) {
  const { id, title, left, top, onClick, zIndex, animationDelay, isAosOn } = props
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { id, left, top, title },
      collect: (monitor) => {
        console.log('monitor', monitor)
        return {
          isDragging: monitor.isDragging()
        }
      },
    }),
    [id, left, top, title],
  )

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [])

  return (
    <div
      data-aos="flip-left"
      data-aos-duration="50"
      data-aos-delay={animationDelay}
      ref={drag}
      style={getStyles(left, top, isDragging, zIndex)}
      role="DraggableBox"
      onMouseDown={onClick}
      className={`draggable-box ${isAosOn ? 'aos-animate' : '1000'}`}
    >
      <WindowLag width={'35vw'} height={'17vw'}><p>{title}</p></WindowLag>
    </div>
  )
})

export default DraggableBox;