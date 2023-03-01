export default function EventItem ( info ) {
    const { event } = info;
    return (
      <div>
        <p>{event.title}</p>
      </div>
    );
  };
