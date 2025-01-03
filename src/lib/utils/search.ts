export function searchEvents(events: ScheduleEvent[], searchTerm: string): ScheduleEvent[] {
  const normalizedSearch = searchTerm.toLowerCase().trim();

  if (!normalizedSearch) return events;

  return events.filter((event) => {
    const matchesField = (field: string, value: string) =>
      field.startsWith(`${value.toLowerCase()}:`) &&
      field.split(':')[1]?.trim() === event[value]?.toLowerCase();

    const matchesAnyField =
      event.title.toLowerCase().includes(normalizedSearch) ||
      event.description.toLowerCase().includes(normalizedSearch) ||
      event.track.toLowerCase().includes(normalizedSearch) ||
      event.location.toLowerCase().includes(normalizedSearch);

    return matchesField(normalizedSearch, "track") || matchesAnyField;
  });
}
