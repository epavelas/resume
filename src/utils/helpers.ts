import { BlockModel } from '@/components/ui/grid-pattern/types'
import { Application } from '@/constants/os'
import type { ApplicationWindowModel } from '@/types/os'

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function areBlocksAdjacent(block1: BlockModel, block2: BlockModel) {
  const [x1, y1] = block1
  const [x2, y2] = block2

  return Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1
}

export function getRandomBlocks(numBlocks: number, gridSize: number) {
  const blocks: Array<BlockModel> = []

  while (blocks.length < numBlocks) {
    const newBlock: BlockModel = [
      getRandomInt(0, gridSize - 1),
      getRandomInt(0, gridSize - 1),
    ]

    if (!blocks.some((block) => areBlocksAdjacent(block, newBlock))) {
      blocks.push(newBlock)
    }
  }

  return blocks
}

export function getMaximumPosition(
  applications: Array<ApplicationWindowModel>,
) {
  return Math.max(...applications.map((application) => application.position), 0)
}

export function getUpdatedApplicationsPosition(
  currentApplication: ApplicationWindowModel,
  applications: Array<ApplicationWindowModel>,
  maxPosition: number,
) {
  return [
    ...applications.map((application) => {
      if (currentApplication.id === application.id) {
        return { ...application, position: maxPosition + 1, isMinimized: false }
      }

      return application
    }),
  ]
}

export function getApplicationById(
  applicationId: Application,
  applications: Array<ApplicationWindowModel>,
) {
  return applications.find((application) => application.id === applicationId)
}
