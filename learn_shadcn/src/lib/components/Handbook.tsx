import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const dummyHandbooks = [
  { id: 1, name: 'Employee Handbook 2023', uploadDate: '2023-01-01' },
  { id: 2, name: 'Safety Guidelines', uploadDate: '2023-03-15' },
  { id: 3, name: 'Code of Conduct', uploadDate: '2023-04-30' },
]

export default function Handbook() {
  const [handbooks, setHandbooks] = useState(dummyHandbooks)

  const handleUpload = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newHandbook = {
      id: handbooks.length + 1,
      name: formData.get('handbookName')as string,
      uploadDate: new Date().toISOString().split('T')[0],
    }
    setHandbooks([...handbooks, newHandbook])
    e.currentTarget.reset()
  }

  return (
    <div>
      <form onSubmit={handleUpload} className="mb-4 p-4 border rounded-md">
        <h2 className="text-lg font-semibold mb-2">Upload Handbook</h2>
        <div className="grid gap-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="handbookName" className="text-right">Handbook Name</Label>
            <Input id="handbookName" name="handbookName" className="col-span-3" required />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="handbookFile" className="text-right">File</Label>
            <Input id="handbookFile" name="handbookFile" type="file" className="col-span-3" required />
          </div>
          <div className="flex justify-end">
            <Button type="submit">Upload</Button>
          </div>
        </div>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Handbook Name</TableHead>
            <TableHead>Upload Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {handbooks.map((handbook) => (
            <TableRow key={handbook.id}>
              <TableCell>{handbook.name}</TableCell>
              <TableCell>{handbook.uploadDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}