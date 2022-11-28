// import DndPageDesktopOnly from './dnd/DndPageDesktopOnly'
// import DndPageMulti from './dnd/DndPageMulti'

import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Test_Page() {
	const [schema, setSchema] = useState([
		{
			id: "123",
			type: "a",
			text: "123-text"
		},
		{
			id: "345",
			type: "b",
			text: "345-text"
		},
		{
			id: "567",
			type: "a",
			text: "567-text"
		},
		{
			id: "789",
			type: "b",
			text: "789-text"
		}
	]);

	const onDragEnd = (result) => {
		// dropped outside the list
		if (!result.destination) {
			return;
		}

		// reorder using index of source and destination.
		const schemaCopy = schema.slice();
		const [removed] = schemaCopy.splice(result.source.index, 1);
		// put the removed one into destination.
		schemaCopy.splice(result.destination.index, 0, removed);

		console.log(result);
        console.log('new schema:')
        console.log(schemaCopy)
		setSchema(schemaCopy);
	};
	return (
		<div>
            <style>{`
                .list-item {
                    padding: 10px;
                    border: 1px solid #888;
                    margin-bottom: 10px;
                    margin-left: 10px;
                    margin-right: 10px;
                    background: #eee;
                }
        `}</style>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="column1">
					{(provided, snap) => (
						<div
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							{schema.map((it, i) => (
								<Draggable
									key={it.id}
									draggableId={it.id}
									index={i}
								>
									{(provided, snap) => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											className="list-item"
											style={{
												backgroundColor: snap.isDragging
													? "#4fe"
													: "#eee",

												...provided.draggableProps.style
											}}
										>
											{it.text}
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
}