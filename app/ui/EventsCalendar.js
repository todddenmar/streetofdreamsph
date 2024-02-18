'use client';
import { Calendar } from '@/components/ui/calendar';
import React, { useState } from 'react';

function EventsCalendar() {
  const [date, setDate] = useState(new Date());
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}

export default EventsCalendar;
