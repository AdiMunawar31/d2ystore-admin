const Review = ({ width = 16, height = 18 }: { width?: number; height?: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 9V11.25C16 15 14.5 16.5 10.75 16.5H6.25001C2.50001 16.5 1.00001 15 1.00001 11.25V6.75C1.00001 3 2.50001 1.5 6.25001 1.5H8.50001M8.50001 16.5V12.2083C8.50001 9.91667 7.66668 9 5.58334 9H1M11.8333 1.5H16M16 1.5V5.66667M16 1.5L10.1667 7.33333"
        stroke="#292D32"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default Review
