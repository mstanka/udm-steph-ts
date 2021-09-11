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
