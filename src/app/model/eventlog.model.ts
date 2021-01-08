export type LogEvent = 'ViewEntered' | 'SessionCreated' | 'AnswerEntered';

export type LogView = 'App' | 'Help' | 'Welcome' | 'Quiz' | 'Task' | 'Navigation' | 'Gameover';
export interface EventLog {
  ID?: number;
  SESSION_ID: string;
  LOCATION_ID: string;
  VIEW: LogView;
  EVENT: LogEvent;
  DETAILS: string | null;
  USER_AGENT: string;
  TIMESTAMP?: string;
}

export interface EventLogUi {
  id?: number;
  sessionId: string;
  location: string;
  view: LogView;
  event: LogEvent;
  details: string | null;
  userAgent: string;
  timestamp?: string;
}
