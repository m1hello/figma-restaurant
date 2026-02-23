export default function Events() {
  return (
    <section id="events" className="eventsSection" aria-label="Events">
      <div className="eventsInner">
        <h2 className="eventsHeading">Events</h2>
        <div className="eventsGrid">
          <article className="eventCard eventCardFeatured">
            <div className="eventOverlay" />
            <p className="eventTitle">Corporate Events</p>
          </article>
          <article className="eventCard eventCard2" />
          <article className="eventCard eventCard3" />
          <article className="eventCard eventCard4" />
        </div>
      </div>
    </section>
  );
}