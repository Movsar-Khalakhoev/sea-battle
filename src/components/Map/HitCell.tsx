import React from 'react'
import { Group, Rect } from 'react-konva'
import { defaultCellSideSize, horizontalCoords, verticalCoords } from '../../variables'
import { MapCoord } from '../../models/Map'
import { Vector2d } from 'konva/cmj/types'

interface HitCellProps {
  cellSideSize?: number
  onClick: (coord: MapCoord) => void
  existsHits: MapCoord[]
  disabled: boolean
}

const HitCell: React.FC<HitCellProps> = ({
  cellSideSize = defaultCellSideSize,
  onClick,
  existsHits,
  disabled,
}) => {
  const [hitCell, setHitCell] = React.useState<{
    position: MapCoord
    wrongPosition: boolean
  } | null>(null)

  const onMouseMove = (mousePosition: Vector2d) => {
    const cellPosition = {
      x:
        mousePosition.x < 0
          ? 'a'
          : mousePosition.x > horizontalCoords.length * cellSideSize
          ? horizontalCoords[horizontalCoords.length - 1]
          : horizontalCoords[Math.floor(mousePosition.x / cellSideSize)],
      y:
        mousePosition.y < 0
          ? '1'
          : mousePosition.y > verticalCoords.length * cellSideSize
          ? verticalCoords[verticalCoords.length - 1]
          : verticalCoords[Math.floor(mousePosition.y / cellSideSize)],
    }

    if (!disabled && JSON.stringify(cellPosition) !== JSON.stringify(hitCell)) {
      setHitCell({
        position: cellPosition,
        wrongPosition: !!existsHits.find(
          hit => hit.x === cellPosition.x && hit.y === cellPosition.y
        ),
      })
    }
  }

  React.useEffect(() => {
    if (disabled) setHitCell(null)
  }, [disabled])

  return (
    <Group x={cellSideSize} y={cellSideSize} onMouseLeave={() => setHitCell(null)}>
      <Rect
        width={horizontalCoords.length * cellSideSize}
        height={verticalCoords.length * cellSideSize}
        fill='red'
        opacity={0.1}
        onMouseMove={evt => onMouseMove(evt.target.getRelativePointerPosition())}
      />
      {hitCell && (
        <Rect
          x={horizontalCoords.findIndex(c => c === hitCell.position.x) * cellSideSize}
          y={verticalCoords.findIndex(c => c === hitCell.position.y) * cellSideSize}
          height={cellSideSize}
          width={cellSideSize}
          fill={hitCell.wrongPosition ? 'red' : 'green'}
          opacity={0.5}
          onClick={() => !hitCell.wrongPosition && !disabled && onClick(hitCell.position)}
        />
      )}
    </Group>
  )
}

export default HitCell
