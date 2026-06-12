import React from 'react'


export const FileManager = () => {
  return (
    <>
      <div className="main h-1/2 w-full borderTransparent bg-gray-900 flex gap-2">
        <div className="fileTree h-full w-1/2 bg-gray-900">
        </div>
        <div className="explorer h-full w-1/2 bg-gray-700">
        </div>
      </div>
    </>
  )
}
