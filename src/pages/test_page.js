import Example from './dnd/example'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function Test_Page() {
    return (
        <div className="App">
            <DndProvider backend={HTML5Backend}>
                <Example />
            </DndProvider>
        </div>
    )
}

export default Test_Page