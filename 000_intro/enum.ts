//////enumeration - use instead of object, for closely related values
// we can assign strings
enum StatusEnum {
  NotStarted = 'not started',
  InProgress = 'in progress',
  Done = 'done',
}
interface Task {
  id: string;
  status: StatusEnum;
}
let notStartedStatus: StatusEnum = StatusEnum.NotStarted;


// when to use enums

// - follow near-identical syntax rules as normal objects
// - creates an object with the same keys and values when converted from TS to JS
// - primary goal is to signal to other engineers that these are all closely related values
// - use whenever we have a small fixed set of values that are all closely related and known at compile time

// e.g primary colors on a color picker (red, blue, green)

// e.g sizes of a drink on an ordering menu (small, medium, large)