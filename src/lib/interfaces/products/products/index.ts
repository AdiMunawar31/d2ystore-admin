export interface ProductInterface {
  id: string
  assignment_id: string
  employee: EmloyeeInterface
  target_name: string
  progress: string
  target: string
  achievement: string
  gap: string
  status: string
}

interface EmloyeeInterface {
  id: string
  name: string
  type: string
}

export const dataProduct: ProductInterface[] = [
  {
    id: "1",
    assignment_id: "ASG-00000001",
    employee: { id: "EMP-0000001", name: "Armin Arlert", type: "Employee" },
    target_name: "Sales Target",
    progress: "0",
    target: "10000000",
    achievement: "",
    gap: "",
    status: "Waiting for Approval",
  },
  {
    id: "2",
    assignment_id: "ASG-00000002",
    employee: { id: "EMP-0000001", name: "Kathryn Muhy", type: "Employee" },
    target_name: "Sales Target",
    progress: "25",
    target: "1000",
    achievement: "",
    gap: "",
    status: "Not Started",
  },
  {
    id: "3",
    assignment_id: "ASG-00000003",
    employee: { id: "EMP-0000001", name: "Marvin McKinney", type: "Employee" },
    target_name: "Sales Target",
    progress: "75",
    target: "100",
    achievement: "",
    gap: "",
    status: "Draft",
  },
  {
    id: "4",
    assignment_id: "ASG-00000004",
    employee: { id: "EMP-0000001", name: "Jane Cooper", type: "Employee" },
    target_name: "Sales Target",
    progress: "50",
    target: "10000000",
    achievement: "2500000",
    gap: "7500000",
    status: "Active",
  },
  {
    id: "5",
    assignment_id: "ASG-00000005",
    employee: { id: "EMP-0000001", name: "Esther Howard", type: "Employee" },
    target_name: "Sales Target",
    progress: "25",
    target: "10000000",
    achievement: "",
    gap: "",
    status: "Declined",
  },
  {
    id: "6",
    assignment_id: "ASG-00000006",
    employee: { id: "EMP-0000001", name: "Robert Fox", type: "Employee" },
    target_name: "Sales Target",
    progress: "75",
    target: "10000000",
    achievement: "2500000",
    gap: "7500000",
    status: "Active",
  },
  {
    id: "7",
    assignment_id: "ASG-00000007",
    employee: { id: "EMP-0000001", name: "Dianne Russell", type: "Employee" },
    target_name: "Sales Target",
    progress: "25",
    target: "10000000",
    achievement: "2500000",
    gap: "",
    status: "Overdue",
  },
  {
    id: "8",
    assignment_id: "ASG-00000008",
    employee: { id: "EMP-0000001", name: "Jenny Wilson", type: "Employee" },
    target_name: "Sales Target",
    progress: "0",
    target: "10000000",
    achievement: "5000000",
    gap: "5000000",
    status: "Canceled",
  },
  {
    id: "9",
    assignment_id: "ASG-00000009",
    employee: { id: "EMP-0000001", name: "Jerome Bell", type: "Employee" },
    target_name: "Sales Target",
    progress: "100",
    target: "10000000",
    achievement: "10000000",
    gap: "0",
    status: "Finished",
  },
  {
    id: "10",
    assignment_id: "ASG-00000010",
    employee: { id: "EMP-0000001", name: "Darrell Steward", type: "Employee" },
    target_name: "Sales Target",
    progress: "75",
    target: "10000000",
    achievement: "2500000",
    gap: "7500000",
    status: "Active",
  },
]
