const UploadFile = ({ width = 21, height = 20 }: { width?: number; height?: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 15V9M8 9L6 11M8 9L10 11M19.5 8V12.7C19.5 17.2 17.7 19 13.2 19H7.8C3.3 19 1.5 17.2 1.5 12.7V7.3C1.5 2.8 3.3 1 7.8 1H13M19.5 8H17C14 8 13 7 13 4V1M19.5 8L13 1"
        stroke="#27AAE1"
        strokeWidth="1.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default UploadFile
