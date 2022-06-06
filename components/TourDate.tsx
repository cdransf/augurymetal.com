const TourDate = ({ date, venue, details, tickets }) => {
  return (
    <p className="pb-2">
      {date}
      {` `}
      {venue}
      {` `}
      {details}
      &nbsp;
      <a
        href={tickets}
        rel="noopener nofollow noreferrer"
        target="_blank"
        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      >
        Tickets
      </a>
    </p>
  )
}

export default TourDate
