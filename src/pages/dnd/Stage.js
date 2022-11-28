import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
  } from "react";
  import Item from "./Item";
  import { ITEM_TYPES } from "./constants";
  import update from "immutability-helper";
  import { useDrop } from "react-dnd";
  import isEqual from "lodash.isequal";
  
  const Stage = ({
    items,
    setItems,
    addNewItem,
    isNewItemAdding,
    setSelectedItem,
    selectedItem
  }) => {
    const [stageItems, setStageItems] = useState(items);
    console.log('stageItems:', stageItems)
  
    const [newAddingItemProps, setNewAddingItemProps] = useState({
      hoveredIndex: 0,
      shouldAddBelow: false
    });
  
    const { hoveredIndex, shouldAddBelow } = newAddingItemProps;
  
    //! Portal :: we are already use this hooks some other purposes
    //! Portal :: We should update the newAddingItemProps & updatedProps states with together to avoid any flicking!
    const handleNewAddingItemPropsChange = useCallback(
      (updatedProps) => {
        setNewAddingItemProps({
          ...newAddingItemProps,
          ...updatedProps
        });
      },
      [setNewAddingItemProps]
    );
  
    //! Portal :: mimic behavior of portal stage
    useEffect(() => {
      if (!isEqual(stageItems, items)) {
        setStageItems(items);
      }
    }, [items]);
  
    //! Portal :: "update" method mutate the array, we might use alternative to this Eg. arrayMove
    const moveItem = useCallback(
      (dragIndex, hoverIndex) => {
        const dragItem = stageItems[dragIndex];
        setStageItems(
          update(stageItems, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragItem]
            ]
          })
        );
      },
      [stageItems, setStageItems]
    );
  
    const memoItems = useMemo(() => {
      return stageItems?.map((item, index) => {
        const { id, type } = item;
        return (
          <Item
            key={`id_${index}`}
            index={index}
            type={type}
            id={id}
            moveItem={moveItem}
            isNewItemAdding={isNewItemAdding}
            onNewAddingItemProps={handleNewAddingItemPropsChange}
            onClick={() => setSelectedItem({ id: id, index: index })}
            isSelected={!!id && id === selectedItem?.id}
          />
        );
      });
    }, [
      stageItems,
      moveItem,
      selectedItem,
      isNewItemAdding,
      handleNewAddingItemPropsChange
    ]);
  
    //! Portal :: useDrop for stage process
    const [{ isOver, draggingItemType }, dropRef] = useDrop({
      accept: Object.keys(ITEM_TYPES),
      drop: (droppedItem) => {
        const { type, id } = droppedItem;
        if (!id) {
          // a new item added
          addNewItem(type, hoveredIndex, shouldAddBelow);
        } else {
          // the result of sorting is applying the mock data
          setItems(stageItems);
        }
        console.log(
          "droppedItem: ",
          type,
          "order: ",
          hoveredIndex,
          isNewItemAdding ? "new item added!" : ""
        );
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        draggingItemType: monitor.getItemType()
      })
    });
  
    //! Portal :: placeholder item while new item adding
    useEffect(() => {
      if (isNewItemAdding) {
        const _stageItems = stageItems.filter(({ id }) => !!id);
        if (isOver && isNewItemAdding) {
          const startIndex = shouldAddBelow ? hoveredIndex + 1 : hoveredIndex;
          setStageItems([
            ..._stageItems.slice(0, startIndex),
            {
              type: draggingItemType
            },
            ..._stageItems.slice(startIndex)
          ]);
        } else {
          setStageItems(_stageItems);
        }
      }
    }, [isOver, draggingItemType, isNewItemAdding, shouldAddBelow, hoveredIndex]);
  
    return (
      <div
        ref={dropRef}
        style={{
          width: "400px",
          height: "auto",
          overflowY: "auto",
          padding: "10px",
          border: "1px solid silver"
        }}
      >
        {memoItems}
      </div>
    );
  };
  
  export default Stage;