import type { ApiResponseInterface } from "../interfaces/api"
import type { BranchInterface } from "../interfaces/products/products/branch"
import type { JobPositionInterface } from "../interfaces/products/products/job-position"

const jobPositions: JobPositionInterface[] = [
  {
    company: {
      code: "CMP001",
      externalId: "EXT001",
      id: "1",
      name: "Tech Corp",
    },
    createdAt: new Date("2023-01-01"),
    createdBy: 1,
    deletedAt: new Date("2023-01-01"),
    deletedBy: new Date("2023-01-01"),
    department: {
      id: "DPT001",
      name: "Engineering",
    },
    description: "Responsible for developing software solutions.",
    id: "JOB001",
    inherit: null,
    name: "Software Engineer",
    status: "active",
    updatedAt: new Date("2023-01-01"),
    updatedBy: 1,
  },
  {
    company: {
      code: "CMP002",
      externalId: "EXT002",
      id: "2",
      name: "Biz Solutions",
    },
    createdAt: new Date("2023-02-01"),
    createdBy: 1,
    deletedAt: new Date("2023-01-01"),
    deletedBy: new Date("2023-01-01"),
    department: {
      id: "DPT002",
      name: "Marketing",
    },
    description: "Oversees marketing campaigns and strategies.",
    id: "JOB002",
    inherit: null,
    name: "Marketing Manager",
    status: "active",
    updatedAt: new Date("2023-02-01"),
    updatedBy: 1,
  },
  {
    company: {
      code: "CMP003",
      externalId: "EXT003",
      id: "3",
      name: "HealthCare Inc.",
    },
    createdAt: new Date("2023-03-01"),
    createdBy: 1,
    deletedAt: new Date("2023-01-01"),
    deletedBy: new Date("2023-01-01"),
    department: {
      id: "DPT003",
      name: "Human Resources",
    },
    description: "Handles employee relations and staffing.",
    id: "JOB003",
    inherit: null,
    name: "HR Specialist",
    status: "active",
    updatedAt: new Date("2023-03-01"),
    updatedBy: 1,
  },
  {
    company: {
      code: "CMP004",
      externalId: "EXT004",
      id: "4",
      name: "Finance Group",
    },
    createdAt: new Date("2023-04-01"),
    createdBy: 1,
    deletedAt: new Date("2023-01-01"),
    deletedBy: new Date("2023-01-01"),
    department: {
      id: "DPT004",
      name: "Finance",
    },
    description: "Manages company finances and budgeting.",
    id: "JOB004",
    inherit: null,
    name: "Financial Analyst",
    status: "active",
    updatedAt: new Date("2023-04-01"),
    updatedBy: 1,
  },
  {
    company: {
      code: "CMP005",
      externalId: "EXT005",
      id: "5",
      name: "Retail Co.",
    },
    createdAt: new Date("2023-05-01"),
    createdBy: 1,
    deletedAt: new Date("2023-01-01"),
    deletedBy: new Date("2023-01-01"),
    department: {
      id: "DPT005",
      name: "Sales",
    },
    description: "Oversees sales strategies and operations.",
    id: "JOB005",
    inherit: null,
    name: "Sales Manager",
    status: "active",
    updatedAt: new Date("2023-05-01"),
    updatedBy: 1,
  },
]

// Dummy ApiResponse
export const jobPositionsApiResponse: ApiResponseInterface<JobPositionInterface[]> = {
  data: jobPositions,
  message: "Job positions fetched successfully",
  status: 200,
  meta: {
    total: 10,
    limit: 1,
    page: 1,
    total_page: 1,
  },
  pagination: {
    total: 10,
    limit: 1,
    current_page: 1,
    last_page: 1,
  },
}

const branches: BranchInterface[] = [
  {
    id: "BR001",
    external_id: "EXT_BR001",
    name: "Main Branch",
    status: "active",
    show_on_pos: true,
    show_on_sfa: true,
    show_on_mitra: true,
    basic_info: {
      phone: "123-456-7890",
      email: "mainbranch@example.com",
    },
    address: {
      street: "123 Main St",
      city: "Metropolis",
      state: "Central",
      postal_code: "12345",
    },
    coverage: {
      areas: ["Area 1", "Area 2"],
    },
    ework_setting: {
      enabled: true,
    },
    pos_setting: {
      terminal_id: "POS123",
    },
    station_management: {
      stations: ["Station A", "Station B"],
    },
    created_at: "2023-01-01T10:00:00Z",
    created_by: "admin",
    updated_at: "2023-01-01T10:00:00Z",
    updated_by: "admin",
    branch_id: "BR_PARENT_001",
    parent_branch: {
      id: "BR_PARENT_001",
      name: "Parent Branch",
      external_id: "EXT_PARENT_001",
    },
  },
  {
    id: "BR002",
    external_id: "EXT_BR002",
    name: "Secondary Branch",
    status: "inactive",
    show_on_pos: false,
    show_on_sfa: true,
    show_on_mitra: false,
    basic_info: {
      phone: "987-654-3210",
      email: "secondarybranch@example.com",
    },
    address: {
      street: "456 Secondary St",
      city: "Gotham",
      state: "Northern",
      postal_code: "54321",
    },
    coverage: {
      areas: ["Area 3", "Area 4"],
    },
    ework_setting: {
      enabled: false,
    },
    pos_setting: {
      terminal_id: "POS456",
    },
    station_management: {
      stations: ["Station C", "Station D"],
    },
    created_at: "2023-02-01T10:00:00Z",
    created_by: "manager",
    updated_at: "2023-02-01T10:00:00Z",
    updated_by: "manager",
  },
  {
    id: "BR003",
    external_id: "EXT_BR003",
    name: "Tertiary Branch",
    status: "deleted",
    show_on_pos: false,
    show_on_sfa: false,
    show_on_mitra: true,
    basic_info: {
      phone: "456-123-7890",
      email: "tertiarybranch@example.com",
    },
    address: {
      street: "789 Tertiary St",
      city: "Star City",
      state: "Eastern",
      postal_code: "67890",
    },
    coverage: {
      areas: ["Area 5", "Area 6"],
    },
    ework_setting: {
      enabled: true,
    },
    pos_setting: {
      terminal_id: "POS789",
    },
    station_management: {
      stations: ["Station E", "Station F"],
    },
    created_at: "2023-03-01T10:00:00Z",
    created_by: "supervisor",
    updated_at: "2023-03-01T10:00:00Z",
    updated_by: "supervisor",
  },
  {
    id: "BR004",
    external_id: "EXT_BR004",
    name: "Quaternary Branch",
    status: "active",
    show_on_pos: true,
    show_on_sfa: true,
    show_on_mitra: false,
    basic_info: {
      phone: "321-654-0987",
      email: "quaternarybranch@example.com",
    },
    address: {
      street: "321 Quaternary St",
      city: "Central City",
      state: "Western",
      postal_code: "98765",
    },
    coverage: {
      areas: ["Area 7", "Area 8"],
    },
    ework_setting: {
      enabled: false,
    },
    pos_setting: {
      terminal_id: "POS321",
    },
    station_management: {
      stations: ["Station G", "Station H"],
    },
    created_at: "2023-04-01T10:00:00Z",
    created_by: "admin",
    updated_at: "2023-04-01T10:00:00Z",
    updated_by: "admin",
  },
  {
    id: "BR005",
    external_id: "EXT_BR005",
    name: "Quinary Branch",
    status: "inactive",
    show_on_pos: false,
    show_on_sfa: false,
    show_on_mitra: true,
    basic_info: {
      phone: "789-456-1230",
      email: "quinarybranch@example.com",
    },
    address: {
      street: "654 Quinary St",
      city: "Smallville",
      state: "Southern",
      postal_code: "87654",
    },
    coverage: {
      areas: ["Area 9", "Area 10"],
    },
    ework_setting: {
      enabled: true,
    },
    pos_setting: {
      terminal_id: "POS654",
    },
    station_management: {
      stations: ["Station I", "Station J"],
    },
    created_at: "2023-05-01T10:00:00Z",
    created_by: "manager",
    updated_at: "2023-05-01T10:00:00Z",
    updated_by: "manager",
  },
]

// Dummy ApiResponse
export const branchesApiResponse: ApiResponseInterface<BranchInterface[]> = {
  data: branches,
  message: "Branches fetched successfully",
  status: 200,
  meta: {
    total: 10,
    limit: 1,
    page: 1,
    total_page: 1,
  },
  pagination: {
    total: 10,
    limit: 1,
    current_page: 1,
    last_page: 1,
  },
}
