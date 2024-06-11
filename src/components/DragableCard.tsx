import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { styled } from "styled-components";

interface ICardProps{
    isDragging:boolean;
}
const Card = styled.div<ICardProps>`
  background-color: ${props => props.isDragging? "tomato" : props.theme.cardColor};
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  box-shadow: ${props => props.isDragging? "0px 4px 5px rgba( 0, 0, 0, 0.4)" : "none"};
`

interface IDragalbeCard{
    todo:string;
    index:number
}
function DragableCard({todo, index}:IDragalbeCard){
    return(
        <Draggable key={todo} draggableId={todo} index={index}>
            {(magic, snapshot) => 
            <Card 
                isDragging={snapshot.isDragging}
                ref={magic.innerRef} 
                {...magic.draggableProps} 
                {...magic.dragHandleProps}
            >
                {todo}
            </Card>}
        </Draggable>
    )
};

export default React.memo(DragableCard);