import { useEffect useState } from "react";
import { useInterval } from "./useInterval";
import { randomShape } from "./shapeFactory";

export const ROW_COUNT = 20
export const COLUMN_COUNT = 10

function copyScene(scene) {
    return scene.map(row => row.slice())
}

function mergeIntoStage(stage, shape, position) {
    let res = stage

    shape.shape.forEach(point => {
        const x = point.x + position.x
        const y = point.y + position.y

        if (x<0 || y<0 || x>=COLUMN_COUNT || y>=ROW_COUNT) { return; }

        res = updateStage(res, x, y, 1)
    })

    return res
}

function updateStage(stage, x, y, value) {
    if (stage[y][x]===value) { return stage; }
    const res = stage.slice()
    res[y] = stage[y].slice()
    res[y][x] = value
    return res
}

function createEmptyScene() {
    return Array.from(Array(ROW_COUNT), () => Array(COLUMN_COUNT).fill(0) )
}

export function useBoard() {
    const [scene, setScene] = useState(() => createEmptyScene() )
    const [shape, setShape] = useState(() => randomShape() )
    const [position, setPosition] = useState({x: 0, y: 0})
    const [display, setDisplay] = useState( () => mergeIntoStage(scene, shape, position) )
    const [score, setScore] = useState(0)

    useEffect(updateDisplay, [scene, shape, position])
    useEffect(removeFullLines, [scene])
    useInterval(tick, 600)

    function updateDisplay() {
        const newDisplay = mergeIntoStage(scene, shape, position)
        setDisplay(newDisplay)
    }

    function tick() {
        if (!movePosition(0, 1))
        placeShape()
    }
    
    function placeShape() {
        setScene(mergeIntoStage(scene, shape, position))
        setShape(randomShape())
        setPosition({x: 0, y:0})
    }
    function rotateShape() {
        const tX = Math.floor(shape.width / 2)
        const tY = Math.floor(shape.height / 2)
    }
}