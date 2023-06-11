import React from 'react';
import { createRoot } from 'react-dom/client';
import { Stage, Layer, Rect, Transformer, KonvaRenderer } from 'react-konva';
import { Image } from 'react-konva';  

import useImage from 'use-image';

const url = '../img/ney crped.png';



// the first very simple and recommended way:

//  function SimpleApp() {  
//   const [image] = useImage(url);


//   // "image" will DOM image element or undefined

//   return (
//     <Image image={image} />
//   );
// }
// console.log(SimpleApp());
  


const Rectangle = ({ shapeProps, isSelected, onSelect, onChange }) => {
//   const [image, status] = useImage(url, 'anonymous', 'origin');
//  console.log(image);
  const shapeRef = React.useRef();
  const trRef = React.useRef();
  
  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);
 

  return (
   

    <React.Fragment>
      
    {/* <Image    width={150} height={150} draggable
 
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }} image={image} /> */}

      <Rect 

        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
           
          });
           
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
        
  );
};

const initialRectangles = [
  {
    x: 10,
    y: 10,
    width: 150,
    height: 150,
    // fillPatternImage:SimpleApp(),
    fill:'red',
    id: 'rect1',
  },
  {
    x: 150,
    y: 150,
    width: 150,
    height: 150,
 
    id: 'rect2',
  },
  {
    x: 250,
    y: 250,
    width: 150,
    height: 150,
   
    id: 'rect3',
  },
  {
    x: 350,
    y: 350,
    width: 150,
    height: 150,
 
    id: 'rect4',
  },
  {
    x: 450,
    y: 450,
    width: 150,
    height: 150,

    id: 'rect5',
  },
];


const App = () => {
  const [rectangles, setRectangles] = React.useState(initialRectangles);
  const [selectedId, selectShape] = React.useState(null);
  

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  return (
    <Stage style={{borde:"1px solid yellow"}}
      width={1300}
      height={850}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
    >
      <Layer >
        {rectangles.map((rect, i) => {
          return (
         
            <Rectangle
              key={i}
              shapeProps={rect}
              isSelected={rect.id === selectedId}
              onSelect={() => {
                selectShape(rect.id);
              }}
              onChange={(newAttrs) => {
                const rects = rectangles.slice();
                rects[i] = newAttrs;
                setRectangles(rects);
              }}
            />
          );
        })}
      </Layer>
    </Stage>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
export default App;
