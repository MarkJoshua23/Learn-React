import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Trash2 } from 'lucide-react'
import EventDialog from '../components/EventDialog'
import DeleteConfirmDialog from '../components/DeleteConfirmDialog'

const dummyEvents = [
  { id: 1, date: '2023-05-01', dayOfWeek: 'Monday', name: 'Team Meeting', description: 'Weekly team sync' },
  { id: 2, date: '2023-05-15', dayOfWeek: 'Monday', name: 'Project Kickoff', description: 'New project initiation' },
  // Add more dummy events as needed
]

export default function EventsPage() {
  const [events, setEvents] = useState(dummyEvents)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  const handleAddEvent = (newEvent) => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }])
  }

  const handleEditEvent = (editedEvent) => {
    setEvents(events.map(event => event.id === editedEvent.id ? editedEvent : event))
  }

  const handleDeleteEvent = () => {
    setEvents(events.filter(event => event.id !== selectedEvent!.id))
    setIsDeleteDialogOpen(false)
  }

  return (
    <div>
      <div className="flex justify-between mb-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="may">May</SelectItem>
            <SelectItem value="june">June</SelectItem>
            <SelectItem value="july">July</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={() => setIsAddDialogOpen(true)}>Add Event</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Day of Week</TableHead>
            <TableHead>Event Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.id}>
              <TableCell>{event.date}</TableCell>
              <TableCell>{event.dayOfWeek}</TableCell>
              <TableCell>{event.name}</TableCell>
              <TableCell>{event.description}</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" onClick={() => {
                  setSelectedEvent(event)
                  setIsEditDialogOpen(true)
                }}>
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => {
                  setSelectedEvent(event)
                  setIsDeleteDialogOpen(true)
                }}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <EventDialog
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        onSubmit={handleAddEvent}
      />
      <EventDialog
        isOpen={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        onSubmit={handleEditEvent}
        event={selectedEvent}
      />
      <DeleteConfirmDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={handleDeleteEvent}
      />
    </div>
  )
}