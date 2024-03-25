import { Button } from "@/components/ui/button"
import { TableCaption, TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import Image from "next/image"

export default function Dashboard() {
  return (
    <div className="flex">
      <main className="flex-grow p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-medium">Transactions</h1>
          <Button className="px-4 py-2 bg-gray-800 text-white rounded-lg flex items-center space-x-2" type="button">
            <span>Download</span>
          </Button>
        </div>
        <Table>
          <TableCaption>A list of your financial transactions.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Mar 12</TableCell>
              <TableCell>WeWork</TableCell>
              <TableCell>
                <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded-md">
                  Office
                </span>
              </TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell>
                <div>
                  <div>
                    <Button className="px-2 py-1 bg-gray-200 rounded-full" type="button">
                    </Button>
                  </div>
                  <div>
                    <div>Edit</div>
                    <div>Delete</div>
                  </div>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 13</TableCell>
              <TableCell>IKEA</TableCell>
              <TableCell>
                <span className="px-2 py-1 bg-green-200 text-green-800 rounded-md">
                  Home
                </span>
              </TableCell>
              <TableCell className="text-right">$150.00</TableCell>
              <TableCell>
                <div>
                  <div>
                    <Button className="px-2 py-1 bg-gray-200 rounded-full" type="button">
                    </Button>
                  </div>
                  <div>
                    <div>Edit</div>
                    <div>Delete</div>
                  </div>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 14</TableCell>
              <TableCell>Home Depot</TableCell>
              <TableCell>
                <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-md">
                  Renovation
                </span>
              </TableCell>
              <TableCell className="text-right">$350.00</TableCell>
              <TableCell>
                <div>
                  <div>
                    <Button className="px-2 py-1 bg-gray-200 rounded-full" type="button">
                    </Button>
                  </div>
                  <div>
                    <div>Edit</div>
                    <div>Delete</div>
                  </div>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 15</TableCell>
              <TableCell>Burger King</TableCell>
              <TableCell>
                <span className="px-2 py-1 bg-red-200 text-red-800 rounded-md">
                  Food
                </span>
              </TableCell>
              <TableCell className="text-right">$10.00</TableCell>
              <TableCell>
                <div>
                  <div>
                    <Button className="px-2 py-1 bg-gray-200 rounded-full" type="button">
                    </Button>
                  </div>
                  <div>
                    <div>Edit</div>
                    <div>Delete</div>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </main>
    </div>
  )
}
