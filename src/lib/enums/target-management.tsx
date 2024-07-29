export enum IntervalTypes {
  Daily = "Daily",
  Monthly = "Monthly",
  Quarterly = "Quarterly",
  Annually = "Annually",
  Custom = "Custom",
}

const BASE_URL = "/human-resources/target-achievement/target-management"

export enum Status {
  WAITING_FOR_APPROVAL = "Waiting for Approval",
  NOT_STARTED = "Not Started",
  DRAFT = "Draft",
  ACTIVE = "Active",
  DECLINED = "Declined",
  OVERDUE = "Overdue",
  CANCELED = "Canceled",
  FINISHED = "Finished",
}

export enum ActionLabel {
  REVIEW_ASSIGNMENT = "Review Assignment",
  UPDATE_ACHIEVEMENT = "Update Achievement",
  VIEW_DETAILS = "View Details",
  VIEW_ACHIEVEMENT = "View Achievement",
  UNKNOWN_ACTION = "Unknown Action",
}

export const ACTION_LINK = {
  review_assignment: `${BASE_URL}/review-assignment`,
  update_achievement: `${BASE_URL}/update-achievement`,
  view_details: `${BASE_URL}/view-details`,
  view_achievement: `${BASE_URL}/view-achievement`,
  unknown_action: "#",
}
