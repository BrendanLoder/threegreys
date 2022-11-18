import ExampleDesktopOnly from './exampleDesktopOnly'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function DndPageDesktopOnly() {
    return (
        <div className="App">
            * DndPageDesktopOnly
            <DndProvider backend={HTML5Backend}>
                <ExampleDesktopOnly />
            </DndProvider>
        </div>
    )
}

export default DndPageDesktopOnly