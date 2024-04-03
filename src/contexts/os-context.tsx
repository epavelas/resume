import { createContext, ReactNode, useState } from 'react'

import { Application, APPLICATIONS_LIST } from '@/constants/os'
import { ApplicationWindowModel } from '@/types/os'
import {
  getApplicationById,
  getMaximumPosition,
  getUpdatedApplicationsPosition,
} from '@/utils/helpers'

type OsContextProps = {
  applications: Array<ApplicationWindowModel>
  launchApplication: (applicationId: Application) => void
  focusApplication: (applicationId: Application) => void
  closeApplication: (applicationId: Application) => void
  minimizeApplication: (applicationId: Application) => void
}

export const OsContext = createContext<OsContextProps>({
  applications: [],
  launchApplication: () => {},
  focusApplication: () => {},
  closeApplication: () => {},
  minimizeApplication: () => {},
})

type ContextProviderProps = {
  children: ReactNode
}

export function OsProvider({ children }: ContextProviderProps) {
  const [applications, setApplications] = useState<
    Array<ApplicationWindowModel>
  >([])

  const launchApplication = (applicationId: Application) => {
    setApplications((prevApplications) => {
      const currentApplication = getApplicationById(
        applicationId,
        prevApplications,
      )

      const maxPosition = getMaximumPosition(prevApplications)

      if (currentApplication) {
        if (
          currentApplication.position === maxPosition &&
          !currentApplication.isMinimized
        ) {
          return prevApplications
        }

        return getUpdatedApplicationsPosition(
          currentApplication,
          prevApplications,
          maxPosition,
        )
      }

      const application = APPLICATIONS_LIST.find(
        ({ id }) => id === applicationId,
      )

      if (!application) return prevApplications

      return [
        ...prevApplications,
        { ...application, position: maxPosition + 1, isMinimized: false },
      ]
    })
  }

  const focusApplication = (applicationId: Application) => {
    setApplications((prevApplications) => {
      const currentApplication = getApplicationById(
        applicationId,
        prevApplications,
      )

      if (!currentApplication) return prevApplications

      const maxPosition = getMaximumPosition(prevApplications)

      if (currentApplication.position === maxPosition) {
        return prevApplications
      }

      return getUpdatedApplicationsPosition(
        currentApplication,
        prevApplications,
        maxPosition,
      )
    })
  }

  const closeApplication = (applicationId: Application) => {
    setApplications((prevApplications) => {
      const currentApplication = getApplicationById(
        applicationId,
        prevApplications,
      )

      if (!currentApplication) return prevApplications

      return prevApplications.filter(
        (application) => application.id !== applicationId,
      )
    })
  }

  const minimizeApplication = (applicationId: Application) => {
    setApplications((prevApplications) => {
      const currentApplication = getApplicationById(
        applicationId,
        prevApplications,
      )

      if (!currentApplication) return prevApplications

      return prevApplications.map((application) =>
        application.id === applicationId
          ? { ...application, isMinimized: true }
          : application,
      )
    })
  }

  return (
    <OsContext.Provider
      value={{
        applications,
        launchApplication,
        focusApplication,
        closeApplication,
        minimizeApplication,
      }}
    >
      {children}
    </OsContext.Provider>
  )
}
