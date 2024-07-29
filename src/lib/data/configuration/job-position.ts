import type { ApiResponseInterface } from "@/lib/interfaces/api"
import type { JobPositionInterface } from "@/lib/interfaces/menu/target-management/configuration/job-position"

const dummyJobPositions: JobPositionInterface[] = [
  {
    company: {
      code: "C001",
      externalId: "EXT001",
      id: "C001",
      name: "Tech Corp",
    },
    createdAt: new Date(),
    createdBy: new Date(),
    deletedAt: new Date(),
    deletedBy: new Date(),
    department: {
      id: "D001",
      name: "Research & Development",
    },
    description: "Lead the development team",
    id: "JP001",
    inherit: "Senior Developer",
    name: "Lead Developer",
    status: "active",
    updatedAt: new Date(),
    updatedBy: new Date(),
  },
  {
    company: {
      code: "C002",
      externalId: "EXT002",
      id: "C002",
      name: "Business Corp",
    },
    createdAt: new Date(),
    createdBy: new Date(),
    deletedAt: new Date(),
    deletedBy: new Date(),
    department: {
      id: "D002",
      name: "Sales",
    },
    description: "Handle client relationships",
    id: "JP002",
    inherit: "Sales Manager",
    name: "Account Manager",
    status: "active",
    updatedAt: new Date(),
    updatedBy: new Date(),
  },
  {
    company: {
      code: "C003",
      externalId: "EXT003",
      id: "C003",
      name: "Finance Corp",
    },
    createdAt: new Date(),
    createdBy: new Date(),
    deletedAt: new Date(),
    deletedBy: new Date(),
    department: {
      id: "D003",
      name: "Finance",
    },
    description: "Manage company finances",
    id: "JP003",
    inherit: "Chief Financial Officer",
    name: "Finance Manager",
    status: "active",
    updatedAt: new Date(),
    updatedBy: new Date(),
  },
  {
    company: {
      code: "C004",
      externalId: "EXT004",
      id: "C004",
      name: "Marketing Corp",
    },
    createdAt: new Date(),
    createdBy: new Date(),
    deletedAt: new Date(),
    deletedBy: new Date(),
    department: {
      id: "D004",
      name: "Marketing",
    },
    description: "Develop marketing strategies",
    id: "JP004",
    inherit: "Marketing Director",
    name: "Marketing Manager",
    status: "active",
    updatedAt: new Date(),
    updatedBy: new Date(),
  },
  {
    company: {
      code: "C005",
      externalId: "EXT005",
      id: "C005",
      name: "HR Corp",
    },
    createdAt: new Date(),
    createdBy: new Date(),
    deletedAt: new Date(),
    deletedBy: new Date(),
    department: {
      id: "D005",
      name: "Human Resources",
    },
    description: "Manage recruitment and employee relations",
    id: "JP005",
    inherit: "Salesman",
    name: "Salesman",
    status: "active",
    updatedAt: new Date(),
    updatedBy: new Date(),
  },
]

// Dummy ApiResponse for JobPositions
export const jobPositionsApiResponse: ApiResponseInterface<JobPositionInterface[]> = {
  data: dummyJobPositions,
  message: "Job positions fetched successfully",
  status: 200,
  meta: {
    total: dummyJobPositions.length,
    limit: 5,
    page: 1,
    total_page: 1,
  },
  pagination: {
    total: dummyJobPositions.length,
    limit: 5,
    current_page: 1,
    last_page: 1,
  },
}
