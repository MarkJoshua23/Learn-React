import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ChevronDown, ChevronRight, ChevronLeft, Calendar, Book, Plus, Pencil, Trash, BarChart } from 'lucide-react'


// Dummy data
const eventsData = [
  { id: 1, date: '2023-05-01', dayOfWeek: 'Monday', name: 'Team Meeting', description: 'Weekly team sync' },
  { id: 2, date: '2023-05-15', dayOfWeek: 'Monday', name: 'Product Launch', description: 'New feature release' },
  // Add more dummy events...
]

const handbooksData = [
  { id: 1, name: 'Employee Handbook 2023', uploadDate: '2023-01-01' },
  { id: 2, name: 'IT Policy Guide', uploadDate: '2023-02-15' },
  // Add more dummy handbooks...
]

const userDataPerDay = [
  { day: 'Mon', users: 120 },
  { day: 'Tue', users: 140 },
  { day: 'Wed', users: 160 },
  { day: 'Thu', users: 180 },
  { day: 'Fri', users: 200 },
  { day: 'Sat', users: 150 },
  { day: 'Sun', users: 130 },
]

const requestsDataPerDay = [
  { day: 'Mon', requests: 500 },
  { day: 'Tue', requests: 600 },
  { day: 'Wed', requests: 750 },
  { day: 'Thu', requests: 800 },
  { day: 'Fri', requests: 900 },
  { day: 'Sat', requests: 700 },
  { day: 'Sun', requests: 550 },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Events')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [selectedMonth, setSelectedMonth] = useState('May')
  const [eventDialogOpen, setEventDialogOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

  const handleAddEvent = () => {
    setSelectedEvent(null)
    setEventDialogOpen(true)
  }

  const handleEditEvent = (event: React.SetStateAction<object>) => {
    setSelectedEvent(event)
    setEventDialogOpen(true)
  }

  const handleDeleteEvent = (event: React.SetStateAction<object>) => {
    setSelectedEvent(event)
    setDeleteDialogOpen(true)
  }

  return (
    <div className="flex h-screen flex-col">
      {/* Navbar */}
      <nav className="flex h-16 items-center justify-between bg-maroon-600 px-4 text-white">
        <h1 className="text-2xl font-bold">myEUC Dashboard</h1>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className={`bg-gray-100 ${sidebarOpen ? 'w-64' : 'w-16'} transition-all duration-300`}>
          <button
            className="flex w-full items-center justify-between p-4 hover:bg-gray-200"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span className={sidebarOpen ? '' : 'hidden'}>Menu</span>
            {sidebarOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
          </button>
          <Separator />
          <nav className="space-y-2 p-2">
            {['Events', 'Handbook', 'Analytics'].map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? 'default' : 'ghost'}
                className={`w-full justify-start ${activeTab === tab ? 'bg-maroon-100 text-maroon-800' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'Events' && <Calendar className="mr-2 h-4 w-4" />}
                {tab === 'Handbook' && <Book className="mr-2 h-4 w-4" />}
                {tab === 'Analytics' && <BarChart className="mr-2 h-4 w-4" />}
                {sidebarOpen && tab}
              </Button>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto p-6">
          {activeTab === 'Events' && (
            <div>
              <div className="mb-4 flex justify-between">
                <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select month" />
                  </SelectTrigger>
                  <SelectContent>
                    {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => (
                      <SelectItem key={month} value={month}>{month}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button onClick={handleAddEvent}>
                  <Plus className="mr-2 h-4 w-4" /> Add Event
                </Button>
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
                  {eventsData.map((event) => (
                    <TableRow key={event.id}>
                      <TableCell>{event.date}</TableCell>
                      <TableCell>{event.dayOfWeek}</TableCell>
                      <TableCell>{event.name}</TableCell>
                      <TableCell>{event.description}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" onClick={() => handleEditEvent(event)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteEvent(event)}>
                          <Trash className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {activeTab === 'Handbook' && (
            <div>
              <div className="mb-4">
                <Input type="file" />
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Handbook Name</TableHead>
                    <TableHead>Upload Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {handbooksData.map((handbook) => (
                    <TableRow key={handbook.id}>
                      <TableCell>{handbook.name}</TableCell>
                      <TableCell>{handbook.uploadDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {activeTab === 'Analytics' && (
            <div className="space-y-8">
              <div>
                
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Event Dialog */}
      <Dialog open={eventDialogOpen} onOpenChange={setEventDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedEvent ? 'Edit Event' : 'Add Event'}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Date
              </Label>
              <Input
                id="date"
                type="date"
                className="col-span-3"
                defaultValue={selectedEvent?.date}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Event Name
              </Label>
              <Input
                id="name"
                className="col-span-3"
                defaultValue={selectedEvent?.name}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                className="col-span-3"
                defaultValue={selectedEvent?.description}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEventDialogOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this event? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => {
              // Implement delete logic here
              setDeleteDialogOpen(false)
            }}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}